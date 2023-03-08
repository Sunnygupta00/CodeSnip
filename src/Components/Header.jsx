import React from 'react'
import logo from "./Logo.svg"
import logo2 from "./Logo2.svg"

const Header = (props) => {
    const { theme, changeTheme, layout, changeLayout, hideEditor, changeEditor } = props
    return (
        <div className={` flex ${theme ? 'top-container' : 'top-container2'}`} >
            <a href="#"><img className="top-logo" src={theme ? logo2 : logo} alt="Logo" /></a>
            <div className="top-left-container">
                <button
                    className='primary-button'
                    type='button'
                    onClick={changeTheme}> {theme ? 'DARK MODE' : 'LIGHT MODE'}</button>
                <button
                    className='primary-button'
                    type='button'
                    onClick={changeLayout}
                >ChangeLayout</button>
                <button
                    className='primary-button'
                    type='button'
                    onClick={changeEditor}
                >{hideEditor ? 'OPEN EDITOR' : 'HIDE EDITOR'}</button>
            </div>
        </div >
    )
}

export default Header;