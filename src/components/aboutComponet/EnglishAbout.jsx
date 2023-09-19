import React from 'react'
import ProfileImg from "../../resources/ProfileImg.jpg"


const EnglishAbout = () => {
    return (
        <div>
            <p className='about-heading'>MY STORY</p>
            <div style={{ display: 'flex', margin: '0 100px' }}>
                <span style={{ marginRight: '80px', fontSize: "large", fontStyle: "italic", textAlign: 'left' }}>
                    <p>Hi there! My name is Manoj Chowdhary. I'm aspiring to become a Software developer.
                        Experience in developing responsive web applications using react.js, redux, node.js, express.js, mongoDB, vanilla JavaScript, firebase, HTML, CSS, RESTful Api, Java, SQL, MySQL etc.</p>

                    <p>I have worked on several projects which include e-commerce web application, chat application, google search application clone etc. with advanced features.</p>

                    <p>I'm constantly striving to improve my skills and stay up to date with the latest industry trends, I'm always eager to take on new challenges and learn something new.</p>

                    <p>I'm excited to explore new opportunities that will allow me to utilize my skills and contribute to meaningful projects.</p>
                </span>
                <img src={ProfileImg} alt="profile-image" height={400} />
            </div>
        </div>
    )
}

export default EnglishAbout