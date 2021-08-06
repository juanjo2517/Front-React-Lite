/* eslint-disable import/no-anonymous-default-export */
/* Cada reducer tiene su propio state */
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
    BUSSINES_EDIT_ERROR

} from '../types'


const initialState = {
    bussines: [],
    error: null,
    loading: false,
    bussinesDelete: null,
    bussinesEdit: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case START_LOAD_BUSSINES:
        case ADD_BUSSINES:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_BUSSINES_GREAT:
            return {
                ...state,
                loading: false,
                bussines: [...state.bussines, action.payload],
                error: null
            }
        case LOAD_BUSSINES_ERROR:
        case ADD_BUSSINES_ERROR:
             return {
                 ...state,
                 loading: false,
                 error: action.payload 
             }
        case LOAD_BUSSINES_GREAT:
            return {
                ...state,
                bussines: action.payload,
                error: null,
                loading: false,
            }
        case GET_BUSSINES_DELETE:
            return {
                ...state,
                bussinesDelete: action.payload
            }
        case BUSSINES_DELETE_GREAT:
            return {
                ...state,
                bussines: state.bussines.filter(buss => buss.id !== state.bussinesDelete ),
                bussinesDelete: null
            }
        case GET_BUSSINES_EDIT:
            return {
                ...state,
                bussinesEdit: action.payload
            }
        case BUSSINES_EDIT_GREAT:
            return {
                ...state,
                bussinesEdit: null,
                bussines: state.bussines.map( buss => 
                    buss.id === action.payload.id ? buss = action.payload : buss
                
                )
            }
        default:
            return state
    }
}