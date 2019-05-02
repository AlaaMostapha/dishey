import React, {Component} from 'react';
import './about.scss';

import btm from '../../assets/images/btm-style.png';
class About extends Component {
    render() {
        return (
            <section className="about-us-block my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title">
                                <p className="top-h">Resturant Name</p>
                                <h2>About us</h2>
                                <div className="btm-style">
                                    <span><img src={btm} alt="alt" className="img-responsive"/></span>
                                </div>
                                <p className="bottom-p text-left my-4">Lorem ipsum dolor sit amet consectetur
                                    adipiscing elit. Curabitur erat turpis posuere ac ante atLorem ipsum dolor sit
                                    amet consectetur adipiscing elit. Curabitur erat turpis posuere ac ante atLorem
                                    ipsum dolor sit amet consectetur adipiscing elit. Curabitur erat turpis posuere
                                    ac ante atLorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur erat
                                    turpis posuere ac ante atLorem ipsum dolor sit amet consectetur adipiscing elit.
                                    Curabitur erat turpis posuere ac ante at Curabitur erat turpis posuere ac ante
                                    atLorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur erat turpis
                                    posuere ac ante at</p>
                            </div>
                        </div>
                        <div className="title">
                            <p className="top-h mb-4">some interesting facts</p>
                        </div>
                        <div className="col-lg-12">
                            <div  className="d-flex">
                                <ul className="list-unstyled AboutUL text-left">
                            <li>
                                Good</li>
                            <li>
                                Fresh</li>
                            <li>
                                Maecenas
                            </li>
                            <li>
                                Pellentesque</li>
                            <li>
                                Natural</li>
                        </ul>
                                <ul className="list-unstyled AboutUL text-left">
                            <li>
                                Good</li>
                            <li>
                                Fresh</li>
                            <li>
                                Maecenas
                            </li>
                            <li>
                                Pellentesque</li>
                            <li>
                                Natural</li>
                        </ul>
                        <ul className="list-unstyled AboutUL text-left">
                        <li>
                        Good</li>
                    <li>
                        Fresh</li>
                    <li>
                        Maecenas
                    </li>
                    <li>
                        Pellentesque</li>
                    <li>
                        Natural</li>
                        </ul>
                        <ul className="list-unstyled AboutUL text-left">
                        <li>
                        Good</li>
                    <li>
                        Fresh</li>
                    <li>
                        Maecenas
                    </li>
                    <li>
                        Pellentesque</li>
                    <li>
                        Natural</li>
                        </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        )
    }
}
export default About;