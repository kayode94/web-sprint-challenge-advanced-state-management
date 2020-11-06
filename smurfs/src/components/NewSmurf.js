import React,{useEffect} from 'react'
import Smurf from './Smurf'
import {getSmurf} from '../Actions/SmurfActions'
import {connect} from 'react-redux'

const NewSmurf = (props) =>{
    useEffect(()=>{
        props.getSmurf()
    },[])
    console.log('PROPS', props)
    return(
        <div>
            <h1>Your Smurfs</h1>
            {props.fetchingSmurf ? <p>Loading Your Smurf Population...</p> : null}
            {props.error ? <p style={{color: 'red'}}> {props.error}</p> : null}
            {props.newSmurf.map((smurf, index) =>{
                console.log(smurf)
                return(
                    <Smurf smurf={smurf} key ={index}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        fetchingSmurf: state.fetchingSmurf,
        newSmurf: state.newSmurf,
        error: state.error
    }
}

export default connect (mapStateToProps, {getSmurf})(NewSmurf)