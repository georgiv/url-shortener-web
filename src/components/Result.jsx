import React from 'react'

import ClearButton from './ClearButton'
import MainHolder from './MainHolder'
import Message from './Message'

class Result extends React.Component {
    render() {
        const content = 
            <React.Fragment>
                <Message msg={this.props.msg} />
                <ClearButton />
            </React.Fragment>

        return (
            <MainHolder content={content} />
        )
    }
}

export default Result
