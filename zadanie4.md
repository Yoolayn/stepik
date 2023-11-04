# Polecenie

Znajdź restauracje na Wall Street, posortuj je po nazwie i wybierz dwie
pierwsze. Jako address wyświetl coord , wyświetl także name.

```javascript
db.restaurants.aggregate([
	{
		$match: {
			"address.street": "Wall Street"
		}
	},
	{
		$sort: {
			"name": 1
		}
	},
	{
		$limit: 2
	},
	{
		$project: {
			"_id": 0,
			"address": "$address.coord",
			"name": 1
		}
	},
	{
		$replaceRoot: {
			newRoot: {
				"address": "$address",
				"name": "$name"
			}
		}
	}
])
```

## Odpowiedź

```json
[
  {
    "address": [
      -74.0116385,
      40.707491
    ],
    "name": "Bank Of New York"
  },
  {
    "address": [
      -74.0116385,
      40.707491
    ],
    "name": "Bank Of New York Cafe"
  }
]
```
