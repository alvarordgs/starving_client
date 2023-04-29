import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global'
import App from './App';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path="/*" element={<App/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
