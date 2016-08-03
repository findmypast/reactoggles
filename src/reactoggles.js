import React, { Component } from 'react';
import getDisplayName from 'react-display-name';

const ToggleOn = (ToggledComponent, toggle) => class extends Component {
  static displayName = `ToggleOn(${getDisplayName(ToggledComponent)})`;
  constructor() {
    super();
    this.state = { toggle: false };
  }
  componentWillMount() {
    return toggle()
      .then(state => {
        this.setState({ toggle: state })
      });
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
    return toggle()
      .then(state => {
        this.setState({ toggle: state })
      });
  }
  render() {
    if (this.state.toggle) return <ComponentA {...this.props} />;
    return <ComponentB {...this.props} />;
  }
}

export { ToggleOn, ToggleAB }
