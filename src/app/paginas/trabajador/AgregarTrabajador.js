import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import AgregarFormularioTrabajador from '../../componentes/trabajador/AgregarFormularioTrabajador';

const AgregarTrabajador = () => {
    const [ trabajador, setTrabajador ] = useState({
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        tipoDocumento: '',
        numeroDocumento: '',
        correo: '',
    
    });

    const history = useHistory();

    const handleChange = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setTrabajador({
            ...trabajador,
            [nombre]: valor
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {
                const nuevoTrabajador = await crear('/trabajador', trabajador);
                console.log(nuevoTrabajador);
                history.push('/trabajadores');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return (
        <>  
            <AgregarFormularioTrabajador
                trabajador={trabajador}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}


export default AgregarTrabajador;