import React from 'react'

import Result from './Result'

class Redirect extends React.Component {
    state = {
        status: -1,
        msg: null
    }

    componentDidMount() {
        const id = this.props.match.params.id

        fetch(`http://localhost:8888/api/urls/${id}`, { redirect: 'manual' }).then(response => {
            if (response.type === 'opaqueredirect') {
                window.location.replace(`http://localhost:8888/api/urls/${id}`)
            } else {
                this.setState({ status: response.status })

                switch(this.state.status) {
                    case 404: 
                        response.json().then(body => { this.setState({ msg: body.error }) })
                        break
                    case 500:
                        this.setState({ msg: 'Server error, please try again later' })
                        break
                    default:
                        this.setState({ msg: `Unknown response status: ${this.state.status}` })
                        break
                }
            }
        }).catch(err => {
            console.log(err)
            this.setState({ status: 500 })
            this.setState({ msg: 'Server error, please try again later' })
        })
    }

    render() {
        if (this.state.status === -1) {
            return null
        }
        
        return (
            <Result msg={this.state.msg}
                    button={'CLEAR'} />
        )
    }
}

export default Redirect
