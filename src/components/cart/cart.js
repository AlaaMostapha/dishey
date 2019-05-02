import React, {Component} from 'react';
import './cart.scss';
import Model from "../AboutMorePopUp/AboutMorePopUp"
class Cart extends Component {
    constructor(props) {
        super(props);

        this.state={
            thedata : [], 
            total:0,
            price:0,
            totalTheTotal:0,
            itemData:[]
        }
    }
    componentDidMount() {
        setTimeout( () => {
            this.getData();
        }, 0.2);       
    }

    getData(){
       if(JSON.parse(localStorage.getItem("cart"))){
        this.setState({thedata:JSON.parse(localStorage.getItem("cart"))}, () => {//get data from localstorage to render it
            console.log("data loaded")
            console.log(this.state.thedata)
        });
       } 
    }
    //calculat total price 
    totalPrice=(price,e)=>{
       console.log(e.target.value)//value of input
        console.log(price)//price of one item
        let quantity=e.target.value
        this.setState({total:quantity*price})//calcuate total price
        //this.setState({totalTheTotal:this.state.total})
      // console.log(this.state.totalTheTotal)    
    }
    //remove item from array and local storage
    removeThisItem(index,item,e){
        console.log(e.target)
        console.log(item)
        let cart_array=JSON.parse(localStorage.getItem("cart"))//make array to take data from localstorage
        console.log(cart_array)
        cart_array.splice(index, 1);//remove clicked item from this array
        console.log(cart_array)
        localStorage.setItem('cart', JSON.stringify(cart_array));//put this array in localstorage again after remove this item
        console.log(this.state.thedata)
        this.setState({thedata: cart_array}, () => {//callback to solve syn setstate
            console.log(this.state.thedata)
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
      /////////////////////////////about more pop up
    AboutMore=(e)=>{   
        console.log(e.currentTarget.parentElement.parentElement.id)
        let itemId= e.currentTarget.parentElement.parentElement.id
       // console.log(itemId)
        console.log(this.state.thedata)
        let item=this.state.thedata.filter(function(singleItem){ 
            return singleItem.id==itemId
        })
        
        this.handleShow();
    //    console.log(this.state.itemData)
        this.setState({itemData:item[0]}, () => {//get data from localstorage to render it
            console.log(this.state.itemData)
        })

    }
    render() {
        const cartData = this.state
            .thedata
            .map((cartItem,index) => {
                return (
                    <tr key={index} id={cartItem.id}>
                        <td className="p_dtl">
                            <div className="block-stl9">
                                <div className="img-holder">
                                    <img src={cartItem.src} alt="alt" className="img-responsive cartImg"/>
                                </div>
                                <div className="info-block">
                                    <h5>{cartItem.name}</h5>
                                    <p className="txt-cat">{cartItem.size}</p>
                                    <p className="ab-txt-block">{cartItem.description}</p>
                                </div>
                            </div>
                        </td>
                        <td className="p_btn">
                            <p className="btn1 stl3" onClick={this.AboutMore}>Edit</p>
                            <p className="btn1 stl3" onClick={(e) => this.removeThisItem(index,cartItem,e)}>Remove</p>
                        </td>
                        <td className="p_price" price={cartItem.price}>
                            ${cartItem.price}
                        </td>
                    </tr>
                )
            })
        return (
            <section className="shopping-cart new-block">
            <Model data={this.state.itemData} show={this.state.show} hide={this.handleClose} from="cart" alldata={this.state.thedata}/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-responsive">
                                <table className="table cart-tbl">
                                    <thead>
                                        <tr>
                                            <th className="p_dtl">Product Details</th>
                                            <th className="p_btn"/>
                                            <th className="p_price">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {cartData}
                                    </tbody>
                                  
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"/>
            </section>
        )
    }
}
export default Cart;