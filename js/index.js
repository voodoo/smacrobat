// init from url

var urlSearch = new URLSearchParams(document.location.search)
let imgs      = urlSearch.getAll('img')
let weights   = urlSearch.getAll('weight')
let carbs     = urlSearch.getAll('carb')
let fats      = urlSearch.getAll('fat')
let prots     = urlSearch.getAll('prot')
let fbs       = urlSearch.getAll('fb')

let meals = []
for(let i = 0 ; i < imgs.length ; i++){
    let meal = new Meal(imgs[i], weights[i], carbs[i], fats[i], prots[i], fbs[i])
        
    meals.push(meal)
    meal.init(i)

}

weights = document.getElementsByName('weight')
for (var i = 0; i < imgs.length; i++) {
    weights[i].addEventListener('keyup', function(){
      let htmlMeal = this.parentNode.parentNode.parentNode
      console.log(htmlMeal)
      let mealId = htmlMeal.dataset.index
      let meal = meals[mealId]
      meal.weight = this.value
      meal.setCalories()
    })
}

imgs = document.getElementsByName('img')
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('change', function(){
      //console.log(this)
      this.parentNode.parentNode.parentNode.getElementsByTagName('img')[0].src = this.value
    })
}

// macro sliders
let sliders = document.getElementsByClassName('slider')
for (var i = 0; i < sliders.length; i++) {
   var slider =noUiSlider.create(sliders[i], {
        index: i,
        start: [20, 80],
        connect: [true, true, true],
        step: 1,
        range: {
            'min': 0,
            'max': 100
        },
        format: {
            to: function(v){
              return v 
            },
            from: function(v){
              return v
            }
        }       
    });   
    var connect = sliders[i].querySelectorAll('.noUi-connect');
    var classes = ['c-carbs', 'c-fats', 'c-prots'];
    
    for (var ii = 0; ii < connect.length; ii++) {
        connect[ii].classList.add(classes[ii]);
    }    
     
    sliders[i].noUiSlider.on('change', function(v){
        meals[this.options.index].setMacros(v)
    })
}

// fiber sliders
let fiberSliders = document.getElementsByClassName('fiber-slider')
for (var i = 0; i < fiberSliders.length; i++) {
   var slider =noUiSlider.create(fiberSliders[i], {
        index: i,
        start: meals[i].fiber,
        //connect: [true, true, true],
        step: 1,
        range: {
            'min': 0,
            'max': 100
        },
        format: {
            to: function(v){
              return v 
            },
            from: function(v){
              return v
            }
        }       
    })
  
    
    fiberSliders[i].noUiSlider.on('change', function(v){
      var thisMeal = meals[this.options.index]
          thisMeal.calories = v
          thisMeal.fiber = v
          thisMeal.setCalories()
      document.getElementsByClassName('fiber-slider')[this.options.index].parentNode.getElementsByTagName('span')[0].innerHTML = v
    })
}


