import React from 'react'

import Logo from './Logo'
import Redirect from './Redirect'
import Register from './Register'

const containerStyle = {
    paddingTop: '10%',
    height: '100vh',
    backgroundColor: 'paleturquoise'
}

class Frame extends React.Component {
    render() {
        let content

        switch(this.props.content) {
            case 'redirect':
                content = <Redirect match={this.props.match} />
                break
            case 'register':
                content = <Register />
                break
            default:
                break
        }

        return(
            <React.Fragment>
                <Logo />
                <div style={containerStyle}>
                    {content}
                </div>
            </React.Fragment>
        )
    }
}

export default Frame
