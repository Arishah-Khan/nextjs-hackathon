import Image from "next/image";

export default function Items() {
    return (
        <div className="flex flex-wrap px-2 md:px-4 py-8">
          {/* First Card */}
          <div className="p-2 sm:p-6 max-w-[350px] mx-auto flex flex-col items-center">
            <Image
              src="/images/chef.png"
              alt="Best Chef"
              width={24}
              height={24}
              className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold mb-2">Best Chef</h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat.
            </p>
          </div>
  
          {/* Second Card */}
          <div className="max-w-[350px] mx-auto p-2 sm:p-6 flex flex-col items-center">
          <Image
              src="/images/food.png"
              alt="Best Chef"
              width={24}
              height={24}
              className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold mb-2">120 Item Food</h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat.
            </p>
          </div>
  
          {/* Third Card */}
          <div className="max-w-[350px] mx-auto p-2 sm:p-6 flex flex-col items-center">
          <Image
              src="/images/environment.png"
              alt="Best Chef"
              width={24}
              height={24}
              className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] mb-4"
            />
            <h2 className="tet-lg sm:text-xl font-bold mb-2">Clean Environment</h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat.
            </p>
          </div>
        </div>
    );
  }
  