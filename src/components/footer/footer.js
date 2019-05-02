import React, {Component} from 'react';
import './footer.scss';
import crt1 from '../../assets/images/crt1.png';
import crt2 from '../../assets/images/crt2.png';
import crt3 from '../../assets/images/crt3.png';
import crt4 from '../../assets/images/crt4.png';
import layer12 from '../../assets/images/Layer-12.jpg';
import layer13 from '../../assets/images/Layer-13.jpg';
import layer14 from '../../assets/images/Layer-14.jpg';
import layer15 from '../../assets/images/Layer-15.jpg';
import layer16 from '../../assets/images/Layer-16.png';
import layer17 from '../../assets/images/Layer-17.jpg';
import layer18 from '../../assets/images/Layer-18.jpg';
import layer19 from '../../assets/images/Layer-19.jpg';
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="main-footer new-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="footer-head">
                                    <h3>About Us :</h3>
                                </div>
                                <div className="footer-content">
                                    <p>Donec tincidunt, augue a convallis cursus, sapien eros efficitur sem in
                                        placerat sapien est nec quam.</p>
                                    <a href="/" className="link">Read More</a>
                                    <ul className="list-unstyled card-block">
                                        <li>
                                            <a href="/"><img src={crt1} alt="alt"/></a>
                                        </li>
                                        <li>
                                            <a href="/"><img src={crt2} alt="alt"/></a>
                                        </li>
                                        <li>
                                            <a href="/"><img src={crt3} alt="alt"/></a>
                                        </li>
                                        <li>
                                            <a href="/"><img src={crt4} alt="alt"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                <div className="our-company">
                                    <div className="footer-head">
                                        <h3>Our Company :</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="list-unstyled text-left">
                                            <li>
                                                <a href="/">New In</a>
                                            </li>
                                            <li>
                                                <a href="/">Pizza murgon</a>
                                            </li>
                                            <li>
                                                <a href="/">Burger king</a>
                                            </li>
                                            <li>
                                                <a href="/">Fried Chicken</a>
                                            </li>
                                            <li>
                                                <a href="/">Mocktail</a>
                                            </li>
                                            <li>
                                                <a href="/">Top Brands</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                                <div className="footer-head">
                                    <h3>Customer Care :</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="list-unstyled text-left">
                                        <li>
                                            <a href="/">New In</a>
                                        </li>
                                        <li>
                                            <a href="/">Pizza murgon</a>
                                        </li>
                                        <li>
                                            <a href="/">Burger king</a>
                                        </li>
                                        <li>
                                            <a href="/">Fried Chicken</a>
                                        </li>
                                        <li>
                                            <a href="/">Mocktail</a>
                                        </li>
                                        <li>
                                            <a href="/">Top Brands</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="flickr">
                                    <div className="footer-head">
                                        <h3>Get Flickr :</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="list-unstyled text-left">
                                            <li>
                                                <a href="/"><img src={layer12} alt="alt" className="img-responsive"/></a>
                                            </li>
                                            <li>
                                                <a href="/"><img src={layer13} alt="alt" className="img-responsive"/></a>
                                            </li>
                                            <li>
                                                <a href="/"><img src={layer14} alt="alt" className="img-responsive"/></a>
                                            </li>
                                            <li>
                                                <a href="/"><img src={layer15} alt="alt" className="img-responsive"/></a>
                                            </li>
                                            <li>
                                                <a href="/"><img src={layer16} alt="alt" className="img-responsive"/></a>
                                            </li>
                                            <li>
                                                <a href="/"><img src={layer17} alt="alt" className="img-responsive"/></a>
                                            </li>
                                            <li>
                                                <a href="/"><img src={layer18} alt="alt" className="img-responsive"/></a>
                                            </li>
                                            <li>
                                                <a href="/"><img src={layer19} alt="alt" className="img-responsive"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copy-right">
                    <div className="container">
                       
                        <ul className="social-nav">
                            <li className="mr-0">
                                <a href="/"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li className="mr-0">
                                <a href="/"><i className="fab fa-google-plus-g"></i></a>
                            </li>
                            <li className="mr-0">
                                <a href="/"><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default Footer;