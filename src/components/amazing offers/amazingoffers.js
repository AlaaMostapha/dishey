import React, {Component} from 'react';
import './amazingoffers.scss';
import Pz1 from '../../assets/images/pz1.png';
import axios from 'axios';
import Model from '../AboutMorePopUp/AboutMorePopUp'
class AmazingOffers extends Component {
    state = {
        dataSpecialOfferOne: [], //data in slider carousel
        itemData: [], //popup item
    }
    componentDidMount() {
        this.getData() //calling
    }
    getData = () => {
        axios
            .get(`http://localhost:4005/special_offer_one`)
            .then(json => {
                //   console.log(json.data)
                this.setState({dataSpecialOfferOne: json.data})
                console.log("this one special ofeer "+this.state.dataSpecialOfferOne)
                //  this.PricesFilter()//calling
            })
            .catch(e => {
                console.error(e)
            })
    }
 
    /////////////////////////////about more pop up
    AboutMore = (e) => {
  //  console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id)
        const itemId=e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.id
        console.log(itemId)
        let item=this.state.dataSpecialOfferOne.filter(function(singleItem){ 
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
        let itemIdCart= e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.id;//get item id
        console.log(itemIdCart)//item id
        console.log("localstorage")
        console.log(JSON.parse(localStorage.getItem("cart")))

        let data =JSON.parse(localStorage.getItem("cart"))
       
        let itemexp =  this.state.dataSpecialOfferOne.filter(function(item){//get clicked item data
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
        const thedata=this.state.dataSpecialOfferOne.map((item)=>{
            return(
                <div className="container-fluid" key={item.id} id={item.id}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="img-holder">
                            <img src={Pz1} alt="alt" className="img-responsive"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="text-block-stl1">
                            <div className="title">
                                <p className="top-h">{item.name}</p>
                                <h2>{item.off}</h2>
                                <p className="bottom-p">{item.description}</p>
                                <p className="btn1 stl2" onClick={this.AddToCart}>Add to cart</p>
                                <p className="btn1 stl1" onClick={this.AboutMore}>about more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            )
        })
        return (
            <section className="amezing-offers new-block">
            <Model
            data={this.state.itemData}
            show={this.state.show}
            hide={this.handleClose}
            from="homeBanner"
            alldata={this.state.dataSpecialOfferOne}/>
                <div className="overlay"/>
                <div
                    className="fixed-bg parallax"
                    style={{
                        background: 'url("../../assets/images/bg1.png")'
                    }}/>
                    {thedata}
               </section>
        )
    }
}

export default AmazingOffers;