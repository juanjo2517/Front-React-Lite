import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import { deleteBussinesAct, getBussinesEdit } from '../actions/businessAction';
// Redux 
import { useDispatch } from 'react-redux';

import Swal from 'sweetalert2';

const BussinesOne = ({bussines}) => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    

    //Confirmar eliminar 
    const confirmDelete = id => {
        // Preguntar al user
        Swal.fire({
            title: 'Estas seguro que quieres eliminar?',
            text: "No habra marcha atras",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result) {
                if (result.value) {
                    dispatch( deleteBussinesAct(id) );
                }
                
            }
          })

        //pasar al action
    }

    //funcion para redirigir
    const redirectEdit = bussines => {
        dispatch( getBussinesEdit(bussines) );
        history.push(`/empresas/editar/${bussines.id}`)
    }

    return ( 
        <tr>
            <td>{bussines.nit}</td>
            <td>{bussines.name_bussines}</td>
            <td>{bussines.direction}</td>
            <td>{bussines.phone}</td>
            <td className="acciones">
                <button
                    type="button"
                    onClick={() => redirectEdit(bussines)}
                    className="btn btn-primary mr-2" 
                    to={`/empresas/editar/${bussines.id}`}
                >Editar</button>
                
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDelete(bussines.id)}
                >Eliminar</button>
                

            </td>
        </tr>
     );
}
 
export default BussinesOne;