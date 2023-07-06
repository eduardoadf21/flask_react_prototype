import React from "react";

function Click() {

    function clickHandler(){
        console.log('hey')
    }

    return(
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
        
    )


}

export default Click;
