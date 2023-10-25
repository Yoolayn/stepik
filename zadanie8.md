```javascript
db.restaurants.find(
	{
		"borough": "Bronx"
	},
	{
		"_id": 0,
		"grades.date": 0
	}
).sort({
	restaurant_id: 1
}).limit(5)
```
