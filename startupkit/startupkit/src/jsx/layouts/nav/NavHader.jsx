import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import logo from "../../../assets/images/logo.png";
import styled from "styled-components";

const BrandText = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: #2c2828;
  letter-spacing: 0.5px;
  
  /* Optional: Add a hover effect for a brand feel */
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export function NavMenuToggle() {
    setTimeout(() => {
        let mainwrapper = document.querySelector("#main-wrapper");
        if (mainwrapper.classList.contains('menu-toggle')) {
            mainwrapper.classList.remove("menu-toggle");
        } else {
            mainwrapper.classList.add("menu-toggle");
        }
    }, 200);
}

const NavHader = () => {
    const [toggle, setToggle] = useState(false);
    const { openMenuToggle } = useContext(ThemeContext);
    return (

        <div className="nav-header">
            <Link to="/dashboard" className="brand-logo">
                <img src={logo} alt="Educareer Logo" className="logo-abbr" style={{ width: 40, height: 40 }} />
                <div className="brand-title">
                    {/*</div><span className="brand-text" style={{ font-family: 'Inter', sans-serif;fontSize: 18, fontWeight: 700, color: 'black', letterSpacing: 0.5 }}>Educareer</span>*/}
                    <BrandText>Educareer</BrandText>
                </div>
            </Link>

            <div className="nav-control"
                onClick={() => {
                    setToggle(!toggle);
                    openMenuToggle();
                    NavMenuToggle()
                }}
            >
                <div className={`hamburger ${toggle ? "is-active" : ""}`}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </div>
    );
};

export default NavHader;
