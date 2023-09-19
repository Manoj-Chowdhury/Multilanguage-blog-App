import React from 'react'
import ProfileImg from "../../resources/ProfileImg.jpg"


const HindiAbout = () => {
    return (
        <div>
            <p className='about-heading'>मेरी कहानी</p>
            <div style={{ display: 'flex', margin: '0 100px' }}>
                <span style={{ marginRight: '80px', fontSize: "large", fontStyle: "italic", textAlign: 'left' }}>
                <p>नमस्ते! मेरा नाम मनोज चौधरी है. मैं एक सॉफ्टवेयर डेवलपर बनने का इच्छुक हूं।
                         रिएक्ट.जेएस, रिडक्स, नोड.जेएस, एक्सप्रेस.जेएस, मोंगोडीबी, वेनिला जावास्क्रिप्ट, फायरबेस, एचटीएमएल, सीएसएस, रेस्टफुल एपीआई, जावा, एसक्यूएल, मायएसक्यूएल आदि का उपयोग करके उत्तरदायी वेब एप्लिकेशन विकसित करने का अनुभव।</p>

                     <p>मैंने कई परियोजनाओं पर काम किया है जिनमें उन्नत सुविधाओं के साथ ई-कॉमर्स वेब एप्लिकेशन, चैट एप्लिकेशन, गूगल सर्च एप्लिकेशन क्लोन आदि शामिल हैं।</p>

                     <p>मैं अपने कौशल में सुधार करने और नवीनतम उद्योग रुझानों के साथ अपडेट रहने के लिए लगातार प्रयास कर रहा हूं, मैं हमेशा नई चुनौतियों का सामना करने और कुछ नया सीखने के लिए उत्सुक रहता हूं।</p>

                     <p>मैं नए अवसरों का पता लगाने के लिए उत्साहित हूं जो मुझे अपने कौशल का उपयोग करने और सार्थक परियोजनाओं में योगदान करने की अनुमति देगा।</p>
                </span>
                <img src={ProfileImg} alt="profile-image" height={400} />
            </div>
        </div>
    )
}



export default HindiAbout