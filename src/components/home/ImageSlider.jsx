import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const images = [
  { src: "/s1.jpg", label: "Shop Now" },
  { src: "/s2.jpg", label: "Shop Now" },
  { src: "/s3.jpg", label: "Shop Now" },
  { src: "/s4.jpg", label: "Shop Now" },
  { src: "/s5.jpg", label: "Shop Now" },
  { src: "/s6.jpg", label: "Shop Now" },
  { src: "/s7.jpg", label: "Shop Now" },
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="w-full md:w-1/3 pr-0 md:pr-10 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            More to Explore
          </h2>
          <p className="text-gray-600 mt-2">
            Explore seasonal collections, iconic accessories, and more
          </p>
        </div>

        {/* Image Slider Section */}
        <div className="relative w-full md:w-2/3 flex overflow-hidden">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 p-3 md:p-2 rounded-full text-gray-600 hover:bg-gray-300 z-10"
          >
            <FaChevronLeft size={20} />
          </button>

          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{
              transform: `translateX(-${index * (100 / images.length)}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 relative group overflow-hidden cursor-pointer"
              >
                <img
                  src={img.src}
                  alt="Slide Image"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-2 text-sm font-semibold rounded hover:bg-gray-800 cursor-pointer"
                  onClick={() => navigate("/shop")}
                >
                  {img.label}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-3 md:p-2 rounded-full text-gray-600 hover:bg-gray-300 z-10"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
