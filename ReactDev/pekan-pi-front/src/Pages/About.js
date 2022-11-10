function About() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">About Us</h3>
              <div className="underline mx-auto"></div>
              <p>BLAH BLAH BLAH BLAH BLAH </p>
              {/* <Link to="/about" className="btn btn-warning shadow">
              {" "}
              Read More
            </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* mission statement */}
      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Our Mission</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="cold-md-4 text-center">
              <h6>Our Vision</h6>
              <p>BLAH BLAH BLAH</p>
            </div>
            <div className="cold-md-4 text-center">
              <h6>Our Mission</h6>
              <p>BLAH BLAH BLAH</p>
            </div>
          </div>
        </div>
      </section>

      {/* our team */}
      <div className="col-2">
        <img alt="" src="../Images/Home-images/table 2.jpeg" />
      </div>
    </div>
  );
}

export default About;
