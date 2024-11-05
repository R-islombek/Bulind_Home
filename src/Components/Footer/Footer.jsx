import './Footer.css'
import logo2 from './Footer_img/logo2.png'
import { t } from 'i18next'

function Footer() {
 

  return (
    <div className="footer">
      <div className="container footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <img className="footer__img" src={logo2} alt="logo"/>
  <p className="footer__text">{t("footer.text1")}</p>
            <div className="footer__box">
              <a href="https://www.instagram.com/ataev_bahodir_build"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/people/Ataev-Bahodir-Build/pfbid09wTM7or8uoJSEb7YArKfFcKM7Y4kThgjPYauKAzXVwcNPJcvZpgiWEjAZLoCT6Wwl/?mibextid=LQQJ4d"><i class="fa-brands fa-facebook"></i></a>
            </div>
          </li>
          <li className="footer__item">
  <p className="footer__text">{t("footer.text2")}</p>
  <a className="footer__link" href="/">{t("navbar.link3")}</a>
  <a className="footer__link" href="#project">{t("navbar.link2")}</a>
            <a className="footer__link" href="#news">{t("navbar.link5")}</a>
  <a className="footer__link" href="#main">{t("footer.link")}</a>
          </li>
          <li className="footer__item">
  <p className="footer__text">{t("footer.text3")}</p>
            <a className="footer__link" href="tel:+998955250555">+998955250555</a>
            <a className="footer__link" href="tel:+998970777770">+998970777770</a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Footer