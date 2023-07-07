import react, { Component } from 'react'
import axios from 'axios'

class PostUsers extends Component {

    constructor(props){
        super(props)
        this.state = {
            users : []
        }
    }

    //this method will be executed when the component mounts for the first time, and only once   
    componentDidMount(){
        axios.get('http://localhost:5000/users')
            .then(response => {
                console.log(response)
                this.setState({users: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { users } = this.state
        return(
            <div>
                List of users
                {
                    users.length ?
                    users.map(user => <div key={user.id}>{user.username}</div>):
                    null
                }
            </div>
        )
    }


}

export default PostUsers