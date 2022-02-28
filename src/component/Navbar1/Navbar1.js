import React from "react";
import "./Navbar1.scss";
import { MenuItems, ListMenu } from "./MenuItems1";
// import logo from "../../img/logo.png";
// import { button1 } from "../Button/Button";

const Navbar = () => {
    return (
        <div className="header-inner">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="  ">
                        <img
                            className="img-fluid "
                            width="100"
                            height="24"
                            // src={logo}
                            alt=""
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end text-center"
                        id="navbarNav"
                    >
                        {/* {MenuItems.map((item, index) => {
                            return (
                                <ul className="navbar-nav align-items-center">
                                    <li key={index} className={item.cliName}>
                                        <a
                                            className={item.cName}
                                            href={item.url}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                </ul>
                            );
                        })} */}
                        <ul className="navbar-nav align-items-center ">
                            {ListMenu.map((menu, index) => {
                                const depthLevel = 0;
                                return (
                                    <MenuItems
                                        items={menu}
                                        key={index}
                                        depthLevel={depthLevel}
                                    />
                                );
                            })}
                        </ul>

                        <li className="nav-item header-button my-2 px-4">
                            <a className="" href=" ">
                                {/* {button1()} */}
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
