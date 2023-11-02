```javascript
db.restaurants.find(
	{
		"address.coord.0": {
			$lt: -95.754168
		}
	},
	{
		"_id": 0,
		"grades.date": 0
	}
).sort({
	restaurant_id: 1
}).limit(5)
```
