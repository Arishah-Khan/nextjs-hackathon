import ChefPage from '@/components/chef-page'
import HeroSection from '@/components/menu/heroSec'
import React from 'react'

function Chef() {
  return (
    <div>
         <main className="max-w-[1340px]  mx-auto">
<div className="bg-[#0d0d0d]">
             <HeroSection pageTitle="Our Chef" page="Chef"/></div>
             <ChefPage />
             </main>
      
    </div>
  )
}

export default Chef
