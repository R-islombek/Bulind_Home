import './Service.css'
import service1 from './Service_img/service1.png'
import service2 from './Service_img/service2.png'
import service3 from './Service_img/service3.png'
import service4 from './Service_img/service4.png'
import { t } from 'i18next'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'


function Service() {
    useEffect(function () {
        Aos.init({ duration: 1000 });
       
        
      }, []);

 
  return (
    <div className="service">
        <div className="container service__container">
  <h1 className="service__name">{t("service.title")}</h1>
            <ul className="service__list">
                <li className="service__item_big" data-aos="zoom-in-up">
  <h3 className="service__title">{t("service.text1")}</h3>
                    <img className="service__img" src={service1} alt=""/>
                </li>
                <li className="service__item_small" data-aos="zoom-in-up">
                    <h3 className="service__title">{t("service.text2")}</h3>
                    <img className="service__img" src={service2} alt=""/>
                </li>
                <li className="service__item_small" data-aos="zoom-in-up">
                    <h3 className="service__title">{t("service.text3")}</h3>
                    <img className="service__img" src={service3} alt=""/>
                </li>
                <li className="service__item_big" data-aos="zoom-in-up">
                    <h3 className="service__title">{t("service.text4")}</h3>
                    <img className="service__img" src={service4} alt=""/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Service