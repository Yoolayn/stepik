# Polecenie

Za pomocą funkcji aggregate znajdź restauracje o nazwie White Castle, przy ulicy Boston Road
Wyświetl:
- numer budynku jako adres
- name
- address.street jako ulica


```javascript
db.restaurants.aggregate([
	{
		$match: {
			"address.street": "Boston Road",
			"name": "White Castle"
		}
	},
	{
		$project: {
			"_id": 0,
			"adres": "$address.building",
			"name": "$name",
			"ulica": "$address.street"
		}
	},
	{
		$replaceRoot: {
			newRoot: {
				"adres": "$adres",
				"name": "$name",
				"ulica": "$ulica"
			}
		}
	}
])
```

## Odpowiedź

```json
[
  {
    "adres": "3663",
    "name": "White Castle",
    "ulica": "Boston Road"
  }
]
```
