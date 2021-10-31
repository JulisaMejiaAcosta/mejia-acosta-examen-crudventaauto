import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { buscar, modificar } from '../../../servicios/api';
import useFetch from '../../hooks/useFetch';
import EditarFormularioAuto from '../../componentes/auto/EditarFormularioAuto';

const EditarAuto = () => {
    const [auto, setAuto] = useState({
        modelo: '',
        placa: '',
        color: '',
        idMarca: 0 
    });

    const listaMarca = useFetch('/marca');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchAuto = async () => {
            try {
                const datos = await buscar('/auto', id);
                setAuto({
                    modelo: datos.modelo,
                    placa: datos.placa,
                    color: datos.color,
                    idMarca: parseInt(datos.idMarca)                    
                });
            } catch (error) {
                console.log(error.message);
                alert("Error al traer los datos");
            }
        }
        fetchAuto();
    }, [id])
    
    const handleChange = (event) => {   
        const target = event.target;
        var valor = target.value;
        const modelo = target.name;

       
        setAuto({
                ...auto,
                [modelo]: valor
        });
        
        console.log(auto);

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
                return listaMarca.datos.find((marca) => marca.auto === valorNuevo);
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
                const autoModificado = await modificar('/auto', id, auto);
                console.log(autoModificado);
                history.push('/autos');
            }
        } catch (error) {
            console.log(error.message);
            alert("Error al modificar");
        }
    }

    return (
        <>
            <EditarFormularioAuto
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
export default EditarAuto;