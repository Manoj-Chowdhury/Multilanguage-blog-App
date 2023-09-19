import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import '../languageSelector/LanguageSelector.css'

const Languageselector = () => {
    const { language, setLanguage } = useLanguage()
    return (
        <div className='languageSelector'>
            <label htmlFor="language">Choose a Language : </label>
            <select name="language" id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="bengali">Bengali</option>
            </select>
        </div>
    )
}

export default Languageselector