import React from 'react';
import "./footer.scss";

const Footer = ({}) => {
  // const line = [
      
  // ];


  return (
    <div>
      <div className="line"></div>
      <footer className="footer">
       
      <div className="main-footer">


        {/* <table className="tbl">
          <tr>
            <td>
              <a href="#">
                Text
            </a>

            </td>
            <td>
              <a href="#">
                Text
            </a>
            </td>
            <td>
              <a href="#">
                Text
            </a>
            </td>
          </tr>

          <tr>
            <td>
              <a href="#">
                Text
            </a>
            </td>
            <td>
              <a href="#">
                Text
            </a>
            </td>
            <td>
              <a href="#">
                Text
            </a>
            </td>
          </tr>

          <tr>
            <td>
              <a href="#">
                Text
            </a>
            </td>
            <td>
              <a href="#">
                Text
            </a>
            </td>
            <td>
              <a href="#">
                Text
            </a>
            </td>
          </tr>

          <tr>
            <td>
              <a href="#">
                Text
            </a>
            </td>
            <td>
              <a href="#">
                Text
            </a>
            </td>
            <td>
              <a href="#">
                Text
            </a>
            </td>
          </tr>
        </table> */}
        
 <div className="we">
        <div className="follow-us">
          <div className="cent">
          Cлідкуйте за нами</div><br/><br/>
        <div className="social-media">
        &#8195;&#8195;&#8195;  <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
        </div>
        <br/><br/>
        <div className="about-us-center"> 
          
          Сайт був розроблений Командою <span className="red">МАРС</span> (майстер Революційних Систем)<br/>
В яку входять Попов Артем, Попова Карина, <br/>Наумов Артем, Бабкін Андрій, Мінаков Данило
        </div>
        <br/><br/>
        <div className="img-center">   <a href="#"> <img src={require("./images/mars-logo.png")} className="main-links"   /> </a></div> 
        </div>
      </div>
      </div>
          <div className="main-footer">
            <div className="number">
              <div className="help">
              Якщо Вам потрібна допомога з публічним файлом, звертайтесь за номером<br/><br/> 
              </div>
              <div className="numer">
            <span> +38(xxx)xxx-xx-xx  &#8195;&#8195;&#8195;   +38(xxx)xxx-xx-xx   &#8195;&#8195;&#8195;    +38(xxx)xxx-xx-xx &#8195;&#8195;&#8195;      +38(xxx)xxx-xx-xx   &#8195;&#8195;&#8195;     +38(xxx)xxx-xx-xx </span> 
            </div>  
            </div>
          </div>
      
        <hr/>
          <div className="main-footer-footer">
       
              <div className="prava">Copyright © 2020 Всі права захищені</div>
          <br/> <br/>
          </div>

      
      </footer>
    </div>
    );
};

export default Footer;