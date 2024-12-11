import React from "react";
import './Navbar.css'; // ใช้สำหรับกำหนดลูกเล่นและปรับ CSS
import logo from "./img/1.jpg";

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#4B2E14" }}>
                <div className="container-fluid">
                    {/* เพิ่ม padding ให้ชื่อโรงแรม */}
                    <a className="navbar-brand text-white logo-brand" href="#">
                        <img src={logo} alt="Logo" style={{ width: "100px", borderRadius: "5px" }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white menu-item" href="#">หน้าหลัก</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white menu-item" href="#">จองห้อง</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white menu-item" href="#">เกี่ยวกับโรงแรม</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white menu-item" href="#">ช่องทางติดต่อ</a>
                            </li>
                        </ul>
                        {/* เพิ่มช่องว่างและขยับลงชื่อเข้าใช้ */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white login-link" href="#">ลงชื่อเข้าใช้</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

