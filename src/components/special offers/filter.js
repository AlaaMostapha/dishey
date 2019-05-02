console.log("hhhhh")
window.onload = () => {
try {

        const Chicken = document.getElementById("Chicken");
        const Meat = document.getElementById("Meat");
        const Drinks = document.getElementById("Drinks");
        const All = document.getElementById("All");
        const meats = document.getElementsByClassName("meats");
        const chickens = document.getElementsByClassName("chickens");
        const drinks = document.getElementsByClassName("drinks");
        console.log(Chicken)
        console.log(Meat)
        console.log(meats)
        console.log(chickens)

        if (All!==null){
            All.addEventListener("click",function(){
                for (var j = 0; j < chickens.length; j++) {
                    chickens[j]
                        .closest('.slick-slide')
                        .style
                        .display = 'inline';
        
                }
                for (var i = 0; i < meats.length; i++) {
                    meats[i]
                        .closest('.slick-slide')
                        .style
                        .display = 'inline';
        
                }
        
                for (var k = 0; k < drinks.length; k++) {
                    drinks[k]
                        .closest('.slick-slide')
                        .style
                        .display = 'inline';
        
                }
            })
            Chicken.addEventListener("click", function () {
                for (var j = 0; j < chickens.length; j++) {
                    chickens[j]
                        .closest('.slick-slide')
                        .style
                        .display = 'inline';
        
                }
                for (var i = 0; i < meats.length; i++) {
                    meats[i]
                        .closest('.slick-slide')
                        .style
                        .display = 'none';
        
                }
        
                for (var k = 0; k < drinks.length; k++) {
                    drinks[k]
                        .closest('.slick-slide')
                        .style
                        .display = 'none';
        
                }
                // meats.style.display="none"; chickens.style.display="inline";
            });
            Meat.addEventListener("click", function () {
                for (var i = 0; i < meats.length; i++) {
                    meats[i]
                        .closest('.slick-slide')
                        .style
                        .display = 'inline';
        
                }
                for (var j = 0; j < chickens.length; j++) {
                    chickens[j]
                        .closest('.slick-slide')
                        .style
                        .display = 'none';
        
                }
                for (var k = 0; k < drinks.length; k++) {
                    drinks[k]
                        .closest('.slick-slide')
                        .style
                        .display = 'none';
        
                }
            });
            Drinks.addEventListener("click", function () {
                for (var k = 0; k < drinks.length; k++) {
                    drinks[k]
                        .closest('.slick-slide')
                        .style
                        .display = 'inline';
        
                }
                for (var i = 0; i < meats.length; i++) {
                    meats[i]
                        .closest('.slick-slide')
                        .style
                        .display = 'none';
        
                }
                for (var j = 0; j < chickens.length; j++) {
                    chickens[j]
                        .closest('.slick-slide')
                        .style
                        .display = 'none';
        
                }
            });
        }
       
    }
    catch(err) {
        console.log('error')
      }
    
  }
 

//.slick-slide