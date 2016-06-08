import { Component } from "React";

const ToggleOn = (ToggledComponent, toggle) => class extends Component {
  constructor() {
    this.state = { toggle: false };
  }
  componentDidMount() {
    this.setState({ toggle: toggle() });
  }
  render() {
    if (this.state.toggle) return <ToggledComponent {...this.props} />;
    return null;
  }
};

const ToggleAB = (ComponentA, ComponentB, toggle) => class extends Component {
  constructor() {
    this.state = { toggle: false };
  }
  componentDidMount() {
    this.setState({ toggle: toggle() });
  }
  render() {
    if (this.state.toggle) return <ComponentA {...this.props} />;
    return <ComponentB {...this.props} />;
  }
}

export { ToggleOn, ToggleAB }
