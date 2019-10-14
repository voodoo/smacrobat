//let doc = document.getElementById('doc')
//doc.innerHTML = urlSearch.toString()

var urlSearch = new URLSearchParams(document.location.search)
let imgs      = urlSearch.getAll('img')
let weights   = urlSearch.getAll('weight')
let carbs     = urlSearch.getAll('carb')

function Meal(img, weight, carb){
    this.weight = weight
    this.carb = carb
    this.img = img
    this.init = function(){
     //console.log(meals[i], nexts[i])
     let html = `
     <div>
        <img src="${this.img}" width="100%"/>
        <ul>
            <li>
            <label>image:</label><input type="text" name="img" value="${this.img}"/>
            </li>        
            <li>
            <label>weight:</label><input type="text" name="weight" value="${this.weight}"/>
            </li>
            <li>
            <label>carbs:<span>${this.carb}</span></label>
            <div class="slider"></div>
            </li>          
        </ul>
      </div>
      `
  //document.getElementsByTagName('body')[0].appendChild(html)
    document.body.innerHTML += html       
    }
}
let meals = []
for(let i = 0 ; i < imgs.length ; i++){
    let meal = new Meal(imgs[i], weights[i], carbs[i])
        meal.init()
    meals.push(meal)

}

let sliders = document.getElementsByClassName('slider')
for (var i = 0; i < sliders.length; i++) {
   console.log(i)
   var slider =noUiSlider.create(sliders[i], {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: {
            'min': 0,
            'max': 100
        }
    });   
    sliders[i].noUiSlider.on('change', function(v){
        console.log(v)
    })
    // sliders[i].addEventListener('change', function(){
    // this.parentNode.getElementsByTagName('span')[0].innerHTML = this.value
  //})
}

imgs = document.getElementsByName('img')
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('change', function(){
      //console.log(this)
      this.parentNode.parentNode.parentNode.getElementsByTagName('img')[0].src = this.value
    })
}

// let meal = { 
//     weight: null,
//     carbs: null,
//     fat: null,
//     img: null,
//     fiber: null
// }

//document.getElementById('not').style = "color:red"