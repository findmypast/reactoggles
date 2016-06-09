/* global jest describe it expect */

jest.unmock('../reactoggles');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { ToggleAB } from '../reactoggles';

class TestComponentA extends React.Component {
  render() {
    return(
      <div>
        ComponentA
      </div>
    );
  }
}

class TestComponentB extends React.Component {
  render() {
    return(
      <div>
        ComponentB
      </div>
    );
  }
}

describe('toggleOn', () => {
  it('renders component A if the toggle is true', () => {
    const toggle = () => true;
    const WrappedComponent = ToggleAB(TestComponentA, TestComponentB, toggle);
    const componentInDoc = TestUtils.renderIntoDocument(
      <WrappedComponent />
    );
    const componentNode = ReactDOM.findDOMNode(componentInDoc);

    expect(componentNode.textContent).toEqual('ComponentA');
  });
  it('renders component B if the toggle is false', () => {
    const toggle = () => false;
    const WrappedComponent = ToggleAB(TestComponentA, TestComponentB, toggle);
    const componentInDoc = TestUtils.renderIntoDocument(
      <WrappedComponent />
    );
    const componentNode = ReactDOM.findDOMNode(componentInDoc);

    expect(componentNode.textContent).toEqual('ComponentB');
  });
});
