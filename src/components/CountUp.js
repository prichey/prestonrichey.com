import React from 'react';

class CountUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState, props) => {
        return {
          counter: prevState.counter + 1
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return <h3>Seconds since component was mounted: {this.state.counter}.</h3>;
  }
}

export default CountUp;
