import React from 'react'
import HeroSection from '@/features/home/_components/HeroSection'
import HomeContent from '@/features/home/_components/HomeContent'
import HomeSlider from '@/features/home/_components/HomeSlider'

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <HomeContent />
    <HomeSlider productId="1" />
    </>
  )
}

export default HomePage;