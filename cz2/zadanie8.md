# Polecenie

Napisz zapytanie do MongoDB, aby znaleźć pierwszych 5 restauracji,
wyświetlając ich oceny, nazwę oraz  Id restauracji dla tych
restauracji, które w polu grades.score zwracają 0 jako resztę po
podzieleniu wyniku przez 7. Wynik podaj bez identyfikatora _id oraz pola
grades.date, posortowany po polu restaurant_id

```javascript
db.restaurants.find(
	{
		"grades.score": {
			$mod: [7, 0]
		}
	},
	{
		"_id": 0,
		"grades.grade": 1,
		"grades.score": 1,
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
    "grades": [
      {
        "grade": "A",
        "score": 2
      },
      {
        "grade": "A",
        "score": 6
      },
      {
        "grade": "A",
        "score": 10
      },
      {
        "grade": "A",
        "score": 9
      },
      {
        "grade": "B",
        "score": 14
      }
    ],
    "name": "Morris Park Bake Shop",
    "restaurant_id": "30075445"
  },
  {
    "grades": [
      {
        "grade": "A",
        "score": 5
      },
      {
        "grade": "A",
        "score": 7
      },
      {
        "grade": "A",
        "score": 12
      },
      {
        "grade": "A",
        "score": 12
      }
    ],
    "name": "Riviera Caterer",
    "restaurant_id": "40356018"
  },
  {
    "grades": [
      {
        "grade": "Z",
        "score": 38
      },
      {
        "grade": "A",
        "score": 10
      },
      {
        "grade": "A",
        "score": 7
      },
      {
        "grade": "A",
        "score": 13
      }
    ],
    "name": "Brunos On The Boulevard",
    "restaurant_id": "40356151"
  },
  {
    "grades": [
      {
        "grade": "B",
        "score": 21
      },
      {
        "grade": "A",
        "score": 7
      },
      {
        "grade": "C",
        "score": 56
      },
      {
        "grade": "B",
        "score": 27
      },
      {
        "grade": "B",
        "score": 27
      }
    ],
    "name": "May May Kitchen",
    "restaurant_id": "40358429"
  },
  {
    "grades": [
      {
        "grade": "A",
        "score": 3
      },
      {
        "grade": "A",
        "score": 4
      },
      {
        "grade": "A",
        "score": 6
      },
      {
        "grade": "A",
        "score": 0
      }
    ],
    "name": "1 East 66Th Street Kitchen",
    "restaurant_id": "40359480"
  }
]
```
