import { Component } from "react";
import featureTest from "@thisguychris/css-feature-test";

const stickySupported = featureTest("position", "sticky");

class Sticky extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ position: this.state.position, top: this.props.top }}>
        {this.props.children}
      </div>
    );
  }
}

Sticky.defaultProps = {
  top: 1
};

export default Sticky;
