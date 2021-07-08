import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

export default () => {
  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>6 items</span>
            </div>
            <div className="col-6 menu-summary-right">
              6x <span className="dietary">ve</span>
              4x <span className="dietary">v</span>
              12x <span className="dietary">n!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <Sidebar />
          <div className="col-8">
            <h2>Menu preview</h2>
            <ul className="menu-preview">
              <li className="item">
                <h2>Dummy item</h2>
                <p>
                  <span className="dietary">ve</span>
                  <span className="dietary">v</span>
                  <span className="dietary">n!</span>
                </p>
                <button className="remove-item">x</button>
              </li>
              <li className="item">
                <h2>Dummy item</h2>
                <p>
                  <span className="dietary">ve</span>
                  <span className="dietary">v</span>
                  <span className="dietary">n!</span>
                </p>
                <button className="remove-item">x</button>
              </li>
              <li className="item">
                <h2>Dummy item</h2>
                <p>
                  <span className="dietary">ve</span>
                  <span className="dietary">v</span>
                  <span className="dietary">n!</span>
                </p>
                <button className="remove-item">x</button>
              </li>
              <li className="item">
                <h2>Dummy item</h2>
                <p>
                  <span className="dietary">ve</span>
                  <span className="dietary">v</span>
                  <span className="dietary">n!</span>
                </p>
                <button className="remove-item">x</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
