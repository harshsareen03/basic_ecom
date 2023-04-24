import React from "react";
import si from "../southindian";
const Southindian = () => {
  return (
    <>
      {si.map((sis) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img src={sis.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{sis.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>

            <div>
              <p>size : </p>
              <select>
                <option></option>
              </select>
            </div>
            <div>
              <p>quantity : </p>
              <select>
                <option></option>
              </select>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Southindian;
