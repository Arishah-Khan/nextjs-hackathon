import Checkout from '@/components/check-out'
import HeroSection from '@/components/menu/heroSec'
import React from 'react'

function page() {
  return (
      <main className="max-w-[1340px]  mx-auto">
<div className="bg-[#0d0d0d]">
             <HeroSection pageTitle="CheckOut Page" page="Checkout" /></div>
      <Checkout />
    </main>
  )
}

export default page
