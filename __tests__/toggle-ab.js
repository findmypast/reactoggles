/* global jest describe it expect */

jest.unmock('../src/reactoggles');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { ToggleAB } from '../src/reactoggles';

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
    const toggle = () => new Promise((resolve) => {
        resolve(true);
    });

    // Using setTimeout gives the promise a chance to resolve
    // and avoids race conditions.
    setTimeout(() => {
      const WrappedComponent = ToggleAB(TestComponentA, TestComponentB, toggle);
      const componentInDoc = TestUtils.renderIntoDocument(
        <WrappedComponent />
      );
      const componentNode = ReactDOM.findDOMNode(componentInDoc);

      expect(componentNode.textContent).toEqual('ComponentA');
    }, 50);
  });
  it('renders component B if the toggle is false', () => {
    const toggle = () => new Promise((resolve) => {
        resolve(false);
    });

    setTimeout(() => {
      const WrappedComponent = ToggleAB(TestComponentA, TestComponentB, toggle);
      const componentInDoc = TestUtils.renderIntoDocument(
        <WrappedComponent />
      );
      const componentNode = ReactDOM.findDOMNode(componentInDoc);

      expect(componentNode.textContent).toEqual('ComponentB');
    }, 50);
  });
});
