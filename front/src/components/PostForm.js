import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            username : '',
            fullname: '',
            email: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:5000/register', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render(){
        const { username, fullname, email, password } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text"name="username"value={username} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text"name="fullname"value={fullname} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text"name="email"value={email} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text"name="password"value={password} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm