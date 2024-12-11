import React from "react";
import "./Carousel2.css"; // เพิ่มไฟล์ CSS สำหรับตกแต่งเพิ่มเติม

function Carousel() {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="./img/00.jpg"
                        className="d-block w-100 custom-carousel-image"
                        alt="Slide 1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="./img/01.jpg"
                        className="d-block w-100 custom-carousel-image"
                        alt="Slide 2"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="./img/02.jpg"
                        className="d-block w-100 custom-carousel-image"
                        alt="Slide 3"
                    />
                </div>
            </div>
            {/* เพิ่มปุ่มควบคุมการสไลด์ */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
}

export default Carousel;
