	import { render } from 'react-dom'
	import Example from './example'
	import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'
	
	function App() {
		return (
			<div className="App">
				 <center>				
				  <a href="/">Drag n Drop Form Sorting</a><br />
				  <a href="/Tree">Drag n Drop Tree Sub Modul</a><br /><br />
			  </center>
				<DndProvider backend={HTML5Backend}>
									<Example />
				</DndProvider>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	render(<App />, rootElement)
