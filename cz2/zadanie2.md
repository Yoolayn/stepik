# Polecenie

Napisz zapytanie do MongoDB, aby znaleźć pierwszych 5 restauracji,
które należą do dzielnicy Bronx i przygotowują amerykańskie lub
chińskie danie. Wynik podaj bez identyfikatora _id oraz pola grades.date,
posortowany po polu restaurant_id

```javascript
db.restaurants.find(
	{
		$and: [
			{"borough": "Bronx"},
			{
				$or: [
					{"cuisine": "American "},
					{"cuisine": "Chinese"}
				]
			}
		]
	},
	{
		"_id": 0,
		"grades.date": 0
	}
).sort({
	restaurant_id: 1
}).limit(5)
```

## odpowiedz
```json
[
  {
    "address": {
      "building": "2300",
      "coord": [
        -73.8786113,
        40.8502883
      ],
      "street": "Southern Boulevard",
      "zipcode": "10460"
    },
    "borough": "Bronx",
    "cuisine": "American ",
    "grades": [
      {
        "grade": "A",
        "score": 11
      },
      {
        "grade": "A",
        "score": 4
      },
      {
        "grade": "A",
        "score": 3
      }
    ],
    "name": "Wild Asia",
    "restaurant_id": "40357217"
  },
  {
    "address": {
      "building": "1236",
      "coord": [
        -73.8893654,
        40.81376179999999
      ],
      "street": "238 Spofford Ave",
      "zipcode": "10474"
    },
    "borough": "Bronx",
    "cuisine": "Chinese",
    "grades": [
      {
        "grade": "A",
        "score": 8
      },
      {
        "grade": "A",
        "score": 10
      },
      {
        "grade": "B",
        "score": 15
      }
    ],
    "name": "Happy Garden",
    "restaurant_id": "40363289"
  },
  {
    "address": {
      "building": "277",
      "coord": [
        -73.8941893,
        40.8634684
      ],
      "street": "East Kingsbridge Road",
      "zipcode": "10458"
    },
    "borough": "Bronx",
    "cuisine": "Chinese",
    "grades": [
      {
        "grade": "A",
        "score": 10
      },
      {
        "grade": "A",
        "score": 10
      },
      {
        "grade": "A",
        "score": 10
      },
      {
        "grade": "A",
        "score": 11
      },
      {
        "grade": "A",
        "score": 13
      }
    ],
    "name": "Happy Garden",
    "restaurant_id": "40364296"
  },
  {
    "address": {
      "building": "658",
      "coord": [
        -73.81363999999999,
        40.82941100000001
      ],
      "street": "Clarence Ave",
      "zipcode": "10465"
    },
    "borough": "Bronx",
    "cuisine": "American ",
    "grades": [
      {
        "grade": "A",
        "score": 5
      },
      {
        "grade": "A",
        "score": 10
      }
    ],
    "name": "Manhem Club",
    "restaurant_id": "40364363"
  },
  {
    "address": {
      "building": "2222",
      "coord": [
        -73.84971759999999,
        40.8304811
      ],
      "street": "Haviland Avenue",
      "zipcode": "10462"
    },
    "borough": "Bronx",
    "cuisine": "American ",
    "grades": [
      {
        "grade": "A",
        "score": 7
      },
      {
        "grade": "B",
        "score": 17
      },
      {
        "grade": "A",
        "score": 12
      },
      {
        "grade": "A",
        "score": 9
      },
      {
        "grade": "B",
        "score": 19
      }
    ],
    "name": "The New Starling Athletic Club Of The Bronx",
    "restaurant_id": "40364956"
  }
]
```
