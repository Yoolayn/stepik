# Polecenie

Napisz zapytanie do MongoDB, aby znaleźć pierwszych 5 restauracji,
wyświetlając ich adres (współrzędne geograficzne), dzielnicę,
nazwę dla tych restauracji, które zawierają 'mon' jako trzy litery
gdzieś w swojej nazwie. Wynik na końcu posortuj po kluczu restaurant_id.

```javascript
db.restaurants.find(
	{
		"name": {
			$regex: "mon"
		}
	},
	{
		"_id": 0,
		"address.coord": 1,
		"borough": 1,
		"name": 1
	}
).sort({
	restaurant_id: 1
}).limit(5)
```

## odpowiedź

```json
[
  {
    "address": {
      "coord": [
        -73.98306099999999,
        40.7441419
      ]
    },
    "borough": "Manhattan",
    "name": "Desmond'S Tavern"
  },
  {
    "address": {
      "coord": [
        -73.8221418,
        40.7272376
      ]
    },
    "borough": "Queens",
    "name": "Shimons Kosher Pizza"
  },
  {
    "address": {
      "coord": [
        -74.10465599999999,
        40.58834
      ]
    },
    "borough": "Staten Island",
    "name": "Richmond County Country Club"
  },
  {
    "address": {
      "coord": [
        -73.9812843,
        40.5947365
      ]
    },
    "borough": "Brooklyn",
    "name": "Lb Spumoni Gardens"
  },
  {
    "address": {
      "coord": [
        -73.951199,
        40.7166026
      ]
    },
    "borough": "Brooklyn",
    "name": "Bamonte'S Restaurant"
  }
]
```
