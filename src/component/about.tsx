import React from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Principle {
  icon: string;
  title: string;
  description: string;
}

interface AboutProps {
  services: Service[];
  principles: Principle[];
  graphic: string;
  bgImage: string;
}

const About: React.FC<AboutProps> = ({ services, principles, graphic, bgImage }) => {
  return (
    <div className="">
      {/* About Section */}
      <section id="about-section" className="px-10 md:px-20 max-w-7xl mx-auto md:py-10">
        <div className="grid md:grid-cols-2 gap-10 place-items-center place-content-center">
          <div className="flex gap-5">
            <div className="flex flex-col items-center py-2">
              <div className="w-4 h-4 rounded-full border-2 border-[#00AAA9]"></div>
              <div className="h-full bg-[#00AAA9] w-0.5"></div>
            </div>
            <div>
              <span className="text-[#00AAA9] font-extrabold text-4xl">About Us</span>
              <h2 className="font-semibold text-2xl">
              Uruti Hub Limited is a multi-industry company driven by technology, innovation, and excellence. Our expertise spans:
              </h2>
            </div>
          </div>
          <div>
            <p className="text-textGrey">
            With a team of experts and a commitment to excellence, we provide tailored solutions that help businesses and individuals achieve their goals.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-4 gap-10 py-16">
          {services.map((service, index) => (
            <div key={index} className="text-center flex flex-col items-center gap-4 hover:shadow-lg p-4">
              <img src={service.icon} alt="Service Icon" width="60" loading="lazy" />
              <h2 className="text-lg font-bold">{service.title}</h2>
              <p className="text-textGrey">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles-section" className="bg-black bg-cover">
        <div className="bg-black py-16 md:py-24 px-10 md:px-20 text-white bg-opacity-40" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-semibold text-3xl text-center md:text-left">
                We Work by Creative Principles
              </h2>
              <div className="pt-10">
                {principles.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center py-4">
                    <div className="w-40 md:w-auto">
                      <img src={item.icon} width="60" className="w-full h-full" alt="Principle Icon" loading="lazy" />
                    </div>
                    <div>
                      <h4 className="text-[#00AAA9] font-semibold text-lg">{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={graphic} alt="Graphic" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
