import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addSmurf} from '../Actions/SmurfActions'



const SmurfForm = (props) =>{
    
    const initialSmurfState = {
        name:'',
        age: '',
        height: '',

    }

    const [smurfCiv, setSmurfCiv] = useState(initialSmurfState)

    //handlers
    const handleSubmit = (event) =>{
        event.preventDefault()
        props.addSmurf((smurfCiv))
    }

    const handleChange = (event) =>{
        event.preventDefault()
        setSmurfCiv({...smurfCiv, [event.target.name]: event.target.value})
    }


    //jsx
    return(
        <div>
            <h3>Create a Smurf</h3>
            <form onSubmit={handleSubmit}>
                <input
                name='name'
                defaultValue={props.name}
                type='text'
                placeholder='Enter Name Here'
                onChange={handleChange}/>

            <input
                name='age'
                defaultValue={props.age}
                type='text'
                placeholder='Enter Age Here'
                onChange={handleChange}/>

            <input
                name='height'
                defaultValue={props.height}
                type='text'
                placeholder='Enter Height Here'
                onChange={handleChange}/>
            </form>
            <button type='submit'>Submit your Smurf</button>
        </div>
    )
}




export default connect(null, {addSmurf})(SmurfForm)