import './Partners.css'
import partner1 from './Partners_img/partner1.jpg'
import partner2 from './Partners_img/partner2.jpg'
import partner3 from './Partners_img/partner3.jpg'
import partner4 from './Partners_img/partner4.jpg'
import partner5 from './Partners_img/partner5.jpg'
import partner6 from './Partners_img/partner6.jpg'
import partner7 from './Partners_img/partner7.jpg'
import partner8 from './Partners_img/partner8.jpg'
import { t } from 'i18next'
function Partners() {
 

  return (
    <div className="partners" id="partner">
        <h3 className="partners__title">{t("partner.title")}</h3>
        <div className="partners__wrap">
            <img className="partners__img" src={partner1} alt=""/>
            <img className="partners__img" src={partner2} alt=""/>
            <img className="partners__img" src={partner3} alt=""/>
            <img className="partners__img" src={partner4} alt=""/>
            <img className="partners__img" src={partner5} alt=""/>
            <img className="partners__img" src={partner6} alt=""/>
            <img className="partners__img" src={partner7} alt=""/>
            <img className="partners__img" src={partner8} alt=""/>
        </div>
    </div>
  )
}

export default Partners