import { useState, useEffect, useRef } from "react";

import Dropdown from "./Dropdown1";

export const ListMenu = [
    {
        title: "Home",
        url: "#",
    },
    {
        title: "About",
        url: "#",
    },
    {
        title: "Shop Product",
        submenu: [
            {
                title: "Light",
                submenu: [
                    {
                        title: "Bubls",
                        url: "#",
                    },
                    {
                        title: "Ballasts",
                        url: "#",
                    },
                    {
                        title: "Reflector FLUORESCENT LIGHTS",
                        url: "#",
                    },
                    {
                        title: "LED GROW LIGHTS",
                        url: "#",
                    },
                    {
                        title: "TIMERS",
                        url: "#",
                    },
                    {
                        title: "CONTROLLERS GROW LIGHT PARTS",
                        url: "#",
                    },
                ],
            },
            {
                title: "Nutriens",
                submenu: [
                    {
                        title: "ORGANIC NUTRIENTS",
                        url: "#",
                    },
                    {
                        title: "SYNTHETIC NUTRIENTS",
                        url: "#",
                    },
                    {
                        title: "FOLIAR SPRAYS",
                        url: "#",
                    },
                    {
                        title: "FISH BASED",
                        url: "#",
                    },
                    {
                        title: "MYCORRHIZAE",
                        url: "#",
                    },
                    {
                        title: "ROOT STIMULATORS",
                        url: "#",
                    },
                ],
            },
            {
                title: "Propagation",
            },
            {
                title: "System",
            },
        ],
    },
    {
        title: "Contact",
        url: "#",
    },
    {
        title: "Articles ",
        url: "#",
    },
];

export const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return (
        <li
            className="nav-item menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className="arrow  "></span>
                            // ADD CLASS
                        )}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <a className="nav-link" href="/#">
                    {items.title}
                </a>
            )}
        </li>
    );
};

export default MenuItems;
