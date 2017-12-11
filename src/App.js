import React, { Component } from 'react'

import NewWord from './components/NewWord'
import Word from './components/Word'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            words: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/letters/k/words')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    words: data,
                })
            })
    }

    render() {
        return (
            <div className="App">
                <NewWord />
                {!this.state.words.length ? (
                    <div>Loading...</div>
                ) : (
                    this.state.words.map(word => (
                        <Word key={word.id} text={word.text} imageUrl={word.imageUrl} />
                    ))
                )}
            </div>
        )
    }
}

export default App
