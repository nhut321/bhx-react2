import { useState, useEffect } from "react";
import AdminAddProduct from "../../components/AdminZone/AdminAddProduct";
import AdminHeader from "../../components/AdminZone/AdminHeader";
import AdminHome from "../../components/AdminZone/AdminHome";
import AdminSidebar from "../../components/AdminZone/AdminSidebar";


function Admin() {
    const [tabActive, setTabActive] = useState(2)

    useEffect(() => {}, [])

    function toggleTab(index) {
        setTabActive(index)
    }

    return (
        <>
            <AdminHeader />
            <AdminSidebar tabIndex={tabActive} fn = {toggleTab}/>
            <div className="admin-main" style={{marginLeft: '200px', background: 'white', marginTop: '50px'}}>
                {
                    tabActive === 1 
                    ?
                    <AdminHome />
                    :
                    <AdminAddProduct />
                }
            </div>
        </>
    )
}

export default Admin