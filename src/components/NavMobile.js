import React from "react";
//Nav Data
import { navigationData } from "../data";
const NavMobile = ({ setNavMobile, navMobile }) => {
  return (
    <ul className="flex flex-col px-6 py-8 gap-y-4">
      {navigationData.map((item, index) => {
        return (
          <li key={index}>
            <a
              className="text-white"
              onClick={() => setNavMobile(!navMobile)}
              href={item.href}
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMobile;
