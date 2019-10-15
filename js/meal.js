
function Meal(img, weight, carb, fat, prot, fiber){
    this.img = img
    this.weight   = weight
    this.carb     = carb
    this.fat      = fat
    this.prot     = prot
    this.fiber    = fiber
    this.calories = null
}
Meal.prototype.init = function(index){
    let html = `
    <div class="meal" data-index="${index}">
    <img src="${this.img}" width="100%"/>
    <ul>
        <li>
        <label>Image</label><input type="text" name="img" value="${this.img}"/>
        </li>        
        <li>
        <label>Weight(grams)</label><input type="text" name="weight" value="${this.weight}"/>
        </li>
        <li class="macros">
            <label></label>
            <div class="macros-container">
                <div class="c-carbs">Carbs &nbsp;  <span class="carb">${this.carb}</span>%</div>
                <div class="c-fats">Fats &nbsp; <span class="fat">${this.fat}</span>%</div>
                <div class="c-prots">Proteins &nbsp; <span class="prot">${this.prot}</span>%</div>
            </div>
        </li>
        <li>
            <label>Macros</label>
            <div class="slider"></div>
        </li>    
        <li>
            <label>Fiber <span class='fiber-value'>${this.fiber}</span>%</label>
            <div class="fiber-slider"></div>
        </li>    
        <li>
            <label>Calories</label>
            <div><span class="calories-value">${this.calories}</span></div>
        </li>                      
    </ul>
    </div>
    `
    document.body.innerHTML += html  
    this.setCalories()  
    
}

Meal.prototype.setMacros = function(v){
    
    this.carb = v[0]
    this.fat  = v[1] - v[0]
    this.prot = 100 - this.carb - this.fat
    let thisMeal = meals.indexOf(this)
    let macros   = document.getElementsByClassName('macros')[thisMeal]
    macros.getElementsByClassName('carb')[0].innerHTML = this.carb
    macros.getElementsByClassName('fat')[0].innerHTML = this.fat
    macros.getElementsByClassName('prot')[0].innerHTML = this.prot

    
    this.setCalories()
}

Meal.prototype.setCalories = function(v){
    this.calculateCalories()
    let thisMeal = meals.indexOf(this)
    let cals     = document.getElementsByClassName('calories-value')[thisMeal]
    cals.innerHTML = this.calories

}

Meal.prototype.calculateCalories = function(){
    let carbs = (this.weight * (this.carb * .01)) * 4
    let fats  = (this.weight * (this.fat * .01)) * 9
    let prots = (this.weight * (this.prot * .01)) * 4
    this.calories = ((carbs + fats + prots) * (1 - (this.fiber * .01))).toFixed(0)
}