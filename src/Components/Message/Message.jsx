import './Message.css'
import back from './Message_img/message.png'
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { t } from 'i18next';


function Message() {
    const backgroundImageStyle = {
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      };
     
      const sendMessage = (event) =>{
        
          event.preventDefault();
          const token =  "7067329402:AAEGunIJCoHOAJ1uF_oNy80ya2HbKsMJvgA";''
          const id = -1002022260815;
          const url = `https://api.telegram.org/bot${token}/sendMessage`;
          const name = document.getElementById("name").value;
          const tel = document.getElementById("tel").value;
          const text = document.getElementById("text").value;
          const textContent = `Name: ${name} \n Phone number:${tel} \n Message: ${text}`
          axios({
            url:url,
            method:'POST',
            data:{
              "chat_id": id,
              "text": textContent,
            }
      
          })
          .then((res) => {
            document.getElementById("form").reset();
           message.success("Yuborildi")
           console.log(textContent)
          }).catch((error) =>{
            message.error("xatolik")
            console.log(error);
          })
      }
 

  return (
    <div className="message" id="message">
        <div className="container message__container" style={backgroundImageStyle}>
  <h3 className="message__title">{t("message.text")}</h3>
            <form onSubmit = {sendMessage} id="form" data-aos="fade-up">
                <input type="text" id="name" placeholder={t("message.name")} required/><br/>
                <input type="tel" id="tel" placeholder={t("message.tel")} required/><br/>
                <textarea  id="text" placeholder={t("message.text2")} required ></textarea><br/>
  <button type="submit" className="form__btn">{t("message.btn")}</button>
            </form>
        </div>
    </div>
  )
}

export default Message