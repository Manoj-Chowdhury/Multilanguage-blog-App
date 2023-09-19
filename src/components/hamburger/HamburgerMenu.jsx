import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useLanguage } from '../../context/LanguageContext'
import '../hamburger/Hamburger.css'


const HamburgerMenu = () => {
  const { setMenu } = useLanguage()
  return (
    <div>
      <RxHamburgerMenu size={20} className='hamburger' onClick={() => setMenu(true)} />
    </div>
  )
}

export default HamburgerMenu