```javascript
db.restaurants.find(
	{
		"grades.score": {
			$gt: 90
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
