import React from 'react';
import Helmet from 'react-helmet';

class Echo extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(Helmet);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Foo</title>
        </Helmet>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Echo;
