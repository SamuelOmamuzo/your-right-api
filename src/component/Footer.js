import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Footers>
        <Ui class="footer-links">
            <Li>
                <A>Privacy Policy</A>
            </Li>
            <Li>
                <A >copyright@2022.Disclaimer</A>
            </Li>
            <Div>
                <Icon/>
                <Icon/>
                <Icon/>
            </Div>
        </Ui>
    </Footers>
  );
}

export default Footer;

const Div = styled.div`
    display:flex;
    margin-top:10px;
`

const Icon = styled.div`
    width:30px;
    height:30px;
    background-color:white;
    border-radius:100%;
    margin-left:10px;
`

const A = styled.div``

const Li = styled.div``

const Ui = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    justify-content:space-around;
`

const Footers = styled.div`
    width:100%;
    height:17vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgb(61,27,2);
    color:white;
`