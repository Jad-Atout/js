async function get_items(){
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
    const data= await response.json()
    const result =data.recipes.map(function (ele){
        return `<div class="item">
            <img src="${ele.image_url}">
            <h2>${ele.title}</h2>
        </div>`

    }).join(" ")
    console.log(result)

    let menu = document.querySelector(".menu")
    menu.innerHTML = result
}

get_items()
