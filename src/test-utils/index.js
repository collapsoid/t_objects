import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {render as rtlRender} from '@testing-library/react';

import * as reducers from '../store/reducers';

function render(
  ui,
  {
    initialState,
    store = createStore(combineReducers({...reducers}), initialState),
    ...renderOptions
  } = {}) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

export * from '@testing-library/react';
export {render};