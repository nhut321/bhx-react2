import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseUrl } from '../../config/baseUrl'
import ItemCard from '../ItemCard'
import './GroupProduct.css'

export default function GroupProduct({id, title}) {
    const [itemCard, setItemCard] = useState([])
    useEffect(()=> {
        async function fetchData() {
            await axios.get(baseUrl + '/products/filter-product/filter?groupid=' + id)
                .then(data => setItemCard(data.data))
        }
        console.log(123)
        fetchData()
    },[])
    console.log(title)
    return (
        <div className="group-product mg-10">
            <div className="group-product__header">
                <h3 className="group-product__header-text">{title}</h3>
            </div>
            <div className="group-product__body">
                {
                    itemCard.map((v,i) => {
                        return (
                            <ItemCard key={i} info={v} />
                        )
                    })
                }
            </div>
        </div>
    )
}