import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const productList = [
  {
    href: "https://waifu2x.booru.pics/outfiles/59622c38bfa3b9dc8ee3adf06a302774dd64c46d_s2_n2_y2.jpg",
    brand: "Acer",
    name: "Nitro 5 2023",
    bgcolor: "dark",
    height: "short",
  },
  {
    href: "https://waifu2x.booru.pics/outfiles/6ddd1beb806ef3753918b799bf44590e53242ee1_s2_n2_y2.jpg",
    brand: "Acer",
    name: "Nitro 16",
    bgcolor: "dark",
    height: "tall",
  },
  {
    href: "https://headphones.com/cdn/shop/files/Truthear_Zero_Red_9_Small_4eb5d85e-3287-440a-95dd-9b686de17507.jpg?v=1685420900&width=2000",
    brand: "Truthear x Crinacle",
    name: "ZERO:RED",
    bgcolor: "dark",
    height: "tall",
  },
  {
    href: "https://headfonics.com/wp-content/uploads/2023/06/Moondrop-Blessing-3-Review-featured-image.jpg",
    brand: "Moondrop",
    name: "Blessing 3",
    bgcolor: "dark",
    height: "short",
  },
];

export const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    width: 500,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="relative -pb-10">
      <Slider {...carouselSettings} className='overflow-hidden'>
        {productList.map((item) => (
          <div key={item.href}>
            <img className="object-cover w-full h-full" src={item.href} alt="Card 1" />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex items-center justify-end">
        <div className={`text-right mr-10 ${productList[currentSlide].height === "tall" ? "mt-96" : "mt-20"}`}>
          <h1 className={`text-lg font-bold ${productList[currentSlide].bgcolor === "dark" ? "text-white" : "text-black"} sm:text-lg md:text-lg uppercase`}>
            New Arrivals
          </h1>
          <h3 className={`text-4xl font-bold ${productList[currentSlide].bgcolor === "dark" ? "text-white" : "text-black"} sm:text-4xl md:text-5xl`}>
            {productList[currentSlide].brand}
          </h3>
          <h5 className={`text-2xl ${productList[currentSlide].bgcolor === "dark" ? "text-white" : "text-black"} sm:text-2xl md:text-3xl`}>
            {productList[currentSlide].name}
          </h5>
          <button className={`${productList[currentSlide].bgcolor === "light" ? "text-white text-outline-white bg-black" : "text-black bg-white"} btn rounded-lg px-6 py-3 mt-4 text-lg font-medium`}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
