import React from "react";
import img from "./assets/not-found.png";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>:! Page Not Found</h3>
        {/* <p>
					We apologize, but it seems the page you are looking for cannot be
					found. Please click on the Back Home button to return to our homepage.
					Thank you for your understanding.
				</p> */}
        <p>
          We apologise for the inconvinience, the server is currenlty not
          responding. Please follow the instructions in the Readme.md file to
          run the project locally
        </p>
        {/* <Link to="/">back home</Link> */}
        <a href="https://github.com/Kashif-Saleem-Ghuman/Cars-Rental-FrontEnd/blob/develop/README.md">
          Readme
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin: 0 auto;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #555;
    font-size: 1.25rem;
  }
  a {
    text-decoration: underline;
    text-transform: capitalize;
    font-size: 1.5rem;
  }
`;

export default Error;
