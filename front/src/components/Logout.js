import React, { Component } from 'react'
import axios from 'axios'

//axios.defaults.withCredentials = true

class Logout extends Component{


    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.get('http://localhost:5000/logout')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <br></br>
                    <button type="submit">Logout</button>
                </form>
            </div>
        )
    }
}

export default Logout