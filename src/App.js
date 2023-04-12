
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<Skills />} />
				<Route path="/Portfolio" element={<Portfolio />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
