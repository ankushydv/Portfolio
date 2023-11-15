import React from "react";
import { Container, Row } from "react-bootstrap";
import BannerImage from "../assets/img/header-img.svg";

const Banner = () => {
  return (
    <section>
      <Container>
        <Row xs={12} md={6} xl={7}>
          <span className="tagline">&nbsp;Welcome to my Portfolio</span>
          <h1>
            {`Hi I'm webdecode`}
            <span className="wrap">web developer</span>{" "}
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc
          </p>
        </Row>
        <Row xs={12} md={6} xl={5}>
          <img src={BannerImage} alt="banner_img" />
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
