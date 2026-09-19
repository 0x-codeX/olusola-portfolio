import React, {
  useState,
  useEffect,
} from "react";

export default function HeroSection() {
  const [
    showContactModal,
    setShowContactModal,
  ] =
    useState(
      false,
    );
  const [
    activeSlide,
    setActiveSlide,
  ] =
    useState(
      0,
    );

  // Phone number format for WhatsApp (Replace with your actual phone number with country code, e.g., 2348012345678)
  const whatsappNumber =
    "2348026933327";
  const emailAddress =
    "olusolajaiyeola@gmail.com";

  // Carousel items highlighting services & key specialties
  const carouselItems =
    [
      {
        id: 1,
        badge:
          "Full-Stack Web Dev",
        title:
          "MERN Stack & Scalable Web Architectures",
        description:
          "Building fast, modern, and responsive web applications with React, Node.js, Express, and MongoDB.",
        techs:
          [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind/CSS",
          ],
      },
      {
        id: 2,
        badge:
          "Web3 & Blockchain",
        title:
          "Smart Contracts & Security Auditing",
        description:
          "Developing, testing, and auditing secure Ethereum smart contracts using Solidity and static analysis tools.",
        techs:
          [
            "Solidity",
            "Smart Contracts",
            "Auditing",
            "Ethereum",
            "Web3.js",
          ],
      },
      {
        id: 3,
        badge:
          "Mobile & Cloud",
        title:
          "Cross-Platform Apps & Cloud Integration",
        description:
          "Designing custom mobile software solutions and deploying production-ready APIs to scalable cloud platforms.",
        techs:
          [
            "React Native",
            "REST & GraphQL APIs",
            "Vercel",
            "AWS / Cloud",
          ],
      },
    ];

  // Auto-play for carousel
  useEffect(() => {
    const timer =
      setInterval(
        () => {
          setActiveSlide(
            (
              prev,
            ) =>
              (prev +
                1) %
              carouselItems.length,
          );
        },
        5000,
      );
    return () =>
      clearInterval(
        timer,
      );
  }, [
    carouselItems.length,
  ]);

  const handleNextSlide =
    () => {
      setActiveSlide(
        (
          prev,
        ) =>
          (prev +
            1) %
          carouselItems.length,
      );
    };

  const handlePrevSlide =
    () => {
      setActiveSlide(
        (
          prev,
        ) =>
          (prev -
            1 +
            carouselItems.length) %
          carouselItems.length,
      );
    };

  return (
    <section
      id="heroSection"
      className="hero--section modern--hero"
    >
      <div className="hero--section--content--box hero--full--width">
        {/* Availability Badge */}
        <div className="hero--status--badge">
          <span className="status--dot"></span>{" "}
          Available
          for
          Freelance
          &
          Contract
          Projects
        </div>

        {/* Hero Main Content */}
        <div className="hero--section--content">
          <p className="section--title">
            Hi,
            I'm
            Olusola
            Jaiyeola
            👋
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--colour">
              Full
              Stack
              Engineering
            </span>
            <br />
            &
            Web3
            Smart
            Contract
            Solutions
          </h1>
          <p className="hero--section--description">
            I
            craft
            high-performance
            web
            applications,
            scalable
            APIs,
            and
            secure
            smart
            contracts.
            Whether
            you
            need
            a
            complete
            web
            build,
            mobile
            app
            development,
            or
            protocol
            security
            auditing,
            I
            bring
            ideas
            from
            concept
            to
            production-ready
            software.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="hero--action--buttons">
          <button
            onClick={() =>
              setShowContactModal(
                true,
              )
            }
            className="btn btn-primary hero--cta--btn"
          >
            💬
            Get
            In
            Touch
          </button>

          <a
            href="#MyPortfolio"
            className="btn btn-outline hero--cta--btn"
          >
            📂
            View
            Portfolio
            &
            Work
          </a>
        </div>

        {/* Highlight Stats */}
        <div className="hero--stats--container">
          <div className="hero--stat--card">
            <h3>
              5+
            </h3>
            <p>
              Years
              Experience
            </p>
          </div>
          <div className="hero--stat--card">
            <h3>
              100%
            </h3>
            <p>
              Job
              Success
              Rate
            </p>
          </div>
          <div className="hero--stat--card">
            <h3>
              Full-Stack
              &
              Web3
            </h3>
            <p>
              End-to-End
              Solutions
            </p>
          </div>
        </div>

        {/* Interactive Feature Carousel */}
        <div className="hero--carousel--section">
          <div className="carousel--header">
            <h4>
              💡
              Core
              Expertise
              &
              Capabilities
            </h4>
            <div className="carousel--controls">
              <button
                onClick={
                  handlePrevSlide
                }
                aria-label="Previous Slide"
              >
                ‹
              </button>
              <button
                onClick={
                  handleNextSlide
                }
                aria-label="Next Slide"
              >
                ›
              </button>
            </div>
          </div>

          <div className="carousel--card">
            <span className="carousel--badge">
              {
                carouselItems[
                  activeSlide
                ]
                  .badge
              }
            </span>
            <h3 className="carousel--title">
              {
                carouselItems[
                  activeSlide
                ]
                  .title
              }
            </h3>
            <p className="carousel--desc">
              {
                carouselItems[
                  activeSlide
                ]
                  .description
              }
            </p>
            <div className="carousel--tech--tags">
              {carouselItems[
                activeSlide
              ].techs.map(
                (
                  tech,
                  idx,
                ) => (
                  <span
                    key={
                      idx
                    }
                    className="tech--tag"
                  >
                    {
                      tech
                    }
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel--dots">
            {carouselItems.map(
              (
                _,
                idx,
              ) => (
                <span
                  key={
                    idx
                  }
                  className={`dot ${activeSlide === idx ? "active" : ""}`}
                  onClick={() =>
                    setActiveSlide(
                      idx,
                    )
                  }
                />
              ),
            )}
          </div>
        </div>
      </div>

      {/* Contact Method Selection Modal */}
      {showContactModal && (
        <div
          className="contact--modal--overlay"
          onClick={() =>
            setShowContactModal(
              false,
            )
          }
        >
          <div
            className="contact--modal--box"
            onClick={(
              e,
            ) =>
              e.stopPropagation()
            }
          >
            <button
              className="modal--close"
              onClick={() =>
                setShowContactModal(
                  false,
                )
              }
            >
              ✕
            </button>
            <h3>
              How
              would
              you
              like
              to
              connect?
            </h3>
            <p>
              Choose
              your
              preferred
              channel
              to
              discuss
              your
              project
              requirements:
            </p>

            <div className="contact--options--grid">
              {/* WhatsApp Option */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi%20Olusola,%20I'd%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="contact--option--card whatsapp--card"
              >
                <div className="contact--option--icon">
                  💬
                </div>
                <div>
                  <h4>
                    WhatsApp
                  </h4>
                  <p>
                    Chat
                    directly
                    for
                    quick
                    responses
                  </p>
                </div>
              </a>

              {/* Email Option */}
              <a
                href={`mailto:${emailAddress}?subject=Project%20Inquiry%20-%20Full%20Stack%20/%20Web3`}
                className="contact--option--card email--card"
              >
                <div className="contact--option--icon">
                  ✉️
                </div>
                <div>
                  <h4>
                    Send
                    an
                    Email
                  </h4>
                  <p>
                    {
                      emailAddress
                    }
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
