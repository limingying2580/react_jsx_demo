import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import AppRouter from "./AppRouter";


ReactDOM.render(
  <React.StrictMode>
   {/* <App />*/}
   {/*<App1/>*/}
   {/*<App2/>*/}
   {/*<App3/>*/}
   {/*<App4/>*/}
   <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
)

