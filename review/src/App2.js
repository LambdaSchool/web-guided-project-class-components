import React from 'react'

class Person extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <h3>This is the alias for {this.props.name}</h3>
            </div>
        )
    }
}

class App2 extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Ironman'
        }
    }

    handleClick = () => {
        this.setState({name: 'TOny'})
    }

    render() {

        return (
            <div>
                <Person name={this.state.name} />
                <button onClick={this.handleClick} >Change to Tony</button>
            </div>
        )
    }
}

export default App2