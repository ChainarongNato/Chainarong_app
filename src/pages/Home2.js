import React from "react";
import "./Home2.css"; // ไฟล์ CSS สำหรับกำหนดสไตล์ของหน้า Home2
import bannerImage from "./img/banner.jpg"; // แบนเนอร์ด้านบน
import serviceIcon1 from "./img/service1.jpg"; // ไอคอนบริการ
import serviceIcon2 from "./img/service2.jpg"; 
import serviceIcon3 from "./img/service3.jpg"; 

function Home2() {
  return (
    <div className="home-container">
      {/* แบนเนอร์ด้านบน */}
      <div className="banner">
        <img src={bannerImage} alt="โรงแรมสุดหรู" className="banner-image" />
        <div className="banner-text">
          <h1>ยินดีต้อนรับสู่โรงแรมของเรา</h1>
          <p>บริการระดับพรีเมียมในบรรยากาศที่สะดวกสบาย</p>
        </div>
      </div>

      {/* บริการพิเศษ */}
      <div className="services-section">
        <h2>บริการพิเศษ</h2>
        <div className="services-list">
          <div className="service-item">
            <img src={serviceIcon1} alt="บริการ 1" />
            <h3>บริการสปา</h3>
            <p>ผ่อนคลายร่างกายและจิตใจด้วยบริการสปา</p>
          </div>
          <div className="service-item">
            <img src={serviceIcon2} alt="บริการ 2" />
            <h3>อาหารเช้าแสนอร่อย</h3>
            <p>อาหารเช้าที่หลากหลาย พร้อมเสิร์ฟตลอดเช้า</p>
          </div>
          <div className="service-item">
            <img src={serviceIcon3} alt="บริการ 3" />
            <h3>สระว่ายน้ำสุดหรู</h3>
            <p>สระว่ายน้ำกลางแจ้งพร้อมวิวธรรมชาติ</p>
          </div>
        </div>
      </div>

      {/* โปรโมชั่น */}
      <div className="promotion-section">
        <h2>โปรโมชั่นพิเศษ</h2>
        <div className="promotion-list">
          <div className="promotion-item">
            <h3>พัก 3 คืน ลด 20%</h3>
            <p>จองห้องพัก 3 คืนขึ้นไป รับส่วนลดพิเศษ</p>
          </div>
          <div className="promotion-item">
            <h3>ฟรีอาหารเช้า</h3>
            <p>ทุกการจองผ่านเว็บไซต์ รับฟรีอาหารเช้า</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;

