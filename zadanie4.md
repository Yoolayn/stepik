```bash
cat data.json | mongoimport -c persons --jsonArray
```

```javascript
db.persons.findMany().limit(10)
db.persons.deleteMany({
	gender: "Male"
})
db.persons.updateMany(
	{ gender: "Female" },
	{ $set: { gender: "Kobieta" } }
)
let dorene = db.persons.findOne({
	first_name: "Dorene",
	last_name: "Cumber"
})
let alaine = db.persons.findOne({
	first_name: "Alaine",
	last_name: "Stollenwerck"
})
db.persons.updateOne(
	{ first_name: "Devinne", last_name: "Gatchell" },
	{
		$set: {
			Friends: [
				dorene,
				aleine
			]
		}
	}
)
```
