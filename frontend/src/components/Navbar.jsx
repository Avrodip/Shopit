// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // If you want to use routing
import styled from "styled-components";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ff735c;
  opacity: 0.9;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Links = styled.ul`
  display: flex;
  gap: 32px;
  text-decoration: none;
`;

const ToggleButton = styled.div`
  color: #ff6600;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ActionButton = styled.a`
  display: flex;
  background-color: #e1e1e1;
  color: #000;
  padding: 0.5 1rem;
  outline: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  opacity: 1;
  margin-right: 1.5rem;
  height: 30px;
  align-items: center;
  justify-items: center;
  width: 120px;
  text-decoration: none;
`;

// Other components can be similarly created

function Navbar(loggedIn) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <NavbarContainer>
        <Logo>
          <Link to="/">
            <img
              src="https://raw.githubusercontent.com/gar-git/images/main/white_logo-removebg-preview.png"
              className="lo"
              width="60px"
              height="60px"
              alt="Logo"
            />
          </Link>
        </Logo>
        <Links>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </Links>
        <ActionButton
          href="#"
          className="action_btn"
          onClick={handleButtonClick}
        >
          <span className="gs">Log in</span>
        </ActionButton>

        <ToggleButton>
          <i className="fa-solid fa-bars"></i>
        </ToggleButton>
      </NavbarContainer>

      {loggedIn ? null : ( // If the user is logged in, do not render the buttons
        // If the user is not logged in, render the buttons
        <>
          <ActionButton href="#" className="action_btn">
            <span className="gs">Log in</span>
          </ActionButton>
          <ActionButton href="#" className="action_btn">
            <span className="gs">Create Account</span>
          </ActionButton>
        </>
      )}
    </div>
  );
}

export default Navbar;
