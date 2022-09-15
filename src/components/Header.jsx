import React from 'react';
import "./Header.scss"

const Header = ({menuActive, setMenuActive}) => {

    return (
        <header className="header">
            <div className="header__container">
                <a className="header__logo">
                    Magic beauty
                </a>
                <div className="header__menu menu">
                    <Menu menuActive={menuActive} setMenuActive={setMenuActive}/>
                </div>
                <div className="header__action">
                    <div
                        onClick={() => setMenuActive(!menuActive)}
                        className={menuActive ? 'icon-menu menu-open' : 'icon-menu'}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

function Menu({menuActive, setMenuActive}) {
    React.useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = ''
        }
    }, [menuActive])
    return (
        <nav className={menuActive ? 'menu__body menu-open' : 'menu__body'}>
            <ul className="menu__list">
                <li className="menu__item">
                    <a className="menu__link">Home</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link">About</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link">Features</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link">How it works</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;