import React from 'react';
import { Provider } from 'react-redux';


import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';





export const JournalApp = () => {

  return (
    //en el provider se encuentra la informacion la cuale stara en mi store
    <Provider store={store}>
      <AppRouter />
      </Provider>
    


  )
}
