"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [shrink, setshrink] = useState(false);
  const menubtn = () => {
    setshrink(!shrink);
    console.log("shrinking", shrink);
  };
  return (
    <div className="container">
      <div className="sidebar" id={`${shrink ? "closed" : "open"}`}>
        <p className="hide">Abhishek</p>
        <div
          className="sidebar_container"
          id={`${shrink ? "closedcontainer" : "opencontainer"}`}
        >
          <button className="sidebar_btn" onClick={menubtn}></button>
          <div className="containers">
            <Link href="#dealers_sec">
              <svg className="header_icons">
                <use xlinkHref="sprite.svg#icon-user" />
              </svg>
            </Link>
            <Link href="#dealers_sec" className="sidebarlink">
              Dealers
            </Link>
          </div>
          <div className="containers">
            <Link href="#features_sec">
              <svg className="header_icons">
                <use xlinkHref="sprite.svg#icon-open-book" />
              </svg>
            </Link>
            <Link href="#features_sec" className="sidebarlink">
              Feature
            </Link>
          </div>
          <div className="containers">
            <Link href="#about_sec">
              <svg className="header_icons">
                <use xlinkHref="sprite.svg#icon-book" />
              </svg>
            </Link>
            <Link href="#about_sec" className="sidebarlink">
              About
            </Link>
          </div>
          <div className="containers">
            <Link href="#booking_sec">
              <svg className="header_icons">
                <use xlinkHref="sprite.svg#icon-home1" />
              </svg>
            </Link>
            <Link href="#booking_sec" className="sidebarlink">
              Booking
            </Link>
          </div>
          <div className="containers">
            <Link href="#homes_sec">
              <svg className="header_icons">
                <use xlinkHref="sprite.svg#icon-image-inverted" />
              </svg>
            </Link>
            <Link href="#homes_sec" className="sidebarlink">
              Gallery
            </Link>
          </div>
        </div>
      </div>
      <div className="header" id="dealers_sec">
        <div className="header_tag">
          <svg className="header_icon">
            <use xlinkHref="sprite.svg#icon-chevron-thin-right" />
          </svg>
          <svg className="header_icon">
            <use xlinkHref="sprite.svg#icon-chevron-thin-right" />
          </svg>
          <svg className="header_icon">
            <use xlinkHref="sprite.svg#icon-chevron-thin-right" />
          </svg>
          <svg className="header_icon">
            <use xlinkHref="sprite.svg#icon-chevron-thin-right" />
          </svg>
          <h4> Homes</h4>
        </div>

        <h3>Your own home</h3>
        <p> The ultimate personal freedom</p>
        <button>View our properties</button>
        <div className="header_seeon">Seen On</div>
        <div className="header_image">
          <h4>BBC</h4>
          <h4>Forbes</h4>

          <h4>business Inside</h4>
        </div>
      </div>
      <div className="section2">
        <h3 className="dealer_text">Top 3 Dealers</h3>
        <div className="dealers_imgs">
          <Image
            src="/men1.jpg"
            height={200}
            width={200}
            alt="dealerimg"
            quality={100}
            className="dealerimg"
          />
          <div className="dealer_detail">
            <h4>Ronin Iki</h4>
            <p>200 houses sold</p>
          </div>
          <Image
            src="/men2.jpg"
            height={200}
            width={200}
            alt="dealerimg"
            quality={100}
            className="dealerimg"
          />
          <div className="dealer_detail">
            <h4>Jr. Alveraj</h4>
            <p>150 houses sold</p>
          </div>
          <Image
            src="/men3.jpg"
            height={200}
            width={200}
            alt="dealerimg"
            quality={100}
            className="dealerimg"
          />
          <div className="dealer_detail">
            <h4>Maclestar</h4>
            <p>100 houses sold</p>
          </div>
        </div>
      </div>
      <div className="section3" id="features_sec">
        <div className="features">
          <svg className="world">
            <use xlinkHref="sprite.svg#icon-sphere" />
          </svg>

          <h4 className="heading-medium">Choose Around the World</h4>
          <p className="bodysmall">
            This is body small text of this feature sections. This is body small
            text of this feature sections.
          </p>
        </div>
        <div className="features">
          <svg className="world">
            <use xlinkHref="sprite.svg#icon-trophy" />
          </svg>
          <h4 className="heading-medium">Award winning Design</h4>
          <p className="bodysmall">
            This is body small text of this feature sections. This is body small
            text of this feature sections.
          </p>
        </div>
        <div className="features">
          <svg className="world">
            <use xlinkHref="sprite.svg#icon-map" />
          </svg>
          <h4 className="heading-medium">Choose Design</h4>
          <p className="bodysmall">
            This is body small text of this feature sections. This is body small
            text of this feature sections.
          </p>
        </div>
        <div className="features">
          <svg className="world">
            <use xlinkHref="sprite.svg#icon-lock-open" />
          </svg>
          <h4 className="heading-medium">Lock your home</h4>
          <p className="bodysmall">
            This is body small text of this feature sections. This is body small
            text of this feature sections.
          </p>
        </div>
        <div className="features">
          <svg className="world">
            <use xlinkHref="sprite.svg#icon-key" />
          </svg>
          <h4 className="heading-medium">Ket to Home</h4>
          <p className="bodysmall">
            This is body small text of this feature sections. This is body small
            text of this feature sections.
          </p>
        </div>
        <div className="features">
          <svg className="world">
            <use xlinkHref="sprite.svg#icon-location-pin" />
          </svg>
          <h4 className="heading-medium">Choose location</h4>
          <p className="bodysmall">
            This is body small text of this feature sections. This is body small
            text of this feature sections.
          </p>
        </div>
      </div>
      <div className="story_pictures" id="about_sec">
        <div className="image1">
          <Image
            src="/GoaTour7.jpg"
            alt="image1"
            className="image1"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
        <div className="image2">
          <Image
            src="/GoaTour.jpg"
            alt="image1"
            className="image2"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
      </div>
      <div className="story_content">
        <h3>Happy Customer</h3>

        <h2>&ldquo; The best decisionn of our lives &rdquo;</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          reprehenderit aut repellat sit officiis similique! Impedit, quibusdam.
          Architecto persp.
        </p>
        <button className="btn">Find your home</button>
      </div>
      <div className="homes" id="booking_sec">
        <div className="home">
          <Image
            className="commonimage"
            src="/home1.jpg"
            alt="homeImage"
            height={900}
            width={900}
            quality={100}
          />
          <svg className="home_icon  heart_icon">
            <use xlinkHref="sprite.svg#icon-heart" />
          </svg>
          <h4 className="imageName">make it own</h4>

          <div className="home_details flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-location-pin" />
            </svg>
            <p>India</p>
          </div>
          <div className="key_icon  flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-user" />
            </svg>
            <p>9 rooms</p>
          </div>
          <div className="lock_open flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-time-slot" />
            </svg>
            <p>
              325m<sup>2</sup>
            </p>
          </div>

          <div className="rocket_icon flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-key" />
            </svg>

            <p>$1,234,000</p>
          </div>
          <button className="home_btn">Book Now</button>
        </div>
        <div className="home">
          <Image
            className="commonimage"
            src="/home2.jpg"
            alt="homeImage"
            height={900}
            width={900}
            quality={100}
          />
          <svg className="home_icon  heart_icon">
            <use xlinkHref="sprite.svg#icon-heart" />
          </svg>
          <h4 className="imageName">make it own</h4>

          <div className="home_details flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-location-pin" />
            </svg>
            <p>Israael</p>
          </div>
          <div className="key_icon  flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-user" />
            </svg>
            <p>19 rooms</p>
          </div>
          <div className="lock_open flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-time-slot" />
            </svg>
            <p>
              125m<sup>2</sup>
            </p>
          </div>

          <div className="rocket_icon flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-key" />
            </svg>

            <p>$1,640,000</p>
          </div>
          <button className="home_btn">Book Now</button>
        </div>
        <div className="home">
          <Image
            className="commonimage"
            src="/home3.jpg"
            alt="homeImage"
            height={900}
            width={900}
            quality={100}
          />
          <svg className="home_icon  heart_icon">
            <use xlinkHref="sprite.svg#icon-heart" />
          </svg>
          <h4 className="imageName">make it own</h4>

          <div className="home_details flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-location-pin" />
            </svg>
            <p>China</p>
          </div>
          <div className="key_icon  flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-user" />
            </svg>
            <p>23 rooms</p>
          </div>
          <div className="lock_open flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-time-slot" />
            </svg>
            <p>
              125m<sup>2</sup>
            </p>
          </div>

          <div className="rocket_icon flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-key" />
            </svg>

            <p>$1,600,000</p>
          </div>
          <button className="home_btn">Book Now</button>
        </div>
        <div className="home">
          <Image
            className="commonimage"
            src="/home4.jpg"
            alt="homeImage"
            height={900}
            width={900}
            quality={100}
          />
          <svg className="home_icon  heart_icon">
            <use xlinkHref="sprite.svg#icon-heart" />
          </svg>
          <h4 className="imageName">make it own</h4>

          <div className="home_details flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-location-pin" />
            </svg>
            <p>Russia</p>
          </div>
          <div className="key_icon  flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-user" />
            </svg>
            <p>3 rooms</p>
          </div>
          <div className="lock_open flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-time-slot" />
            </svg>
            <p>
              435m<sup>2</sup>
            </p>
          </div>

          <div className="rocket_icon flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-key" />
            </svg>

            <p>$1,000,000</p>
          </div>
          <button className="home_btn">Book Now</button>
        </div>
        <div className="home">
          <Image
            className="commonimage"
            src="/home5.jpg"
            alt="homeImage"
            height={900}
            width={900}
            quality={100}
          />
          <svg className="home_icon  heart_icon">
            <use xlinkHref="sprite.svg#icon-heart" />
          </svg>
          <h4 className="imageName">make it own</h4>

          <div className="home_details flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-location-pin" />
            </svg>
            <p>Australia</p>
          </div>
          <div className="key_icon  flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-user" />
            </svg>
            <p>9 rooms</p>
          </div>
          <div className="lock_open flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-time-slot" />
            </svg>
            <p>
              705m<sup>2</sup>
            </p>
          </div>

          <div className="rocket_icon flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-key" />
            </svg>

            <p>$1,304,000</p>
          </div>
          <button className="home_btn">Book Now</button>
        </div>
        <div className="home">
          <Image
            className="commonimage"
            src="/home6.jpg"
            alt="homeImage"
            height={900}
            width={900}
            quality={100}
          />
          <svg className="home_icon  heart_icon">
            <use xlinkHref="sprite.svg#icon-heart" />
          </svg>
          <h4 className="imageName">make it own</h4>

          <div className="home_details flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-location-pin" />
            </svg>
            <p>Us</p>
          </div>
          <div className="key_icon  flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-user" />
            </svg>
            <p>5 rooms</p>
          </div>
          <div className="lock_open flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-time-slot" />
            </svg>
            <p>
              225m<sup>2</sup>
            </p>
          </div>

          <div className="rocket_icon flexbox">
            <svg className="home_icon">
              <use xlinkHref="sprite.svg#icon-key" />
            </svg>

            <p>$2,200,000</p>
          </div>
          <button className="home_btn">Book Now</button>
        </div>
      </div>
      <div className="gallery" id="homes_sec">
        <figure className="figure1">
          <Image
            src="/home13.jpg"
            alt="imagehome"
            width={700}
            height={700}
            className="galleries"
            quality={100}
          />
        </figure>
        <figure className="figure2">
          <Image
            src="/home8.jpg"
            alt="imagehome"
            width={900}
            height={900}
            className="galleries"
            quality={100}
          />
        </figure>

        <figure className="figure3">
          <Image
            src="/home9.jpg"
            alt="imagehome"
            width={900}
            height={900}
            className="galleries"
            quality={100}
          />
        </figure>
        <figure className="figure4">
          <Image
            src="/home10.jpg"
            alt="imagehome"
            width={900}
            height={900}
            className="galleries"
            quality={100}
          />
        </figure>
        <figure className="figure5">
          <Image
            src="/home11.jpg"
            alt="imagehome"
            width={900}
            height={900}
            className="galleries"
            quality={100}
          />
        </figure>
        <figure className="figure6">
          <Image
            src="/home12.jpg"
            alt="imagehome"
            width={900}
            height={900}
            className="galleries"
            quality={100}
          />
        </figure>
        <figure className="figure7">
          {" "}
          <Image
            src="/home13.jpg"
            alt="imagehome"
            width={900}
            height={900}
            className="galleries"
            quality={100}
          />
        </figure>

        <figure className="figure8">
          <Image
            src="/home15.jpg"
            alt="imagehome"
            width={900}
            height={900}
            className="galleries"
            quality={100}
          />
        </figure>
        <figure className="figure9">
          <Image
            src="/home16.jpg"
            alt="imagehome"
            width={900}
            height={900}
            className="galleries"
            quality={100}
          />
        </figure>
      </div>
      <div className="footer">
        <ul className="footerul">
          <li className="footerli1">
            <Link href="#" className="footerlink">
              Comtact-Us
            </Link>
          </li>
          <li className="footerli2">
            <Link href="#" className="footerlink">
              Find Your Dream Home
            </Link>
          </li>
          <li className="footerli3">
            <Link href="#" className="footerlink">
              Request on Mail
            </Link>
          </li>
          <li className="footerli4">
            <Link href="#" className="footerlink">
              Download Plan
            </Link>
          </li>
          <li className="footerli5">
            <Link href="#" className="footerlink">
              Submit Property
            </Link>
          </li>
          <li className="footerli6">
            <Link href="#" className="footerlink">
              Work with us
            </Link>
          </li>
        </ul>
        <p className="footerpara">
          &copy; Copyright 2023 by Abhishek. Feel free to use it on your own
          purpose. This does not apply if you plan to produce your own course or
          tutorials based on this project. You can use it in your any project
          there is not probelm of using it.
        </p>
      </div>
    </div>
  );
}
