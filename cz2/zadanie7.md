# Polecenie

Napisz zapytanie do MongoDB, aby znaleźć pierwszych 5 restauracji,
wyświetlając ich oceny, nazwę oraz  Id restauracji dla tych
restauracji, w których 2. element tablicy ocen zawiera ocenę "A" i wynik
9 na ISODate "2014-08-11T00:00:00Z". Wynik podaj bez identyfikatora _id
oraz pola grades.date, posortowany po polu restaurant_id

```javascript
db.restaurants.find(
	{
		"grades.1.grade": "A",
		"grades.1.score": 9,
		"grades.1.date": ISODate("2014-08-11T00:00:00Z")
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
        "score": 10
      },
      {
        "grade": "A",
        "score": 9
      },
      {
        "grade": "A",
        "score": 13
      },
      {
        "grade": "A",
        "score": 10
      },
      {
        "grade": "A",
        "score": 11
      }
    ],
    "name": "Club Macanudo (Cigar Bar)",
    "restaurant_id": "40526406"
  }
]
```
