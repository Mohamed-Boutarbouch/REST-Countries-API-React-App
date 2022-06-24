import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import store, { persistor } from './app/store';
import { fetchCountries } from './features/countriesSlice';
import ThemeWrapper from './components/UI/ThemeWrapper';
import Background from './components/UI/Background';

store.dispatch(fetchCountries());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <ThemeWrapper>
        <Background>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Background>
      </ThemeWrapper>
    </Router>
  </Provider>,
);
