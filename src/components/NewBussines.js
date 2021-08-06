import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// Actions 
import { createNewBussinesAct } from '../actions/businessAction';

const NewBussines = ({history}) => {

    // State del componente
    const [name, saveName] = useState('');
    const [nit, saveNit] = useState('');
    const [direction, saveDirection] = useState('');
    const [phone, savePhone] = useState('');


    // Usar Dispatch 
    const dispatch = useDispatch();

    // Acceder al State
    const { loading, error } = useSelector((state) => state.bussines);
    
    console.log(error)

    // Llama el action
    const addBussines = bussines => dispatch( createNewBussinesAct(bussines) )

    // Submit 
    const submitNewBussines = e => {
        e.preventDefault();

        // Valdiar formulario
        if(name.trim() === '' || nit.trim() === '' || direction.trim() === '' || phone.trim() === ''){
            return;
        }

        //Si hay errores

        // Crear producto
        addBussines({
            name_bussines: name,
            nit,
            direction,
            phone
        });

        // Redireccionar al Home
        if(!error){
            history.push('/');
        }
    }
    return ( 
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Empresa
                        </h2>

                        <form
                            onSubmit={submitNewBussines}
                        >
                            <div className="form-group">
                                <label>Nombre Empresa:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Empresa"
                                    name="nameBussines"
                                    value={name}
                                    onChange={e => saveName(e.target.value)}
                                    
                                />
                            </div>
                            <div className="form-group">
                                <label>NIT:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="NIT"
                                    name="nit"
                                    value={nit}
                                    onChange={e => saveNit(e.target.value)}

                                />
                            </div>
                            <div className="form-group">
                                <label>Dirección:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Dirección:"
                                    name="direction"
                                    value={direction}
                                    onChange={e => saveDirection(e.target.value)}

                                />
                            </div>
                            <div className="form-group">
                                <label>Teléfono:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Teléfono"
                                    name="phone"
                                    value={phone}
                                    onChange={e => savePhone(e.target.value)}

                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold
                                d-block w-100"
                                >
                                    AGREGAR
                                </button>
                        </form>
                        { loading ? <p>Cargando...</p> : null}
                        { error ?   <p className="alert alert-danger p-2 mt-2">
                                        Hubo un error
                                    </p> : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewBussines;