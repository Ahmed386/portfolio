import React, { useState, useEffect } from "react";
// import TextType from "./TextType";
import TextType from './../TextType';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import CircularGallery from './../circular/CircularGallery';
import  { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";





const Landingpage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a7x7bfe", // Replace with your EmailJS Service ID
        "template_s8prgou", // Replace with your EmailJS Template ID
        form.current,
        "YO9Hkz38_y_ytmdOj" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send. Try again later.");
        }
      );
  };
    
useEffect(() => {
  AOS.init({
    duration: 1500, // animation duration
  });
}, []);

  return (
    <div>
      <div className="landingpage  " id="home">
        <nav className="navbar navbar-expand-lg text-white position-fixed start-0 end-0">
          <div className="container-fluid d-flex px-4">
            <a
              className="navbar-brand fs-4 fw-bold"
              href="#"
              style={{ color: "#00ffff" }}
            >
              &lt;<span style={{ color: "#ffffff" }}>Ahmed Ghoneim</span> /&gt;
            </a>

            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row gap-5 ">
                <li className="nav-item ">
                  <a className="nav-link   " aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#experience">
                    Experience
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-none d-lg-block">
              <a
                className="btn btn btn-outline-info px-4 py-2 fw-bold"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>
        </nav>

        <div className="container firstPage ">
          <div className="row text-white h-100 w-100 ">
            <div className="col-md-6 col-sm-12 d-flex align-items-center">
              <div className="brief p-4 lh-lg ">
                {/* <span className="text-white mb-3">Ahmed ghoneim</span> */}

                <h1 className="fw-bolder text-white display-2 mb-3">
                  Hi! I’m <br /> Ahmed
                </h1>
                <p className="fw-bold ">
                  A passionate and motivated Frontend Developer with 2 year of
                  hands-on experience in building and maintaining responsive,
                  user-friendly websites.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 overflow-hidden text-center d-flex justify-content-center align-items-center ">
              <TextType
                text={["I'm a Developer", "I'm a Designer", "Contact Me"]}
                typingSpeed={115}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="skills text-white py-5 ">
        <div className="w-100 text-center">
          <h1 className="mb-2 fw-bolder">My skills</h1>
          <p className="fs-4">
            Follow the most popular Technologies in my work
          </p>
        </div>
        <div style={{ height: "500px", position: "relative" }} className="pb-2">
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>

      <div className="AboutMe py-5 devphoto" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 ">
              <img src="./developer.png" alt="" className="w-100" />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="abouttext text-white">
                <div className="section-heading">
                  <h6 className="mb-3">
                    <span className="ticket">About Me</span>
                  </h6>
                  <h2>
                    I AM AVAILABLE FOR{" "}
                    <span className="text-primary">FRONTEND</span> DEVELOPMENT
                    PROJECTS
                  </h2>
                </div>
                <p>
                  I am a frontend developer with one year of experience, skilled
                  in building responsive, user-friendly interfaces. My expertise
                  includes working with HTML, CSS, JavaScript, TypeScript, and
                  frameworks like Bootstrap, MUI, Tailwind CSS, and React. I am
                  also experienced in integrating APIs to create dynamic,
                  data-driven applications and use GitHub for version control
                  and collaboration.
                </p>
                <div className="review-box">
                  <div className="r-box">
                    <h3>
                      20<span>+</span>
                    </h3>
                    <label>client Review</label>
                  </div>
                  <div className="r-box">
                    <h3>
                      1<span>+</span>
                    </h3>
                    <label>Years Experience</label>
                  </div>
                  <div className="r-box">
                    <h3>
                      30<span>+</span>
                    </h3>
                    <label>projects</label>
                  </div>
                </div>
                <button className="btn-bar">
                  <a
                    href="/cv.pdf"
                    download="AhmedGhoneim_CV.pdf"
                    className="btn  px-4 py-2 fw-bold in"
                  >
                    <i className="bi bi-download me-2"></i>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mywork py-5" id="projects">
        <div className=" p-5 text-center text-white">
          <div className="container">
            <div className="row text-center ">
              <div className="col-12">
                <h1 className="mb-4 fw-bolder ">
                  <span className="ticket">My Work</span>
                </h1>
                <p className="fs-4">Work experience projects</p>
              </div>
            </div>

            <div className="row mt-5">
              {projectsData.length > 3 && (
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={15}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                  loop={true}
                >
                  {projectsData.map((d, index) => (
                    <SwiperSlide key={index}>
                      <div className="card mb-5 " style={{ width: "22rem" }}>
                        <img
                          src={d.src}
                          className="card-img-top"
                          alt="website"
                        />
                        <div className="card-body bg-black text-white">
                          <h5 className="card-title">{d.name}</h5>
                          <p className="card-text">{d.brief}</p>
                          <a
                            href={d.link}
                            className="btn btn-outline-info"
                            target="_blank"
                          >
                            See More
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="experience" id="experience">
        <section className="section gray-bg text-white">
          <div className="container">
            <div className="section-heading mb-5">
              <h6
                data-aos="fade-right"
                data-aos-duration="1000"
                className="mb-3"
              >
                <span className="ticket fs-3">Experience</span>
              </h6>
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                My Work <br /> <span className="text-primary">Experience</span>
              </h2>
            </div>

            <div className="row gy-3">
              {/* Experience Box 1 - Freelancer */}
              <div
                className="col-12 mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="ex-box">
                  <div className="row">
                    <div className="col-md-4 col-lg-3 ">
                      <div className="ex-left mb-2 ">
                        <h4>Front-end Developer</h4>
                        <span>
                          Freelancer <br />
                        </span>
                        <p>Oct 2022 - May 2023</p>
                        <label>Full time</label>
                      </div>
                    </div>
                    <div className="col-md-8 col-lg-9">
                      <div className="ex-right">
                        <h5>Freelancer</h5>
                        <p className="m-0">
                          As a front-end developer, I’ve worked on a variety of
                          projects that reflect both creativity and
                          functionality. I built a construction company website
                          focused on trust and professionalism, designed a clean
                          and responsive e-commerce platform with smooth product
                          browsing, and created a dynamic movie app using
                          real-time APIs to show trending films. I’ve also
                          developed admin dashboards with interactive charts,
                          data tables, and role-based access. Each project was
                          built with user experience and responsive design in
                          mind, ensuring smooth performance across all devices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Box 2 - Abnour */}
              <div
                className="col-12 mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="ex-box">
                  <div className="row gy-4">
                    <div className="col-md-4 col-lg-3">
                      <div className="ex-left mb-2 ">
                        <h4>Front-end Developer</h4>
                        <span>
                          Abnour <br /> Softwarehouse
                        </span>
                        <p>May 2023 - Jan 2024</p>
                        <label>Full time</label>
                      </div>
                    </div>
                    <div className="col-md-8 col-lg-9">
                      <div className="ex-right">
                        <h5>Abnour Softwarehouse</h5>
                        <p className="m-0">
                          As a Front-end Developer at Abnour Softwarehouse, I
                          have successfully delivered over 10 high-quality
                          projects, focusing on building responsive and dynamic
                          websites. I specialize in transforming complex Figma
                          designs into clean, efficient, and scalable code. My
                          work involves seamless integration of back-end APIs,
                          ensuring optimal user experiences. I am committed to
                          delivering pixel-perfect, high-performance web
                          applications that adhere to industry best practices,
                          and I consistently ensure cross-browser and
                          cross-device compatibility
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Box 3 - Line Group */}
              <div
                className="col-12 mb-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="ex-box">
                  <div className="row gy-4">
                    <div className="col-md-4 col-lg-3">
                      <div className="ex-left mb-2 ">
                        <h4>Front-end Developer</h4>
                        <span>
                          Line <br /> Group
                        </span>
                        <p>March 2024 - April 2025</p>
                        <label>Full time</label>
                      </div>
                    </div>
                    <div className="col-md-8 col-lg-9">
                      <div className="ex-right">
                        <h5>Line Group</h5>
                        <p className="m-0">
                          During my time as a Front-End Developer at Linegroup,
                          I collaborated closely with designers and content
                          strategists to bring creative campaigns to life on the
                          web. My role involved translating Figma and Adobe XD
                          designs into responsive, performance-optimized
                          websites using HTML, CSS, JavaScript, and React. I
                          worked on landing pages and interactive components
                          tailored to client branding and marketing goals. I
                          gained hands-on experience with SEO-friendly
                          structures and integrating third-party tools like
                          analytics, chatbots, and email capture forms. This
                          environment taught me how to work at the fast pace of
                          client campaigns, meet tight deadlines, and ensure
                          pixel-perfect execution across all devices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="contactme py-5 " id="contact">
        <div className="container shadow py-5">
          <div className="row">
            <div className="col-12 text-white">
              <h3 className="px-3">
                <span className="ticket">Contact ME</span>
              </h3>
              <div className="p-3">
                <h2>
                  Let’s <span className="text-primary">Discuss</span> Your
                  Project !
                </h2>
                <p>
                  Always available for freelancing if the right project comes
                  along.
                </p>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-4 col-sm-12 text-white py-3">
                <div className="px-3">
                  <p className="rgb">Email</p>
                  <h3>ghoneim192@gmail.com</h3>
                </div>

                <div className="px-3">
                  <p className="rgb">phone</p>
                  <h3>+201272279091</h3>
                </div>

                <div className="py-3 m-3 icons w-100 d-flex justify-content-evenly ">
                  <a
                    href="https://www.linkedin.com/in/ahmed-ghoneim-28780b246/"
                    className="text-text-decoration-none"
                    target="_blank"
                  >
                    <FaLinkedinIn className="myic" />
                  </a>

                  <a
                    href="https://github.com/Ahmed386"
                    className="text-text-decoration-none"
                    target="_blank"
                  >
                    <FaGithub className="myic" />
                  </a>

                  <a
                    href="https://wa.me/+201272279091"
                    className="text-text-decoration-none"
                    target="_blank"
                  >
                    <FaWhatsapp className="myic" />
                  </a>
                </div>
              </div>
              <div className="col-lg-7  col-sm-12 ">
                <div>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      required
                      className="form-control"
                    />
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="form-control"
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="form-control"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="form-control"
                      required
                      rows="4"
                    />
                    <button
                      type="submit"
                      className="btn btn-outline-info w-100"
                    >
                      Send Message
                    </button>
                  </form>
                  <ToastContainer position="bottom-right" autoClose={3000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const projectsData = [
  {
    src: "./uttc.png",
    name: "Utc Website",
    link: "https://utc-react.vercel.app/",
    brief:
      "Build trust with bold visuals, services, projects, and contact information.",
  },
  {
    src: "./ecommerce.png",
    name: "E-commerce Website",
    link: "https://e-commerce-delta-rust.vercel.app/",
    brief:
      "Showcase products, simplify shopping, secure checkout, and fast performance.",
  },
  {
    src: "./movie.png",
    name: "MovieDB Website",
    link: "https://moviedb-steel.vercel.app/",
    brief:
      "Display movies, stream trailers, show ratings, genres, cast, and reviews.",
  },
  {
    src: "./dashboard.png",
    name: "Dashboard",
    link: "https://dashboard-zeta-seven-78.vercel.app/",
    brief: "Visualize data, manage users, track performance, update stats in real-time.",
  },
];


const experienceData = [
  {
    src: "./dashphoto.jpg",
    name: "Utc Website",
    link: "https://utc-react.vercel.app/",
    brief:
      "Build trust with bold visuals, services, projects, and contact information.",
  },
  {
    src: "./hosting.jpg",
    name: "E-commerce Website",
    link: "https://e-commerce-delta-rust.vercel.app/",
    brief:
      "Showcase products, simplify shopping, secure checkout, and fast performance.",
  },
  {
    src: "./movie.png",
    name: "MovieDB Website",
    link: "https://moviedb-steel.vercel.app/",
    brief:
      "Display movies, stream trailers, show ratings, genres, cast, and reviews.",
  },
  {
    src: "./dashboard.png",
    name: "Dashboard",
    link: "https://dashboard-zeta-seven-78.vercel.app/",
    brief:
      "Visualize data, manage users, track performance, update stats in real-time.",
  },
];



export default Landingpage;
