import React from 'react';
import './Ninjas.css';

const Ninjas = ({ninjas, deleteNinja}) => {
    //destructuring
    // const {ninjas} = props; -> make on the parameter
    const ninjaList = ninjas.map(ninja => {
        // if(ninja.age >20){
            return (ninja.age > 20) ? (
                <div className="nijas" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Favorite Color: {ninja.color}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
                    <hr/>
                </div>
            ) : null
            
        // }
    })
    return (
        <div className="ninja-lis">
            { ninjaList }
        </div>    
    )
}

export default Ninjas;