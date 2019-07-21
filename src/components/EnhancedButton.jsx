import React from 'react'

const holderStyle = {
    textAlign: 'center'
}

const buttonStyle = {
    margin: '5%',
    width: '50%',
    color: 'white',
    backgroundColor: 'black',
    border: '1px solid black',
    borderRadius: '5px'
}

class EnhancedButton extends React.Component {
    state = {
        hover: false,
        disabled: false
    }

    toggleHover = () => {
        this.setState({ hover: !this.state.hover })
    }

    toggleDisabled = () => {
        this.setState({ disabled: !this.state.disabled })
    }

    render() {
        let buttonEnhancedStyle = this.state.hover ? { border: '1px solid snow' } : { border: '1px solid black' }
        buttonEnhancedStyle = this.state.disabled ? { border: '1px solid black', backgroundColor: 'grey' } : buttonEnhancedStyle

        return (
            <div style={holderStyle}>
                <button type='button'
                        style={{ ...buttonStyle, ...buttonEnhancedStyle }}
                        onClick={this.onClick}
                        onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}
                        disabled={this.state.disabled}>{this.state.label}</button>
            </div>
        )
    }
}

export default EnhancedButton
