import React from 'react';
import useFetch from '../../hooks/useFetch';
import TablaAuto from '../../componentes/auto/TablaAuto';

const VistaAuto = () => {
    const { datos: listaAutos } = useFetch('/auto');

    return (
        <TablaAuto
            listaAutos={listaAutos}
        />
    );
}

export default VistaAuto;