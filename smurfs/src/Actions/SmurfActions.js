import axios from 'axios'
import {smurfURL} from '../SmurfData/smurfData'

export const FETCH_NEW_SMURF = 'FETCH_NEW_SMURF'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'
export const POST_NEW_SMURF = 'POST_NEW_SMURF'

export const getSmurf = () => {
    return (dispatch) =>{
        
        dispatch({type: FETCH_NEW_SMURF})
        //FETCHING SMURF DATA
        axios.get(smurfURL)
        .then(response=>{
            console.log('SMURF DATA', response)
            dispatch({type: FETCH_SMURF_SUCCESS, payload: response.data})
        })
        .catch(error=>{
            console.log('THIS IS YOUR ERROR---->>>', error)
            dispatch({type: FETCH_SMURF_FAILURE, payload:error.message})
        })
    }
}

export const addSmurf = (newSmurf) =>{
    return(dispatch) =>{
        //POSTING SMURF DATA
        axios.post(smurfURL, newSmurf)
        .then(response=>{
            dispatch({type:POST_NEW_SMURF, payload:response.data})
        })
        .catch(error=>{
            dispatch({type:FETCH_SMURF_FAILURE, payload: error.message})
        })
    }
}