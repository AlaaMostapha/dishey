import React, {Component} from 'react';
import '../../../node_modules/jquery/dist/jquery'
import './filter'
import './special_offers.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './special_offers.scss'
import Slider from "react-slick";

import img from '../../assets/images/img.png';
import btm from '../../assets/images/btm-style.png';
import Model from '../AboutMorePopUp/AboutMorePopUp'
import axios from 'axios';
export default class SimpleSlider extends Component {
    state = {
        meats: "meats",
        chickens: "chickens",
        drinks: "drinks",
        festivalSpecialOffer:[],
        popupItem:[],
        cartItems:[],
        localData:[]
    }
        componentDidMount() {
            this.getData() //calling
        }
        getData = () => {
        axios
            .get(`http://localhost:4005/festival_special_offer`)
            .then(json => {
                //   console.log(json.data)
                this.setState({festivalSpecialOffer: json.data})
                console.log("fesival data " +this.state.festivalSpecialOffer)
                //  this.PricesFilter()//calling
            })
            .catch(e => {
                console.error(e)
            })

        }
        /////////////////////////////about more pop up
        AboutMore = (e) => {
        //  console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id)
              const itemId=e.currentTarget.parentElement.parentElement.parentElement.parentElement.id
              console.log(itemId)
              let item=this.state.festivalSpecialOffer.filter(function(singleItem){ 
                return singleItem.id==itemId
            })
           this.handleShow();
           this.setState({popupItem: item[0]}, () => {//callback to solve syn setstate
            console.log(this.state.popupItem)
          // this.showItem(this.state.thedata)
            }); 
               
        }
        handleShow=()=> {
            this.setState({ show: true });
        }
        handleClose=()=> {
            this.setState({ show: false }); //close pop up
            //this.props.show=false
        }
        AddToCart=(e)=>{
            let itemIdCart= e.currentTarget.parentElement.parentElement.parentElement.parentElement.id;//get item id
            //console.log(itemIdCart)//item id
            console.log("localstorage")
            console.log(JSON.parse(localStorage.getItem("cart")))

            let data =JSON.parse(localStorage.getItem("cart"))
            let itemexp =  this.state.festivalSpecialOffer.filter(function(item){//get clicked item data
                return (item.id==itemIdCart)    
            })
         //   console.log("clicked")
         //   console.log(itemexp[0])
         if(data){
            let check=data.filter(function(item){//check if item is in local storage or not
                return (item.id==itemexp[0].id)
            })
            console.log("checked")
            console.log(check[0])
           if(!check[0]){ //if not add it to array then add it to local storage
               console.log("sfs")
               data.push(itemexp[0])
               console.log("pushed data"+data)
            }
            console.log("data in cart")
            console.log(data)
            
        }else{
            data=itemexp
        }
        localStorage.setItem("cart", JSON.stringify(data))//add this item to local storage   

        }
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
        };
        const festival_special = this.state.festivalSpecialOffer.map((item)=>{
            return(
                <div key={item.id} id={item.id}>
                <div >
                    <div className="block-stl2">
                        <div className="img-holder">
                            <img src={img} alt="alt" className="img-responsive"/>
                        </div>
                        <div className="text-block">
                            <h3>{item.name}</h3>
                            <p className="sz">Size : {item.size}</p>
                            <p className="price">
                                <span>${item.price}</span>
                                <del>${item.off} off</del>
                            </p>
                        </div>
                        <div className="btn-sec text-center">
                            <p  className="btn4 mb-2" onClick={this.AboutMore}>About More</p>
                            <p  className="btn1 stl2"  onClick={this.AddToCart}>Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        })
        return (
            <div className="container-fluid slickSlider">
            <Model
                    data={this.state.popupItem}
                    show={this.state.show}
                    hide={this.handleClose}
                    from="homeBanner"
                    alldata={this.state.festivalSpecialOffer}/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title">
                                <p className="top-h">Festival special offer</p>
                                <h2>deal of the day</h2>
                                <div className="btm-style">
                                    <span><img src={btm} alt="alt" className="img-responsive"/></span>
                                </div>
                                <p className="bottom-p mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                    <br/>Curabitur erat turpis posuere ac ante at</p>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <div id="ofr_end"/>
                        </div>
                    </div>
                </div>
                
                <Slider {...settings}>

                    {festival_special}
                </Slider>
                <script src="special offers/filter.js"></script>
            </div>
        );
    }
}