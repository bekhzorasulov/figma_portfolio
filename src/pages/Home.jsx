const Home = () => {
  return (
    <main>
      <section>
        <div className="container">
          <div className="self_info">
            <div className="self_info_box">
              <h3>
                Hi, I am John, <br />
                <br />
                Creative Technologist
              </h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="self_info_btn">Download Resume</button>
            </div>
            <img className="self_info_img" src="../Ellipse 1.png" alt="" />
          </div>
        </div>
      </section>
      <section className="post_container">
        <div className="container">
          <div className="post_box">
            <div className="post_box_recent">
              <span>Recent posts</span>
              <a href="#">View all</a>
            </div>
            <div className="post_card">
              <div className="post_card1">
                <h2 className="post_card1_title">
                  Making a design system from scratch
                </h2>
                <div className="post_card_centre">
                  <span>12 Feb 2020</span>
                  <span>|</span>
                  <span>Design, Pattern</span>
                </div>
                <p className="post_card1_description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="post_card1">
                <h2 className="post_card1_title">
                  Creating pixel perfect icons in Figma
                </h2>
                <div className="post_card_centre">
                  <span>12 Feb 2020</span>
                  <span>|</span>
                  <span>Figma, Icon Design</span>
                </div>
                <p className="post_card1_description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="featured_box">
            <h2 className="featured_box_title">Featured works</h2>
            <div className="featured_card">
              <img src="../Rectangle 30.svg" alt="" />
              <div className="featured_text">
                <h3 className="featured_text_title">Designing Dashboards</h3>
                <div className="card_year">
                  <span className="card_year_icon">2020</span>
                  <span className="card_name">Dashboard</span>
                </div>
                <p
                  className="
                featured_text_description"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="featured_card">
              <img src="../Rectangle 32.svg" alt="" />
              <div className="featured_text">
                <h3 className="featured_text_title">
                  Vibrant Portraits of 2020
                </h3>
                <div className="card_year">
                  <span className="card_year_icon">2018</span>
                  <span className="card_name">Illustration</span>
                </div>
                <p
                  className="
                featured_text_description"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="featured_card">
              <img src="../Rectangle 34.svg" alt="" />
              <div className="featured_text">
                <h3 className="featured_text_title">
                  36 Days of Malayalam type
                </h3>
                <div className="card_year">
                  <span className="card_year_icon">2018</span>
                  <span className="card_name">Typography</span>
                </div>
                <p
                  className="
                featured_text_description"
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
