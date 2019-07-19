import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.scss'

class EmptyClass extends React.Component {
    render() {
        return (
            <div>
                <h1>Empty</h1>
            </div>
        )
    }
}

ReactDOM.render( <EmptyClass />, document.getElementById('app'))
console.log('App is running')