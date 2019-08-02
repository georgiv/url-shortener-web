import EnhancedButton from './EnhancedButton'

class ClearButton extends EnhancedButton {
    state = {
        label: 'CLEAR',
        clear: false
    }

    onClick = () => {
        this.setState({ clear: !this.state.clear })
    }

    render() {
        if (this.state.clear) {
            window.location.href = '/'
        }

        return (
            super.render()
        )
    }
}

export default ClearButton
