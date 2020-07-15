import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { withStyles } from '@material-ui/core/styles';

import FlexGroup from './containers/FlexGroup'

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, red 30%, red 90%)',
    color: 'white',
  },
  label: {
    textTransform: 'capitalize',
  },
})(ToggleButton);

const Nav = styled.div`
  align-items: center;
  background-color: #191927;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 10px 20px;
`

const Logo = styled.span`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`


const StyledNavLink = styled(NavLink)`
  color: ${({ color }) => (color || 'white')};
  text-align: left;
  text-decoration: none;
  &.active {
    border-bottom: 2px solid red;
    font-weight: 700;
    margin-bottom: -2px;
    transition: 0.4s all;
  }
`


const Header = ({handleChange,dataType}) => (
    <Nav>
    <FlexGroup center>
      <Logo>ARS</Logo>
      <FlexGroup center>
        <StyledNavLink exact activeClassName="active" to="/">Home</StyledNavLink>
        <StyledNavLink exact activeClassName="active" to="/meal">Meal</StyledNavLink>
        <StyledNavLink exact activeClassName="active" to="/category">Category</StyledNavLink>
        <StyledNavLink exact activeClassName="active" to="/cuisine">Cuisine</StyledNavLink>
        <StyledNavLink exact activeClassName="active" to="/center">Center</StyledNavLink>
      </FlexGroup>
    </FlexGroup>
    <FlexGroup center>
        <ToggleButtonGroup value={dataType} exclusive onChange={handleChange}>
          <StyledButton value="/train/predictions">Training</StyledButton>
          <StyledButton value="/predictions" >Predicted</StyledButton>
        </ToggleButtonGroup>
      </FlexGroup>
  </Nav>
)

export default Header