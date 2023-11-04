# Polecenie

Poszukamy najlepsze Pizzy na Manhattanie.
Proszę znaleźć wszystkie restauracje z cuisine Pizza na Manhattan,
dla każdej wyliczyć średnią ocenę z grades.score i wyświetlić 5
z najwyższą oceną.
Proszę wyświetlić:
- name
- srednia_ocena jako średnią, zaokrągloną do pierwszego miejsca po przecinku

```javascript
db.restaurants.aggregate([
	{
		$match: {
			"borough": "Manhattan",
			"cuisine": "Pizza"
		}
	},
	{
		$project: {
			"_id": 0,
			"name": 1,
			"srednia_ocena": {
				$round: [
					{ $avg: "$grades.score" },
					1
				]
			}
		}
	},
	{
		$sort: {
			"srednia_ocena": -1
		}
	},
	{
		$limit: 5
	}
])
```

## Odpowiedź

```json
[
  {
    "name": "Como Pizza",
    "srednia_ocena": 21.5
  },
  {
    "name": "New Roma Pizza",
    "srednia_ocena": 20.3
  },
  {
    "name": "Famous Ben'S Pizza Of Soho",
    "srednia_ocena": 18.8
  },
  {
    "name": "Pepolino",
    "srednia_ocena": 17.2
  },
  {
    "name": "Karavas Pizza N Pita",
    "srednia_ocena": 16.9
  }
]
```
