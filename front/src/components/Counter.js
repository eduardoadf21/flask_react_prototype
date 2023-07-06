import React, { Component } from 'react'

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:  0
        }
    }

    increaseCounter() {
        this.setState({
            count: this.state.count + 1
        }, () => {console.log('callback value', this.state.count)})

        /*
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count) 
        */
    }


    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increaseCounter()}> increment </button>
            </div>
        )
    } 
}

export default Counter
