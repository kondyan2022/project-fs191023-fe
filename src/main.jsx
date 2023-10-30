import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import './index.css';
import { persistor, store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-fs191023-fe">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <ExpirationControl> */}
          <App />
          {/* </ExpirationControl> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
    ,
  </React.StrictMode>,
);
