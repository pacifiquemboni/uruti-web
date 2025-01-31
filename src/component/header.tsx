import lowerImage from '../assets/images/lower.svg'
import upperImage from '../assets/images/upper.svg'
import image1 from '../assets/images/image.png'

const Header = () => {
  return (
    <header
      id="header-section"
      className="h-[100vh] w-full bg-black bg-cover bg-fixed text-white"
      style={{ backgroundColor:'black',backgroundImage: `url(${image1})` }}
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
      <div className="flex flex-col items-center justify-center h-full text-center  p-10 max-w-5xl gap-10">
        <h1 className="text-primary text-4xl md:text-5xl font-semibold">
          Design and Development Team
          <br />
          that is innovative and passionate
        </h1>
        <p className="text-lg md:text-xl">
          Developers Hub creates trustworthy web-based software solutions. The
          hardworking design and development team is the key to our success. We
          have assisted various businesses in establishing and expanding their
          digital empires.
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
