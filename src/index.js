import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Landing from "./components/landing";
import Home from "./components/home";
import Organization from "./components/organization";
import Results from "./components/results";
import ResumeUpload from "./components/resumeupload";
import Settings from "./components/settings";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="organization" element={<Organization />} />
          <Route path="results" element={<Results />} />
          <Route path="resumeupload" element={<ResumeUpload />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
