import React from 'react'
import ProfileImg from "../../resources/ProfileImg.jpg"
import '../aboutComponet/about.css'


const BengaliAbout = () => {
    return (
        <div>
            <p className='about-heading'>আমার গল্প</p>
            <div style={{ display: 'flex', margin: '0 100px' }}>
                <span style={{ marginRight: '80px', fontSize: "large", fontStyle: "italic", textAlign: 'left' }}>
                <p>হ্যালো! আমার নাম মনোজ চৌধুরী। আমি একজন সফ্টওয়্যার বিকাশকারী হতে উচ্চাকাঙ্ক্ষী।
                         react.js, redux, node.js, express.js, mongoDB, ভ্যানিলা জাভাস্ক্রিপ্ট, ফায়ারবেস, HTML, CSS, RESTful Api, Java, SQL, MySQL ইত্যাদি ব্যবহার করে প্রতিক্রিয়াশীল ওয়েব অ্যাপ্লিকেশন তৈরি করার অভিজ্ঞতা।</p>

                     <p>আমি বেশ কয়েকটি প্রকল্পে কাজ করেছি যার মধ্যে রয়েছে ই-কমার্স ওয়েব অ্যাপ্লিকেশন, চ্যাট অ্যাপ্লিকেশন, গুগল সার্চ অ্যাপ্লিকেশন ক্লোন ইত্যাদি উন্নত বৈশিষ্ট্য সহ।</p>

                     <p>আমি ক্রমাগত আমার দক্ষতা উন্নত করতে এবং সাম্প্রতিক শিল্প প্রবণতাগুলির সাথে আপ টু ডেট থাকার চেষ্টা করছি, আমি সবসময় নতুন চ্যালেঞ্জ নিতে এবং নতুন কিছু শিখতে আগ্রহী।</p>

                     <p>আমি নতুন সুযোগগুলি অন্বেষণ করতে আগ্রহী যা আমাকে আমার দক্ষতাকে কাজে লাগাতে এবং অর্থপূর্ণ প্রকল্পগুলিতে অবদান রাখতে দেয়৷</p>
                </span>
                <img src={ProfileImg} alt="profile-image" height={400} />
            </div>
        </div>
    )
}

export default BengaliAbout