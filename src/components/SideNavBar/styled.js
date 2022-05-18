import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";

export const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;
`;

export const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

export const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${(props) => props.theme.sideNavBarHover};
  }

  &.active {
    background: ${(props) => props.theme.primaryColor};
  }
`;

export const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

export const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`;

export const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.lightBackground};
`;

export const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${(props) => props.theme.sideNavBarHover};
  }

  &.active {
    background: ${(props) => props.theme.primaryColor};
    opacity: 1;
  }
`;
