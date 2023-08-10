import { useEffect } from "react"

const App = () => {

	useEffect(() => {
		fetch("https://api.coincap.io/v2/assets")
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data)
			})
			.catch(() => {
				console.error("la peticion fallo")
			})
	}, [])

	return (
	  <h1>
	 		LISTA DE CRIPTOMONEDAS
	  </h1>
	)
}

export default App
