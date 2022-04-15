function home() {
    window.location.href = "index.html";
}

function details(i) {
    window.location.href = "details.html";
    localStorage.setItem('Current Shirt', i);
}

let curColor = 'white';
let curSide = 'front';

//ROBUSTNESS: generate cards for missing data
let initProducts = () => {
    for (let i = 0; i < shirts.length; i += 1) {
        localStorage.setItem(shirts[i].name, JSON.stringify(shirts[i]));

        var element = document.getElementById('products');

        var productName = shirts[i].name;
        var productImage = shirts[i].colors.white.front;
        var productColors = Object.keys(shirts[i].colors).length;
        var div = document.createElement('div');
        div.class = "individual_product";
        div.style.width = "20%"; 
        div.style.border = "thin solid #c40f30";
        div.style.borderRadius = "15px";
        div.style.display = "inline-block";
        div.style.margin = "20px";
        div.style.padding = "20px";
        div.style.textAlign = "center";

        var image = document.createElement('img');
        image.setAttribute('src', productImage);
        image.style.width = "100%";

        var name = document.createElement('h4');
        name.class = "product_name";
        name.innerHTML = productName;

        var availability = document.createElement('p');
        var text1 = document.createTextNode("Available in ");
        var text2 = document.createTextNode(productColors);
        var text3 = document.createTextNode(" colors");
        availability.appendChild(text1);
        availability.appendChild(text2);
        availability.appendChild(text3);

        let quick_view = document.createElement("button");
        quick_view.innerHTML = "Quick View";
        quick_view.style.marginRight = "10px";
        quick_view.style.backgroundColor = "#c40f30";
        quick_view.style.color = "#fefefe";
        quick_view.style.border = "none";
        quick_view.style.borderRadius = "5px";
        quick_view.style.padding = "10px";
        quick_view.style.cursor = "pointer";

        let see_page = document.createElement("button");
        see_page.innerHTML = "See Page";
        see_page.style.marginLeft = "10px";
        see_page.style.backgroundColor = "#c40f30";
        see_page.style.color = "#fefefe";
        see_page.style.border = "none";
        see_page.style.borderRadius = "5px";
        see_page.style.padding = "10px";
        see_page.style.cursor = "pointer";
        see_page.onclick = function(){details(i)};

        div.appendChild(image);
        div.appendChild(name);
        div.appendChild(availability);
        div.appendChild(quick_view);
        div.appendChild(see_page);

        element.appendChild(div);
    }
};

function updateImageColor(color) {
    curColor = color;
    setImage(curColor, curSide);
}

function updateImageSide(side) {
    curSide = side;
    setImage(curColor, curSide);
}

function setImage(color, side) {
    var i = localStorage.getItem('Current Shirt');

    var product = localStorage.getItem(shirts[i].name);
    var productInfo = JSON.parse(product);
    var link = productInfo.colors[color][side];

    var product_image = document.getElementById('product_image');
    product_image.setAttribute('src', link);
}

let initDetails = () => {
    var i = localStorage.getItem('Current Shirt');

    var product = localStorage.getItem(shirts[i].name);
    var productInfo = JSON.parse(product);

    var image = document.getElementById('product_image');
    image.setAttribute('src', productInfo.default.front);

    var name = document.getElementById('product_name');
    name.innerHTML = productInfo.name;

    var price = document.getElementById('product_price');
    price.innerHTML = productInfo.price;

    var description = document.getElementById('product_description');
    description.innerHTML = productInfo.description;

    var numColors = Object.keys(shirts[i].colors).length;
    var colors = Object.keys(shirts[i].colors);
    for (let c = 0; c < numColors; c += 1) {
        let button = document.createElement("button");
        button.innerHTML = colors[c];
        button.setAttribute = ('id', colors[c]);
        // button.onclick = function(){setImage(colors[c])};
        button.onclick = function(){updateImageColor(colors[c])};

        button.style.margin = '3px';
        var color = document.getElementById('product_color');
        color.appendChild(button);
    }
};