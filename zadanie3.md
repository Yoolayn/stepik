# Polecenie

Za pomocą funkcji aggregate znajdź jedną restauracje w zipcode
11356, przy ulicy 14 Avenue. Znajdź tą z najmniejszym numerem
budynku. Wyświetl tylko numer budynku.


```javascript
db.restaurants.aggregate([
	{
		$match: {
			"address.zipcode": "11356",
			"address.street": "14 Avenue"
		}
	},
	{
		$project: {
			"_id": 0,
			"address.building": 1
		}
	},
	{
		$sort: {
			"address.building": 1
		}
	},
	{
		$limit: 1
	}
])
```

## Odpowiedź

```json
[
  {
    "address": {
      "building": "13209"
    }
  }
]
```
