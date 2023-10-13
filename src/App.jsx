import { useState } from 'react'
import './App.css'

import NavBar     from './components/NavBar/NavBar.jsx'
import Home       from './components/Home/Home.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


//componentes funcionales => muestran interfaz
//componentes Contentedores => agrupan otros contenedores o funcionales
//useState (hook es de react)


function App() {
  
  const [count, setCount] = useState(0)

  //los parametros se llaman props, permiten pasar datos de un componente padre a un
  //componente hijo
  //const estado = useState(0)
  //let counter = useState(0)

  const [counter, aumentarValor] = useState(0)

  const handleCounter = () => {
    aumentarValor(counter+1)
        console.log(counter)
  }





  return (
    <>
      <NavBar />

      <ItemListContainer greeting='Tablas y Cocktail' />
      
    </>
  )
}

export default App
