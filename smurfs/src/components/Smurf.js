import React from 'react'


const Smurf = (props) =>{ 
    return(
        <div>
            <h2>Your Smurfs</h2>
                <div>
                    <h3>Name: {props.smurf.name}</h3>
                    <h3>Height: {props.smurf.height}</h3>
                    <h3>Age: {props.smurf.age}</h3>
                </div>
        </div>
    )
}


export default Smurf