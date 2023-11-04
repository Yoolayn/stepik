# Polecenie

Proszę wybrać restaurację z restaurant_id = 40362098 i wyświetlić:
- name
- pierwsza_ocena jako pierwszy element score w tablicy grades
- ostatnia_ocena jako ostatni element score w tablicy grades

```javascript
db.restaurants.aggregate([
	{
		$match: {
			"restaurant_id": "40362098"
		}
	},
	{
		$project: {
			"_id": 0,
			"name": 1,
			"ostatnia_ocena": { $arrayElemAt: [ "$grades.score", -1 ] },
			"pierwsza_ocena": { $arrayElemAt: [ "$grades.score", 0 ] }
		}
	}
])
```

## Odpowiedź

```json
[
  {
    "name": "Harriet'S Kitchen",
    "ostatnia_ocena": 7,
    "pierwsza_ocena": 10
  }
]
```
