import React from "react";
import "./Carousel.css"; // เพิ่มไฟล์ CSS สำหรับตกแต่งเพิ่มเติม


function Carousel() {
    return (
        <div className="row carousel-container">
            <div className="col-lg-6 carousel-text">
                <div>
                    <h5 className="carousel-title ">ยินดีต้อนรับสู่</h5>
                    <h1 className="carousel-title ">โรงแรม HIRASA HOTEL</h1>
                    <p className="carousel-description">
                        ข้อให้ลูกค้าทุกท่านมีความสูขกับการพักผ่อน
                    </p>
                    
                    <button className="btn btn-primary carousel-btn">สำรวจเพิ่มเติม</button>
                </div>
                
            </div>
            <div className="col-lg-6">
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                            <img src="./img/00.jpg" className="d-block w-100 carousel-image" alt="Slide 1" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./img/01.jpg" className="d-block w-100 carousel-image" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/02.jpg" className="d-block w-100 carousel-image" alt="Slide 3" />
                        </div>

                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
