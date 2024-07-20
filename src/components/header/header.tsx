"use client";
import React from "react";

export default function Header(){
    return (  
      <React.Fragment>
        <header>
          <nav className="navbar">
            <ul className="nav-links">
              <li><a href="http://localhost:3000/">Home</a></li>
              <li><a href="#row">Contact</a></li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
}