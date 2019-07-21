import React from 'react'

const style = {
    margin: '5%',
    textAlign: 'center'
}

const Message = (props) => {
    return (
        <p style={style} >{props.msg}</p>
    )
}

export default Message
