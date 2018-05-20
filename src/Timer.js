import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state= {
            clock: 0
        };
        this.ticker = this.ticker.bind(this)
    }

    // Life Cycle to refresh time
    componentDidMount() {
        setInterval(this.ticker, 1000);
    }

    // Calculate the timer: 
    // new Date() : shows current date/time
    // Date.now() : milliseconds count from 1 Jan 1970
    ticker() {
        this.setState( { clock: new Date() - this.props.start } )
    }

    render() {
        let newClock = Math.round(this.state.clock / 1000)
        return (
            <div>
                <p>You have been on this website since:</p> <br/>
                <span> { newClock } </span><br/>
                <p>seconds.</p>
            </div>
        )
    }
}

export default Timer;