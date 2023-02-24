import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

/**
import App from './App';
import Library from './Chapter03/Library';
import Clock from './Chapter_Elements/Clock';
import CommentList from './Chapter_Components/CommentList';
import NotificationList from './Chapter_State/NotificationList';
import Accommodate from './Chapter_Hook/Accommodate';
import ClassConfirmButton from './Chapter_Events/ConfirmButton_Class';
import ConfirmButton from './Chapter_Events/ConfirmButton';
import LandingPage from './Chapter_CondRendering/LandingPage';
import AttendanceBook from './Chapter_List_and_Key/AttendanceBook';
import SignUp from './Chapter_Forms/SignUp';
import Calculator from './Chapter_SharedState/Calculator';
import ProfileCard from './Chapter_Composition/ProfileCard';
*/

import DarkOrNight from './Chapter_Context/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkOrNight />
  </React.StrictMode>
);

/**
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);
**/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
