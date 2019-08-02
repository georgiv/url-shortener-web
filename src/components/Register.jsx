import React, { Component } from 'react'

import Request from './Request'
import Response from './Response'

class Register extends Component {
    state = {
        response: null
    }

    setResponse = (v) => {
        this.setState({ response: v })
    }

    render() {
        const content = this.state.response == null ? <Request onResponse={this.setResponse} /> 
                                                    : <Response response={this.state.response} />
        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        )
    }
}

export default Register
