import React, {Component} from 'react'

class AddNinja extends Component{
    state={
        name: null,
        age: null,
        color: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addNinja(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" onChange={this.handleChange}/>

                    <label htmlFor="age">Age: </label>
                    <input id="age" type="text" onChange={this.handleChange}/>

                    <label htmlFor="color">Favorite Color: </label>
                    <input id="color" type="text" onChange={this.handleChange}/>
                
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;