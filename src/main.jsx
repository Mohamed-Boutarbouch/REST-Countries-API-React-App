import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './app/store';
import { fetchCountries } from './features/countriesSlice';
import ThemeWrapper from './components/UI/ThemeWrapper';
import Background from './components/UI/Background';

store.dispatch(fetchCountries());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <ThemeWrapper>
        <Background>
          <App />
        </Background>
      </ThemeWrapper>
    </Router>
  </Provider>,
);
