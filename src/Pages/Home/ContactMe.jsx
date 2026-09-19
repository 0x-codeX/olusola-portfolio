import React, {
  useRef,
} from "react";

export default function ContactMe() {
  const form =
    useRef();

  const sendEmail =
    (
      e,
    ) => {
      e.preventDefault();

      const formData =
        new FormData(
          form.current,
        );
      const firstName =
        formData.get(
          "first-name",
        );
      const lastName =
        formData.get(
          "last-name",
        );
      const email =
        formData.get(
          "email",
        );
      const phone =
        formData.get(
          "phone-number",
        );
      const topic =
        formData.get(
          "choose-topic",
        );
      const message =
        formData.get(
          "message",
        );

      // Strict email validation check
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !emailRegex.test(
          email,
        )
      ) {
        alert(
          "Please enter a valid email address.",
        );
        return;
      }

      // Construct the direct email using mailto
      const subject =
        encodeURIComponent(
          `New Inquiry from Sola - ${topic}`,
        );
      const body =
        encodeURIComponent(
          `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nTopic: ${topic}\n\nMessage:\n${message}`,
        );

      window.location.href = `mailto:olusolajaiyeola@gmail.com?subject=${subject}&body=${body}`;

      e.target.reset();
    };

  return (
    <section
      id="Contact"
      className="contact--section"
    >
      <div>
        <p className="sub-title">
          Get
          In
          Touch
        </p>
        <h2>
          Contact
          Me
        </h2>
        <p className="text--lg">
          Lorem
          ipsum
          dolor
          sit
          amet,
          consectetur
          adip
        </p>
      </div>
      <form
        ref={
          form
        }
        onSubmit={
          sendEmail
        }
        className="contact--form--container"
      >
        <div className="container">
          <label
            htmlFor="first-name"
            className="contact--label"
          >
            <span className="text-md">
              First
              Name
            </span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>

          <label
            htmlFor="last-name"
            className="contact--label"
          >
            <span className="text-md">
              Last
              Name
            </span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="Last-name"
              required
            />
          </label>

          <label
            htmlFor="email"
            className="contact--label"
          >
            <span className="text-md">
              Email
            </span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              title="Please provide a valid email address"
              required
            />
          </label>

          <label
            htmlFor="phone-number"
            className="contact--label"
          >
            <span className="text-md">
              Phone
              Number
            </span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label
          htmlFor="choose-topic"
          className="contact--label"
        >
          <span className="text-md">
            Choose
            a
            topic
          </span>
          <select
            id="choose-topic"
            name="choose-topic"
            required
            className="contact--input contact"
          >
            <option value="">
              Select
              One...
            </option>
            <option value="New Website">
              New
              Website
            </option>
            <option value="Existing Website">
              Existing
              Website
            </option>
            <option value="Others">
              Others
            </option>
          </select>
        </label>

        <label
          htmlFor="message"
          className="contact--label"
        >
          <span className="text-md">
            Message
          </span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message"
            required
          />
        </label>

        <label
          htmlFor="checkbox"
          className="checkbox--label"
        >
          <input
            type="checkbox"
            required
            name="checkbox"
            id="checkbox"
          />
          <span className="text-sm">
            I
            accept
            the
            terms
          </span>
        </label>
        <div>
          <button
            type="submit"
            className="btn btn-primary contact--form--btn"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
