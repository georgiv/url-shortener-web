import React from 'react'

const holderStyle = {
    width: '20%',
    margin: '0 auto',
    border: '1px solid black',
    borderRadius: '5px',
    MozBoxShadow: '1px 1px 1px 1px black',
    WebkitBoxShadow: '1px 1px 1px 1px black',
    boxShadow: '1px 1px 1px 1px black'
}

const MainHolder = (props) => {
    return (
        <div style={holderStyle}>{props.content}</div>
    )
}

export default MainHolder
