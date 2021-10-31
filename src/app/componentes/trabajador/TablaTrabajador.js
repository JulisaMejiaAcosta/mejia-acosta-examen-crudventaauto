import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaTrabajador = ({ listaTrabajadores }) => {
    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Tipo de Doc</th>
                <th>N° Doc</th>
                <th>Correo</th>
                <th>Acción</th>

            </tr>
        );
    }


    const celdas = () => {
        let numero=0;
        return (            
            listaTrabajadores.map((trabajador) => (
                <tr key={trabajador.id}>
                    <td>{numero+=1}</td>
                    <td>{trabajador.nombres}</td>
                    <td>{trabajador.apellidoPaterno} {trabajador.apellidoMaterno}</td>
                    <td>{trabajador.tipoDocumento}</td>
                    <td>{trabajador.numeroDocumento}</td>
                    <td>{trabajador.correo}</td>
                  
                    <td>
                        <Link to={"/editarTrabajador/" + trabajador.id} className="btn btn-success">
                           Editar
                        </Link>
                    </td>
 
                </tr>
            ))
        );
    }

    return(
        <div className="container mt-3">
            <h1 className="text-center">Lista de trabajadores</h1>
            <Link to="/agregarTrabajador" className="btn btn-primary mb-2">
               Agregar
            </Link>
            <Table responsive>
                <thead className="bg-dark text-light">
                    { encabezado() }
                </thead>
                <tbody>
                    { celdas() }
                </tbody>
            </Table>
        </div>
    );
}


export default TablaTrabajador;