# Polecenie

Napisz zapytanie MongoDB, które wyświetli 5 pierwszych restauracji,
w których nazwa kuchni jest w porządku rosnącym i dla tej samej
kuchni dzielnica powinna być w porządku malejącym. Wynik podaj
bez identyfikatora _id oraz pola grades.date, posortowany po polu
restaurant_id

```javascript
db.restaurants.find(
	{},
	{
		"_id": 0,
		"grades.date": 0
	}
).sort({
	"restaurant_id": 1
}).sort({
	"cuisine": 1,
	"borough": -1
}).limit(5)
```

## odpowiedź

```json

```
