import $ from '../../../node_modules/jquery/dist/jquery';
const categoryDivs = document.getElementsByClassName("style_prevu_kit");
console.log("a")
console.log(categoryDivs)
window.onload = () => {
    console.log($(".style_prevu_kit"))
    $(".style_prevu_kit").click(function() { 
        $(".style_prevu_kit").not($(this)).removeClass('active');
        $(this).addClass("active")
      });
      
}
export function gridView(view){
  console.log("grid")
  view=1 //means grid
  $(".img-holder").css("width","50%")
  $(".img-holder img").css("width","100%")
  $(".text-block").css("width","50%")
  $(".block-stl2").stop()
  $(".btn-sec").css({
    "opacity":"1",
    "visibility":"visible",
    "width":"50%",
    "right":"0",
    "left":"50%"
  });
  $(".price").css({
    "visibility":"visible",
    "opacity":"1"
  })
  $(".text-block").css('position','unset')
  //$("div.animText").removeClass("btn-sec");
}
export function listView(view){
  console.log("list")
  view=0 //means list
  $(".img-holder").css("width","100%")
  $(".img-holder img").css("width","auto")
  $(".text-block").css("width","100%")
  $(".btn-sec").css({
    "opacity":"1",
    "visibility":"hidden",
    "width":"100%",
    "right":"50%",
    "left":"0"
  });

  $(".text-block").css('position','relative')
}


/*PricesFilter=()=>{
  console.log("prices filter")
  console.log(this.state.data.length)
const  copy=[]
  for(var i=0;i<this.state.data.length;i++){
   copy[i]=this.state.data[i].price
  }
  this.setState({prices:copy})//prices is an obj
  console.log("price state "+this.state.prices)
  this.state.prices.sort(function(a, b){return a-b})//sorting numbers in prices pbj and return it as array
  console.log(this.state.prices)
}
*/