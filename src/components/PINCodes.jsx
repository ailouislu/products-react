import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/PINCodes.css";

export class PINCodes extends Component {
    state = {
        numbers: [],
        numberLength: 4,
        numberCounts: 100
    }

    getRandomNumbers = (numberLength, numberCounts) => {
        const numberMax = Math.pow(10, numberLength);;
        let outPut = [];

        let numbersSet = new Set();
        let count = 1;
        while (count <= numberCounts){
            let number = Math.floor(Math.random() * numberMax);
            if(!numbersSet.has(number) && number.toString().length === numberLength 
                && this.checkTwoConsecutiveNumbersNotBeSame(number)
                && this.checkThreeConsecutiveNumbersNotBeIncremental(number)){
                numbersSet.add(number);
                outPut.push(" ", count, ")", number, ",");
                count++;
            }
        }

        return outPut;
    }
    
    checkTwoConsecutiveNumbersNotBeSame = (number) => {
        const length = number.toString().length;
        if(length < 2) return true;

        const numberString = number.toString();
        for(let i = 1; i < length; i++) {
            if(numberString.substring(i-1, i) === numberString.substring(i, i+1)){
                return false;
            }
        }

        return true;
    }

    checkThreeConsecutiveNumbersNotBeIncremental = (number) => {
        const length = number.toString().length;
        if(length < 3) return true;

        const numberString = number.toString();
        for(let i = 1; i < length - 1; i++) {
            if((Number(numberString.substring(i - 1, i)) + 1) 
                === Number(numberString.substring(i, i + 1))
                && Number(numberString.substring(i, i + 1)) 
                === (Number(numberString.substring(i + 1, i + 2)) - 1)){

                return false;
            }
        }

        return true;
    }
  
    handleClick = () => {
        const numberLength = this.state.numberLength;
        const numberCounts = this.state.numberCounts;
        const numbersList = this.getRandomNumbers(numberLength, numberCounts);
        
        this.setState({
            numbers: numbersList
        });
    }

    handleNumberCountsChange = (event)=>{
        let value = Number(event.target.value);
        if(isNaN(value)) 
            value = 100;
        else if(value <= 0)
            value = 1;
        else if(value > 500)
            value = 500;

        this.setState({
            numberCounts: value
        })
    }

    handleNumberLengthChange = (event)=>{
        let value = Number(event.target.value);
        if(isNaN(value)) 
            value = 4;
        else if(value < 3)
            value = 3;
        else if(value > 10)
            value = 10;

        this.setState({
            numberLength: value
        })
    }

    render() {
        return (
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb numbers-breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">PIN Codes</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-12 numbers-title">
                        <h2>Please click the button to generate random PIN Codes</h2>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="numberLengthInput" className="form-label numbers-label">Length of the PIN Codes (3-10):</label>
                        <input type="text" name="numberLength" aria-label="numberLength" className="numbers-input" value={this.state.numberLength} id="numberLengthInput" onChange={this.handleNumberLengthChange}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="numberCountsInput" className="form-label numbers-label">Quantity generated (1-500): </label>
                        <input type="text" name="numberCounts" aria-label="numberCounts" className="numbers-input" value={this.state.numberCounts} id="numberCountsInput" onChange={this.handleNumberCountsChange}/>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary numbers-button" onClick={this.handleClick}>Generate</button>
                    </div>
                    <div className="col-12 numbers">
                        <h3>{this.state.numbers}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default PINCodes;