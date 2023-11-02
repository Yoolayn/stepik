```bash
cat data.csv | mongoimport -c persons_csv --type csv --headerline
```
```javascript
db.persons_csv.find().limit(10)
db.persons_csv.updateMany(
	{},
	{ $set: { friends: [] } }
)
db.persons_csv.updateOne(
	{ gender: "Female" },
	{
		$set: {
			children: [
				{ children_name: 'John', children_father: 'Jack'},
				{ children: 'Magda',     children_father: 'Jack'}
			]
		}
	}
)
```
