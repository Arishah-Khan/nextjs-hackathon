import Image from 'next/image';
import React from 'react';

function ChefPage() {
  // Array of chef data (image URL, name)
  const chefs = [
    { name: 'Tahmina Rumi', image: '/images/chef1a.png' },
    { name: 'Jorina Begum', image: '/images/chef2a.png' },
    { name: 'M.Mohammad', image: '/images/team.png' },
    { name: 'Munna Kathy', image: '/images/chef4a.png' },
    { name: 'Tahmina Rumi', image: '/images/chef5.png' },
    { name: 'Bisnu devgon', image: '/images/chef6.png' },
    { name: 'Motin Molladsf', image: '/images/chef7.png' },
    { name: 'William Rumi', image: '/images/chef8.png' },
    { name: 'Kets william roy', image: '/images/chef9.png' },
    { name: 'Mahmud kholil', image: '/images/chef10.png' },
    { name: 'Ataur Rahman', image: '/images/chef11.png' },
    { name: 'Monalisa holly', image: '/images/chef12.png' },
  ];

  return (
    <div className="px-4 py-8">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items- gap-1 sm:gap-2 lg:gap-4">
        {chefs.map((chef, index) => (
          <div key={index} className="p-1 sm:p-2 lg:p-4  text-center">
            <Image
              src={chef.image}
              alt={chef.name}
              width="300"
              height="300"
              className="md:w-[300px] md:h-[300px] object-contain rounded-lg mb-4"
            />
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800" style={{ fontFamily: 'Helvetica, sans-serif' }}>{chef.name}</h2>
            <p className="text-gray-500">Chef</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChefPage;
