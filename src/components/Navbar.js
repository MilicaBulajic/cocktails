import React from 'react';
import logo from "../logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <div className="logo">
        <Link to={`/`}>
          <h1>Cocktails</h1>
          </Link>
      </div>
    );
  }
  