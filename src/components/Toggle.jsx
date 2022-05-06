import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({buttonState: !this.state.buttonState});
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.buttonState?'ON':'OFF'}</button>
    );
  }
}
ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );
export default Toggle;
