import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Carousel, Container, Image, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter} from "react-bootstrap-icons";

const TopMenu = () => (
    <nav className={"navbar navbar-expand-xxl navbar-light bg-light mx-auto"}>
            <ul class={"navbar-nav mx-auto"}>
                    <li className={"nav-item"}>
                            <Image src={"tedsbakeryLogo.png"}></Image>
                    </li>
            </ul>
    </nav>

);

const NavbarInfo = () => (
    <nav className={"navbar navbar-expand-lg navbar-light bg-light mx-auto sticky-top"}>
            <ul class={"navbar-nav mx-auto"}>
                    <li className={"nav-item"}>
                            <a class={"nav-link"} href={"#"}>MENU</a>
                    </li>
                    <li className={"nav-item"}>
                            <a className={"nav-link"} href={"#"}>SHOP INFORMATION</a>
                    </li>
                    <li className={"nav-item"}>
                            <a className={"nav-link"} href={"#"}>FIND US</a>
                    </li>
                    <li className={"nav-item"}>
                            <a className={"nav-link"} href={"#"}>GIFT CARD</a>
                    </li>
                    <li className={"nav-item me-3 custom-order-navItem"}>
                            <a className={"nav-link"} href={"#"}>ORDER ONLINE</a>
                    </li>
            </ul>
    </nav>
);

const ImageCarousel = () => (
    <Carousel fade>
        <Carousel.Item>
            <Image src={"CarouselImage1.jpg"}></Image>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={"CarouselImage2.jpg"}></Image>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={"CarouselImage3.jpg"}></Image>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={"CarouselImage4.jpg"}></Image>
        </Carousel.Item>
        <Carousel.Item>
            <Image src={"CarouselImage5.jpg"}></Image>
        </Carousel.Item>
    </Carousel>
);

const Awards = () => (
    <div className={"container d-flex align-items-center justify-content-center my-3 py-3"}>
        <div className={"row w-50"}>
            <Image src={"AwardTop.jpg"} alt={"Awards"}/>
            <Image src={"AwardBottom.jpg"} alt={"Awards"}/>
        </div>
    </div>
);

const InstagramButton = () => (
    <nav className="navbar mx-auto justify-content-center mb-4">
        <button type="button" className="btn btn-primary"><Nav.Link><Instagram/> Follow on Instagram</Nav.Link></button>
    </nav>
);

const InstagramPhotos = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
        <ul className="navbar-nav mx-auto w-50 d-flex align-items-center justify-content-center">
            <li className="nav-item">
                <a className="nav-link w-20" href="#"><Image src="InstaPhoto1.jpg"/></a>
            </li>
            <li className="nav-item w-20">
                <a className="nav-link" href="#"><Image src="InstaPhoto2.jpg"/></a>
            </li>
            <li className="nav-item w-20">
                <a className="nav-link" href="#"><Image src="InstaPhoto3.jpg"/></a>
            </li>
            <li className="nav-item w-20">
                <a className="nav-link" href="#"><Image src="InstaPhoto4.jpg"/></a>
            </li>
        </ul>
    </nav>
);

const FooterMenu = () => (
    <footer className={"my-footer"}>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <Image src={"tedsbakeryLogo.png"}/>
                    <div>
                        <p>Ted’s Bakery is located on the North Shore of Oahu.
                            Ted’s offers a variety of pies, cakes, and plate lunches.</p>
                    </div>
                </div>
                <div className={"col"}>
                    <div>Open Hours</div>
                    <div>Monday-Sunday</div>
                    <div>8:00am-6:30pm</div>
                    <div></div>
                    <div>Address</div>
                    <div>59-024 Kamehameha Hwy Haleiwa, HI 96712</div>
                    <a className="link">(See Map)</a>
                    <div>Phone & Fax</div>
                    <div>Retail shop: 808-638-8207</div>
                    <div>Office: 808-638-5974</div>
                </div>
                <div className={"col"}>
                    <div>
                        QUICK LINK'S
                    </div>
                    <div><a className="link">MENU</a></div>
                    <div><a className="link">SHOP INFORMATION</a></div>
                    <div><a className="link">FIND US</a></div>
                    <div><a className="link">GIFT CARD</a></div>
                    <div><a className="link">ORDER ONLINE</a></div>
                    <div><a className="link">TERMS AND CONDITIONS</a></div>
                </div>
            </div>
        </div>
    </footer>
);

const IslandSnow = () => (
    <Container>
        <TopMenu/>
        <NavbarInfo/>
        <ImageCarousel/>
        <Awards/>
        <InstagramPhotos/>
        <InstagramButton/>
        <FooterMenu/>
    </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);
