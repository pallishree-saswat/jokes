import React, { Component } from "react";
import "./style/joke.css"

class Jokes extends Component {
    constructor(surprise){
        super(surprise);
        this.state={
            jokes:null,
            
        };
        this.componentDidMount =this.componentDidMount.bind(this)
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const jokes = await response.json();
            this.setState({jokes: jokes.value})
            console.log(jokes.value )
        } catch (err) {
            console.error(err.message);
        }
    }
    render() {
    return this.state.jokes === null ? <h1>loading</h1> :<h1 className="joke">{this.state.jokes}</h1>
      }
    }
    
export default Jokes;