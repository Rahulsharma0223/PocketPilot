"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"



const HeroSection = () => {
    const imageRef = useRef();

    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll=() =>{
             const scrollPosition = window.scrollY;
             const scrollThreshold = 100;

            if(scrollPosition>scrollThreshold){
                imageElement.classList.add("scrolled");
            }else{
                imageElement.classList.remove("scrolled");
            }
         }

        window.addEventListener("scroll",handleScroll)

        return () => window.removeEventListener("scroll",handleScroll);
    },[]);

 return (
    <div className="pb-20 px-4">
        <div className="container mx-auto text-center" > 
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-extrabold tracking-tighter
                        pr-2 bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Balance Your Budget<br /> Build Your Future!
        </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A cutting-edge AI-powered finance platform that helps you track, analyze, 
            and optimize your spending with real-time insights. Stay on top of your expenses,
            make data-driven financial decisions, and take charge of your money—effortlessly. 
            Spend smart, save smarter! 🚀💰
            </p>
            <div className="flex justify-center space-x-4 ">
                <Link href="/dashboard">
                <Button size="lg" className="px-8">
                    Get Started
                </Button>
                </Link>

                <Link href="https://www.youtube.com/watch?v=egS6fnZAdzk&t=2039s">
                <Button size="lg"  variant="outline"  className="px-8">
                    Watch Demo
                </Button>
                </Link>
            </div>
            <div className="hero-image-wrapper">
                <div ref={imageRef} className="hero-image ">
                    <Image 
                    src="/banner.jpeg" 
                    alt="Dashboard Preview" 
                    width={1280} 
                    height={720}
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority
                    />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection

