import './About.css'
import about from './About_img/about.png'
import { t } from 'i18next';



function About() {
    const backgroundImageStyle = {
        backgroundImage: `url(${about})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      };
 

  return (
    <div className="about" style={backgroundImageStyle} id="about">
        <div className="container about__container" data-aos="fade-up">
            <h3  className="about__name">ATAEV BAHODIR BUILD</h3>
            <h2 className="about__title">ATAEV BAHODIR BUILD</h2>
            <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, saepe! Ipsa culpa architecto harum dicta labore porro ducimus quo natus reiciendis repudiandae aliquid nulla a obcaecati aspernatur, eum, libero blanditiis?</p>
  <a className="about__link" href="/meeting">{t("about.btn")}</a>
        </div>
    </div>
  )
}

export default About