import React from 'react';
import {fireEvent, render} from '../../test-utils';

import ObjectsPanel from './ObjectsPanel';

describe('ObjectsPanel', () => {
  test('should render the panel without editor', () => {
    const {asFragment} = render(<ObjectsPanel currentTargetObjects={null} />);
    const component = asFragment();

    expect(component).toMatchSnapshot();
  });

  describe('hide/unhide panel', () => {
    test('should render the hidden panel', () => {
      const {asFragment, getByText} = render(<ObjectsPanel currentTargetObjects={null} />);
  
      fireEvent.click(getByText(/свернуть/));
      const component = asFragment();
  
      expect(component).toMatchSnapshot();
    });
  
    test('should render the unhidden panel', () => {
      const {asFragment, getByText} = render(<ObjectsPanel currentTargetObjects={null} />);
  
      const firstRender = asFragment();
      fireEvent.click(getByText(/свернуть/));
      fireEvent.click(getByText(/развернуть/));
      const unhidden = asFragment();
  
      expect(unhidden).toEqual(firstRender);
    });
  });
});