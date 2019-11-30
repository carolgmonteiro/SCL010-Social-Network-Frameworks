import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";

//lee la data
const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends PureComponent {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>TestComponent</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
