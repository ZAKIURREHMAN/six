import React from 'react'

function Alert(props) {
    return (
        props.alert && <>
           <div class="alert alert-success" role="alert" style={{margin:"4px 0px"}} >
                {props.alert.type}: {props.alert.message}
            </div>
        </>
    )
}

export default Alert