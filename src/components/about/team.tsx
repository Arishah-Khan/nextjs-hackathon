import Image from "next/image";

const teamMembers = [
  { id: 1, name: "Mark Henry", role: "Owner" },
  { id: 2, name: "Lucky Helen", role: "Chef" },
  { id: 3, name: "Moon Henry", role: "Founder" },
  { id: 4, name: "Tom Monrow", role: "Specialist" },
];

export default function Team() {
  return (
    <div
      className="relative bg-cover bg-center mb-[70px] sm:mb-[120px] h-[150px] sm:h-[250px] md:h-[350px]"
      style={{ backgroundImage: `url('/images/teambg.png')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FF9F0D] bg-opacity-80"></div>

      {/* Heading and Paragraph */}
      <div
        className="relative z-30 flex flex-col items-center justify-center text-center pt-4 sm:pt-8 md:pt-14  pb-2 md:pb-10"
        
      >
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 bg-cover bg-center" style={{ backgroundImage: `url('/images/centerbg.png')` }}>Team Member</h1>
        <p className="text-white max-w-lg text-xs sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>
      </div>

      {/* Cards */}
      <div className="absolute z-10 bottom-[-50px] sm:bottom-[-100px] w-full flex justify-center">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="text-center bg-white shadow-lg w-[70px] sm:w-[140px] md:w-[160px] lg:w-[200px] mx-auto overflow-hidden"
            >
              <Image
                src="/images/team.png"
                alt={member.name}
                width={200}
                height={150}
                className="w-[70px] h-[70px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] object-cover"
              />

              <div className="bg-white sm:p-1">
                <h3 className="text-[10px] sm:text-xs md:text-base font-semibold">{member.name}</h3>

                <p className="text-gray-600 text-[8px] sm:text-xs md:text-sm pb-1 sm:p-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
