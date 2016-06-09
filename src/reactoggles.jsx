import React, { Component } from 'React';
import getDisplayName from 'react-display-name';

const ToggleOn = (ToggledComponent, toggle) => class extends Component {
  static displayName = `ToggleOn(${getDisplayName(ToggledComponent)})`;
  constructor() {
    super();
    this.state = { toggle: false };
  }
  componentWillMount() {
    this.setState({ toggle: toggle() });
  }
  render() {
    if (this.state.toggle) return <ToggledComponent {...this.props} />;
    return null;
  }
};


const ToggleAB = (ComponentA, ComponentB, toggle) => class extends Component {
  static displayName = `ToggleAB(${getDisplayName(ComponentA)},${getDisplayName(ComponentB)})`;
  constructor() {
    super();
    this.state = { toggle: false };
  }
  componentWillMount() {
    this.setState({ toggle: toggle() });
  }
  render() {
    if (this.state.toggle) return <ComponentA {...this.props} />;
    return <ComponentB {...this.props} />;
  }
}

export { ToggleOn, ToggleAB }
