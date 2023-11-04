# Polecenie

Sprawdzimy w której dzielnicy NY podają średnio najlepszą chińszczyznę.
Proszę wybrać wszystkie restauracje serwujące Chinese pogrupowane po
borough , wyliczyć średnią ocenę dla każdej restauracji i dodać
ją do tablicy srednie.
Wyświetlić wynik posortowany po borough:
- _id jako borough
- srednia_ocena_dzielnicy jako średnia ze średnich Chińskich
restauracji w tej dzielnicy. Wynik zaokrąglij do 2 miejsca po przecinku.

```javascript
db.restaurants.aggregate([
	{
		$match: {
			"cuisine": "Chinese"
		}
	},
	{
		$project: {
			"_id": "$restaurant_id",
			"borough": 1,
			"srednie": {
				$round: [
					{ $avg: "$grades.score" },
					2
				]
			}
		}
	},
	{
		$group: {
			"_id": "$borough",
			"srednia_ocena_dzielnicy": {
				$avg: "$srednie"
			}
		}
	},
	{
		$project: {
			"_id": 1,
			"srednia_ocena_dzielnicy": {
				$round: [
					"$srednia_ocena_dzielnicy",
					2
				]
			}
		}
	},
	{
		$sort: {
			"_id": 1,
		}
	}
])
```

## Odpowiedź

```json
[
  {
    "_id": "Bronx",
    "srednia_ocena_dzielnicy": 10.22
  },
  {
    "_id": "Brooklyn",
    "srednia_ocena_dzielnicy": 14.19
  },
  {
    "_id": "Manhattan",
    "srednia_ocena_dzielnicy": 13.34
  },
  {
    "_id": "Queens",
    "srednia_ocena_dzielnicy": 12.56
  },
  {
    "_id": "Staten Island",
    "srednia_ocena_dzielnicy": 13.23
  }
]
```
