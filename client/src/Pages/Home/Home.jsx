import React, { useState } from 'react'
import { addToCart } from '../../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import BannerComponent from "../../Components/BannerComponent/BannerComponent"
import Chose from "../../Components/Choose/chose"
import BrandsSection from "../../Components/BrandsSection/BrandsSection"
import Pricing2 from "../../Components/Pricing/pricing2"
import Works from "../../Components/Works/works"
import Join from "../../Components/JoinPartner/join"

export default function Home() {
    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(addToCart(e))
        toast.success("Item added In Your Cart")
    }
    return (
        <>
            <BannerComponent />
            
        </>
    )
}