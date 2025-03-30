"use client"
import Image from "next/image"
import { productType } from "@/types/productType"
import { useState } from "react"

type imageProps = {
    image: productType,
    fill:boolean
}
export const ProductImage = ({ image,fill }: imageProps) => {
    const[loading,setLoading] = useState<Boolean>(false)
return fill ? (
    <Image src={image.image}
    fill
    alt={image.name}
    className={`object-cover ${loading ? ' scale-110 blur-3xl grayscale':'sacle-100 blur-0 grayscale-0'}`} 
    onLoadingComplete={()=>setLoading(false)}/>
):(
    <Image src={image.image} 
    width={400}
    height={700}
    alt={image.name}
    className={`object-cover ${loading ? ' scale-110 blur-3xl grayscale':'sacle-100 blur-0 grayscale-0'}`}
    onLoadingComplete={()=>setLoading(false)}/>
)
}