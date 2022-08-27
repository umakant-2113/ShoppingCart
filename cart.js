let data = JSON.parse(localStorage.getItem('data'));

let cartbox = document.querySelector('.cart-div');

function createUi(cart) {
  cartbox.innerHTML = '';

  cart.map((elm, index) => {
    let div = document.createElement('div');
    div.classList.add('box');

    let img = document.createElement('img');
    img.src = elm.img;
    img.classList.add('img');

    let div2 = document.createElement('div');
    div2.classList.add('div2-data');

    let brand = document.createElement('h2');
    brand.innerText = elm.brand;

    let name = document.createElement('h3');
    name.innerText = elm.name;

    let price = document.createElement('p');
    price.innerText = '$' + ' ' + elm.price;
    price.classList.add('category-price');

    let category = document.createElement('p');
    category.innerText = elm.catagory;
    category.classList.add('category-p');

    let size = document.createElement('p');
    size.innerText = elm.size;

    let button = document.createElement('button');
    button.id = index;
    button.innerText = 'Remove';
    button.classList.add('btn');

    button.addEventListener('click', () => {
      remove(elm,index);
    });

    div2.append(brand, name, price, category, size, button);
    div.append(img, div2);
    cartbox.append(div);
  });
}

createUi(data);

let cart=JSON.parse(localStorage.getItem("data") )|| []

function remove(elm,index) {

    let x= data.splice(0,index);
    let y= data.splice(1,data.length);
    let updatedData= x.concat(y);
    console.log(updatedData)
    window.location.reload();
    localStorage.setItem("data",JSON.stringify(updatedData))
    
}

