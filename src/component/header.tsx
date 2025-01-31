import lowerImage from '../assets/images/lower.svg'
import upperImage from '../assets/images/upper.svg'
import image1 from '../assets/images/image1.png'

const Header = () => {
  return (
    <header
      id="header-section"
      className="h-[100vh] w-full bg-black bg-cover bg-fixed text-white py-10"
      style={{ backgroundColor: 'black', backgroundImage: `url(${image1})` }}
    >
      <div>

      </div>
      <img
        src={lowerImage}
        alt="Lower Image"
        className="absolute bottom-0 left-0 select-none w-[150px] md:w-[270px]"
        width="270"
      />
      <img
        src={upperImage}
        alt="Upper Image"
        className="absolute top-0 right-0 select-none w-[150px] md:w-[270px]"
        width="270"
      />
      <div className="flex flex-col items-center justify-center h-full text-center  mx-auto p-10 max-w-5xl gap-10">
        <h1 className="text-[#00AAA9] text-4xl md:text-5xl font-bold ">
        Innovating with Technology <br /> for a Better Future
        </h1>
        <p className="text-lg">
          Welcome to Uruti Hub Limited, your trusted partner for Tech Services,
          Construction, Electrical Engineering, and Financial Services.
          We leverage cutting-edge technology across all our services to
          deliver innovative, efficient, and future-ready solutions.
          Whether you're looking for software development, smart infrastructure,
          power distribution, or financial technology solutions,
          we have you covered.

        </p>
        <div className="flex gap-8">
          <a
            href="/portfolio"
            className="bg-[#00AAA9] p-3 px-12 rounded-lg text-xs md:text-base"
          >
            Our Work
          </a>
          <a
            href="/#contact-us"
            className="border border-[#00AAA9] text-[#00AAA9] p-3 px-12 rounded-lg text-xs md:text-base"
          >
            Reach us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
