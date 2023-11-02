# Polecenie

napisz zapytanie do mongodb, aby znaleźć pierwszych 5 restauracji,
wyświetlając ich dzielnicę, kuchnię, nazwę oraz  id restauracji
dla tych restauracji, które przygotowały dania z wyjątkiem 'american'
i 'chinese' lub nazwa restauracji zaczyna się na literę 'wil'. wynik
posortuj po kluczu restaurant_id.

```javascript
db.restaurants.find(
	{
		$or: [
			{
				$nor: [
					{"cuisine": "American "},
					{"cuisine": "Chinese"}
				]
			},
			{
				"name": { $regex: "^Wil" }
			}
		]
	},
	{
		"_id": 0,
		"borough": 1,
		"cuisine": 1,
		"name": 1,
		"restaurant_id": 1
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
    "borough": "Manhattan",
    "cuisine": "Irish",
    "name": "Dj Reynolds Pub And Restaurant",
    "restaurant_id": "30191841"
  },
  {
    "borough": "Queens",
    "cuisine": "Jewish/Kosher",
    "name": "Tov Kosher Kitchen",
    "restaurant_id": "40356068"
  },
  {
    "borough": "Staten Island",
    "cuisine": "Jewish/Kosher",
    "name": "Kosher Island",
    "restaurant_id": "40356442"
  }
]
```
