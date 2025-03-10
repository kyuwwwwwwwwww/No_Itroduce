import React, { useState, useEffect } from "react";
import "../styles/Main.css";
import myimage from "../assets/images/myface.jpg";
import kyu from "../assets/images/kyu.jpg";
import majangkyu from "../assets/images/majangku.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TypingTitle = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord =
    "안녕하세요, 프론트엔드 개발자를 꿈꾸고 있는 노규완 입니다.";

  useEffect(() => {
    if (count < completionWord.length) {
      const timeout = setTimeout(() => {
        setBlogTitle((prev) => prev + completionWord[count]);
        setCount(count + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setBlogTitle("");
        setCount(0);
      }, 1000);
    }
  }, [count, completionWord]);

  return <h1 className="main-title">{blogTitle}</h1>;
};

const Main = () => {
  return (
    <div className="main_page">
      <Header />
      <section className="section1">
        <div className="section1_left">
          <img className="my_img" src={myimage} alt="노규완의 사진" />
        </div>

        <div className="section1_right">
          <TypingTitle />
        </div>
      </section>

      <div className="section2_name">자기소개</div>
      <section className="section2" id="about">
        <div className="section2_left">
          <img className="kyu" src={kyu} alt="내 사진 2" />
        </div>
        <div className="section2_right">
          <div className="introduce">
            <dt>학교/전공</dt>
            <dd>한림대학교/콘텐츠IT</dd>
          </div>
          <div className="introduce">
            <dt>학번</dt>
            <dd>20215149</dd>
          </div>
          <div className="introduce">
            <dt>학년</dt>
            <dd>3학년</dd>
          </div>
          <div className="introduce">
            <dt>이름</dt>
            <dd>노규완</dd>
          </div>
        </div>
      </section>

      <section className="section3" id="project">
        <div className="project_name">프로젝트</div>
        <div className="project_containor">
          <div className="pc_left">
            <img className="majangkyu" src={majangkyu} alt="마장규 사진" />
          </div>
          <div className="pc_right">
            <div className="project">마장규</div>
            <div className="project_intro">
              <dt>기간</dt>
              <dd>2024.08</dd>
            </div>
            <div className="project_intro">
              <dt>설명</dt>
              <dd>마장규 고깃집을 홍보하는 웹사이트 입니다.</dd>
            </div>
            <div className="project_intro">
              <dt>사용 기술</dt>
              <dd>React</dd>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
