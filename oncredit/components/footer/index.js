import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight, BsFacebook } from "react-icons/bs";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack
      justify={"space-evenly"}
      style={{ backgroundColor: "#233A56", minHeight: "100vh" }}
    >
      <div className="newsletter">
        <div>
          <h1 className="newsletter-heading">
            Newsletter
            <br />
            Signup
          </h1>
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email Address"
            className="input-email"
          />
          <button type="submit" className="newsletter-btn">
            {/* <i className="fa-solid fa-arrow-right" /> */}
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="footer-detail">
        <div>
          <div>
            <Text fontSize={20} borderBottom="3px solid white" pb={10} mb={20}>
              ADDRESS
            </Text>
          </div>
          <div>
            <p>
              Chak no.117 /JB Dhanola, <br /> Millat Road, Faisalabad,
              <br /> Punjab, Pakistan
            </p>
            <br />
          </div>
          <p>+923123456789</p>
        </div>
        <div className="useful-links">
          <div>
            <Text fontSize={20} borderBottom="3px solid white" pb={10} mb={20}>
              USEFUL LINKS
            </Text>
          </div>
          <div>
            <Link href=".">HOME</Link>
            <br />
            <Link href="/contact">CONTACT US</Link>
            <br />
            <Link href="/about">ABOUT US</Link>
            <br />
            <Link href="/signup">SIGN UP</Link>
            <br />
            <Link href="/login">LOG IN</Link>
            <br />
          </div>
        </div>
        <div className="social-links">
          <div>
            <Text fontSize={20} borderBottom="3px solid white" pb={10} mb={20}>
              SOCIAL LINKS
            </Text>
          </div>
          <HStack>
            <a href="/">
              {/* <i className="fa-brands fa-facebook" /> */}
              <BsFacebook />
            </a>
            <a href="/">
              {/* <i className="fa-brands fa-twitter" /> */}
              <AiFillTwitterCircle />
            </a>
            <a href="/">
              {/* <i className="fa-brands fa-instagram" /> */}
              <AiFillInstagram />
            </a>
            <a href="/">
              {/* <i className="fa-brands fa-google" /> */}
              <AiFillGoogleCircle />
            </a>
          </HStack>
        </div>
      </div>
    </Stack>
  );
};

export default Footer;
