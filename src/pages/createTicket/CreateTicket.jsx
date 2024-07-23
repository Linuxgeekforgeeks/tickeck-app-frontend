import React, { useState } from "react";
import "./CreateTicket.css";
import { useNavigate } from "react-router-dom";

function CreateTicket() {
  const [costomerName, setcostomerName] = useState("");
  const [costomerEmail, setcostomerEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [product, setProduct] = useState("");

  console.log(costomerEmail,costomerName,desc,product)
  const navigate = useNavigate();
  return (
    <div className="create-ticket">
      <div>
        <button onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Back
        </button>
      </div>
      <div className="create-ticket-main">
        <header>
          <h1>Create New Ticket</h1>
          <p>Please fill out the form below</p>
        </header>
        <main>
          <div className="input-organizer">
            <label htmlFor="costomer-name">Customer Name</label>
            <input
              id="costomer-name"
              placeholder="ex.Brad"
              onChange={(e) => setcostomerName(e.target.value)}
            />
          </div>
          <div className="input-organizer">
            <label htmlFor="costomer-email">Customer Email</label>
            <input
              id="costomer-email"
              placeholder="ex.code@gmail.com"
              onChange={(e) => setcostomerEmail(e.target.value)}
            />
          </div>
          <div className="product-organizer">
            <label htmlFor="products">Products</label>

            <select onChange={(e)=>setProduct(e.target.value)}>
              <option>Iphone</option>
              <option>MacBook</option>
              <option>Android</option>
              <option>Laptop</option>
            </select>
          </div>
          <div className="input-organizer">
            <label htmlFor="desc">Description of the issue</label>
            <textarea onChange={(e) => setDesc(e.target.value)} placeholder="Description"></textarea>
          </div>
          <button>Submit</button>
        </main>
      </div>
    </div>
  );
}

export default CreateTicket;
