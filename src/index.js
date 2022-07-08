import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as ReduxProvider } from "react-redux";
import store from './store';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

// uncomment for costum boostrap css
import './static/css/heirloom_bootstrap_styles.css'; 

// template libs and css
// import "./template/static/js/vendor/choices.min.js"
// import "./template/static/js/vendor/mixitup.min.js"
// import "./template/static/js/vendor/dropzone/dropzone.min.js"
// import "./template/static/js/vendor/swiper-bundle.min.js"
// import "./template/static/js/vendor/countdown.js"
// import './template/css/custom.css';
// import './template/css/style.default.min.css'; 
import './template/js/theme';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import 'choices.js/public/assets/styles/choices.min.css';
import 'dropzone/dist/dropzone.css';
import 'swiper/bundle';
ReactDOM.render(
  <ThemeProvider
    breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  >
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

