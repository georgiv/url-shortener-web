import React from 'react'

const holderStyle = {
    margin: '5%'
}

const labelStyle = {
    display: 'block',
}

const inputStyle = {
    width: '100%'
}

class EnhancedInput extends React.Component {
    setInput = (e) => {
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <div style={holderStyle}>
                    <label style={labelStyle} >{this.props.label}</label>
                    <input type='text' 
                           placeholder={this.props.placeholder} 
                           onChange={this.setInput} 
                           style={inputStyle} />
                </div>
            </React.Fragment>
        )
    }
}

export default EnhancedInput
