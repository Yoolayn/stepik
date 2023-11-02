```bash
cat restaurants.json | mongoimport -c restaurants
```

```javascript
db.restaurants.find(
	{},
	{
		_id: 0,
		"grades.date": 0
	}
).sort({
	restaurant_id: 1
}).limit(1)
```
