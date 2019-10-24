import React from "react";
import styled from "styled-components";
import img from "./images/funnydad.jpg";

export const jokeContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    background: '#00ABA6',
}

export const menuIcon = {
    width: '120px',
    height: 'auto', 
}
export const menuBarEmoji = {
    width: '100%',
    height: 'auto',
    borderRadius: '100%',
}
export const JokeListHeading = {
    display: 'flex',
    background: '#f1bc31',
    padding: '25px auto',
    width: '75%',
    height:'40px',
    justifyContent: 'center',
    borderRadius: '5px',
    color: 'white',
    margin: '10px',
    marginLeft: '11%',
    fontSize: '2vw',
}
export const button = {
    borderRadius: "10px",
}

export const testingBackground = {
    background: "#dbedf3",
}


export const JokeCarder ={
    display: 'flex',
    flexDirection: 'column'
}

export const NavBarMenu = {
    padding: '30px',
}

///////////


export const Greeting = styled.div`
  // background-image: url(${img});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: left;
  background-color: #E2582D;
  height: 93vh;
  margin-top: 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0;
`;

export const ProfileBackground = styled(Greeting)`
  background-position: center;
  display: block;
`;

export const Button = styled.button`
  background: #537d91;
  color: white;
  border-radius: 3px;
  border: 1px solid black;
  padding: 5px;
  margin: 5px
  font-size: 1rem;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.3);
  transition: 0.1s;
  filter: brightness(97%);
  &:hover {
    filter: brightness(130%);
  }
`;

export const SignInButton = styled(Button)`
  width: 50%;
  margin: 0 auto 20px;
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7vh;
  min-height: 40px;
  justify-content: space-between;
  background: #537d91;
`;

export const LogoContainer = styled.div`
  width: 60%;
  text-align: left;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 5px 30px 5px 0;
`;

export const NavLink = styled.a`
  text-decoration: none;
  padding: 5px;
  color: white;
  margin: 0 10px;
  filter: brightness(95%);
  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
  transition: 0.1s;
`;

export const PageHeader = styled.h2`
  margin: 2% auto;
`;

export const SaveJoke = styled.button`
  background: #537d91;
  border: 1px solid black;
  border-radius: 3px
  color: white;
  filter: brightness(90%);
  padding: 2px;
  min-width: 50px;
  margin: 10px 10px;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: ponter;
    filter: brightness(105%);
  }
  &:activate {
    transform: translateY(1px);
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.7);
  }
`;


export const PrivCheckbox = styled.input`
  display: block;
  position: relative;
  // filter: brightness(100%);
  background: #f77754;
  height: 25px;
  width: 25px;
  cursor: pointer;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.1s ease-out;
  &:hover {
    cursor: pointer;
    filter: brightness(60%);
    background: #f77754;
  }
`;

export const SignIn = styled.div`
  width: 40%;
  height: 93vh;
  background: rgb(247, 119, 84);
  filter: brightness(85%);
  display: flex;
  flex-flow: column wrap;
`;

export const SignInDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-flow: column wrap;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  justify-content: start;
  align-items: start;
  margin: 15px;
`;
export const Input = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder || "Input Information"
}))`
  border-radius: 3px;
  border: none;
  padding: 25px;
  width: 60%;
  margin: 10px auto;
  background-color:white;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
`;

export const SearchInput = styled(Input)`
  width: 200px;
  margin-right: 5px;
`;

export const Logo = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 15px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height:550px;
  padding: 2%;
  border-radius: 10px;
  background: white;
  color: black;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  background-repeat: no-repeat;
  background-size: 340px auto;
  background-image: url("./DesignsElements/homer.jpg");
`;


export const AddJokeMain = styled(CardContainer)`
  width: 25%;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardPunch = styled.p`
  color: #173947;
  font-size: 1.2rem;
  transition: 0.2s;
  margin: 0 auto;
`;

export const ShowPunch = styled.p`
  color: #110061;
  filter: brightness(90%);
  font-size: 1rem;
  transition: 0.2s;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

export const CardContent = styled.p`
  font-size: 2rem;
  transition: 0.2s;
  margin: 0 auto;
  padding-bottom: 14px;
`;
export const CardId = styled.p`
  font-size: 0.9rem;
  transition: 0.2s;
  margin: 0 auto;
  padding-bottom: 14px;
`;
export const Emphasized = styled.p`
  font-size: 0.8 rem;
  font-style: italic;
  filter: brightness(80%);
`;

export const TextBtn = styled.p`
  background: #537d91;
  filter: brightness(90%);
  border-radius: 3px;
  padding: 5px;
  min-width: 50px;
  border: 1px solid black;
  margin: 0 10px;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: pointer;
    filter: brightness(130%);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.7);
  }
`;

export const Body = styled.div`
  background: #f77754;
  min-height: 100vh;
  overflow: hidden;
`;

export const ProfileJokeContainer = styled.div`
  width: 0px;

`;

export const ScrollJokes = styled.div`
  overflow: auto;
  background:white;
  float: left;
  height: 350px;
  width: 450px;
`;

export const ProfileDiv = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-evenly;
`;

export const ProfileInfo = styled.div`
 display:flex;
 align-item: space-evenly;
 marging:5px;
 margin:5% auto;
`;
