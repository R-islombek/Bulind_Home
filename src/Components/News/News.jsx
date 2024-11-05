import './News.css'
import news1 from './News_img/news1.jpg'
import news2 from './News_img/news2.jpg'
import news3 from './News_img/news3.jpg'
import news4 from './News_img/news4.jpg'
import { t } from 'i18next'

function News() {
 

  return (
    <div className="news" id="news">
        <div className="container news__container">
  <h3 className="news__title">{t("news.title")}</h3>
            <ul className="news__list">
                <li className="news__item" data-aos="zoom-in-up">
                    <img className="news__img" src={news1} alt=""/>
                    <div className="news__box">
  <a className="news__link" href="#partner">{t("news.btn")}</a>
                        <h4 className="news__name">{t("news.name1")}</h4>
                        <p className="news__text">{t("news.text1")}</p>
                    </div>
                </li>
                <li className="news__item" data-aos="zoom-in-up">
                    <img className="news__img" src={news2} alt=""/>
                    <div className="news__box">
                        <a className="news__link" href="#partner">{t("news.btn")}</a>
                        <h4 className="news__name">{t("news.name2")}</h4>
                        <p className="news__text">{t("news.text2")}</p>
                    </div>
                </li>
                <li className="news__item" data-aos="zoom-in-up">
                    <img className="news__img" src={news3} alt=""/>
                    <div className="news__box">
                        <a className="news__link" href="#partner">{t("news.btn")}</a>
                        <h4 className="news__name">{t("news.name3")}</h4>
                        <p className="news__text">{t("news.text3")}</p>
                    </div>
                </li>
                <li className="news__item" data-aos="zoom-in-up">
                    <img className="news__img" src={news4} alt=""/>
                    <div className="news__box">
                       <a className="news__link" href="#partner">{t("news.btn")}</a>
                        <h4 className="news__name">{t("news.name4")}</h4>
                        <p className="news__text">{t("news.text4")}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default News