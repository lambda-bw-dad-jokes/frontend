import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLaughSquint } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const FooterWrap = styled.div`
  width: 90%vw;
  height: 25%vh;
`;

const Favicon = styled.a`
  margin: 2rem;
  &:hover {
    color: #b22222;
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
`;

const fb = <FontAwesomeIcon icon={faFacebookF} />;
const github = <FontAwesomeIcon icon={faGithub} />;
const twitter = <FontAwesomeIcon icon={faTwitter} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const brands = [fb, github, twitter, instagram];

export default function Footer() {
  return (
    <div className="social-media">
      <FooterWrap>
        <h1>
          {brands.map(item => (
            <Favicon key={item}>{item}</Favicon>
          ))}
        </h1>
        <Copyright>
          DJ Team
          <FontAwesomeIcon icon={faLaughSquint} />
          2019
        </Copyright>
      </FooterWrap>
    </div>
  );
}

