import React from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

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
      <>
      <div>
          <Breadcrumb>
              <Breadcrumb.Item>Online Tests</Breadcrumb.Item>
              <Breadcrumb.Item active>Toggle</Breadcrumb.Item>
          </Breadcrumb>
      </div>
      <button onClick={this.handleClick}>{this.state.buttonState?'ON':'OFF'}</button>
      </>
    );
  }
}
ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );
export default Toggle;
