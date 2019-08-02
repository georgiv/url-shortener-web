import React from 'react'

import Frame from './Frame'

class RedirectWrapper extends React.Component {
    render() {
        return (
            <Frame match={this.props.match} content={'redirect'} />
        )
    }
}

export default RedirectWrapper
