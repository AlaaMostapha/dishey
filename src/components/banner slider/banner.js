import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import 'react-owl-carousel2/lib/styles.css';
import './banner.scss';
import Pizza from '../../assets/images/pizza.png';
import Pz from '../../assets/images/pz.png';
import axios from 'axios';
import Model from '../AboutMorePopUp/AboutMorePopUp'
class Banner extends Component {
    state = {
        dataSliderItems: [], //data in slider carousel
        itemData: [], //popup item
        cartItems:[] //cart array items
    }
    componentDidMount() {
        this.getData() //calling
    }
    getData = () => {
        axios
            .get(`http://localhost:4005/slider_items`)
            .then(json => {
                //   console.log(json.data)
                this.setState({dataSliderItems: json.data})
                console.log(this.state.dataSliderItems)
                //  this.PricesFilter()//calling
            })
            .catch(e => {
                console.error(e)
            })

    }
 
    /////////////////////////////about more pop up
    AboutMore = (e) => {
  //  console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id)
        const itemId=e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id
        console.log(itemId)
        let item=this.state.dataSliderItems.filter(function(singleItem){ 
            return singleItem.id==itemId
        })
       this.handleShow();
       this.setState({itemData: item[0]}, () => {//callback to solve syn setstate
        console.log(this.state.itemData)
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
      //add  to cart array
    
      AddToCart=(e)=>{
        let itemIdCart= e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;//get item id
        console.log(itemIdCart)//item id
        console.log("localstorage")
        console.log(JSON.parse(localStorage.getItem("cart")))
        let data =JSON.parse(localStorage.getItem("cart"))
        let itemexp =  this.state.dataSliderItems.filter(function(item){//get clicked item data
            return (item.id==itemIdCart)    
        })
        console.log("clicked")
        console.log(itemexp[0])
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
        const carsoulItems = this
            .state
            .dataSliderItems
            .map((item) => {
                return (
                    <Carousel.Item key={item.id} id={item.id}>
                        <div className="item">
                            <div className="slider-block slide1">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="text-block">
                                                <div
                                                    className="img-block ab1"
                                                    data-animation-in="bounceInDown"
                                                    data-animation-out="animate-out fadeOutRight">
                                                    <img src={Pizza} alt="alt" className="img-responsive"/>
                                                </div>
                                                <h1
                                                    className="text-stl1"
                                                    data-animation-in="lightSpeedIn"
                                                    data-animation-out="animate-out fadeOutRight">{item.offer}</h1>
                                                <div
                                                    className="number-block"
                                                    data-animation-in="fadeInUp"
                                                    data-animation-out="animate-out fadeOutRight">
                                                    <p className="text-stl2">{item.description}</p>
                                                    <div className="text-center" >
                                                        <p  className="btn1 stl2" onClick={this.AboutMore}>About More</p>
                                                        <p className="btn1 stl1" onClick={this.AddToCart}>Add to Cart</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="img-block img2">
                                                <div
                                                    className="img-holder"
                                                    data-animation-in="fadeInDown"
                                                    data-animation-out="animate-out fadeOutRight">
                                                    <img src={Pz} alt="alt" className="img-responsive"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                )
            })
        return (

            <div className="banner slider1 fixed-bg">
                <Model
                    data={this.state.itemData}
                    show={this.state.show}
                    hide={this.handleClose}
                    from="homeBanner"
                    alldata={this.state.dataSliderItems}/>
                <Carousel>
                    {carsoulItems}
                </Carousel>
            </div>
        )
    }
}
export default Banner;