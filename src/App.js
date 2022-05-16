import React from "react";
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state={advice:''};

    componentDidMount() {
        this.fetchAdvice();
    }
    
    fetchAdvice =()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;
            this.setState({advice})
        })
        .catch((error) =>{
            console.log(error)
        })
    }


    render(){
        const {advice} = this.state
        return (
            <>
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME A CAPTION</span>
                    </button>
                </div>
            </div>
            <footer>Copyright 2022 by JP</footer>
            </>
        )
    }
}

export default App;
