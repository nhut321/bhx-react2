import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseUrl } from '../../config/baseUrl'
import ItemCard from '../ItemCard'
import './GroupProduct.css'

export default function GroupProduct({id}) {
    const [itemCard, setItemCard] = useState([])
    useEffect(()=> {
        async function fetchData() {
            await axios.get(baseUrl + '/products/filter-product/filter?groupid=' + id)
                .then(data => setItemCard(data.data))
        }
        console.log(123)
        fetchData()
    },[])
    return (
        <div className="group-product mg-10">
            <div className="group-product__header">
                <h3 className="group-product__header-text">sản phẩm khuyến mãi</h3>
            </div>
            <div className="group-product__body">
                {
                    // item.map((v,i) => {
                    //     return (
                    //         <ItemCard key={i} info={v}/>
                    //     )
                    // })
                    itemCard.map((v,i) => {
                        return (
                            <ItemCard key={i} info={v} />
                        )
                    })
                }
                {/* <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard /> */}
            </div>
        </div>
    )
}