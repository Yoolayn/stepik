const links = [
	{ name: "vim",	   link: "https://www.vim.org/"						  },
	{ name: "nvim",    link: "https://neovim.io/"						  },
	{ name: "vis",	   link: "https://github.com/martanne/vis"			  },
	{ name: "emacs",   link: "https://www.gnu.org/software/emacs/"		  },
	{ name: "acme",    link: "https://github.com/jinyangustc/acme-editor" },
	{ name: "kakoune", link: "https://kakoune.org/"						  },
	{ name: "helix",   link: "https://helix-editor.com/"				  }
]

const photos = [
	"https://www.vim.org/images/vimlogo.svg",
	"https://repository-images.githubusercontent.com/296702877/d4cd236e-7ca3-4e92-a7c5-533f3a8a9c7b",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/1024px-EmacsIcon.svg.png",
	"https://kakoune.org/img/kakoune_logo_full.png",
	"https://avatars.githubusercontent.com/u/66235900?s=280&v=4"
]

const data = [
	{ id: 1, name: "name1", surname: "surname1", age: 18 },
	{ id: 2, name: "name2", surname: "surname2", age: 19 },
	{ id: 3, name: "name3", surname: "surname3", age: 20 },
	{ id: 4, name: "name4", surname: "surname4", age: 21 },
	{ id: 5, name: "name5", surname: "surname5", age: 22 },
]

const headers = [
	"id",
	"name",
	"surname",
	"age"
]

const Menu = (props) => {
	return <nav>
		{
			props.menu.map((elem) => {
				return <>
					<a href={elem.link}>{elem.name}</a><br />
					</>
			})
		}
		</nav>
}

const PhotoGallery = (props) => {
	const { imageUrls } = props
	const openImage = (imageUrl) => {
		window.open(imageUrl, '_blank');
	};

	return (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
		{imageUrls.map((imageUrl, index) => (
			<img
			key={index}
			src={imageUrl}
			alt={`Image ${index + 1}`}
			style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
			onClick={() => openImage(imageUrl)}
			/>
		))}
		</div>
	);
};

const DataTable = (props) => {
	const { headers, data } = props
	return <table>
			<tr>
				{ headers.map((elem) => {
					return <th>{elem}</th>
				}) }
		</tr>
		{
			data.map((info) => {
				return <tr>
					{ headers.map((elem) => {
						return <td>{info[elem]}</td>
					}) }
					</tr>
			})
		}
		</table>
}

const App = () => {
	return (
		<>
			<Menu menu={links} />
			<PhotoGallery imageUrls={photos} />
			<DataTable headers={headers} data={data}/>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
// Stwórz komponent Menu, który przyjmuje tablicę obiektów reprezentujących elementy menu (np. {name: 'Home', link: '/home'}). Komponent powinien wygenerować listę nawigacyjną (<nav>), w której każdy element to link (<a>).
// Stwórz komponent PhotoGallery, który przyjmuje tablicę URL-i zdjęć i wyświetla je w formie siatki. Każde zdjęcie powinno być klikalne, wyświetlając pełny obraz w nowym oknie przeglądarki.
// Stwórz komponent DataTable, który przyjmuje tablicę obiektów reprezentujących dane oraz tablicę stringów reprezentujących nagłówki kolumn. Komponent powinien wyświetlać dane w formie tabeli.
