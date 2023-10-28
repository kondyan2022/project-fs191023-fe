import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import ExerciseCard from './components/Exersize-card/ExerciseCard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-fs191023-fe">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ExerciseCard time={3} name="aboba" target="aboba" calories={150} />
          {/* <App /> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
