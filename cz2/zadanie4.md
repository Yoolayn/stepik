# Polecenie
Napisz zapytanie do MongoDB, aby znaleźć pierwszych 5 restauracji,
wyświetlając ich dzielnicę, kuchnię, nazwę oraz  Id restauracji
dla tych restauracji, które osiągnęły wynik (u wszystkich ocen)
nie większy niż 10. Wynik posortuj po kluczu restaurant_id.

```javascript
db.restaurants.find(
	{
		"grades": {
			$not: {
				$elemMatch: {
					"score": {
						$gt: 10
					}
				}
			}
		}
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
    "borough": "Brooklyn",
    "cuisine": "American ",
    "name": "C & C Catering Service",
    "restaurant_id": "40357437"
  },
  {
    "borough": "Manhattan",
    "cuisine": "American ",
    "name": "1 East 66Th Street Kitchen",
    "restaurant_id": "40359480"
  },
  {
    "borough": "Brooklyn",
    "cuisine": "Delicatessen",
    "name": "Nordic Delicacies",
    "restaurant_id": "40361390"
  },
  {
    "borough": "Brooklyn",
    "cuisine": "Hamburgers",
    "name": "White Castle",
    "restaurant_id": "40362344"
  },
  {
    "borough": "Brooklyn",
    "cuisine": "American ",
    "name": "Sonny'S Heros",
    "restaurant_id": "40363744"
  }
]
```
