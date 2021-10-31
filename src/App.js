import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacion from './app/comunes/barraNavegacion/BarraNavegacion';

import VistaTrabajador from './app/paginas/trabajador/VistaTrabajador';
import AgregarTrabajador  from './app/paginas/trabajador/AgregarTrabajador';
import EditarTrabajador  from './app/paginas/trabajador/EditarTrabajador';

import VistaMarca from './app/paginas/marca/VistaMarca';
import AgregarMarca from './app/paginas/marca/AgregarMarca';
import EditarMarca from './app/paginas/marca/EditarMarca';

import VistaAuto from './app/paginas/auto/VistaAuto';
import AgregarAuto  from './app/paginas/auto/AgregarAuto';
import EditarAuto from './app/paginas/auto/EditarAuto';

import VistaUsuario from './app/paginas/usuario/VistaUsuario';
import AgregarUsuario  from './app/paginas/usuario/AgregarUsuario';
import EditarUsuario from './app/paginas/usuario/EditarUsuario';


function App() {
  return (
    
      <BrowserRouter>
          <BarraNavegacion />
          <div className="container mt-4">
              <Switch>
              
                 <Route path="/Trabajadores" exact><VistaTrabajador/></Route>
                  <Route path="/AgregarTrabajador" exact><AgregarTrabajador/></Route>
                  <Route path="/EditarTrabajador/:id" exact><EditarTrabajador/></Route>
                  
                  <Route path="/Marcas" exact><VistaMarca/></Route>
                  <Route path="/AgregarMarca" exact><AgregarMarca/></Route>
                  <Route path="/EditarMarca/:id" exact><EditarMarca/></Route>

                  <Route path="/Autos" exact><VistaAuto/></Route>
                  <Route path="/AgregarAuto" exact><AgregarAuto/></Route>
                  <Route path="/EditarAuto/:id" exact><EditarAuto/></Route>

                
                  <Route path="/Usuarios" exact><VistaUsuario/></Route>
                  <Route path="/AgregarUsuario" exact><AgregarUsuario/></Route>
                  <Route path="/EditarUsuario/:id" exact><EditarUsuario/></Route>
                  
                  <Redirect to="/inicio"></Redirect>
              </Switch>
          </div>
      </BrowserRouter>
  );
  
}

export default App;