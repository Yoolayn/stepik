```javascript
db.restaurants.find(
	{},
	{
		"_id": 0,
		"borough": 1,
		"cuisine": 1,
		"name": 1,
		"restaurant_id": 1
	}
).sort({
	restaurant_id: 1
}).limit(3)
```
