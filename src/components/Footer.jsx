import React from "react";
import "./Footer.css";
import github from "../assets/images/github.png";
import instagram from "../assets/images/instagram.png";

const Footer = () => {
  return (
    <div className="qa">
      <div className="qa_name">문의사항 및 참고 자료</div>
      <div className="icon_img">
        <a
          href="https://github.com/kyuwwwwwwwwww?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={github} alt="깃허브 이미지" />
        </a>
        <a
          href="https://www.instagram.com/nkyuwan_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={instagram} alt="인스타그램 이미지" />
        </a>
      </div>
      <div className="email">gyuwann@gmail.com</div>
    </div>
  );
};

export default Footer;
