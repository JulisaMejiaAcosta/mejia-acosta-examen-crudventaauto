import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaTrabajador from '../../componentes/trabajador/TablaTrabajador';

const VistaTrabajador = () => {
    const { datos: listaTrabajadores } = useFetch('/trabajador');
    
    return (
        <TablaTrabajador
            listaTrabajadores={listaTrabajadores}
        />
    );
}

export default VistaTrabajador;