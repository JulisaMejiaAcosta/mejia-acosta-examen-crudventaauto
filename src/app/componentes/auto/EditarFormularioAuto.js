import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const EditarFormularioAuto= ({
    onSubmit,
     onChange, 
     auto,
     listaMarca,
     onSelectedTypeahead,
    onChangeInputTypeahead,
    onChangeTypeahead
}) =>{
    return(
        <div className="container col-lg-6 mx-auto mt-3">

            <h1 className="text-center">Editar Auto</h1>

            <Form onSubmit={onSubmit}>

                <div className="row">

                    <div className="col-lg-6">

                    <Form.Group>
                            <Form.Label>Modelo</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Modelo" 
                                name="modelo"
                                value={auto.modelo}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Placa</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Placa" 
                                name="placa"
                                value={auto.placa}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Color</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Color " 
                                name="color"
                                value={auto.color}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Marca:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                placeholder="Elige una opción"
                                options={listaMarca}
                                labelKey={opcion => String(opcion.nombre)}
                                selected={onSelectedTypeahead('idMarca',auto.idMarca)}
                                onInputChange={(valorNuevo) =>
                                    onChangeInputTypeahead('idMarca', valorNuevo)}
                                onChange={(valorNuevo) => valorNuevo.length > 0 &&
                                    onChangeTypeahead('idMarca', valorNuevo[0].id)}
                                inputProps = {{ required: true }}
                            />
                        </Form.Group>

                      

                    </div>
                    
                </div>

                
                <div className="text-center">
                    <Button variant="success" type="submit">
                        Modificar
                    </Button>

                    <Link className="btn btn-danger ml-2" to="/autos">
                        Cancelar
                    </Link>
                </div>
            </Form>

        </div>
    );
}

export default EditarFormularioAuto;