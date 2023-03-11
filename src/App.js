import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
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
				<Route path="/Skills" element={<Skills />} />
				<Route path="/Portfolio" element={<Portfolio />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
