import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React from "react"
import Header from "./components/header.jsx"
import Home from "./pages/home.jsx"
import Propos from "./pages/propos.jsx"
import Logement from "./pages/logement.jsx"
import Footer from "./components/footer.jsx"
import Erreur from "./pages/erreur.jsx"
import "./styles/app.scss"

function App() {
	
	
	return (
		<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<Propos />} />
					<Route path="/logement/:id" element={<Logement />} />
					<Route path="*" element={<Erreur />} />
				</Routes>
			</div>
			<Footer />
		</Router>
		)
	}
	
	export default App