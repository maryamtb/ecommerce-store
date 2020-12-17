import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HeaderContainer,
  Title,
  LogoContainer,
  SearchBar,
  // SearchImg,
  OptionsContainer,
  OptionLink,
} from "./header.styles";



const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Title>FAFA</Title>
    </LogoContainer>
    <SearchBar>
      {/* <SearchImg src="https://img.icons8.com/ios-glyphs/30/000000/search.png" />{" "} */}
      SEARCH _________________
    </SearchBar>
    {/* <input
      type="text"
      className="input"
      onChange={searchFilterOnChange}
      placeholder="Search..."
    /> */}
    
    <OptionsContainer>
      {currentUser ? (
        <>
          <OptionLink to="/profile">Hey, {currentUser.displayName}!</OptionLink>
          <OptionLink to="/shop">SHOP</OptionLink>

          <OptionLink as="div" onClick={() => auth.signOut()}>
            LOG OUT
          </OptionLink>
        </>
      ) : (
        <>
          <OptionLink to="/signin">LOG IN</OptionLink>
          <OptionLink to="/shop">SHOP</OptionLink>
        </>
      )}
      <OptionLink to="/help">HELP</OptionLink>
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
