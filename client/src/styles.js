import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Title = styled.h1`
  text-align: center;
  color: blue;
`;
export const Description = styled.h4`
  text-align: center;
`;
export const ShopImage = styled.img`
display: block;
margin-Left: auto;
margin-Right: auto;
width: 28%;
`;
export const List = styled.div`
 align-items: center;
 justify-content: center;
 display: flex;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
export const ProductImage = styled.div`
// margin: 20px;
img {
    display: block;
    margin-Left: auto;
    margin-Right: auto;
    width: 50%;
    width: 200px;
    height: 200px;
}
p {
    text-align: center;
    &.product-price{
        color:${props => props.theme.color};
    }
  }

`;
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
    /* background-image: url("https://i1.wp.com/www.trizmaneuro.com/wp-content/uploads/2016/05/grey-background-wallpaper-0.jpg") */
    
  }
`;
export const ThemeButton = styled.button`
  font-size: 3em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
export const DeleteButtonStyled = styled.p`
color: red;
`
export const SearchBarStyled = styled.input`
padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 5;
  }
`;
export const NavStyled = styled.nav`
background-color: ${(props) => props.theme.backgroundColor};
`;
export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.color};
  }
`;
export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.pink};
`;

export const AuthButtonStyled = styled.button`
    font-size: 1em;
    padding: 0.25em 1em;
    margin-left: 0.5em;
    border-radius: 3px;
    background-color: ___CSS_0___;
    color: ___CSS_1___;
`;
export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
`;




