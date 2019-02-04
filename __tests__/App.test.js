
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
// import { Provider } from "react-redux";
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import thunk from 'redux-thunk';


import { shallow, mount } from 'enzyme';

import configureStore from 'redux-mock-store'

// import gameReducer from '../src/store/ducks/game/reducer'

import App from '../src/App';

import Home from '../src/pages/Home/Home';
// import Game from '../src/pages/Game/Game';
// import Rank from '../src/pages/Rank/Rank';

// import NotFound from '../src/pages/NotFound/NotFound';


// export function setupIntegrationTest(reducers, initialRouterState = {}) {

//    const dispatchSpy = jest.fn(() => ({}));
//   const reducerSpy = (state, action) => dispatchSpy(action);
//   const emptyStore = applyMiddleware(thunk)(createStore);
//   const combinedReducers = combineReducers({
//     reducerSpy,
//     ...reducers,
//   });
//   const store = emptyStore(combinedReducers);

//   return { store, dispatchSpy };
// }

const mockStore = configureStore()
const store = mockStore([])

describe('Testing App Component...', () => {
  // let store;
  // let dispatchSpy;
  // let router;

  // beforeEach(() => {
  //   router = {
  //     params: { myParam: 'any-params-you-have' },
  //   };
  //   ({ store, dispatchSpy } = setupIntegrationTest({ game: gameReducer }, router));
  // });


  // it('should change the text on click', () => {
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   );

  //   expect(wrapper).toMatchSnapshot();

  // });


  // it('should render correctly', () => {
  //   const wrapper = shallow(<Home />, { context: { store } }).dive();
  //   expect(wrapper).toMatchSnapshot();
  // });

  it('should render correctly', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing Router...', () => {
  it('should path / redirects to Home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
    // expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  // it('should path /home redirects to Home', () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={['/home']}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   expect(wrapper.find(Home)).toHaveLength(1);
  //   expect(wrapper.find(NotFound)).toHaveLength(0);
  // });

  // it('should path /game redirects to Game', () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={['/game']}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   expect(wrapper.find(Game)).toHaveLength(1);
  //   expect(wrapper.find(NotFound)).toHaveLength(0);
  // });

  // it('should path /rank redirects to Rank', () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={['/rank']}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   expect(wrapper.find(Rank)).toHaveLength(1);
  //   expect(wrapper.find(NotFound)).toHaveLength(0);
  // });

  // it('should invalid path redirects to 404', () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={['/random']}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   expect(wrapper.find(Home)).toHaveLength(0);
  //   expect(wrapper.find(Game)).toHaveLength(0);
  //   expect(wrapper.find(Rank)).toHaveLength(0);

  //   expect(wrapper.find(NotFound)).toHaveLength(1);
  // });
});
