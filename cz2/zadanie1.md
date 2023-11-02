# Polecenie
Napisz zapytanie do MongoDB, aby znaleźć pierwszych 4 restauracji
wyświetlając ich kuchnię, dzielnicę, nazwę i restaurant_id, które
zawierają Reg  jako trzy litery gdzieś w swojej nazwie. Wynik
posortuj po kluczu restaurant_id.
```javascript
db.restaurants.find(
	{
		"name": {
			$regex: "Reg"
		}
	},
	{
		"cuisine": 1,
		"borough": 1,
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
    "borough": "Brooklyn",
    "cuisine": "American ",
    "name": "Regina Caterers",
    "restaurant_id": "40356649"
  },
  {
    "borough": "Manhattan",
    "cuisine": "Café/Coffee/Tea",
    "name": "Caffe Reggio",
    "restaurant_id": "40369418"
  },
  {
    "borough": "Manhattan",
    "cuisine": "American ",
    "name": "Regency Hotel",
    "restaurant_id": "40382679"
  },
  {
    "borough": "Manhattan",
    "cuisine": "American ",
    "name": "Regency Whist Club",
    "restaurant_id": "40402377"
  },
  {
    "borough": "Queens",
    "cuisine": "American ",
    "name": "Rego Park Cafe",
    "restaurant_id": "40523342"
  }
]
```
