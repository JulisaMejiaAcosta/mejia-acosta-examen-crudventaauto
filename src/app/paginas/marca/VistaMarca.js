import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaMarca from '../../componentes/marca/TablaMarca';

const VistaMarca = () => {
    const { datos: listaMarcas } = useFetch('/marca');
    
    return (
        <TablaMarca
            listaMarcas={listaMarcas}
        />
    );
}

export default VistaMarca;