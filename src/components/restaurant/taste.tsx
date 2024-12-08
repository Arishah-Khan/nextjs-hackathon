import Image from "next/image";

export default function TasteSec() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-8 px-4 py-10 mb-10 mt-6">
      {/* Image Section */}
      <div className="space-y-4 order-2 md:order-1 pt-8">
        {/* First Row - Two Images */}
        <div className="flex items-end lg:gap-3 justify-center max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] mx-auto">
          <Image
            src="/images/taste1.png"
            alt="image1"
            width={300}
            height={300}
            className="object-contain w[170px] h-[170px] sm:w[200px] sm:h-[200px] lg:w-[260px] lg:h-[260px]"
          />
          <Image
            src="/images/food2.png"
            alt="image2"
            width={220}
            height={200}
            className="object-contain w[120px] h-[120px] sm:w[140px] sm:h-[140px] lg:w-[180px] lg:h-[180px]"
          />
        </div>

        {/* Second Row - Four Images */}
        <div className="flex gap-2 justify-center items-start max-w-[300px] sm:max-w-[355px] lg:max-w-[450px] mx-auto">
          <div className="flex gap-2">
            <Image
              src="/images/taste2.png"
              alt="image3"
              width={200}
              height={200}
              className="object-contain w[140px] h-[140px] sm:w[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px]"
            />
            <Image
              src="/images/taste4.png"
              alt="image4"
              width={200}
              height={200}
              className="object-contain w[90px] h-[90px] sm:w[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/images/taste5.png"
              alt="image5"
              width={200}
              height={200}
              className="object-contain w[70px] h-[70px] sm:w[80px] sm:h-[80px] lg:w-[120px] lg:h-[120px]"
            />
            <Image
              src="/images/taste6.png"
              alt="image6"
              width={200}
              height={200}
              className="object-contain w[70px] h-[70px] sm:w[80px] sm:h-[80px] lg:w-[120px] lg:h-[120px]"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="space-y-6 text-center md:text-left order-1 md:order-2">
        <h4
          className="text-[#FF9F0D] font-[GreatVibes] text-xl sm:text-2xl lg:text-3xl"
          style={{ fontFamily: "Great Vibes" }}
        >
          Why Choose Us
        </h4>
        <h2
          className="text-white font-bold font-[Helvetica] text-xl sm:text-2xl lg:text-4xl"
          style={{ fontFamily: "Helvetica" }}
        >
          <span className="text-[#FF9F0D]">Ex</span>traordinary Taste
          <br />
          And Experienced
        </h2>
        <p className="text-white text-sm sm:text-base lg:text-lg max-w-md mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        {/* Icons with Labels */}
        <div className="flex justify-center md:justify-start items-start gap-8 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-[#FF9F0D] p-6 rounded-md">
              <Image
                src="/images/burger.png"
                alt="burger"
                width={40}
                height={40}
                className="object-contain max-w-full h-auto"
              />
            </div>
            <span className="text-white text-sm pt-1">Fast Food</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#FF9F0D] p-6 rounded-md">
              <Image
                src="/images/cookie.png"
                alt="cookie"
                width={40}
                height={40}
                className="object-contain max-w-full h-auto"
              />
            </div>
            <span className="text-white text-sm pt-1">Lunch</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#FF9F0D] p-6 rounded-md">
              <Image
                src="/images/wine.png"
                alt="wine"
                width={40}
                height={40}
                className="object-contain max-w-full h-auto"
              />
            </div>
            <span className="text-white text-sm pt-1">Dinner</span>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex items-center justify-center gap-3 rounded-md bg-white max-w-[230px] p-3 relative mx-auto md:mx-0">
          {/* Small Box */}
          <div className="absolute left-0 top-0 h-full w-[10px] rounded-tl-md rounded-bl-md bg-[#FF9F0D]"></div>

          {/* Content */}
          <h1 className="text-[#FF9F0D] text-4xl font-bold">30+</h1>
          <div>
            <p className="text-black">Years of</p>
            <h3 className="text-black text-lg font-bold">Experience</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
