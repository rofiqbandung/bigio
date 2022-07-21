	import { render } from 'react-dom'
	import Example from './example'
	import Nested from './nested'
	import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'
	import {
	  BrowserRouter as Router,
	  Switch,
	  Route,
	  Link
	} from "react-router-dom";
	
	function App() {
		return (
		<Router>
			<div className="App">
				 <center>				
				  <Link to="/">Drag n Drop Form Sorting</Link><br />
				  <Link to="/Nested">Drag n Drop Tree Sub Modul</Link><br /><br />
			  </center>
			<Switch>
			  <Route exact path="/">
				<DndProvider backend={HTML5Backend}>
									<Example />
				</DndProvider>
			  </Route>
			  <Route path="/Nested">
				<Nested />
			  </Route>
			  	</Switch>	
			  
			</div>
		</Router>
		)
	}

	const rootElement = document.getElementById('root')
	render(<App />, rootElement)
