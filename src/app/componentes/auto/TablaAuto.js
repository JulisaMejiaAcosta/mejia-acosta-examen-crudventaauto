import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TablaAuto = ({ listaAutos }) => {
    
    const encabezado = () => {
        return (
            <tr>
                <th>Nro</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Color</th>
                <th>Marca</th>
                <th>Acción</th>
            </tr>
        );
    }


    const celdas = () => {
        let numero=0;
        return (            
            listaAutos.map((auto) => (
                <tr key={auto.id}>
                    <td>{numero+=1}</td>
                    <td>{auto.modelo}</td>
                    <td>{auto.placa}</td>
                    <td>{auto.color}</td>
                     <td>{auto.idMarca}</td>
                    <td>
                        <Link to={"/editarAuto/" + auto.id} className="btn btn-success">
                           Editar
                        </Link>
                    </td>
                   
                </tr>
            ))
        );
    }

    return (
        <>
            <h3>Listado de Autos</h3>
            <Link to="/agregarAuto" className="btn btn-primary mb-2">
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
        </>
    );
}
export default TablaAuto;