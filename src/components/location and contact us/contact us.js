import React, {Component} from 'react';
import './contactus.scss';
import btm from '../../assets/images/btm-style.png';
class ContactUs extends Component {
    render() {
        return (
            <div >
               
                <section className="new-block contactusHeader">
                <div className="container py-5 mb-3 ">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            
                            <h2>Contact Us</h2>
                            <div className="btm-style">
                                <span><img src={btm} alt="alt" className="img-responsive"/></span>
                            </div>
                            <p className="bottom-p">Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                <br/>Curabitur erat turpis posuere ac ante at</p>
                        </div>
                    </div>
                </div>
            </div>

                    <div className="contactusmap container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13650.89345933076!2d29.9220111!3d31.2006828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01845213e49%3A0x9831b638c4420ba6!2s8950+Rakha+Al+Islam%2C+Al+Andalus+District%2C+Jeddah+23326%C2%A04142!5e0!3m2!1sen!2seg!4v1554376751404!5m2!1sen!2seg"
                            height={480}
                            frameBorder={0}
                            style={{
                                border: 0
                            }}
                            allowFullScreen="allowFullScreen"
                            title="map1"
                            id="map"/>
                    </div>

                    <div
                        className="center-wrapper cn-us"
                        style={{
                            background: 'url("../../assets/images/ptrn1.jpg")'
                        }}>

                        <div className="overlay"/>
                        <div className="send-msg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="block-stl11">
                                            <i className="flaticon-placeholder"/>
                                            <p>PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="block-stl11">
                                            <i className="flaticon-phone-call"/>
                                            <p>+01 123 456 789
                                                <br/>+01 987 654 321</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="block-stl11">
                                            <i className="flaticon-message"/>
                                            <p>mail@domnoo.com
                                                <br/>mail@domnoo.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-block1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="title">
                                            <h2>Send us a messages</h2>
                                            <p className="bottom-p">Sed scelerisque, ipsum in rutrum gravida, odio eros
                                                maximus erat, varius pretium tellus
                                                <br/>
                                                eros et quam. Vivamus interdum ligula vitae dui pulvinar congue. Aliquam
                                                faucibus</p>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                    <form action="#" className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Name" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Last Name" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Contact Number" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" placeholder="Email id" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Write your messages.."
                                                    defaultValue={""}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 text-center">
                                            <input type="button" className="btn btn3" defaultValue="Send message"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

        )
    }
}
export default ContactUs;