import React, { useMemo } from 'react'
import { useLanguage } from '../context/LanguageContext';
import English from '../components/languageComponet/English';
import Hindi from '../components/languageComponet/Hindi';
import Bengali from '../components/languageComponet/Bengali';

const Home = () => {

    const {language} = useLanguage()

    const Blog = useMemo(() => {
        if(language==='english'){
            return (
                <English />
            )
        }else if(language==='hindi'){
            return (
                <Hindi />
            )
        }else if(language==='bengali'){
            return (
                <Bengali />
            )
        }
    }, [language])

    return (
        <div>
            {Blog}
        </div>
    )
}

export default Home