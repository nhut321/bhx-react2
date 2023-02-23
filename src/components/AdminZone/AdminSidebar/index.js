import { useState } from 'react'
import './AdminSidebar.css'

export default function AdminSidebar({tabIndex,fn}) {

    return (
        <div className="admin-sidebar">
            <ul className="admin-sidebar__list">
                <li className={tabIndex === 1 ? "admin-sidebar__item active" : "admin-sidebar__item"}
                    onClick={() => fn(1)}
                >
                    <i style={{marginRight: '5px'}} className="fa-solid fa-house"></i>
                    <p>Trang chủ admin</p>
                </li>
                <li className={tabIndex === 2 ? "admin-sidebar__item active" : "admin-sidebar__item"}
                    onClick={() => fn(2)}
                >
                    <p>Thêm sản phẩm</p>
                </li>
            </ul>
        </div>
    )
}