# Polecenie

Wybierz restauracje o coord: [-73.902463, 40.694924].
Za pomocą $unwind wyświetl wszystkie oceny jako oddzielne obiekty z
bazy. Posortuj je po dacie wystawienia, rosnąco.
Wyświetl tylko score.

```javascript
db.restaurants.aggregate([
	{
		$match: {
			"address.coord": [-73.902463, 40.694924]
		}
	},
	{
		$unwind: {
			path: "$grades"
		}
	},
	{
		$sort: {
			"grades.date": 1
		}
	},
	{
		$project: {
			"_id": 0,
			"grades.score": 1
		}
	}
])
```

## Odpowiedź

```json
[
  {
  	"grades": {
  		"score": 10
  	}
  },
  {
  	"grades": {
  		"score": 11
  	}
  },
  {
  	"grades": {
  		"score": 25
  	}
  },
  {
  	"grades": {
  		"score": 12
  	}
  },
  {
  	"grades": {
  		"score": 8
  	}
  },
  {
  	"grades": {
  		"score": 11
  	}
  }
]
```
