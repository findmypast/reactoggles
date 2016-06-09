/* global jest describe it expect */

jest.unmock('../src/reactoggles');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { ToggleOn } from '../src/reactoggles';

class TestComponent extends React.Component {
  static propTypes = { text: React.PropTypes.string };
  render() {
    return(
      <div>
        {this.props.text}
      </div>
    );
  }
}

describe('toggleOn', () => {
  it('renders with proper props if the toggle is true', () => {
    const EXPECTED_TEXT = 'test text';

    const toggle = () => true;
    const WrappedComponent = ToggleOn(TestComponent, toggle);
    const componentInDoc = TestUtils.renderIntoDocument(
      <WrappedComponent text={EXPECTED_TEXT} />
    );
    const componentNode = ReactDOM.findDOMNode(componentInDoc);

    expect(componentNode.textContent).toEqual(EXPECTED_TEXT);
  });
  it('does not render if toggle is false', () => {
    const toggle = () => false;
    const WrappedComponent = ToggleOn(TestComponent, toggle);
    const componentInDoc = TestUtils.renderIntoDocument(
      <WrappedComponent text={'not shown'} />
    );
    const componentNode = ReactDOM.findDOMNode(componentInDoc);

    expect(componentNode).toEqual(null);
  });
});
