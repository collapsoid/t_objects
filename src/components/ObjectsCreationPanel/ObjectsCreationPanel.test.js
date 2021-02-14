import React from 'react';
import {fireEvent, render} from '../../test-utils';

import ObjectsCreationPanel from './ObjectsCreationPanel';

describe('ObjectsCreationPanel', () => {
  const initialState = {
    currentTargetObjects: {
      template: []
    }
  };

  test('should render creation panel', () => {
    const {asFragment} = render(<ObjectsCreationPanel />, {initialState});
    const component = asFragment();
    
    expect(component).toMatchSnapshot();
  });

  test('should render an invalid field value error', () => {
    const {getByText} = render(<ObjectsCreationPanel />, {initialState});

    fireEvent.click(getByText(/создать группу объектов/i));

    expect(getByText(/введите/i)).toBeTruthy();
  });

  test('should reset the editor state after successful validation', () => {
    const setEditorStateMock = jest.fn();
    const {getByPlaceholderText, getByText} = render(
      <ObjectsCreationPanel setEditorState={setEditorStateMock} />,
      {initialState}
    );

    fireEvent.change(getByPlaceholderText(/название объекта/i), {target: {value: 'test value'}});
    fireEvent.click(getByText(/создать группу объектов/i));

    expect(setEditorStateMock).toBeCalledWith(null);
  });
});