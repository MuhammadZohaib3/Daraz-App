import React from 'react';
import axios from 'axios';
import DrawerAppBar from '../components/Appbar';
import MediaCard from '../components/ProductCard';
import { useState, useEffect } from 'react'
import BasicModal from '../components/Modal';
import { useSearchParams } from "react-router-dom";


export default function Home() {
const [products, setProducts] = useState([]);
const [open, setOpen] = useState(false);
const [detail, setDetail] = useState({});
const [searchParams, setSearchParams] = useSearchParams();
useEffect(() => {
    const category = searchParams.get('category');
  if (!category || category === 'all') {
    axios('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
  }
 },[searchParams])


useEffect(() => {
  const category = searchParams.get('category');
  if (category && category !== 'all') {
  axios(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err))
  
  } 
 },[searchParams])

 const viewDetail = (id) => {
    axios(`https://fakestoreapi.com/products/${id}`)
    .then((res) => { 
        setDetail(res.data)
         setOpen(true)
         })
    .catch((err) => console.log(err))

}

  return (
     <div style={{ padding:20 }}>
       <DrawerAppBar />
       <BasicModal detail={detail} open={open} handleClose={() => setOpen(false)}/>
        <div style={{
            padding:60,
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-around"
            }}>
         {products.map((p, i) => { 
                 return <MediaCard viewDetail={viewDetail} product={p} key={i} />
         })}
         </div>
     </div>
  )}