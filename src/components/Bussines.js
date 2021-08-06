import React, { Fragment, useEffect } from 'react'
import BussinesOne from './BussinesOne';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getBussinesAct } from '../actions/businessAction';

const Bussines = () => {

    const dispatch = useDispatch();

    
    useEffect(() => {
        // Consultar API
        const loadBussines = () => dispatch( getBussinesAct() );
        loadBussines();
    }, []);

    // State
    const bussinesList = useSelector( state => state.bussines.bussines); 
    const error = useSelector( state => state.bussines.error); 
    const loading = useSelector( state => state.bussines.loading); 
    

    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de Empresas</h2>
            
            { error ? <p className="font-weight-bold alert alert-danger text-center">
                Hubo un error
            </p> : null}
            
            { loading ? <p className="font-weight-bold alert alert-success text-center">
                Cargando...
            </p> : null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">NIT</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Teléfon</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { bussinesList.length === 0 ? "No hay Empresas..." : (
                        bussinesList.map(bussines =>  (
                            <BussinesOne
                                key={bussines.id}
                                bussines={bussines}
                            />
                        ))
                    ) }
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Bussines;