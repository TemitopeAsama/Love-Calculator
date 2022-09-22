import Home from './pages/Home'
import History from './pages/History';
import Header from './components/Header'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

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
                  <Home />
                }/>
              <Route path='/history' element={<History />} />
            </Routes>
				</Router>
			</main>
		</div>
	);
}

export default App;
