import { useState } from 'react';
import Home from './pages/Home'
import History from './pages/History';
import Header from './components/Header'
import Result from './components/Result';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
const [firstName, setFirstName] = useState("");
const [secondName, setSecondName] = useState("");

  return (
		<div className='App'>
			<main>
				<Router>
					<Header />
					<Routes>
						<Route
							exact
							path='/'
							element={
								<Home
									firstName={firstName}
									secondName={secondName}
									setFirstName={setFirstName}
									setSecondName={setSecondName}
								/>
							}/>
						<Route path='/history' element={<History />} />
					</Routes>
				</Router>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
