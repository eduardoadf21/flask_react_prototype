
import React, { Component } from 'react'
import axios from 'axios'

axios.defaults.withCredentials = true

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            username : '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:5000/login', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render(){
        const { username, password } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h4>login</h4>
                    <div>
                        <input type="text"name="username"value={username} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text"name="password"value={password} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login
