# Polecenie

Napisz zapytanie do MongoDB, aby znaleźć pierwszych 5 restauracji,
wyświetlając ich oceny (grade i score), nazwę oraz  Id restauracji dla
tych restauracji, które uzyskały ocenę "A" i zdobyły 11 punktów
na ISODate "2014-08-11T00:00:00Z" wśród wielu dat badań. Wynik
podaj bez identyfikatora _id oraz pola grades.date, posortowany po
polu restaurant_id

```javascript
db.restaurants.find(
	{
		"grades": {
			$elemMatch: {
				"grade": "A",
				"score": 11,
				"date": ISODate("2014-08-11T00:00:00Z")
			}
		}
	},
	{
		"_id": 0,
		"name": 1,
    "grades.grade": 1,
    "grades.score": 1,
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
    "grades": [
      {
        "grade": "A",
        "score": 11
      },
      {
        "grade": "A",
        "score": 9
      },
      {
        "grade": "A",
        "score": 12
      },
      {
        "grade": "A",
        "score": 13
      },
      {
        "grade": "A",
        "score": 8
      },
      {
        "grade": "A",
        "score": 12
      }
    ],
    "name": "Don Filippo Restaurant",
    "restaurant_id": "40372417"
  }
]
```
