import { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import SliderHero from '../../components/SliderHero'
import GroupCategori from '../../components/GroupCategori'
import GroupSale from '../../components/GroupSale'
import GroupProduct from '../../components/GroupProduct'
import { baseUrl } from '../../config/baseUrl'

export default function Home() {
    // const [itemCard, setItemCard] = useState([])
    // useEffect(() => {
    //     async function fetchData() { 
    //         await axios.get(`${baseUrl}/products/get-products`)
    //             .then(data => {
    //                 setItemCard(data.data)
    //         })
    //     }
    //     fetchData()
    // },[])
    return (
        <div className="home">
            <SliderHero />
            <GroupCategori />
            <GroupSale />
            <GroupProduct id={1} />
            <GroupProduct id={2} />
            <GroupProduct id={14} />
            {/* <GroupProduct />
            <GroupProduct /> */}
        </div>
    )
}