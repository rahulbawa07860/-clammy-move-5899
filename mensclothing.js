data=[{
    image:"https://n.nordstrommedia.com/id/sr3/d7e22c74-3cf7-4f36-9482-ab2ffe5349f4.jpeg?h=365&w=240&dpr=2",
    name:"Zella",
    description:"Pyrite Slim  Fit Pocket Joggers",
    INR:15000.69,
    off:"(69%off)",
    strikeprice:5073.02,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+(155),
    id:1
},
{
    image:"https://n.nordstrommedia.com/id/sr3/f33eb0cd-f3aa-4953-b4ae-3aba35d2fae3.jpeg?h=365&w=240&dpr=2" ,
    name:"Nike"  ,
    description:"Dry 6-Packs Every Plus Cushion Crew Training Socks",
    INR: 1891.90,
    off: "(0%off)",
    strikeprice: "INR 6000.69" ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+55,
    id:2
},
{
    image:"https://n.nordstrommedia.com/id/sr3/4664a52d-25f1-443e-9c97-38183c9e0c46.jpeg?h=365&w=240&dpr=2" ,
    name:"Adidas"  ,
    description:"Seamless Performance T-Shirt",
    INR: 900,
    off:  "(Up to 74%off)",
    strikeprice: "INR 3,353.88" ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+(127),
    id:4
},
{
    image:"https://n.nordstrommedia.com/id/sr3/73a00824-a05f-40d3-87ca-8e9effde08ab.jpeg?h=365&w=240&dpr=2" ,
    name:"Nordstrom"  ,
    description:"Half Zip Cotton & Cashmere Pullover sweater(Regular & Tall)",
    INR: 8000,
    off:  "(20%off)",
    strikeprice:"INR 10000.10"  ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+156 ,
    id:5
},
{
    image:"https://n.nordstrommedia.com/id/sr3/d2e47e22-ca1c-44bd-95cc-184e76e191fd.jpeg?h=365&w=240&dpr=2" ,
    name:"Canada Goose"  ,
    description:"Macmillian Recycled Woll Blend Down Parka",
    INR: 12000,
    off:  "(60%off)",
    strikeprice:"INR 33,353.88"  ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
   
    ratingNumber:"Customers-Rated-"+ 1000,
    id:6
},
{
    image:"https://n.nordstrommedia.com/id/sr3/2d13aead-4889-43e6-a47e-f3c49f8ec9f2.jpeg?h=365&w=240&dpr=2" ,
    name:"The North Face"  ,
    description:"Mens TKA kataka Fleece Pullover",
    INR: 5018.99,
    off:  "(40%off)",
    strikeprice:"INR 8513.69"  ,
    rating:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU",
    ratingNumber:"Customers-Rated-"+500 ,
    id:3
},
];
//console.log(data)

const appendProduct = () => {
    let append_div=document.getElementById('append_div');
    append_div.innerHTML=null;
    data.forEach(function(el,i){
        let div=document.createElement('div');
        let img=document.createElement('img')
        img.src=el.image;
        let brand=document.createElement('h3')
        brand.innerText=el.name;
        brand.setAttribute('id','brand_name')
        let about=document.createElement('h4')
        about.innerText=el.description;
        let price=document.createElement('h3')
        price.innerText=el.INR;
        price.setAttribute('id','price_tag')
        off_price=document.createElement('p');
        off_price.innerText=el.off
        let strike_price=document.createElement('p');
        strike_price.innerText=el.strikeprice;
        strike_price.setAttribute('id','strike')
        rating=document.createElement('img');
        rating.src=el.rating;
        rating.setAttribute('id','rating')
        let ratingNumber=document.createElement('p')
        ratingNumber.innerText=el.ratingNumber;
        ratingNumber.setAttribute('id','setAtrr')
        let btn=document.createElement("button")
        btn.innerText="Quick View"
        btn.setAttribute('id','button_cart');
        btn.onclick=()=>{
            buyProduct()
        }
        



       
        div.append(img,brand,about,price,strike_price,off_price,rating,ratingNumber,btn);
        append_div.append(div)



    });
}
appendProduct()

const  buyProduct= () => {
window.location.href="bag.html"
    
}
let brand_btn=document.getElementById('brand-heading');
brand_btn.onclick=()=>{
    sortHtoL()
}

 
    
const   sortHtoL= () => {
    // let newData=[]
    // for(let i=0;i<data.length;i++){
    //      newData.push(data[i].name)
    // }
    // console.log('newData :>> ', newData);

    let newData=data;
        newData.sort((a,b) => {
            if (a.name>b.name)
                return 1;
            if (a.name <b.name)
                return -1;
            return 0;
        });
        appendProduct(newData)
    
    
}


let price_btn=document.getElementById('price-heading')
price_btn.onclick=()=>{
    priceHtoL()
}

    const priceHtoL = () => {
        let newData=data;
        newData=newData.sort((a,b)=>a.INR-b.INR);
        appendProduct(newData)
    }
    //console.log('newData :>> ', newData);

    let price_btn1=document.getElementById('price-heading1')
    price_btn1.onclick=()=>{
        priceLtoH()
    }
    
        const priceLtoH = () => {
            let newData=data;
            newData=newData.sort((a,b)=>b.INR-a.INR);
            appendProduct(newData)
        }

const dynamic=async()=>{

    let res= await fetch(`http://localhost:3000/posts`)

    let data=await res.json()
    append(data)
}
dynamic()



const append=(data)=>{
    let dynamic_div= document.getElementById("dynamic_api_div")

    data.forEach((el)=>{
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image
        img.setAttribute("class","im_size")
        let about=document.createElement('h4')
        about.innerText=el.description;
        let price=document.createElement('h3')
        price.innerText=+el.price;
        price.setAttribute('id','d_price_tag')
        let strike_price=document.createElement('p');
        strike_price.innerText=el.strikeprice;
        strike_price.setAttribute('id','d_strike')
        let brand=document.createElement('h3')
        brand.innerText=el.name;
        brand.setAttribute('id','d_brand_name')
        rating=document.createElement('img');
        rating.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi46qN56UzUWRidUVf3g6vXp9pOscW5_mjw&usqp=CAU"
        rating.setAttribute("class","rating_size")
        discount=document.createElement('p');
        discount.innerText=`${el.discount}%off`
        let btn=document.createElement("button")
        btn.innerText="Quick View"
        btn.setAttribute('id','d_button_cart');
        btn.onclick=()=>{
            buyProduct()
        }

        div.append(img,brand,about,price,strike_price,discount,rating,btn)

        dynamic_div.append(div)

    })
}