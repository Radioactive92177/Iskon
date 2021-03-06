import React, { Component } from "react";
import "./Rec.css";
import tkg from "../Images/tkg.png";
import Book from "../Images/Book.jpeg";

// import Product from "./product.js";

class Contacts extends Component {
  render() {
    return (
      <div>
        <div id="Rec">
          <h1>Hey! I'm ML, I reccomend you...</h1>

          <div id="Book">
            <img src={Book} alt="Avatar" width="150" height="150" />
            <h4>
              Rich Dad Poor Dad is Robert's story of growing
              <br /> up with two dads — his real father and the father <br />
              of his best friend, his rich dad — <br />
              and the ways in which both men shaped
              <br /> his thoughts about money and investing.{" "}
            </h4>
            <div className="row">
              <button id="amazon">
                <a href="false" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://www.niftybuttons.com/amazon/amazon-button2.png"
                    alt=""
                  />
                </a>
              </button>
            </div>
          </div>

          <div id="Book">
            <img src={tkg} alt="Avatar" width="150" height="150" />
            <h6>Contact Number: 8932389823</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;