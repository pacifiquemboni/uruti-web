import React, { useState, useEffect } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Project {
  title: string;
  tags: string[];
  imageUrl: string;
}

interface Feature {
  icon: string;
  title: string;
}

interface ProductsProps {
  fetchProjects: (category: string) => Promise<Project[]>;
  getIconPath: (name: string) => string;
}

const Products: React.FC<ProductsProps> = ({ fetchProjects, getIconPath }) => {
  const categories = ["Websites", "Mobile", "UI/UX"];
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    handleFetchProjects(selectedCategory);
  }, [selectedCategory]);

  const handleFetchProjects = async (category: string) => {
    setLoading(true);
    const data = await fetchProjects(category);
    setProjects(data);
    setLoading(false);
  };

  const firstRow: Feature[] = [
    { icon: getIconPath("_conversion"), title: "Optimization<br/>That works" },
    { icon: getIconPath("_schedule"), title: "Executable<br/>Plan" },
    { icon: getIconPath("_messages"), title: "Real Time<br/>alerts" },
  ];

  const secondRow: Feature[] = [
    { icon: getIconPath("_file_searching"), title: "100%<br/>Transparency" },
    { icon: getIconPath("_team"), title: "Seasoned team<br/>members" },
    { icon: getIconPath("_leadership"), title: "Funnel<br/>Driven Leads" },
  ];

  return (
    <div className="px-10 md:px-20">
      {/* Header */}
      <section id="products-section" className="max-w-7xl mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-10 place-items-center place-content-center">
          <div className="flex gap-5">
            <div className="flex flex-col items-center py-2">
              <div className="w-4 h-4 rounded-full border-2 border-primary"></div>
              <div className="h-full bg-primary w-0.5"></div>
            </div>
            <div>
              <span className="text-primary">Our works</span>
              <h2 className="font-semibold text-3xl">
                We develop products that address issues faced by customers.
              </h2>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between gap-2 md:gap-10">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`p-3 px-4 rounded-lg w-full ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Listing */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-16 py-14 relative">
          {loading && (
            <div className="bg-primary/5 absolute w-full h-full min-h-64 backdrop-blur-sm"></div>
          )}
          {projects.map((product, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="rounded-lg overflow-hidden w-full md:h-96">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover cursor-pointer hover:scale-125 hover:opacity-85 duration-300"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{product.title}</h2>
                <p className="text-textGrey">{product.tags.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Discover More Button */}
        <div className="flex justify-center md:justify-end">
          <a href="/portfolio" className="p-2.5 px-16 rounded-lg bg-primary text-white flex gap-4 items-center">
            <span>Discover More</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>

        {/* Feature Sections */}
        <div className="flex gap-5 md:gap-8 my-10 mt-20">
          <div className="flex flex-col md:flex-row gap-8 justify-between w-full">
            {firstRow.map((item, index) => (
              <div key={index} className="flex p-4 px-8 w-full rounded-lg items-center gap-4 bg-[#FAFAFA]">
                <img src={item.icon} alt="Feature Icon" loading="lazy" />
                <h1 className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: item.title }}></h1>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full border-2 border-primary"></div>
            <div className="h-full bg-primary w-0.5"></div>
          </div>
        </div>

        <div className="flex gap-5 md:gap-8 mt-10">
          <div className="flex flex-col items-center">
            <div className="h-full bg-primary w-0.5"></div>
            <div className="w-4 h-4 rounded-full border-2 border-primary"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-between w-full">
            {secondRow.map((item, index) => (
              <div key={index} className="flex p-4 px-8 w-full rounded-lg items-center gap-4 bg-[#FAFAFA]">
                <img src={item.icon} alt="Feature Icon" loading="lazy" />
                <h1 className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: item.title }}></h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
