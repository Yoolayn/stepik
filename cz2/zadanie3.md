# Polecenie

Napisz zapytanie do MongoDB, aby pierwszych 5 restauracji, wyświetlając
ich dzielnicę,  kuchnię, nazwę oraz id restauracji (dokładnie w
tej kolejności) dla tych restauracji, które należą do dzielnicy
Staten Island lub Queens lub Bronx lub Brooklyn. Wynik posortuj po
kluczu restaurant_id.

```javascript
db.restaurants.find(
	{
		$or: [
			{"borough": "Staten Island"},
			{"borough": "Queens"},
			{"borough": "Bronx"},
			{"borough": "Brooklyn"}
		]
	},
	{
		"borough": 1,
		"cuisine": 1,
		"name": 1,
		"restaurant_id": 1,
		"_id": 0,
	}
).sort({
	restaurant_id: 1
}).limit(5)
```
## odpowiedź
```json
[
  {
    "borough": "Bronx",
    "cuisine": "Bakery",
    "name": "Morris Park Bake Shop",
    "restaurant_id": "30075445"
  },
  {
    "borough": "Brooklyn",
    "cuisine": "Hamburgers",
    "name": "Wendy'S",
    "restaurant_id": "30112340"
  },
  {
    "borough": "Brooklyn",
    "cuisine": "American ",
    "name": "Riviera Caterer",
    "restaurant_id": "40356018"
  },
  {
    "borough": "Queens",
    "cuisine": "Jewish/Kosher",
    "name": "Tov Kosher Kitchen",
    "restaurant_id": "40356068"
  },
  {
    "borough": "Queens",
    "cuisine": "American ",
    "name": "Brunos On The Boulevard",
    "restaurant_id": "40356151"
  }
]
```
