import React, {Component} from 'react';
import './thismonthoffers.scss';
import btm from '../../assets/images/btm-style.png';
import img from '../../assets/images/img.png';
import axios from 'axios';
import Model from '../AboutMorePopUp/AboutMorePopUp'
class ThisMonthOffers extends Component {
    state={
        dealOfTheMonth:[],
        popupItem:[]
    }

    componentDidMount() {
        this.getData() //calling
    }
    getData = () => {
        axios
            .get(`http://localhost:4005/deal_of_the_month`)
            .then(json => {
                //   console.log(json.data)
                this.setState({dealOfTheMonth: json.data})
                console.log("deal of the day data "+this.state.dealOfTheMonth)
                //  this.PricesFilter()//calling
            })
            .catch(e => {
                console.error(e)
            })
    }
     
    handleShow=()=> {
        this.setState({ show: true });
    }
    handleClose=()=> {
        this.setState({ show: false }); //close pop up
        //this.props.show=false
    }
    /////////////////////////////about more pop up
    AboutMore = (e) => {
        //  console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id)
              const itemId=e.currentTarget.parentElement.parentElement.parentElement.id
              console.log(itemId)
              let item=this.state.dealOfTheMonth.filter(function(singleItem){ 
                  return singleItem.id==itemId
              })
             this.handleShow();
             this.setState({popupItem: item[0]}, () => {//callback to solve syn setstate
              console.log(this.state.popupItem)
            // this.showItem(this.state.thedata)
              });  
          }
    AddToCart=(e)=>{
            let itemIdCart= e.currentTarget.parentElement.parentElement.parentElement.id;//get item id
            //console.log(itemIdCart)//item id
            console.log("localstorage")
            console.log(JSON.parse(localStorage.getItem("cart")))

            let data =JSON.parse(localStorage.getItem("cart"))
    if(data){
        let itemexp =  this.state.dealOfTheMonth.filter(function(item){//get clicked item data
            return (item.id==itemIdCart)    
        })
     //   console.log("clicked")
     //   console.log(itemexp[0])
        let check=data.filter(function(item){//check if item is in local storage or not
            return (item.id==itemexp[0].id)
        })
     //   console.log("checked")
      //  console.log(check[0])
        if(!check[0]){ //if not add it to array then add it to local storage
            console.log("sfs")
            data.push(itemexp[0])
          //  console.log("pushed data"+data)
        }
        console.log("data in cart")
        console.log(data)
        localStorage.setItem("cart", JSON.stringify(data))//add this item to local storage   
    }   
    }
    render() {
        const thedata=this.state.dealOfTheMonth.map((item)=>{
            return(
                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id} id={item.id}>
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
                                <div className="btn-sec">
                                    <p className="btn4 mb-2" onClick={this.AboutMore}>About More</p>
                                    <p href="shopping_cart.html" className="btn1 stl2" onClick={this.AddToCart}>Add to Cart</p>
                                </div>
                                <span className="nonveg veg-nonveg"/>
                            </div>
                        </div>
                       
            )
        })
        return (
            <section className="this-month new-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title">
                                <p className="top-h">winter special offer</p>
                                <h2>deal of the month</h2>
                                <div className="btm-style">
                                    <span><img src={btm} alt="alt" className="img-responsive"/></span>
                                </div>
                            </div>
                        </div>
                        <Model
                        data={this.state.popupItem}
                        show={this.state.show}
                        hide={this.handleClose}
                        from="homeBanner"
                        alldata={this.state.dealOfTheMonth}/>
                       {thedata}
                        </div>
                </div>
            </section>

        )

    }
}
export default ThisMonthOffers;