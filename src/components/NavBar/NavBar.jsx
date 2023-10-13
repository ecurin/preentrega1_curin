import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'

function NavBar(){
    return (
     
     
     <nav className="navbar navbar-expand-lg fixed-top">
     
     <div className="container-fluid">
         <a className="navbar-brand" href="/"><Logo /></a>
         
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">Inicio</a>
             </li>
             <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tablas</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Asado</a></li>
                        <li><a className="dropdown-item" href="#">Cocina</a></li>
                        <li><a className="dropdown-item" href="#">Aperitivo</a></li>
                    </ul>
             </li>
             <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bar              
             </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Copas</a></li>
                        <li><a className="dropdown-item" href="#">Hielos</a></li>
                        <li><a className="dropdown-item" href="#">Coctelera</a></li>
                    </ul>
             </li>
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">Contáctanos</a>
             </li>
         </ul>
         </div>
     </div>
     <CartWidget />
     </nav>

    )
  }
  
  export default NavBar
