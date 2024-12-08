interface Title {
    pageTitle: string;
  }
  
  const HeroSection = ({ pageTitle }: Title) => {
    return (
      <section
        className="relative w-full h-[250px] md:h-[350px] bg-cover bg-center max-w-[1340px] mx-auto"
        style={{
          backgroundImage: "url('/images/multiple.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-[0.2]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 sm:px-8 lg:px-16">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'Helvetica, sans-serif' }}>
            {pageTitle}
          </h2>
          <h5 className="text-lg sm:text-xl lg:text-xl text-white font-thin" style={{ fontFamily: 'Helvetica, sans-serif' }}>
            Home &gt; <span className="text-[#FF9F0D]">{pageTitle}</span>
          </h5>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  