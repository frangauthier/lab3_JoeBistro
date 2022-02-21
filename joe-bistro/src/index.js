import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Confirm from './views/Confirm';
import ConfirmationSuccess from './views/ConfirmationSuccess';
import Home from './views/Home';
import Menu from './views/Menu';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="confirm/success" element={<ConfirmationSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
