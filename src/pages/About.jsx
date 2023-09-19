import React, { useMemo } from 'react'
import { useLanguage } from '../context/LanguageContext';
import EnglishAbout from '../components/aboutComponet/EnglishAbout';
import HindiAbout from '../components/aboutComponet/HindiAbout';
import BengaliAbout from '../components/aboutComponet/BengaliAbout';

const About = () => {

    const {language} = useLanguage()

    const Blog = useMemo(() => {
        if(language==='english'){
            return (
                <EnglishAbout />
            )
        }else if(language==='hindi'){
            return (
                <HindiAbout />
            )
        }else if(language==='bengali'){
            return (
                <BengaliAbout />
            )
        }
    }, [language])

    return (
        <div>
            {Blog}
        </div>
    )
}

export default About