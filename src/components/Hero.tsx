import Logo from "../assets/icons/logo.svg";
const Hero = () => {
  return (
    <section className="hero">
      <a href="/" className="logo">
        <img src={Logo} alt=" webshift" className="l" />
      </a>
      <div className="hero-details" data-aos="zoom-in" data-aos-duration="2000">
        <h1 className="title">
          The easiest <br /> way to build XR websites.
        </h1>
        <p className="description">
          Webshift empowers designers and developers to build immersive AR/VR
          websites in a completely visual canvas - no coding needed.{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
