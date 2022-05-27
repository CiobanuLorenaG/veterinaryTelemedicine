import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import firebase from 'firebase'
import { initializeApp } from 'firebase/app'
import { Provider } from 'react-redux'
import store from './components/pages/Chat/store/store'


const firebaseConfig = {
  apiKey: 'AIzaSyA96nOrQMWBnXf4mZ-JmVBWLu_3r7AMcgc',
  authDomain: 'petcareapp-5db97.firebaseapp.com',
  databaseURL: 'https://petcareapp-5db97.firebaseio.com',
  projectId: 'petcareapp-5db97',
  storageBucket: 'petcareapp-5db97.appspot.com',
  messagingSenderId: '874317732277',
  appId: '1:874317732277:web:b94c923f50ba455a7261fc',
}
firebase.initializeApp(firebaseConfig)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
