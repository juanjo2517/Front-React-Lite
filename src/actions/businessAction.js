import {
    ADD_BUSSINES,
    ADD_BUSSINES_GREAT,
    ADD_BUSSINES_ERROR,
    LOAD_BUSSINES_GREAT,
    LOAD_BUSSINES_ERROR,
    START_LOAD_BUSSINES,
    BUSSINES_DELETE_GREAT,
    GET_BUSSINES_DELETE,
    GET_BUSSINES_EDIT,
    BUSSINES_EDIT_GREAT,
    BUSSINES_EDIT_ERROR,
    START_BUSSINES_EDIT
    
} from '../types'

import clientAxios from '../config/axios';

import Swal from 'sweetalert2';

// Crear nueva empresa 
export function  createNewBussinesAct(bussines) {
    return async (dispatch) => {
        dispatch( addBussines() )

        try {
            // Insertar en la BD
            const response = await clientAxios.post('/bussines/', bussines);
            console.log(response);

            dispatch( addBussinesGreat(bussines) )
            
            // Mostrar Alerta
            Swal.fire(
                'Correcto',
                'La empresa se ha guardado satisfactoriamente',
                'success'
            )

        } catch (error) {
            dispatch( addBussinesError(true) )

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error, por favor intenta de nuevo'
            }
            )
        }
    }
}


const addBussines = () => ({
    type: ADD_BUSSINES,
    payload: true
});

// Si se guarda en BD
const addBussinesGreat = bussines => ({
    type: ADD_BUSSINES_GREAT,
    payload: bussines
});

//Si hubo error 
const addBussinesError = error => ({
    type: ADD_BUSSINES_ERROR,
    payload: error
});

// Listar empresas desde BD
export function getBussinesAct() {
    return async (dispatch) => {

        dispatch( getBussines() );
        
        try {
            const response = await clientAxios.get('/bussines/')
            dispatch( addLoadBussinesGreat(response.data) );
        } catch (error) {
            dispatch( addLoadBussinesError(true) );
        }
    }
}

const getBussines = () => ({
    type: START_LOAD_BUSSINES,
    payload: true
});

const addLoadBussinesGreat = bussinesList => ({
    type: LOAD_BUSSINES_GREAT,
    payload: bussinesList
});

const addLoadBussinesError = error => ({
    type: LOAD_BUSSINES_ERROR,
    payload: error
});

// Seleccionar y eliminar producto

export function deleteBussinesAct(id) {
    return async (dispatch) => {
        dispatch( getBussinesDelete(id) );
        
        try {
            const response = await clientAxios.delete(`/bussines/${id}/`)
            console.log(response)
            dispatch( bussinesDeleteGreat() );
            
            Swal.fire(
                'Eliminado',
                'Se elimino correctamente',
                'success'
                )
                
            } catch (error) {
                
            }
        }
    }
    
    const getBussinesDelete = id => ({
        type: GET_BUSSINES_DELETE,
        payload: id
    })
    
const bussinesDeleteGreat = () => ({
    type: BUSSINES_DELETE_GREAT
});


// Poner bussines edicion 
export function getBussinesEdit(bussines) {
    return (dispatch) => {
        dispatch( getBussinesEditAct(bussines) )
    }
}

const getBussinesEditAct = bussines => ({
    type: GET_BUSSINES_EDIT,
    payload: bussines
})

//Edit en BD
export function editBussinesBdAct(bussines) {
    return async (dispatch) => {
        dispatch( editBussinesBd(bussines) )
        const response = await clientAxios.put(`/bussines/${bussines.id}/`, bussines)
        dispatch(editBussinesGreat(bussines));
        Swal.fire(
            'Editada',
            'Se edito la empresa exitosamente',
            'success'
            )
        console.log(response);
    }
}

const editBussinesBd = () => ({
    type: START_BUSSINES_EDIT
})

const editBussinesGreat = bussines => ({
    type: BUSSINES_EDIT_GREAT,
    payload: bussines
})