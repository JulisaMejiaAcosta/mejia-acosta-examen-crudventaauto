import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { crear } from '../../../servicios/api';
import useFetch from '../../hooks/useFetch';
import AgregarFormularioAuto from '../../componentes/auto/AgregarFormularioAuto';

const AgregarAuto = () => {
    
    const [ auto, setAuto ] = useState({
        modelo: '',
        placa: '',
        color: '',
        idMarca: 0        
    });
    
    const listaMarca = useFetch('/marca');
    const history = useHistory();

    const handleChange = (event) => {    
        const target = event.target;
        const valor = target.value;
        const modelo= target.name;
        setAuto({
            ...auto,
            [modelo]: valor
        });
    }

    const handleChangeTypeahead = (modelo, valor) => {
        setAuto({
            ...auto,
            [modelo]: valor
        });
    }

    const buscarObjeto = (fk, valorNuevo) => {
        switch (fk) {
            case 'idMarca':
                return listaMarca.datos.find((marca) => marca.modelo === valorNuevo);
            default:
                return undefined;
        }
    }

    const handleChangeInputTypeahead = (fk, valorNuevo) => {
        const datos = buscarObjeto(fk, valorNuevo);
        const id = datos ? datos.id : -1;
        const valor = valorNuevo === '' ? 0 : id;
        handleChangeTypeahead(fk, valor);
    }

    const buscarObjetoPorID = (fk, id) => {
        switch (fk) {
            case 'idMarca':
                return listaMarca.datos.find((marca) => marca.id === id);
            default:
                return undefined;
        }
    }

    const onSelectedTypeahead = (fk, id) => {
        const datos = buscarObjetoPorID(fk, id);
        const opcionSeleccionado = datos ? Array(datos) : [];
        return opcionSeleccionado;
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (event.currentTarget.checkValidity()) {                
                const autoNuevo = await crear('/auto', auto);
   
                console.log(autoNuevo);
                history.push('/autos');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");
        }
    }

    return (
        <>  
            <AgregarFormularioAuto
                auto={auto}
                listaMarca={listaMarca.datos}                  
                onChange={handleChange}
                onSelectedTypeahead={onSelectedTypeahead}
                onChangeInputTypeahead={handleChangeInputTypeahead}
                onChangeTypeahead={handleChangeTypeahead}
                onSubmit={handleSubmit}
            />
        </>
    );
}


export default AgregarAuto;