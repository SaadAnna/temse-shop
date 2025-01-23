import Fiverlogo from "./fiver.png";
import Nikelogo from "./nikee.png";
import Teslalogo from "./tesla.png";
import Bosslogo from "./boss.png";
import Amglogo from "./amg.png";
import Obeylogo from "./obey.png";
import Macronlogo from "./macron.png";
import Samsunglogo from "./samsung.png";
import Sonylogo from "./sony.png";
import Productone from "./productimage.png";
import Producttwo from "./productimageone.png";
import Productthree from "./productimagetwo.png";
import Productfour from "./productfour.png";
import Productfive from "./productfive.png";
import Productsix from "./productsix.png";
import Productseven from "./productseven.png";
import Productheight from "./productheight.png";
import Productnine from "./productnine.png";
import Productten from "./productten.png";
import Producteleven from "./producteleven.png";
import Producttwelve from "./producttwelve.png";
import Lastproduct from "./lastproduct.png";
import Finaleproduct from "./finaleproduct.png";
import Product from "./product.png";
import Sneakersone from "./sneakersone.png";
import Sneakerstwo from "./sneakerstwo.png";
import Sneakersthree from "./sneakersthree.png";
import Sneakersfour from "./sneakersfour.png";
import Sneakersfive from "./sneakersfive.png";
import Sneakerssix from "./sneakerssix.png";
import Hoddieone from "./hoddieone.png";
import Hoddietwo from "./hoddietwo.png";
import Hoddiethree from "./hoddiethree.png";
import Hoddiefour from "./hoddiefour.png";
import Accessoirsesone from "./accessoirsesone.png";
import Accessoirsestwo from "./accessoirsestwo.png";
import Accessoirsesthree from "./accessoirsesthree.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Homepage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-col text-center mt-32 gap-1 "
      >
        <p className="font-text font-normal text-lg md:text-xl  text-neutral-600">
          Discover the fashion trends that express you.
        </p>
        <h1 className="font-text font-semibold text-4xl md:text-7xl lg:text-8xl text-black ">
          Take your style to
          <br />
          the next level.
        </h1>
        <p className="font-text font-normal text-lg md:text-xl  text-neutral-600">
          Shop, shine, repeat.
        </p>
        <button className="text-white w-72 relative md:top-10 top-3  font-Text text-lg  bg-green-600  m-auto pl-4 pr-4 pt-2 pb-2 rounded-full hover:bg-green-700">
         Shop now
        </button>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-col text-center mt-52 gap-3"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="font-text font-semibold text-3xl text-black "
        >
          Loved by Companies of All Sizes
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="font-text font-normal text-lg md:text-xl  text-neutral-600"
        >
          Youll be in good companies
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-wrap items-center justify-center mx-auto mt-24  gap-14"
      >
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-28 h-28 object-contain"
          src={Fiverlogo}
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-28 h-28 object-contain"
          src={Bosslogo}
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-28 h-28 object-contain"
          src={Teslalogo}
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-28 h-28 object-contain"
          src={Nikelogo}
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-28 h-28 object-contain"
          src={Obeylogo}
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-wrap items-center justify-center mx-auto mt-4 gap-14"
      >
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-28 h-28 object-contain"
          src={Sonylogo}
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-28 h-28 object-contain"
          src={Amglogo}
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-28 h-28 object-contain"
          src={Macronlogo}
        />
        <img
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-28 h-28 object-contain"
          src={Samsunglogo}
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-col text-center mt-32 gap-3"
      >
        <h1 className="font-text font-semibold text-3xl text-black ">
          Explore our features
        </h1>
        <p className="font-text font-normal text-lg md:text-xl  text-neutral-600">
          Discover our features that make us the best products{" "}
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-wrap items-center justify-center mx-auto mt-32 gap-14"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col w-72 h-72 bg-neutral-100 p-7 text-start rounded-lg gap-2"
        >
          <svg
            className="w-8 h-8 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
            <path
              fillRule="evenodd"
              d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
              clipRule="evenodd"
            />
            <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
          </svg>

          <h1 className="font-text font-semibold text-3xl mt-4 text-black ">
            Quality{" "}
          </h1>
          <p className="font-text font-normal text-lg md:text-xl  text-neutral-600">
            Our store has high quality in all our products to ensure you have a
            great style.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col w-72 h-72 bg-neutral-100 p-7 text-start rounded-lg gap-2"
        >
          <svg
            className="w-8 h-8 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
            />
          </svg>
          <h1 className="font-text font-semibold text-3xl mt-4 text-black ">
            The price
          </h1>
          <p className="font-text font-normal text-lg md:text-xl  text-neutral-600">
            Our store guarantees you reasonable prices to enable you to purchase
            all our products.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col w-72 h-72 bg-neutral-100 p-7 text-start rounded-lg gap-2"
        >
          <svg
            className="w-8 h-8 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            />
          </svg>

          <h1 className="font-text font-semibold text-3xl mt-4 text-black ">
            Delivery
          </h1>
          <p className="font-text font-normal text-lg md:text-xl  text-neutral-600">
            Through our store, you can order any of our products from all over
            the world.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-col text-center mt-44"
      >
        <h1 className="font-text font-semibold text-3xl text-black ">
          New arrivals
        </h1>
        <p className="font-text font-normal text-lg md:text-xl  text-neutral-600">
          Our best selling products around the world
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-wrap items-center justify-center mx-auto mt-28 gap-12"
      >
        <button
          data-aos="fade-up"
          data-aos-duration="900"
          onClick={Alltype}
          className="font-text font-normal text-lg text-neutral-500 hover:text-black focus:text-black"
        >
          All
        </button>
        <button
          data-aos="fade-up"
          data-aos-duration="900"
          onClick={Sneakerstype}
          className="font-text font-normal text-lg text-neutral-500 hover:text-black focus:text-black"
        >
          Sneakers
        </button>
        <button
          data-aos="fade-up"
          data-aos-duration="900"
          onClick={Hoddietype}
          className="font-text font-normal text-lg text-neutral-500 hover:text-black focus:text-black"
        >
          Hoddie
        </button>
        <button
          data-aos="fade-up"
          data-aos-duration="900"
          onClick={Accessoirsestype}
          className="font-text font-normal text-lg text-neutral-500 hover:text-black focus:text-black"
        >
          Accessoires
        </button>
      </div>
      <div
        id="alltype"
        className="flex flex-wrap items-center justify-center mx-auto mt-24 gap-4"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Nasa Nike T-shirt
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Productone}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $120.85
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Cotton Shirt
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Producttwo}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $50.85
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Balck Addidas T-shirt
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Productthree}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $150.85
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Venom Pants
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Productfour}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $102.45
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black">
            Blue Nike Pants
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Productfive}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $40.57
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Addidas Jeans{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Productsix}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $200.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Nike Shorts{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Productseven}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $20.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Black Addidas Shorts{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Productheight}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $200.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Simple Shorts{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Productnine}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $200.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Nike Shoes{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Sneakersfour}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $70.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Addidas Shoes{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Sneakersfive}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $80.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Lacoste Shoes{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Sneakerssix}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $90.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
      </div>
      <div
        id="Sneakerstype"
        className=" hidden flex-wrap items-center justify-center mx-auto mt-24 gap-4"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Air Jordan{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Sneakersone}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $400.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Nike air{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Sneakerstwo}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $140.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            New balance{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Sneakersthree}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $800.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Nike Shoes{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Sneakersfour}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $70.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Addidas Shoes{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Sneakersfive}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $80.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Lacoste Shoes{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Sneakerssix}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $90.99
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
      </div>
      <div
        id="Hoddietype"
        className="hidden flex-wrap items-center justify-center mx-auto mt-24 gap-4"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Nike Hoddie{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Hoddieone}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $58.87
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Gray Hoddie{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Hoddietwo}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $190.28
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Addidas Hoddie{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Hoddiethree}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $145.35
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Spiderman Hoddie{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Hoddiefour}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $124.22
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
      </div>
      <div
        id="Accessoirsestype"
        className="hidden flex-wrap items-center justify-center mx-auto mt-24 gap-4"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Black Bag{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Accessoirsesone}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $458.54
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            Yellow cap{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Accessoirsestwo}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $22.41
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col bg-gray-100 rounded-sm text-start p-4 w-72 h-fit cursor-pointer hover:bg-neutral-200 "
        >
          <h1 className="font-text font-semibold text-lg text-black ">
            black watch{" "}
          </h1>
          <img
            className="w-64 h-64 mt-5 m-auto object-contain"
            src={Accessoirsesthree}
          />
          <div className="flex justify-between items-center">
            <span className="font-text text-black text-base font-semibold">
              $1450.00
            </span>
            <a
              href="#"
              className="font-semibold font-text text-base text-black"
            >
              Shop
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-col text-center mt-52 gap-2"
      >
        <h1 className="font-text font-semibold text-3xl text-black ">
          Featured product
        </h1>
        <p className="font-text font-normal text-lg md:text-xl  text-neutral-600">
          Our best selling products around the world
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center mx-auto mt-28 gap-4">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex gap-4 w-80 h-24 bg-gray-100 items-center rounded-sm cursor-pointer "
        >
          <div className="bg-neutral-200 w-28 h-fit overflow-hidden">
            <img className="w-96 h-24 object-cover" src={Productten} />
          </div>
          <div className="flex flex-col text-start">
            <h1 className="font-text font-semibold text-xl text-black ">
              Sneakers
            </h1>
            <p className="font-text font-normal text-base md:text-lg  text-neutral-600">
              270 Product
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex gap-4 w-80 h-24 bg-gray-100 items-center rounded-sm cursor-pointer "
        >
          <div className="bg-neutral-200 w-28 h-fit overflow-hidden">
            <img className="w-96 h-24 object-cover" src={Producteleven} />
          </div>
          <div className="flex flex-col text-start">
            <h1 className="font-text font-semibold text-xl text-black ">
              Accessoirses
            </h1>
            <p className="font-text font-normal text-base md:text-lg  text-neutral-600">
              140 Product
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex gap-4 w-80 h-24 bg-gray-100 items-center rounded-sm cursor-pointer "
        >
          <div className="bg-neutral-200 w-28 h-fit overflow-hidden">
            <img className="w-96 h-24 object-cover" src={Producttwelve} />
          </div>
          <div className="flex flex-col text-start">
            <h1 className="font-text font-semibold text-xl text-black ">
              Clothes
            </h1>
            <p className="font-text font-normal text-base md:text-lg  text-neutral-600">
              500 Product
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex gap-4 w-80 h-24 bg-gray-100 items-center rounded-sm cursor-pointer "
        >
          <div className="bg-neutral-200 w-28 h-fit overflow-hidden">
            <img className="w-96 h-24 object-cover" src={Lastproduct} />
          </div>
          <div className="flex flex-col text-start">
            <h1 className="font-text font-semibold text-xl text-black ">
              Hoddie
            </h1>
            <p className="font-text font-normal text-base md:text-lg  text-neutral-600">
              100 Product
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex gap-4 w-80 h-24 bg-gray-100 items-center rounded-sm cursor-pointer "
        >
          <div className="bg-neutral-200 w-28 h-fit overflow-hidden">
            <img className="w-96 h-24 object-cover" src={Product} />
          </div>
          <div className="flex flex-col text-start">
            <h1 className="font-text font-semibold text-xl text-black ">
              Jacket
            </h1>
            <p className="font-text font-normal text-base md:text-lg  text-neutral-600">
              400 Product
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex gap-4 w-80 h-24 bg-gray-100 items-center rounded-sm cursor-pointer "
        >
          <div className="bg-neutral-200 w-28 h-fit overflow-hidden">
            <img className="w-96 h-24 object-cover" src={Finaleproduct} />
          </div>
          <div className="flex flex-col text-start">
            <h1 className="font-text font-semibold text-xl text-black ">
              Top Brands
            </h1>
            <p className="font-text font-normal text-base md:text-lg  text-neutral-600">
              370 Product
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-col justify-center text-center mt-40 gap-4"
      >
        <h1 className="font-text font-semibold text-5xl text-black ">
          Latest results speak for us{" "}
        </h1>
        <p className="font-text font-normal text-lg md:text-xl  text-neutral-600">
          The unique world of clothing{" "}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-32 gap-20 md:gap-44">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col gap-4 text-center"
        >
          <h2 className="font-text text-black  font-semibold text-5xl ">
            +80M
          </h2>
          <p className="font-text font-normal text-neutral-900 text-lg">
            Buyer from us
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col gap-4 text-center"
        >
          <h2 className="font-text text-black  font-semibold text-5xl ">
            +50K
          </h2>
          <p className="font-text font-normal text-neutral-900 text-lg">
            Store in world
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col gap-4 text-center"
        >
          <h2 className="font-text text-black  font-semibold text-5xl ">
            +110K
          </h2>
          <p className="font-text font-normal text-neutral-900 text-lg">
            hard working workers
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="flex flex-wrap mx-auto items-center justify-center mt-60 gap-16 lg:gap-44"
      >
        <div className="flex flex-col w-11/12 lg:w-1/2 text-center lg:text-start gap-3">
          <span
            data-aos="fade-up"
            data-aos-duration="900"
            className="font-text text-neutral-900 text-normal text-lg"
          >
            Tems Shop
          </span>
          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            className="font-text font-semibold text-black text-6xl"
          >
            Are you ready to upgrade your style?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            className="font-text text-neutral-600 text-lg font-normal"
          >
            You can now order all clothing requirements from the best store in
            the world
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex gap-5 lg:gap-10 justify-center items-center flex-wrap"
        >
          <a
            data-aos="fade-up"
            data-aos-duration="900"
            href="#"
            className="w-fit h-fit pb-3 pt-3 pl-5 pr-5 rounded-xl bg-green-700 text-white font-text font-normal text-xl hover:bg-green-800"
          >
            Shop Now
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="900"
            href="#"
            className="w-fit h-fit pb-3 pt-3 pl-5 pr-5 rounded-xl bg-transparent text-black font-text font-normal text-xl border border-solid border-neutral-400 hover:bg-neutral-100"
          >
            Learn More
          </a>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="md:flex md:flex-row flex flex-col items-start text-start justify-start md:justify-center mx-auto gap-10 md:gap-10 lg:gap-44 mt-52"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col gap-4"
        >
          <h4
            data-aos="fade-up"
            data-aos-duration="900"
            className="text-black font-text font-semibold text-xl"
          >
            Temse
          </h4>
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            className="font-text font-normal text-neutral-600 text-lg"
          >
            The best store of clothing <br /> in the world
          </p>
          <div className="flex flex-col gap-2 mt-4 text-start"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-start "
        >
          <h4
            data-aos="fade-up"
            data-aos-duration="900"
            className="text-black font-text font-semibold text-lg"
          >
            Company
          </h4>
          <div className="flex flex-col gap-2 mt-4 text-start">
            <a
              data-aos="fade-up"
              data-aos-duration="900"
              href="#"
              className="font-text font-normal text-neutral-600 text-lg hover:text-black"
            >
              Home
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="900"
              href="#"
              className="font-text font-normal text-neutral-600 text-lg hover:text-black"
            >
              About
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="900"
              href="#"
              className="font-text font-normal text-neutral-600 text-lg hover:text-black"
            >
              Shop
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="900"
              href="#"
              className="font-text font-normal text-neutral-600 text-lg hover:text-black"
            >
              Contact
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col text-start"
        >
          <h4 className="text-black font-text font-semibold text-lg">Shop</h4>
          <div className="flex flex-col gap-2 mt-4 text-start">
            <a
              data-aos="fade-up"
              data-aos-duration="900"
              href="#"
              className="font-text font-normal text-neutral-600 text-lg  hover:text-black"
            >
              Sneakers
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="900"
              href="#"
              className="font-text font-normal text-neutral-600 text-lg  hover:text-black"
            >
              Hoddie
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="900"
              href="#"
              className="font-text font-normal text-neutral-600 text-lg  hover:text-black"
            >
              Accessoirses
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col gap-5 text-start "
        >
          <h4
            data-aos="fade-up"
            data-aos-duration="900"
            className="text-black font-text font-semibold text-lg"
          >
            Follow Us
          </h4>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="flex gap-3"
          >
            <svg
              className="w-7 h-7 cursor-pointer text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-7 h-7 cursor-pointer text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-7 h-7 cursor-pointer text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr className="max-w-w7xl mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900 mt-20"></hr>
      <div className="flex mx-auto justify-center mt-12">
        <h5 className="text-neutral-950 font-text font-normal text-lg">
          @Temse2024, All RightsReserved.
        </h5>
      </div>
    </div>
  );
  function Alltype() {
    const Alltype = document.getElementById("alltype");
    const Sneakerstype = document.getElementById("Sneakerstype");
    const Hoddietype = document.getElementById("Hoddietype");
    const Accessoirsestype = document.getElementById("Accessoirsestype");
    Alltype.style.display = "flex";
    Sneakerstype.style.display = "none";
    Hoddietype.style.display = "none";
    Accessoirsestype.style.display = "none";
  }
  function Sneakerstype() {
    const Alltype = document.getElementById("alltype");
    const Sneakerstype = document.getElementById("Sneakerstype");
    const Hoddietype = document.getElementById("Hoddietype");
    const Accessoirsestype = document.getElementById("Accessoirsestype");
    Alltype.style.display = "none";
    Accessoirsestype.style.display = "none";
    Sneakerstype.style.display = "flex";
    Hoddietype.style.display = "none";
  }
  function Hoddietype() {
    const Alltype = document.getElementById("alltype");
    const Sneakerstype = document.getElementById("Sneakerstype");
    const Hoddietype = document.getElementById("Hoddietype");
    const Accessoirsestype = document.getElementById("Accessoirsestype");
    Alltype.style.display = "none";
    Sneakerstype.style.display = "none";
    Accessoirsestype.style.display = "none";
    Hoddietype.style.display = "flex";
  }
  function Accessoirsestype() {
    const Alltype = document.getElementById("alltype");
    const Sneakerstype = document.getElementById("Sneakerstype");
    const Hoddietype = document.getElementById("Hoddietype");
    const Accessoirsestype = document.getElementById("Accessoirsestype");
    Alltype.style.display = "none";
    Sneakerstype.style.display = "none";
    Hoddietype.style.display = "none";
    Accessoirsestype.style.display = "flex";
  }
}
