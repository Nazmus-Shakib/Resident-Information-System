import React from "react";
import { Button, Card, CardDeck, Carousel, Jumbotron } from "react-bootstrap";
import caro1 from "../../images/caro01.jpeg";
import caro2 from "../../images/caro2.jpg";
import caro3 from "../../images/caro3.jpg";
import card01 from "../../images/Cards/Card01.jpg";
import card02 from "../../images/Cards/Card02.jpg";
import card03 from "../../images/Cards/Card03.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Carousel className="m-4">
        <Carousel.Item className="caro-item" interval={5000}>
          <img className="d-block img-fluid" src={caro1} alt="First slide" />
          <Carousel.Caption>
            <h1>Greetings from Smart Residenz</h1>
            <h5>New Dimension to Secure Information</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caro-item" interval={5000}>
          <img className="d-block img-fluid" src={caro2} alt="Third slide" />
          <Carousel.Caption>
            <h1>The Most Secure System to Store Information</h1>
            <h5>Stay Safe, Spread Compassion and Obey the Rules</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="caro-item" interval={5000}>
          <img className="d-block img-fluid" src={caro3} alt="Third slide" />
          <Carousel.Caption>
            <h1>Get Reliable Services & Contact Management</h1>
            <h5>Manage Information within Your Fingertip</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Jumbotron className="bg-black m-4">
        <h2>
          Smart Residenz is a Resident & Visitor Management System that’s ideal
          for strata developments - condominiums, serviced residences, and gated
          communities.
        </h2>
        <p>
          Owners and tenants just need to login via the web or mobile app to
          connect with Management Office. Getting things done has never been
          easier. Payments, bookings and everything else can be done at your own
          comfort & convenience — anytime, anyplace, anywhere. <br />
          Getting started is a breeze. Once all information is provided to us,
          we can quickly setup within 7 working days. You don’t have to worry
          about anything and you don’t have to be tech-savvy — it’s just that
          easy to use. <br />
          We complement any accounting system you use — from CSS Decisions to
          Advelsoft and more. <br />
          Join our properties that are using smart Residenz nationwide — Kuala
          Lumpur, Selangor, Johor, Negeri Sembilan, Perak, Sabah, and Sarawak.
        </p>
        <p>
          <Button href="/getStarted" variant="outline-secondary" size="lg">
            Get Started
          </Button>
        </p>
      </Jumbotron>

      <div className="m-4">
        <h2 className="text-center mb-4">Benefits</h2>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={card01} />
            <Card.Body>
              <Card.Title>Residents Committees</Card.Title>
              <Card.Text>
                <p>
                  Joint Management Bodies, Management Corporations, Residents'
                  Associations — whatever you name it.
                </p>
                <ul>
                  <li>
                    Make life easier for everyone — owners, tenants, and
                    management office.
                  </li>
                  <li>
                    Ensure continuity in the event that there's a change in
                    management staff.
                  </li>
                  <li>
                    Ensure management office is freed from the labour of lesser
                    tasks to focus
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={card02} />
            <Card.Body>
              <Card.Title>Management Committees</Card.Title>
              <Card.Text>
                <p>
                  Joint Management Bodies, Management Corporations, Residents'
                  Associations — whatever you name it.
                </p>
                <ul>
                  <li>
                    Make life easier for everyone — owners, tenants, and
                    management office.
                  </li>
                  <li>
                    Ensure continuity in the event that there's a change in
                    management staff.
                  </li>
                  <li>
                    Ensure management office is freed from the labour of lesser
                    tasks to focus
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={card03} />
            <Card.Body>
              <Card.Title>Feedbacks</Card.Title>
              <Card.Text>
                <p>
                  Joint Management Bodies, Management Corporations, Residents'
                  Associations — whatever you name it.
                </p>
                <ul>
                  <li>
                    Make life easier for everyone — owners, tenants, and
                    management office.
                  </li>
                  <li>
                    Ensure continuity in the event that there's a change in
                    management staff.
                  </li>
                  <li>
                    Ensure management office is freed from the labour of lesser
                    tasks to focus
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>

      <div className="testimonials">
        <div className="container">
          <h2 className="text-center mb-4">Testimonials</h2>
          <div className="row row-cols-2">
            <div className="col-md-6 mb-4">
              When I logged into Smart Residenz, I was in Canada. I travel a lot
              – almost 6 months a year, I’m away. So every year, I have to pay 6
              months in advance. So when I got the message that said I could pay
              online, I was so excited and that’s how I got in very fast. My
              grandchildren asked me ‘What are you doing nenek?’ and I said ‘I’m
              logging into iResidenz to pay my condominium fees’ and my
              grandchildren said Yay! <br />{" "}
              <small>- Angela, Resident of Bistari, Putra</small>
            </div>
            <div className="col-md-6 mb-4">
              I found the payment solution was so convenient for me because I do
              quite a bit of travelling and the times when I’m free, like on
              Saturday’s, when I want to rest or have errands to run, I have to
              make the time to go to the management office before and that was
              very inconvenient for me, so I found this was the perfect solution
              and I hope everyone gives it a try because it’s so, so easy to
              use.
              <br />
              <small>
                - Jessie, Resident of Waldorf & Windsor, Sri Hartamas
              </small>
            </div>
            <div className="col">
              Our paperwork has reduced tremendously. All general notices,
              messages and statements are online, hence reducing the amount of
              manual paperwork. Follow-up's and feedback are much easier to
              monitor. Communications are more efficient. Tracking and reporting
              is easier too. Westside One residents have complimented this
              portal as it helps them check their monthly statements online and
              make payments online too, which makes it very convenient for them.{" "}
              <br />
              <small>
                - Mr. Muthaiya, Building Manager of The Westside One, Desa
                ParkCity
              </small>
            </div>
            <div className="col">
              Being in the Facilities Management business for over 25 years, we
              have gone through many challenges. And with the scarcity of human
              resources especially for this type of industry, the move toward
              the internet and digital age is prudent and timely. With realtime
              feedback & response culminating with consideration for the
              environment in going paperless, iResidenz is definitely a useful
              tool to help reduce extra manpower and increase productivity &
              efficiency. <br />
              <small>
                - Jeffrey, Managing Director of JL Facilities Management Sdn Bhd
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
