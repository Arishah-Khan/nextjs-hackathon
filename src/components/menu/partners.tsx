import Image from "next/image";

const Partners = () => {
  return (
    <div className="container mx-auto py-4 md:py-8 px-4 text-center">
      {/* Subheading */}
      <h3 className="text-md sm:text-lg font-medium text-[#333333] mb-2">Partners & Clients</h3>
      {/* Main Heading */}
      <h1 className="text-2xl md:text-4xl font-bold mb-8"  style={{ fontFamily: 'Helvetica, sans-serif' }}>
        We work with the best people
      </h1>
      {/* Image Section */}
      <div className="flex flex-wrap gap-4 md:gap-12 justify-center items-center">
        <div className="p-2">
          <Image
            src="/images/partner1.png"
            alt="Partner 1"
            width={150}
            height={150}
            className="rounded-lg w-[60px] h-[50px] sm:w-[120px] sm:h-[100px]"
          />
        </div>
        <div className="p-2">
          <Image
            src="/images/partner6.png"
            alt="Partner 2"
            width={150}
            height={150}
            className="rounded-lg w-[60px] h-[50px] sm:w-[120px] sm:h-[100px]"
          />
        </div>
        <div className="p-2">
          <Image
            src="/images/partner2.png"
            alt="Partner 3"
            width={150}
            height={150}
            className="rounded-lg w-[60px] h-[50px] sm:w-[120px] sm:h-[100px]"
          />
        </div>
        <div className="p-2">
          <Image
            src="/images/partner4.png"
            alt="Partner 4"
            width={150}
            height={150}
            className="rounded-lg w-[60px] h-[50px] sm:w-[120px] sm:h-[100px]"
          />
        </div>
        <div className="p-2">
          <Image
            src="/images/partner3.png"
            alt="Partner 5"
            width={150}
            height={150}
            className="rounded-lg w-[60px] h-[50px] sm:w-[120px] sm:h-[100px] "
          />
        </div>
        <div className="p-2">
          <Image
            src="/images/partner5.png"
            alt="Partner 6"
            width={150}
            height={150}
            className="rounded-lg w-[60px] h-[50px] sm:w-[120px] sm:h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
