import React, { FunctionComponent } from "react";
import { NavigationLinkContainer, NavigationMenuLink } from "./LayoutStyles";

interface LinkButtonProps {
  text: string;
  link: string;
}
export const LinkButton: FunctionComponent<LinkButtonProps> = ({
  text = "",
  link = "",
}) => (
  <NavigationLinkContainer>
    <NavigationMenuLink to={`${link}`} exact activeStyle={{ color: "#0033ff" }}>
      {text}
    </NavigationMenuLink>
  </NavigationLinkContainer>
);
