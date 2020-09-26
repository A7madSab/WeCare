import React from "react"
import { Link } from "react-scroll"
import { ArrowRightIcon } from '@primer/octicons-react'

import Rate from "./components/Rate"
import Care from "./components/Care"
import WeCare from "./components/Wecare"
import Reviews from "./components/Reviews"
import Articles from "./components/Articles"
import DealCard from "./components/DealCard"
import NavButton from "./components/NavButton"

import { green, lightGrey, grey } from "./utils/color"

const App = () => {
  return (
    <>
      <div className="container">

        {/* NavBar */}
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link to="Home" spy={true} smooth={true} duration={250} offset={-50} className="nav-link" >
            <button type="button" className="btn" style={{ color: "black" }}>
              <WeCare size={40.9} />
            </button>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" style={{ paddingLeft: 25, paddingRight: 25 }}>
              <NavButton to="Home" />
              <NavButton to="About" />
              <NavButton to="Service" />
              <NavButton to="Pricing" />
            </ul>
            <button className="btn btn-secondary" style={{ paddingLeft: 25, paddingRight: 25 }}>Sign In</button>
          </div>
        </nav>

        {/* Home Section */}
        <div className="container" style={{ paddingTop: 70, }}>
          <div className="row">
            <div className="col-12 col-md-6">
              <span style={{ fontSize: 26 }}>
                <span style={{ color: lightGrey }}>Welcome </span>
                <WeCare size={26} />
              </span>

              <p style={{ fontSize: 54, color: green, fontWeight: 100 }}>How to take care of</p>
              <p style={{ fontSize: 54, color: green, fontWeight: "bold" }}>Newborn Baby</p>

              <p style={{ color: lightGrey }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              <button className="btn btn-lg btn-success" style={{ backgroundColor: green, border: "none" }}>
                Learn More <ArrowRightIcon size={24} />
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        {/* Best Deals Section */}
        <div className="container">
          <p style={{ color: grey, fontSize: 45, textAlign: "center" }}>Best Deals</p>
          <p style={{ color: lightGrey, textAlign: "center" }}>A newborn baby can feel small and fragile. Learn how to care for your newborn and find out what</p>
          <hr className="titleHr" />
          <div className="d-flex justify-content-between">
            <div className="row">
              <div className="col-12 col-md-4">
                <DealCard img="baby-chair.png" title="Mee Mee Baby Stroller" />
              </div>
              <div className="col-12 col-md-4">
                <DealCard img="baby-blanket.png" title="Hooded Blanket Cum" />
              </div>
              <div className="col-12 col-md-4">
                <DealCard img="baby-shampoo.png" title="Gentle Baby Bath" />
              </div>
            </div>
          </div>
        </div>

        {/* Care Section */}
        <div className="container" style={{ marginTop: 35, marginBottom: 35 }}>
          <p style={{ color: grey, fontSize: 45, textAlign: "center" }}>Newborn Care</p>
          <p style={{ color: lightGrey, textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue.</p>
          <hr className="titleHr" />
          <div className="d-flex justify-content-between">
            <div className="row">
              <div className="col-12 col-md-4">
                <Care img="cloth.png" title="Clothing" subtitle="Lorem ipsum dolor sit amet" />
              </div>

              <div className="col-12 col-md-4">
                <Care img="feeding.png" title="Feeding" subtitle="Lorem ipsum dolor sit amet" />
              </div>

              <div className="col-12 col-md-4">
                <Care img="bedtime.png" title="Bedtime" subtitle="Lorem ipsum dolor sit amet" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Baby Carrier Section */}
      <div style={{ marginBottom: 35 }}>
        <div className="container-fluid">
          <div className="row">

            <div className="col-12 col-md-6" style={{ padding: 0, margin: 0 }}>
              <img alt="mother carrying baby" src="/imgs/mother-carrying-baby.png" width="100%" style={{ padding: 0, marginRight: 0 }} />
            </div>
            <div className="col-12 col-md-6" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h1 style={{ padding: "15px", color: grey }}>Baby Carrier One Air</h1>
              <p style={{ padding: "15px", color: grey }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue.</p>
              <h1 style={{ padding: "15px", color: green }}>Price <strong>$219.99</strong></h1>

              <button className="btn btn-success" style={{ backgroundColor: green, border: "none", width: "55%", boxShadow: '5px 5px 10px #C8C8C8' }}>
                View Details <ArrowRightIcon size={24} />
              </button>

            </div>
          </div>
        </div>


        {/* Article Section */}
        <div className="container" style={{ marginTop: 35, marginBottom: 35, }}>
          <p style={{ color: grey, fontSize: 45, textAlign: "center" }}>BabyCare Articles</p>
          <p style={{ color: lightGrey, textAlign: "center" }}>A newborn baby can feel small and fragile. Learn how to care for your newborn and find out what</p>
          <hr className="titleHr" />

          <div className="d-flex justify-content-between">
            <div className="row">
              <div className="col-12 col-md-4">
                <Articles img="10.png" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor." auther="By Olivia - May 28, 2019" title="Congratulations! You've got a new member of your family." />
              </div>
              <div className="col-12 col-md-4">
                <Articles img="11.png" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor." auther="By Olivia - May 28, 2019" title="Changing diapers frequently is an important aspect" />
              </div>
              <div className="col-12 col-md-4">
                <Articles img="12.png" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor." auther="By Olivia - May 28, 2019" title="Here’s How You Can Get Your Kids to Eat Whole Grains" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn" style={{ backgroundColor: "#F2F9F1", }}>All Posts</button>
          </div>
        </div>

        {/* Baby Boss section */}
        <div className="container-fluid text-center" style={{ padding: 35, backgroundColor: green, backgroundImage: "url(/imgs/baby-boss.png)", backgroundPosition: "right", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
          <hr className="titleHr" />
          <div className="container">
            <h1 style={{ color: "white", fontSize: 40, paddingLeft: 20, paddingRight: 20, fontWeight: 200 }}>  Since 2002, Baby Care Advice has assisted thousands of parentsworldwide solve minor and complex baby care problems by our articles and consultations.</h1>
            <h2 style={{ color: "white", fontSize: 40, paddingLeft: 20, paddingRight: 20, fontWeight: "bold" }}>  Book a consultation now!</h2>
          </div>
        </div>

        {/* Review section */}
        <div className="container" style={{ marginTop: 35, marginBottom: 35, }}>
          <p style={{ color: grey, fontSize: 45, textAlign: "center" }}>Customer Reviews</p>
          <p style={{ color: lightGrey, textAlign: "center" }}>A newborn baby can feel small and fragile. Learn how to care for your newborn and find out what</p>
          <hr className="titleHr" />
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" style={{ paddingLeft: 90 }}>
              <div className="carousel-item active">
                <div className="d-flex justify-content-between">
                  <Reviews name="Jon L. Clarkson" date="a day ago" star={4} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor." />
                  <Reviews name="Todd Jefferies" date="10 days ago" star={5} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor." />
                  <Reviews name="Jackie Parker" date="a month ago" star={3} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor." />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-between">
                  <Reviews name="Jackie Parker" date="a month ago" star={3} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor." />
                  <Reviews name="Jon L. Clarkson" date="a day ago" star={4} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor." />
                  <Reviews name="Todd Jefferies" date="10 days ago" star={5} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer turpis risus, rutrum imperdiet finibus in, iaculis eu leo. Duis vitae turpis augue. Sed ullamcorper faucibus volutpat. Fusce faucibus euismod auctor." />
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="next">
              <button className="btn btn-light text-center" style={{ height: "40px", width: "40px", borderRadius: "100%" }}>
                <i className="fas fa-arrow-left" style={{ color: "black" }} />
              </button>
              <span className="sr-only">Previous</span>
            </a>
          </div>
        </div>

        {/* Green Section */}
        <div className="container" style={{ marginTop: 35, marginBottom: 35, padding: 35, backgroundColor: green, borderRadius: 34, boxShadow: '0px 0px 10px 0px #C8C8C8' }}>
          <div className="row">
            <div className="col-12 col-md-7">
              <h1 style={{ color: "white", fontSize: 40, paddingLeft: 20, paddingRight: 20, fontWeight: 200 }}>Sign up for our newsletter </h1>
              <h2 style={{ color: "white", fontSize: 40, paddingLeft: 20, paddingRight: 20, fontWeight: "bold" }}>Newborn Baby</h2>
            </div>
            <div className="col-12 col-md-5 text-center align-middle">
              <button className="btn btn-secondary" style={{ paddingLeft: 25, paddingRight: 25 }}>Getting Started <ArrowRightIcon size={24} /></button>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: 35, marginBottom: 35, padding: 35, borderRadius: 34 }}>
          <div className="row">
            <div className="col-6 col-md-3">
              <h5>About Us</h5>
              <p>Privacy and policy</p>
              <p>Our Customer</p>
              <p>Blog Post</p>
              <p>Help & Support</p>
            </div>
            <div className="col-6 col-md-3">
              <h5>About Us</h5>
              <p>Our clients</p>
              <p>Legal notic</p>
            </div>
            <div className="col-6 col-md-3">
              <h5>Help & Advice</h5>
              <p>Help Center</p>
              <p>Contact Support</p>
              <p>Instructions</p>
              <p>Some Question</p>
            </div>
            <div className="col-6 col-md-3">
              <Rate count={5} />
              <p>10,000 Trust people The full-stack design team who focuses on digital products whatever they are.</p>

              <i className="fab fa-facebook" style={{ color: green, padding: 5, fontSize: "25px" }} />
              <i className="fab fa-twitter" style={{ color: green, padding: 5, fontSize: "25px" }} />
              <i className="fab fa-google" style={{ color: green, padding: 5, fontSize: "25px" }} />
              <i className="fab fa-youtube" style={{ color: green, padding: 5, fontSize: "25px" }} />
            </div>
          </div>
        </div>


        <div className="container text-center">
          <WeCare size={40} />
          <hr className="titleHr" />
          <p>Designed by @uiexpert - 2019</p>
        </div>

      </div>
    </>
  )
}

export default App
