# Polecenie

Znajdźmy ile jest restauracji poszczególnych cuisine przy ulicy 5 Avenue.
Wyświetl posortowane po ilości malejąco i po typie cuisine w kolejności alfabetycznej:
- _id jako rodzaj cuisine
- ilosc_restauracji jako ilość restauracji danego typu przy 5 Avenue. W
poniższym przykładzie restauracji z cuisine = American przy 5 Avenue
jest 22.

```javascript
db.restaurants.aggregate([
	{
		$match: {
			"address.street": "5 Avenue"
		}
	},
	{
		$group:	{
			"_id": "$cuisine",
			"ilosc_restauracji": {
				$sum: 1
			}
		}
	},
	{
		$sort: {
			"ilosc_restauracji": -1,
			"_id": 1
		}
	}
])
```

## Odpowiedź

```json
[
  {
    "_id": "American ",
    "ilosc_restauracji": 23
  },
  {
    "_id": "Pizza",
    "ilosc_restauracji": 8
  },
  {
    "_id": "Café/Coffee/Tea",
    "ilosc_restauracji": 4
  },
  {
    "_id": "Latin (Cuban, Dominican, Puerto Rican, South & Central American)",
    "ilosc_restauracji": 3
  },
  {
    "_id": "Chinese",
    "ilosc_restauracji": 2
  },
  {
    "_id": "Italian",
    "ilosc_restauracji": 2
  },
  {
    "_id": "Pizza/Italian",
    "ilosc_restauracji": 2
  },
  {
    "_id": "Bakery",
    "ilosc_restauracji": 1
  },
  {
    "_id": "Delicatessen",
    "ilosc_restauracji": 1
  },
  {
    "_id": "Donuts",
    "ilosc_restauracji": 1
  },
  {
    "_id": "English",
    "ilosc_restauracji": 1
  },
  {
    "_id": "German",
    "ilosc_restauracji": 1
  },
  {
    "_id": "Irish",
    "ilosc_restauracji": 1
  },
  {
    "_id": "Japanese",
    "ilosc_restauracji": 1
  },
  {
    "_id": "Mexican",
    "ilosc_restauracji": 1
  }
]
```
