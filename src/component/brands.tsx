import React from "react";
import pfizerLogo from "../assets/icons/pfizer.svg";
import mufgLogo from "../assets/icons/mufg.svg";
import mastercardLogo from "../assets/icons/mastercard.svg";
import microsoftLogo from "../assets/icons/microsoft.svg";

const brands = [pfizerLogo, mufgLogo, mastercardLogo, microsoftLogo];

const Brands: React.FC = () => {
  return (
    <section className="brands-section p-10 text-center">
      <h4 className="uppercase font-bold text-xl">Brands We Have Worked With</h4>
      <div className="grid grid-cols-2 md:flex justify-center items-center gap-10 p-10">
        {brands.map((brand, index) => (
          <div key={index}>
            <img src={brand} alt="Brand Logo" loading="lazy" className="max-w-[150px] md:max-w-[200px]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
