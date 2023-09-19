import React from "react";
import '../contact/ContactStyle.css'
import { useLanguage } from "../../context/LanguageContext"; 

const Contact = () => {
  const {language} = useLanguage()
  return (
      <div className="contact-container">
        <div className="contact-heading">
          <p className="heading-para">
            {
              language==='english'?'Contact':language==='hindi'?'संपर्क करें':'যোগাযোগ'
            }
          </p>
          <p className="heading-detail">
            {
              language==='english'?'Submit the form below to get in touch with me':language==='hindi'?'मुझसे संपर्क करने के लिए नीचे दिया गया फॉर्म जमा करें':'আমার সাথে যোগাযোগ করতে নীচের ফর্ম জমা দিন'
            }
          </p>
        </div>

        <div className="contact-form-container">
          <form
            action="https://getform.io/f/23dbf59c-2805-416f-bab0-c8ca61a2747c"
            method="POST"
            className="contact-form"
          >
            <input
              type="text"
              name="name"
              placeholder={
                language==='english'?'Enter your name':language==='hindi'?'अपना नाम भरें':'আপনার নাম পূরণ করুন'
              }
              className="personal-detail"
            />
            <input
              type="text"
              name="email"
              placeholder={
                language==='english'?'Enter your email':language==='hindi'?'अपना ईमेल भरें':'আপনার ইমেইল পূরণ করুন'
              }
              className="personal-detail"
            />
            <textarea
              name="message"
              placeholder={
                language==='english'?'Write the message':language==='hindi'?'संदेश लिखें':'বার্তা লিখুন'
              }
              rows={10}
              className="message"
            />

            <button className="btn">
              {
                language==='english'?'Submit':language==='hindi'?'जमा कीजिए':'জমা করুন'
              }
            </button>
          </form>
        </div>
      </div>
  )
}

export default Contact;
