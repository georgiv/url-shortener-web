import React from 'react'

import Result from './Result'

class Response extends React.Component {
    state = {
        status: -1,
        msg: null
    }

    componentDidMount() {
        this.props.response.then(data => {
            if (data instanceof Error) {
                console.log(data)
                this.setState({ status: 500 })
                this.setState({ msg: 'Server error, please try again later' })
                return
            }

            this.setState({ status: data.status })

            switch (this.state.status) {
                case 201:
                    this.setState({ msg: `http://localhost:3000${data.headers.get('Location')}` })
                    break
                case 400:
                    data.json().then(body => { this.setState({ msg: body.error }) })
                    break
                case 409:
                    data.json().then(body => { this.setState({ msg: body.error }) })
                    break
                case 500:
                    this.setState({ msg: 'Server error, please try again later' })
                    break
                default:
                    this.setState({ msg: `Unknown response status: ${this.state.status}` })
                    break
            }
        })
    }

    render() {
        if (this.state.status === -1) {
            return null
        }

        const content = this.state.status === 201 ? <React.Fragment>You can access your resource at <a href={this.state.msg}>{this.state.msg}</a></React.Fragment> 
                                                  : <React.Fragment>{this.state.msg}</React.Fragment>

        return (
            <Result msg={content}
                    button={'CLEAR'} />
        )
    }   
}

export default Response
