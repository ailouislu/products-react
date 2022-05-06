import { Component } from 'react';

export default class Counter extends Component {
    state = {
        counter: 42
    }
  
    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <>
                <div>
                    <h2>
                      <span className="counter">{this.state.counter}</span>
                    </h2>
                </div>
                <button className="counter-button" onClick={this.handleClick}>Click</button>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                    .counter {
                      color: #006400;
                    }
                `}</style>
            </>
        );
    }
}

/****
 * Build a counter which increments on the click of a button 
 * using React 16. The component should be the default export 
 * (use export default).Requirements:1. Create a counterVrap 
 * the current counter value in a h2 element.Add "counter" 
 * class to the h2 element.Initial value of counter is set to 42.2. 
 * Create a button elementThe content of the button should be 
 * "Click".It should have a "counter-button" class.3. Users can 
 * increment the counterncrement the counter by 1 when user 
 * clicks the buttonAssessment:Only two imports are allowed: 
 * react (v16.8.6) and classnames (v2.2.5). Both are at the 
 * top of the starting code.Use the animation below as a reference 
 * for your solutionPreview" tab will display your component. 
 * You can use it for testing purposes.esign/ styling is not 
 * assessed and will not affect the score. You should focus 
 * only on implementing the requirements.
 */