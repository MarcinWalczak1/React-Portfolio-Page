import React from "react";
import "./about.scss";
import CV from "../../assets/Marcin_Walczak_CV.pdf"
import Info from "./Info";

const About = () =>{
    return(
        <section className="about" id="about">
            <div className="about__title">
                <h2 className="section__title">About me</h2>
                <span className="section__intro_subtitle">My introduction</span>
            </div>
            <div className="about__data">
                <Info/>
                <p className="about__description">I am a beginner front-end developer who is passionate about coding and eager to learn new technologies. As someone who is actively seeking job opportunities, I understand the importance of constantly improving my skills to stay relevant in the industry.
                My journey in programming started with HTML and CSS, and I quickly realized that I had a knack for creating visually appealing and responsive designs. Then I started delving into JavaScript and its various framework, such as React, which opened up a whole new world of possibilities.
                I am committed to enhancing my knowledge in front-end development and keeping up with the latest trends and best practices. I am constantly seeking new challenges to push myself and improve my skills.
                I would like to work with a team of experienced developers who can guide and mentor me as I continue to grow in my career.</p>
                <a download = "" href={CV} className="button-cv">Download CV</a>
            </div>
        </section>


    )
}
export default About