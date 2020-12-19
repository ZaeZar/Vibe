import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import AppScreen from './screens/appscreen'

ReactDOM.render(
  <React.StrictMode>
    {/*react router and stuff will go here, for now, just the mainscreen goes here*/}
    <AppScreen></AppScreen>
  </React.StrictMode>,
  document.getElementById('root')
)
