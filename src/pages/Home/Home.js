import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { FaEgg } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.jpg";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";
import depotImg from "../../assets/Depot.png";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
        <img
            src={depotImg}  // Use the imported image
            alt="Depot Logo"  // Add alt text for accessibility
            style={{ width: "65px", height: "65px", cursor: "pointer" }}  
             // Add your onClick event handler
          />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Try It?</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="" text="" />
            <NumberText num="" text="" />
            <NumberText num="" text="" />
          </div>
        </div>

        <div className="hero-image">
        <img
    src={heroImg}
    alt="Inventory"
    style={{ width: "500px", height: "auto" }} // Set a smaller width
  />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
