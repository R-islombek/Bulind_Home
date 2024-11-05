import './Section.css'
import section from './Section_img/section.png'
import CountUp from 'react-countup'
import { t } from 'i18next'


function Section() {
    const backgroundImageStyle = {
        background: `url(${section})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
    }
 

  return (
    <div className="section"id="section" style={backgroundImageStyle}>
        <div className="container section__container">
  <h3 className="section__title">{t("section.title")}</h3>
            <ul className="section__list">
                <li className="section__item">
                    <h1 className="section__name">  <CountUp end={120} duration={1}/>+</h1>
  <p className="section__text">{t("section.text1")}</p>
                </li>
                <li className="section__item">
                    <h1 className="section__name"><CountUp end={43} duration={1}/>+</h1>
  <p className="section__text">{t("section.text2")}</p>
                </li>
                <li className="section__item">
                    <h1 className="section__name"><CountUp end={250} duration={1}/>+</h1>
  <p className="section__text">{t("section.text3")}</p>
                </li>
                <li className="section__item">
                    <h1 className="section__name"><CountUp end={2} duration={1}/>+</h1>
  <p className="section__text">{t("section.text4")}</p>
                </li>
                

            </ul>


        </div>
    </div>
  )
}

export default Section