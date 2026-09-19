import React from "react";

export default function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="about--section"
    >
      <div className="about--section--img">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
          alt="Developer Workspace"
          className="about--img--styled"
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">
            Background
            &
            Philosophy
          </p>
          <h2 className="skills--section--heading">
            About
            Me
          </h2>
          <p className="hero--section-description">
            I
            am
            Olusola
            Jaiyeola,
            a
            Full
            Stack
            &
            Web3
            Software
            Engineer
            specializing
            in
            building
            robust
            web
            applications,
            high-performance
            APIs,
            and
            secure
            smart
            contracts.
          </p>
          <p className="hero--section-description">
            With
            expertise
            spanning
            the
            full
            MERN
            stack
            (MongoDB,
            Express,
            React,
            Node.js)
            and
            decentralized
            technologies
            (Solidity,
            Ethers.js),
            I
            focus
            on
            writing
            clean,
            scalable
            code
            and
            delivering
            seamless
            user
            experiences
            from
            architectural
            design
            to
            cloud
            deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
