import React from 'react';

import Dashboard from './Dashboard';



class Display extends React.Component {
    constructor() {
        super();
        this.state = {
            balls: 0,
            strikes: 0 
        }
    }

    ballSubmit = event => {
        event.preventDefault();
        
           if(this.state.balls < 3) {
            this.setState({ balls: this.state.balls + 1 })
           }
           else {
               this.setState({ balls: 0 })
           }
    
    }

    strikeSubmit = event => {
        event.preventDefault();

        if(this.state.strikes < 2) {
            this.setState({ strikes: this.state.strikes + 1 })
           }
           else {
               this.setState({ strikes: 0 })
           }
    }

    foulSubmit = event => {
        event.preventDefault();

        if(this.state.strikes < 2) {
            this.setState({ strikes: this.state.strikes + 1 })
           }
           else {
               this.setState({ strikes: 2 })
           }
    }

    hitSubmit = event => {
        event.preventDefault();

        this.setState({ 
            strikes: 0,
            balls: 0
         })
    }

    render() {
        return (
            <div>
                
                <div>
                   <h2>Balls: {this.state.balls}</h2> 
                </div>
                <div>
                <h2>Strikes: {this.state.strikes}</h2> 
                </div>        
                <Dashboard 
                    ballSubmit={this.ballSubmit}
                    strikeSubmit={this.strikeSubmit}
                    foulSubmit={this.foulSubmit}
                    hitSubmit={this.hitSubmit}
                />

            </div>    
        )
    }    
       
}

export default Display;