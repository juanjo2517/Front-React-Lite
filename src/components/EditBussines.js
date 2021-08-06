import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { editBussinesBdAct } from '../actions/businessAction';
import Bussines from './Bussines';

const EditBussines = () => {

    const history = useHistory();
    const dispacth = useDispatch();

    //Nuevo state
    const [ bussines, saveBussines] =useState({
        name_bussines: '',
        nit : '',
        direction: '',
        phone: ''
    });
    // Empresa a editar
    const bussinesEdit = useSelector(state => state.bussines.bussinesEdit)

    // Llenar state
    useEffect(() => {
        console.log('mi')
        saveBussines(bussinesEdit)
    }, [bussinesEdit])

    //Leer form
    const onChangeForm = e => {
        saveBussines({
            ...bussines,
            [e.target.name] : e.target.value
        })
    }

    const { name_bussines, nit, direction, phone} = bussines;

    const submitEditBussines = e => {
        e.preventDefault(); 
        dispacth( editBussinesBdAct(bussines) );

        history.push('/')
    }


    return ( 
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Empresa
                        </h2>

                        <form
                            onSubmit={submitEditBussines}
                        >
                            <div className="form-group">
                                <label>Nombre Empresa:</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Empresa"
                                    name="name_bussines"
                                    value={name_bussines}
                                    onChange={onChangeForm}
                                    
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
                                    onChange={onChangeForm}

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
                                    onChange={onChangeForm}

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
                                    onChange={onChangeForm}

                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold
                                d-block w-100"
                                >
                                    EDITAR
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditBussines;