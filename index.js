let doc = document.getElementById('doc')
var urlSearch = new URLSearchParams(document.location.search)
doc.innerHTML = urlSearch.toString()
let imgs = urlSearch.getAll('img')
let weights = urlSearch.getAll('weight')
for(let i = 0 ; i < imgs.length ; i++){
    //console.log(meals[i], nexts[i])
    let html = `<ul>
        <li>img: ${imgs[i]}</li>
        <li>weight: ${weights[i]}</li>
        </ul>
        `
    //document.getElementsByTagName('body')[0].appendChild(html)
    document.body.innerHTML += html
}

// let meal = {
//     weight: null,
//     carbs: null,
//     fat: null,
//     img: null,
//     fiber: null
// }

//document.getElementById('not').style = "color:red"