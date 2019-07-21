import React from 'react';

const containerStyle = {
    padding: '3%',
    width: '50',
    backgroundColor: 'black'
  }
  
  const headerStyle = {
    textAlign: 'center',
    fontSize: '24px',
    color: 'white'
  }
  
  const Logo = () => {
    return (
      <div style={containerStyle}>
        <h1 style={headerStyle}>URL shortener</h1>
      </div>
    )
  }
  
  export default Logo