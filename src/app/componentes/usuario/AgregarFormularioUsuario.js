import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const AgregarFormularioUsuario = ({    
    onSubmit, 
    onChange, 
    usuario,
    listaTrabajador,
    onSelectedTypeahead,
    onChangeInputTypeahead,
    onChangeTypeahead
}) =>{
    return(
        <div className="container col-lg-6 mx-auto mt-3">

            <h1 className="text-center">Agregar Usuario</h1>

            <Form onSubmit={onSubmit}>

                <div className="row">

                    <div className="col-lg-6">

                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Registrar Nombre" 
                                name="nombre"
                                value={usuario.nombre}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Clave</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Registrar Clave" 
                                name="clave"
                                value={usuario.clave}
                                onChange={onChange}
                                required=""
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Vigencia:</Form.Label>
                                <Form.Control 
                                        size="sm"
                                        as="select"
                                        name="vigencia"
                                        value={usuario.vigencia}
                                        onChange={onChange}
                                        required
                                >
                                <option value="">-- Seleccionar --</option>
                                <option value="1">Vigente</option>
                                <option value="0">No Vigente</option>
                            </Form.Control>
                        </Form.Group>
                    


                    </div>
                    <div className="col-lg-6">

                        <Form.Group>
                            <Form.Label>Trabajador:</Form.Label>
                            <Typeahead
                                size="sm"
                                id="basic-typeahead-single"
                                placeholder="Elige una opción"
                                options={listaTrabajador}
                                labelKey={opcion => String(opcion.nombres)}
                                selected={onSelectedTypeahead('idTrabajador', usuario.idTrabajador)}
                                onInputChange={(valorNuevo) =>
                                    onChangeInputTypeahead('idTrabajador', valorNuevo)}
                                onChange={(valorNuevo) => valorNuevo.length > 0 &&
                                    onChangeTypeahead('idTrabajador', valorNuevo[0].id)}
                                inputProps = {{ required: true }}
                            />
                        </Form.Group>

                    </div>
                </div>
                
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>

                    <Link className="btn btn-danger ml-2" to="/usuarios">
                        Cancelar
                    </Link>
                </div>
            </Form>

        </div>
    );
}

export default AgregarFormularioUsuario;