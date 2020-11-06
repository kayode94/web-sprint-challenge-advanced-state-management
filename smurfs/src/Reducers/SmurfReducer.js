import {
    FETCH_NEW_SMURF, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_FAILURE,
    POST_NEW_SMURF,
    } from '../Actions/SmurfActions'


const initialState = {
    fetchingSmurf: false,
    newSmurf: [],
    error: '',
    
}


export const smurfReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_NEW_SMURF:
            return{
                ...state,
                fetchingSmurf:true,
                error: ''
            }
        
        case FETCH_SMURF_SUCCESS:
            return{
                ...state,
                fetchingSmurf:false,
                newSmurf: action.payload
            }

        case FETCH_SMURF_FAILURE:
            return{
                ...state,
                fetchingSmurf:false,
                error: action.payload
            }   

        case POST_NEW_SMURF:
            return{
                ...state,
                newSmurf: [
                    ...state.newSmurf,
                    {name:action.name,
                     age:action.age,
                     height:action.height   
                    }
                ]
            }
        default:
            return state
    }
}