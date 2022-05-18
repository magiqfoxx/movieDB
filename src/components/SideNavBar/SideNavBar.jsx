import React, { useState } from "react";

import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import {
  SideNavBarCont,
  SideNavHeader,
  SideNavMainLink,
  SideNavSectionTitle,
  HeaderText,
  NavLink,
} from "./styled";

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  /* TODO: Write the necessary functions to open and close the sidebar */

  return (
    <SideNavBarCont className={isOpen ? "visible" : ""}>
      {/* TODO: Implement a hamburger icon that controls the open state of the sidebar. This control should only be visible on mobile devices via CSS media queries */}
      {/* The sidebar should slide in from left */}
      <SideNavHeader>
        Wesley
        <img src={Arrow} alt="Arrow pointing down" />
      </SideNavHeader>
      <SideNavMainLink to="/discover" exact>
        Discover
        <img src={SearchWhite} alt="Magnifying glass" />
      </SideNavMainLink>
      <SideNavSectionTitle>
        <HeaderText>Watched</HeaderText>
      </SideNavSectionTitle>
      <NavLink to="/watched/movies">Movies</NavLink>
      <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
      <SideNavSectionTitle>
        <HeaderText>Saved</HeaderText>
      </SideNavSectionTitle>
      <NavLink to="/saved/movies">Movies</NavLink>
      <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
    </SideNavBarCont>
  );
}
