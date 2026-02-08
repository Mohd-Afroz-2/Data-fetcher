// fetch() method : it is defined as window object which can used to perform request..
// this method will return promise.
// promise will either be fullfilled or rejected.

fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+=` <div class="card">
            <h1 class="title">${values.title}</h1>
            <img src=${values.image} alt="image" class="images">
            <p>${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
        </div> ` // here we take card from html and paste here. and in html we convert it into comment......
    })
    document.getElementById("cards").innerHTML= data1;


}).catch((err)=>{
    console.log(err);
    

})
