'use client'
import React from 'react'
import { useEffect } from "react";

const Preloader = () => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        const preloader = document.getElementById("preloader");
        setInterval(() => {
            if (preloader) {
                preloader.style.display = 'none';
                document.body.style.overflowY = "overlay";
            }
        }, 3000);
    }, []);

    return (
        <div id="preloader" className='preloader w-full h-full gap-4 fixed top-0 left-0 right-0 bottom-0 bg-default  z-[100000000000]'>
            <div className='w-full h-full animate-pulse bg-gradient-to-t from-default via-box/60 flex items-center justify-center to-default'>
               
                <div className='animate-float  '>
                        <div className="w-[40px] animate-spin flex justify-center rounded-2xl items-center h-[40px] md:w-[80px] md:h-[80px] border-[5px] border-l-primary border-r-white border-t-secondary border-b-tertiary ">
                        <div className="w-[10px]   rounded-2xl h-[10px] md:w-[20px] md:h-[20px] border-[5px]  border-l-primary border-r-whiteborder-t-secondary border-b-tertiary ">
                        </div>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Preloader