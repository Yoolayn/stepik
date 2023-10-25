```javascript
db.restaurants.find(
	{
		grades: {
			$elemMatch: {
				score: { $gt: 80, $lt: 100 }
			}
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
