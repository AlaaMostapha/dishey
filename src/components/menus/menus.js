import React, {Component} from 'react';
//import '../general_css/flaticons.scss';
import '../general_css/colors.css'
import './menus.scss';
import './menuCustomjs';
import {gridView, listView} from './menuCustomjs';
import '../thismonthoffers/thismonthoffers.scss';
import pizza from '../../assets/flaticons/pizza.png';
import burger from '../../assets/flaticons/burger.png';
import chicken from '../../assets/flaticons/chicken.png';
import salad from '../../assets/flaticons/salad.png';
import fries from '../../assets/flaticons/fries.png';
import drinks from '../../assets/flaticons/drink.png';
import taco from '../../assets/flaticons/taco.png';
//import Cart from '../cart/cart'
//import drink from '../../assets/images/drinks.png'
//import burgerimg from '../../assets/images/p-img15.png';
import Pagination from "react-js-pagination";
import Model from '../AboutMorePopUp/AboutMorePopUp'
// import img1 from '../../assets/images/img1.png'; import img2 from
// '../../assets/images/img2.png'; import img3 from
// '../../assets/images/img3.png'; import img4 from
// '../../assets/images/img4.png'; import img5 from
// '../../assets/images/img5.png';
import axios from 'axios';
class Menus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [], //all item db
            sliceData: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageCount: 1,
            view: 0, //list and grid view
            itemData:[], //pop up item
            cartItems:[] ,//cart array items
            popItem:{}
        }
    }  
    //func to get all data from json server and put in data array of state
    getData = (url) => {
        axios
            .get(url)
            .then(json => {
                console.log(json.data)
                this.setState({data: json.data})
                console.log(this.state.data)
                //  this.PricesFilter()//calling

                this.count(this.page_size)
                this.setState({
                    //put first 3 items to show them at first time to open page
                    sliceData: this
                        .state
                        .data
                        .slice(0, 3)
                })
            })
            .catch(e => {
                console.error(e)
            })

    }
    //call burger data
    burger = () =>{
        this.getData(`http://localhost:4005/burger`)
    }
     //call chicken data
    chicken =()=>{
        this.getData(`http://localhost:4005/chicken`)
    }
    //call salad data
    salad =()=>{
        this.getData(`http://localhost:4005/salad`)
    }
    //call drinks data
    drinks = () =>{
        this.getData(`http://localhost:4005/drinks`)
    }
    //call taco data
    taco =()=>{
        this.getData(`http://localhost:4005/taco`)
    }
    //call fries data
    fries =()=>{
        this.getData(`http://localhost:4005/fries`)
    }
    //sort data by price from low to high
    PriceFilterLowToHigh = () => {
        console.log("prices filter from low to high")
        this.setState({
            data: this.state.data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        })
        console.log(this.state.data)
        this.filterPage()
    }
    //sort data by price from high to low
    PriceFilterHighToLow = () => {
        console.log("prices filter from high to low")
        this.setState({
            data: this.state.data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        })
        console.log(this.state.data)
        this.filterPage()
    }  
    //sort data by popularity
    Popularity = () => {
        console.log("popularity")
        this.setState({
            data: this.state.data.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity))
        })
        console.log(this.state.data)
        this.filterPage()
    }
    //sort data by newest
    Newest = () => {
        console.log("newest")
        this.setState({
            data: this.state.data.sort((a, b) => parseFloat(b.newest) - parseFloat(a.newest))
        })
        console.log(this.state.data)
        this.filterPage()
    }
    //filter slice data an goto first page
    filterPage = () => {
        console.log(this.state.data)
        this.setState({activePage:1})
        this.setState({
            //put first 3 items to show them at first time to open page
            sliceData: this
                .state
                .data
                .slice(0, 3)
        }) 
    }
    //page func to slice allData array in pages with constant page size
    page_size = 3; //no of items in page
    paginate(array, page_size, page_number) {
        --page_number; // because pages logically start with 1, but technically with 0
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }
    //func to calculte no of pages
    count(page_size) {
        var pageNumber = this.state.totalItemsCount / page_size
        console.log(page_size)
        console.log(pageNumber)
        if (pageNumber === parseInt(pageNumber, 10)) {
            //donothing
            console.log(pageNumber)
        } else {
            pageNumber = parseInt(pageNumber) + 1;
            console.log(pageNumber)
        }
        this.setState({totalItemsCount: pageNumber})
        console.log(this.state.totalItemsCount)
    }
    //when all components and style ,html reload get all data
    componentDidMount() {
        this.getData(`http://localhost:4005/pizza`) //calling
        // this.PriceFilterHighToLow(); this.PriceFilterLowToHigh()
    }
    //fun run when click on pagination pages to set active page and call pagination
    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        // console.log(this.state.data)
        this.setState({
            sliceData: this.paginate(this.state.data, this.page_size, pageNumber)
        })
        setTimeout(function () {
            console.log("handel change view = " + this.state.view)
            if (this.state.view === 0) {
                this.onClickList() //calling
                console.log("if list handle change")
            } else if (this.state.view === 1) {
                this.onClickGrid() //calling
                console.log("if grid handle change")
            }
        }.bind(this), 0.5);
    }
    //change to list view
    onClickList = () => {
        console.log(this.state.view)
        listView(); //calling
        this.setState({view: 0}) //change state view value
    }
    //change to grid view
    onClickGrid = () => {
        console.log(this.state.view)
        gridView(); //calling
        this.setState({view: 1}) //change state view value
    }
    /////////////////////////////about more pop up
    AboutMore=(e)=>{   
        console.log(e.currentTarget.parentElement.parentElement.parentElement.id)
        let itemId= e.currentTarget.parentElement.parentElement.parentElement.id
        let item=this.state.data.filter(function(singleItem){ 
            return singleItem.id==itemId
        })
        console.log(item)
        this.setState({itemData:item[0]});
        this.handleShow();
        console.log(this.state.itemData)
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
        let itemIdCart= e.currentTarget.parentElement.parentElement.parentElement.id;//get item id
        console.log(itemIdCart)//item id
        console.log("localstorage")
        console.log(JSON.parse(localStorage.getItem("cart")))
        let data =JSON.parse(localStorage.getItem("cart"))
        let itemexp =  this.state.data.filter(function(item){//get clicked item data
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
        //get data from array and display it
        const thedata = this
            .state
            .sliceData
            .map((d) => {
                return (
                    <div className="col-lg-4 col-md-3 col-sm-5" key={d.id} id={d.id}>
                        <div className="block-stl2">
                            <div className="img-holder text-center">
                                <img src={d.src} alt="alt" className="img-responsive"/>
                            </div>
                            <div className="text-block animText">
                                <h3>{d.name}</h3>
                                <p className="sz">Size : {d.size}</p>
                                <p className="price">
                                    <span>${d.price}</span>
                                    <del>${d.off}
                                        off</del>
                                    <span>p:{d.popularity} - n:{d.newest}</span>
                                </p>
                            </div>
                            <div className="btn-sec anim">
                                <p className="btn4 aboutMore" onClick={this.AboutMore}>About More</p><br/>
                                <p className="btn1 stl2 addToCart" onClick={this.AddToCart}>Add to Cart</p>
                            </div>
                            <span className="nonveg veg-nonveg"/>
                        </div>
                    </div>
                )
            })
        return (
            <div>
            <Model data={this.state.itemData} show={this.state.show} hide={this.handleClose} from="menu" alldata={this.state.data}/>
                <section className="menus my-5">
                <div className="container-fluid pl-0">
                    <div className="row">
                        <div className="col-md-2 category">
                            <div className="bg1 style_prevu_kit active"><img src={pizza} alt="pizza"/>
                                <h4>Pizza</h4>
                            </div>
                            <div className="bg2 style_prevu_kit" onClick={this.burger}><img src={burger} alt="burger"/>
                                <h4>Burger</h4>
                            </div>
                            <div className="bg3 style_prevu_kit" onClick={this.chicken}><img src={chicken} alt="chicken"/>
                                <h4>Chicken</h4>
                            </div>
                            <div className="bg4 style_prevu_kit" onClick={this.salad}><img src={salad} alt="salad"/>
                                <h4>Salad</h4>
                            </div>
                            <div className="bg5 style_prevu_kit" onClick={this.fries}><img src={fries} alt="fries"/>
                                <h4>Fries</h4>
                            </div>
                            <div className="bg6 style_prevu_kit" onClick={this.drinks}><img src={drinks} alt="drinks"/>
                                <h4>Drinks</h4>
                            </div>
                            <div className="bg7 style_prevu_kit" onClick={this.taco}><img src={taco} alt="taco"/>
                                <h4>Taco</h4>
                            </div>
                        </div>
                        <div className="col-md-10">

                            <div className="row justify-content-center mb-3">
                                <div className="col-lg-7 text-right filterheading">
                                    <button className="filterBtns" onClick={this.PriceFilterHighToLow}>High to Low</button>
                                    <button className="filterBtns" onClick={this.PriceFilterLowToHigh}>Low to High</button>
                                    <button className="filterBtns" onClick={this.Popularity}>Popularity</button>
                                    <button className="filterBtns" onClick={this.Newest}>Newest First</button>
                                </div>
                                <div className="col-lg-3 filterheading">
                                    <i className="fas fa-list fa-2x mr-2" onClick={this.onClickList} alt="list"></i>
                                    <i className="fas fa-th fa-2x" alt="grid" onClick={this.onClickGrid}></i>
                                </div>

                            </div>
                            <div className="row mx-5 mb-3">
                                {thedata}
                                {thedata.length}
                            </div>
                            <div className="pag">
                                <Pagination
                                    activePage={this.state.activePage}
                                    totalItemsCount={this.state.data.length}
                                    onChange={this.handlePageChange}
                                    itemsCountPerPage={3}/>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            </div>
        )
    }
}
// const Pagination = (props)=>{ return(   <button onClick={props.onClick}
// value={props.name} > {props.name} </button>  ) }
export default Menus;