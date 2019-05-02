import React, {Component} from 'react';
import './specialmeals.scss';
import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';
import img8 from '../../assets/images/img8.png';
import img9 from '../../assets/images/img9.png';
class SpecialMeals extends Component {
    render() {
        return (
            <section className="spl-offer py-4 pb-2">
                <div className="container-fluid c-grid">
                    <div className="row">
                        <div className="grid1">
                            <div className="block-stl3 stl1">
                                <div
                                    className="fixed-bg"
                                    style={{
                                        background: 'url("../../assets/images/img6.jpg")'
                                    }}/>
                                <div className="img-holder">
                                    <img src={img6}alt="alt" className="img-responsive"/>
                                </div>
                                <div className="offer-block">
                                    <p className="top-h">combo pack offer</p>
                                    <h2>want something real &amp; juicy ?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare
                                        placerat tellus.</p>
                                    <a href="shopping_cart.html" className="btn3">Add to cart</a>
                                </div>
                            </div>
                            <div className="c-grid2">
                                <div className="col1">
                                    <div className="block-stl3 stl3 m-0 p-0">
                                        <div className="img-holder">
                                            <img src={img7} alt="alt" className="img-responsive"/>
                                        </div>
                                        <div className="offer-block">
                                            <h2>new arrivals</h2>
                                            <p>Lorem ipsum dolor sit amconsetur adipiscing elit. Integer</p>
                                            <a href="shopping_cart.html" className="btn3">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col2">
                                    <div className="block-stl3 bg9 stl4 m-0 p-0">
                                        <div className="img-holder">
                                            <img src={img8} alt="alt" className="img-responsive"/>
                                        </div>
                                        <div className="offer-block">
                                            <h2>hot chicken</h2>
                                            <p>An&nbsp;to our fun day.Lorem ipsum dolor sit aadipiscing elit</p>
                                            <a href="shopping_cart.html" className="btn3">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid2">
                            <div className="block-stl3 stl2 m-0 p-0">
                                <div
                                    className="fixed-bg"
                                    style={{
                                        background: 'url("../../assets/images/img9.jpg")'
                                    }}/>
                                <div className="img-holder">
                                    <img src={img9}alt="alt" className="img-responsive"/>
                                </div>
                                <div className="offer-block">
                                    <p className="top-h">sunday offer</p>
                                    <h2>wowooo combo pack special offer</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare.</p>
                                    <a href="shopping_cart.html" className="btn3">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default SpecialMeals;