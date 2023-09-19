import React, { useCallback, useEffect } from 'react'
import '../menu/Menu.css'
import Switch from "react-switch";
import Languageselector from '../languageSelector/Languageselector'
import { useLanguage } from '../../context/LanguageContext'
import { MdClose } from 'react-icons/md'



const Menu = () => {
    const { setMenu, theme, setTheme, checked, setChecked } = useLanguage()


    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    console.log(checked);
    console.log(theme);


    const handleChange = useCallback((checked) => {
        setChecked(checked);
        if (checked) {
            setTheme("dark-theme")
        } else {
            setTheme("light-theme")
        }
    }, [theme])



    console.log(checked);
    console.log(theme);

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Settings</span>
                    <span className="close-btn" onClick={() => setMenu(false)}>
                        <MdClose />
                        <span className="text">Close</span>
                    </span>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Languageselector />
                    <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: 'center' }}>
                        <p>Dark Mode : </p>
                        <Switch dark="Dark"
                            light="Light" onChange={(checked) => handleChange(checked)} checked={checked} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu