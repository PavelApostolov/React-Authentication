import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationLinkContainer = styled.div`
  font-size: 18px;
  display: inline-block;
  cursor: pointer;
  :hover {
    background: none;
  }
`;

export const NavigationMenuLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  padding: 0 20px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
`;

export const Wrapper = styled.div`
  margin-top: 200px;
  display: block;
  text-align: center;
`;
