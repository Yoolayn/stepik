import { useState } from "react";

const quotes = [
	{ quote: "Nvidia, F*ck you", author: "Linus Torvalds" },
	{ quote: " I'd just like to interject for a moment. What you’re referring to as Linux, is in fact, GNU/Linux, or as I’ve recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX. Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called “Linux”, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project. There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine’s resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called “Linux” distributions are really distributions of GNU/Linux. " , author: "Richard Matthew Stallman" },
	{ quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger Dijkstra" },
	{ quote: "Emacs is a great operating system, lacking only a decent editor", author: "Unknown" },
	{ quote: "In a world without fences and walls, who needs Gates and Windows?", author: "Unknown" },
	{ quote: "The great thing about Object Oriented code is that it can make small, simple problems look like large, complex ones", author: "Daniel T. Barry" },
]

const headers = [
	"field1",
	"field2",
	"field3",
	"field4",
]

const data = [
	{ field1: "data1", field2: 1, field3: "data1", field4: 1 },
	{ field1: "data2", field2: 2, field3: "data2", field4: 2 },
	{ field1: "data3", field2: 3, field3: "data3", field4: 3 },
	{ field1: "data4", field2: 4, field3: "data4", field4: 4 },
]

const todayDay = () => {
	const today = new Date()
	const day = today.getDate().toString().padStart(2, '0');
	const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are zero-based
	const year = today.getFullYear();
	return `${day}-${month}-${year}`
}

const QuoteOfTheDay = (props) => {
	const randQuote = props.quotes[Math.floor(Math.random() * props.quotes.length)]
	return <>
		<h1>{todayDay()}</h1>
		<p>{randQuote.quote}</p>
		<p>- {randQuote.author}</p>
		</>
}

const SortableTable = ({ data, headers }) => {
	const [sortedData, setSortedData] = useState(data);
	const [sortOrder, setSortOrder] = useState({ column: null, ascending: true });

	const handleSort = (column) => {
		const isAscending = sortOrder.column === column && sortOrder.ascending;

		const sorted = [...sortedData].sort((a, b) => {
			if (typeof a[column] === 'string' || typeof a[column] === 'number') {
				return isAscending ? a[column] - b[column] : b[column] - a[column];
			}
			return 0;
		});

		setSortedData(sorted);
		setSortOrder({ column, ascending: !isAscending });
	};

	return (
		<table>
		<thead>
		<tr>
		{headers.map((column, index) => (
			<th key={index} onClick={() => handleSort(column)}>
			{column}
			{sortOrder.column === column && (sortOrder.ascending ? ' ▲' : ' ▼')}
			</th>
		))}
		</tr>
		</thead>
		<tbody>
		{sortedData.map((row, rowIndex) => (
			<tr key={rowIndex}>
			{headers.map((column, colIndex) => (
				<td key={colIndex}>{row[column]}</td>
			))}
			</tr>
		))}
		</tbody>
		</table>
	);
};

// Stwórz komponent QuoteOfTheDay, który przyjmuje tablicę obiektów reprezentujących cytaty wraz z ich autorami (np. {quote: 'Największym ryzykiem jest nie podejmowanie żadnego ryzyka.', author: 'Mark Zuckerberg'}). Komponent powinien losowo wybrać jeden cytat z tablicy i wyświetlić go wraz z nazwiskiem autora. Ponadto, komponent powinien wyświetlać aktualną datę w formacie "DD-MM-YYYY".
// Stwórz komponent SortableTable, który przyjmuje tablicę obiektów jako dane do wyświetlenia w tabeli i tablicę zawierającą nazwy kolumn do wyświetlenia. Komponent powinien umożliwić sortowanie danych po kliknięciu w nagłówek kolumny. Sortowanie powinno odbywać się alfabetycznie dla tekstów lub numerycznie dla liczb i powinno być możliwe w obie strony: rosnąco i malejąco.

const App = () => {
	return <>
			<QuoteOfTheDay quotes={quotes} />
			<SortableTable headers={headers} data={data}/>
		</>
}

export default function Home() {
	return (
		<html>
			<body>
				<main>
					<App />
				</main>
			</body>
		</html>
	)
}
