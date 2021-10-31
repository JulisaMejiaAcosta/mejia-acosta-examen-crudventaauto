import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaUsuario from '../../componentes/usuario/TablaUsuario';

const VistaUsuario = () => {
    const { datos: listaUsuario } = useFetch('/usuario');
    
    return (
        <TablaUsuario
            listaUsuario={listaUsuario}
        />
    );
}

export default VistaUsuario;