//import 
const App = () => {

	const messages = [
		"Nepal",
		"cambodia",
		"Pakistan",
		"USA",
		200
	];

	return <>

		<h1>Chat room</h1>
		<p>Hello world</p>
		<p> This is a test message </p>

		{
			messages.map(
				(text) => <p>
					{text}   
		</p>
			)
		}
	</>;
}


export default App;
