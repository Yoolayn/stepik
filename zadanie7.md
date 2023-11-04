# Polecenie

Proszę znaleźć wszystkie restauracje na Manhattan i wybrać 7 restauracji z największą ilością ocen.
Proszę wyświetlić wyniki posortowane alfabetycznie po name:
- ilosc_ocen jako ilość wystawionych ocen
- name

```javascript
db.restaurants.aggregate([
	{
		$match:	{
			"borough": "Manhattan"
		}
	},
	{
		$project: {
			"_id": 0,
			"ilosc_ocen": { $size: "$grades" },
			"name": 1
		}
	},
	{
		$sort: {
			"ilosc_ocen": -1,
			"name": 1
		}
	},
	{
		$limit: 7
	},
	{
		$replaceRoot: {
			newRoot: {
				"ilosc_ocen": "$ilosc_ocen",
				"name": "$name",
			}
		}
	}
])
```

## Odpowiedź

```json
[
  {
    "ilosc_ocen": 8,
    "name": "Cafe Asean"
  },
  {
    "ilosc_ocen": 8,
    "name": "China Chalet"
  },
  {
    "ilosc_ocen": 8,
    "name": "El Castillo De Madison"
  },
  {
    "ilosc_ocen": 8,
    "name": "Fuji Bakery"
  },
  {
    "ilosc_ocen": 8,
    "name": "Gemini Diner"
  },
  {
    "ilosc_ocen": 8,
    "name": "Oriental Express"
  },
  {
    "ilosc_ocen": 8,
    "name": "World Cup Cafe"
  }
]
```
