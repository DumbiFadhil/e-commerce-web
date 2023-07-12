import React, { useEffect, useState } from "react";

export const AboutUs = () => {
  const [motto, setMotto] = useState("");

  useEffect(() => {

    const getRandomStatus = async () => {
      const mottos = [
        ["Revolutionizing the way you experience technology."],
        ["Unleash your potential with our premium tech selection."],
        ["Quality and innovation - our keys to unlocking limitless possibilities."],
        ["Passionate experts dedicated to guiding you on your tech journey."],
        ["Your satisfaction is our priority - we go above and beyond."],
        ["Innovative technology for the modern world."],
        ["Empowering your digital lifestyle."],
        ["Experience the future of computing."],
        ["Your one-stop-shop for all things tech."],
        ["Revolutionize your work and play with our tech."],
        ["Elevate your digital experience with our premium tech selection."]
      ];
      const randomIndex = Math.floor(Math.random() * mottos.length);
      setMotto(mottos[randomIndex]);
    };

    getRandomStatus();
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center justify-between">
        <div className="text-center mx-40 px-20 mt-10">
          <h1 className="font-semibold text-4xl mb-2">Welcome to TechHub </h1>
          <h1 className="font-semibold text-2xl text-gray-700 mb-5">Your Gateway to Cutting-Edge Technology!</h1>
          <p className="text-lg text-justify font-medium">At TechHub, we are passionate about revolutionizing the way you experience technology. Our mission is to provide you with a one-stop destination for all your computer tech needs. Whether you're a gaming enthusiast, a tech-savvy professional, or someone simply seeking to enhance your digital lifestyle, we've got you covered.</p>

          <h1 className="font-semibold text-2xl text-gray-700 my-5 mt-10">Unleash Your Potential with TechHub's Premium Selection:</h1>
          <p className="text-lg text-justify font-medium">Discover an unparalleled range of top-notch computer techs meticulously curated to elevate your productivity, enhance your creativity, and ignite your imagination. From high-fidelity in-ear monitors that transport you into a world of immersive soundscapes to lightning-fast gaming keyboards engineered for precision, our collection is designed to amplify your digital journey.</p>

          <h1 className="font-semibold text-2xl text-gray-700 my-5 mt-10">Quality Meets Innovation:</h1>
          <p className="text-lg text-justify font-medium">We understand that technology is not just about gadgets; it's about the experiences they enable. That's why, at TechHub, we partner with industry-leading brands known for their unwavering commitment to quality and innovation. Every product we offer undergoes rigorous testing to ensure it meets our stringent standards, empowering you to push boundaries and unlock limitless possibilities.</p>

          <h1 className="font-semibold text-2xl text-gray-700 my-5 mt-10">Passionate Experts at Your Service:</h1>
          <p className="text-lg text-justify font-medium">At the heart of TechHub lies a team of dedicated tech enthusiasts who live and breathe innovation. Our knowledgeable experts are here to guide you every step of the way, helping you navigate the ever-evolving landscape of computer tech. Whether you need assistance choosing the perfect laptop, troubleshooting an issue, or seeking recommendations tailored to your specific needs, our team is committed to delivering unparalleled customer support.</p>

          <h1 className="font-semibold text-2xl text-gray-700 my-5 mt-10">Your Satisfaction, Our Priority:</h1>
          <p className="text-lg text-justify font-medium">At TechHub, we believe in building lasting relationships with our customers. Your satisfaction is our driving force, and we go above and beyond to ensure your shopping experience with us is seamless and enjoyable. From hassle-free ordering to secure and prompt delivery, we prioritize your needs to provide a stress-free journey from the moment you land on our website.</p>

          <h1 className="font-semibold text-2xl text-gray-700 my-5 mt-10">Join the TechHub Community:</h1>
          <p className="text-lg text-justify font-medium">When you shop at TechHub, you become part of a vibrant community of tech enthusiasts. Connect with like-minded individuals, stay up-to-date with the latest tech trends, and gain exclusive access to special promotions and events. Together, let's explore the boundless world of technology and inspire each other to reach new heights.</p>

          <h5 className="font-semibold italic font-serif mt-16 text-2xl text-gray-900">
            "{motto}"
          </h5>
        </div>
        <div className="rounded-full mx-auto bg-slate-700 h-1 w-20 mb-1 mt-20"></div>
        <h2 className="text-2xl font-semibold mt-2">Meet Our Team</h2>
        <div className="mt-5 mb-10 grid gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="border-[2px] border-gray-300 bg-gray-100 drop-shadow-lg rounded-lg p-4 hover:shadow-xl">
            <img
              className="w-60 h-60 rounded-full mx-auto"
              src={"https://cdn.discordapp.com/attachments/451391528703623175/1128447107204911227/Fadhil.png"}
              alt="Profile"
            />
            <div className="rounded-full bg-slate-700 h-1 mx-auto mt-3 mb-3"></div>
            <h2 className="mt-2 text-lg font-semibold">Muhammad Fadhil Dumbi</h2>
            <p className="text-gray-600">Student at Jakarta State Polytechnic</p>
            <p className="text-gray-600">Freelance Web Developer</p>
            <br></br>
            <div className="flex justify-center mt-4 gap-5">
              <a href="https://www.linkedin.com/in/dumbifadhil/" className="fill-slate-700 hover:fill-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              </a>
              <a href="https://www.instagram.com/kd_fadhil/" className="fill-slate-700 hover:fill-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>
              <a href="https://twitter.com/FKanSaja" className="fill-slate-700 hover:fill-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" /></svg>
              </a>
              <a href="/contact" className=" text-gray-600 hover:text-slate-400 hover:underline text-2xl">Message</a>
            </div>
          </div>

          <div className="border-[2px] border-gray-300 bg-gray-100 drop-shadow-lg rounded-lg p-4 hover:shadow-xl">
            <img
              className="w-60 h-60 rounded-full mx-auto"
              src={"https://cdn.discordapp.com/attachments/451391528703623175/1128447107548848239/Handika.jpg"}
              alt="Profile"
            />
            <div className="rounded-full bg-slate-700 h-1 mx-auto mt-3 mb-3"></div>
            <h2 className="mt-2 text-lg font-semibold">Handika Nur'Aziz</h2>
            <p className="text-gray-600">Student at Jakarta State Polytechnic</p>
            <br></br>
            <br></br>
            <div className="flex justify-center mt-4 gap-4">
              <a href="https://www.linkedin.com/in/handika-nur-aziz-31854b24b/" className="fill-slate-700 hover:fill-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              </a>
              <a href="https://www.instagram.com/handika.na/" className="fill-slate-700 hover:fill-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>
              <a href="https://twitter.com/elonmusk" className="fill-slate-700 hover:fill-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" /></svg>
              </a>
              <a href="/contact" className=" text-gray-600 hover:text-slate-400 hover:underline text-2xl">Message</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}