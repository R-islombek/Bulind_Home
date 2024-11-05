import './Header.css'
import header from './Header_img/header.jpeg'
import { t } from 'i18next'

function Header() {
    const backgroundImageStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${header})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
}

    
 

  return (
    <div className="header" style={backgroundImageStyle}>
        <div className="container header__container">
            <h1 className="header__title">ATAEV <br/> BAHODIR BUILD</h1>
  <p className="header__text">{t("header.text")}</p>
            <div className="header__box">
  <a className="header__link" href="#project">{t("header.btn1")}</a>
  <a className="header__link" href="tel:+998986766606">{t("header.btn2")}</a>
            </div>
        </div>
    </div>
  )
}

export default Header