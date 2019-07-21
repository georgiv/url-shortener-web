import React from 'react'
import EnhancedInput from './EnhancedInput';
import MainHolder from './MainHolder';
import RegisterButton from './RegisterButton';

const headerStyle = {
    margin: '5%',
    textAlign: 'center'
}

class Request extends React.Component {
    state = {
        url: '',
        alias: ''
    }

    setURL = (v) => {
        this.setState({ url: v })
    }

    setAlias = (v) => {
        this.setState({ alias: v })
    }

    liftUpResponse = () => {
        this.props.onResponse(this.post())
    }

    post = () => {
        return fetch('http://localhost:8888/api/urls', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: this.state.alias, url: this.state.url})
        }).then(response => { return response }).catch(err => { return err })
    }

    render() {
        const content = 
            <React.Fragment>
                <h3 style={headerStyle}>Register long URL</h3>
                <EnhancedInput label={'URL'} placeholder='Enter long URL' onChange={this.setURL} />
                <EnhancedInput label={'Optional custom alias'} placeholder='Example: cranki' onChange={this.setAlias} />
                <RegisterButton onClick={this.liftUpResponse} />
            </React.Fragment>

        return (
            <MainHolder content={content} />
        )
    }
}

export default Request
