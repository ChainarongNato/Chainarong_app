import React, { useState } from "react";
import "./Menu.css";

function Carousel() {
    const [activeTab, setActiveTab] = useState("รีวิว");

    return (
        <div className="carousel-container-1">
            {/* ด้านซ้าย: เมนูและเนื้อหา */}
            <div className="carousel-left">
                <div className="carousel-menu">
                    {["รีวิว", "ห้องพักนิยม", "เพิ่มเติม"].map((tab) => (
                        <button
                            key={tab}
                            className={`carousel-menu-item ${
                                activeTab === tab ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="carousel-content">
                    {activeTab === "รีวิว" && (
                        <div className="carousel-reviews">
                            {[1, 2, 3, 4].map((_, index) => (
                                <div key={index} className="review-item">
                                    <div className="review-image">
                                        <img
                                            src="./img/01.jpg"
                                            className="carousel-image"
                                            alt="Slide"
                                        />
                                    </div>
                                    <div className="review-content">
                                        <p>เป็นโรงแรมที่น่าพักเลย รักเลยมีวิวที่ดีสบาย พักผ่อนได้อย่างเต็มที่</p>
                                        <p>📏 ขนาดห้อง 50 ตร.ม</p>
                                        <p>📶 Wifi ตลอดเวลา</p>
                                        <p>คะแนน: ⭐⭐⭐⭐☆</p>
                                        <button className="btn btn-primary">จองห้อง</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === "ห้องพักนิยม" && (
                        <div className="carousel-reviews">
                        {[1, 2, 3, 4].map((_, index) => (
                            <div key={index} className="review-item">
                                <div className="review-image">
                                    <img
                                        src="./img/01.jpg"
                                        className="carousel-image"
                                        alt="Slide"
                                    />
                                </div>
                                <div className="review-content">
                                    <p>เป็นโรงแรมที่น่าพักเลย รักเลยมีวิวที่ดีสบาย พักผ่อนได้อย่างเต็มที่</p>
                                    <p>📏 ขนาดห้อง 50 ตร.ม</p>
                                    <p>📶 Wifi ตลอดเวลา</p>
                                    <p>คะแนน: ⭐⭐⭐⭐☆</p>
                                    <button className="btn btn-primary">จองห้อง</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    )}
                    {activeTab === "เพิ่มเติม" && (
                        <div className="carousel-feedback">
                            <h4>ร้องเรียนปัญหา</h4>
                            <form>
                                <label htmlFor="problem">ปัญหาที่พบ:</label>
                                <textarea
                                    id="problem"
                                    rows="4"
                                    placeholder="กรอกรายละเอียดปัญหาที่พบ"
                                ></textarea>
                                <button className="btn btn-submit">ตกลง</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            {/* ด้านขวา: แผนที่และข้อมูลโรงแรม */}
            <div className="carousel-right">
                <h4>แผนที่ และข้อมูลโรงแรม</h4>
                <div className="map-placeholder img">
                    <img src="./img/01.jpg" alt="แผนที่" />
                </div>
                <div className="hotel-info">
                    <p>📍 ที่อยู่: ในเมือง จังหวัด เชียงใหม่</p>
                    <p>📊 คะแนนโดยรวม: 8.5 คะแนน</p>
                    <p>🕒 เปิดให้เข้าพักทุกวัน 08:00 - 23:00 น.</p>
                    <p>📶 มี Wifi ตลอด 24 ชม.</p>
                    <p>🏢 ห้องขนาด 40 - 100 ตร.ม.</p>
                    <p>📞 ติดต่อ: 090-999-0000</p>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
