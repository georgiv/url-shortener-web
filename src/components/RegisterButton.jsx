import EnhancedButton from './EnhancedButton'

class RegisterButton extends EnhancedButton {
    state = {
        label: 'REGISTER'
    }

    onClick = () => {
        this.toggleDisabled()
        this.props.onClick()
    }

    render() {
        return (
            super.render()
        )
    }
}

export default RegisterButton
