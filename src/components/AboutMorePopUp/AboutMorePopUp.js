import React, {Component} from 'react';
import './AboutMorePopUp.scss';

import {Button, Modal} from 'react-bootstrap';
class AboutMorePopUp extends Component {
 constructor(props){
     super(props);
     this.state={
        quantity:1,
        ItemSize:"small",
        additions:"cheese",
        dataArr:[]
    }
 }
 action(item,e){
    if(e.target.innerText==="SAVE CHANGE"){ //modify and save the change
        console.log("SAVE CHANGE")
        console.log(e.target.innerText)
        console.log(item)//this elment
        console.log(item.price)
        item.ItemSize=this.state.ItemSize;//add new size
        item.additions=this.state.additions;//add new additions
        item.quantity=this.state.quantity;//add quantity
        item.total=this.state.quantity*item.price
        console.log(item.id)
        const dataArr = JSON.parse( localStorage.getItem( "cart" ) );//get all data array from local storage
        console.log("before splice "+dataArr)//before replace 
        //var a = dataArr.indexOf("Apple");
      

        console.log( dataArr.splice(item.id, 1, item))//replace old item with new edited item
        console.log("after splice "+dataArr)//console after replace it
        this.setState({dataArr}, () => {//setstate using call back
            console.log(this.state.dataArr)
           // this.state.dataArr.itemsize=this.state.ItemSize
           var joined = this.state.dataArr.concat(item);//concate new item to state array
            this.setState({ dataArr: joined },()=>{
            //  console.log(this.state.dataArr)
              localStorage.setItem('cart', JSON.stringify(dataArr));
            })
        });
    }else if(e.target.innerText==="ADD TO CART"){ //if we are in menu more about then add to cart
        console.log("ADD TO CART")
        //call function in menu js
    }
}
    handleQuantityChange=(e)=>{ //value of quantity input(itemQuantity)
        this.setState({quantity: e.target.value})
        console.log(this.state.quantity)
        this.showItem(this.state.quantity)
    }
    handleSizeChange=  (e)=>{ //value of size select(itemSize)
        e.persist()
        //console.log(this.state.ItemSize)
       console.log(e.target.value)
        this.setState({ItemSize: e.target.value}, () => {//callback to solve syn setstate
            console.log(this.state.ItemSize)
            this.showItem(this.state.ItemSize)
        });    
    }
    showItem=(value)=>{
        console.log(value)
    }
    handleAdditionsChange=(e)=>{ //value of Addition input(itemAddition)
        console.log(e.target.value)
        this.setState({additions: e.target.value}, () => {//callback to solve syn setstate
            console.log(this.state.additions)
            this.showItem(this.state.additions)
        });
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hide} from={this.props.from} data={this.props.data} alldata={this.props.alldata}>

                <Modal.Header closeButton="closeButton">
                    <Modal.Title>{this.props.data.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>Description:</p>
                    <p className="descpP">{this.props.data.description}
                    <i>{this.state.ItemSize} {this.state.quantity} {this.state.additions}</i>
                    </p>
                    <br/>
                    
                   <div>
                        <label htmlFor="size">Size :</label>
                        <select name="size" className="inputsStyle" value={this.state.ItemSize} onChange={this.handleSizeChange}>
                            <option value="small">small</option>
                            <option value="meduim">medium</option>
                            <option value="large">large</option>
                        </select> 
                   </div>
                   
                   <div>
                        <label htmlFor="Additions" >Additions :</label>
                        <select name="Additions" className="inputsStyle" value={this.state.additions} onChange={this.handleAdditionsChange}>
                            <option value="small">cheese</option>
                            <option value="Red sauce">Red sauce</option>
                            <option value="White sauce">White sauce</option>
                        </select>
                   </div>
                   <div>
                        <label htmlFor="quantity">quantity</label>
                        <input type="number"  min={1}  id="" name="quantity" className="inputsStyle"  value={this.state.quantity} onChange={this.handleQuantityChange}/>
              
                    </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="primary" className="cartBtn" onClick={(e) => this.action(this.props.data,e)}>
                       
                        {this.props.from === "cart"? "Save Change":" Add To Cart"}
                    </Button>
                </Modal.Footer>
            </Modal>

        )
    }
}
export default AboutMorePopUp;