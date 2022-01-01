// WebFont.load({
// 	google: {
// 		families: ['Dancing Script:300i,400i,700,700i', 'Open Sans:300']
// 	}
// });




var cont=document.getElementById('add');
var loc=location.search; 
var arr=loc.split('?'); 
if(arr!=''){
   ////////////// ////secial page => one product
prod=arr[1].split('#');
var pid;
switch(prod[0])
{
    case 'p1':
    pid='p1';
    prod=product.p1;
    cont.innerHTML="<p style='text-align: center; font-size: 40px; color: #7f5f84; font-family: /'Dancing Script/', cursive; font-weight: 600;'>Kids Rooms</p>";
    break;

    case 'p2':
    pid='p3';
    prod=product.p2;
    cont.innerHTML="<p style='text-align: center; font-size: 40px; color: #7f5f84; font-family: /'Dancing Script/', cursive; font-weight: 600;'>Bed Rooms</p>";
    break;


    case 'p3':
    pid='p3';
    prod=product.p3;
    cont.innerHTML="<p style='text-align: center; font-size: 40px; color: #7f5f84; font-family: /'Dancing Script/', cursive; font-weight: 600;'>Couch & Sofas</p>";
    break;


    case 'p4':
    pid='p4';
    prod=product.p4;
    cont.innerHTML="<p style='text-align: center; font-size: 40px; color: #7f5f84; font-family: /'Dancing Script/', cursive; font-weight: 600;'>Home Accessories</p>";
    break;


    case 'p5':
    pid='p5';
    prod=product.p5;
    cont.innerHTML="<p style='text-align: center; font-size: 40px; color: #7f5f84; font-family: /'Dancing Script/', cursive; font-weight: 600;'>Home Essentials</p>";
    break;


    case 'p6':
    pid='p6';
    prod=product.p6;
    cont.innerHTML="<p style='text-align: center; font-size: 40px; color: #7f5f84; font-family: /'Dancing Script/', cursive; font-weight: 600;'>Living Rooms</p>";
    break;


    case 'p7':
    pid='p7';
    prod=product.p7;
    cont.innerHTML="<p style='text-align: center; font-size: 40px; color: #7f5f84; font-family: /'Dancing Script/', cursive; font-weight: 600;'>Kitchen Essentials</p>";
    break;


    case 'p8':
    pid='p8';
    prod=product.p8;
    cont.innerHTML="<p style='text-align: center; font-size: 40px; color: #7f5f84; font-family: /'Dancing Script/', cursive; font-weight: 600;'>Tables</p>";
    break;


}

for(var i=0;i<prod.length;i++)
{

var docu=document.getElementById("container");
var box=document.createElement("div");
box.className="box";
docu.appendChild(box);

var img=document.createElement("img");
img.src=prod[i].img;
img.id="img"+pid+i;
box.appendChild(img);

var over=document.createElement("div");
over.className="over";
box.appendChild(over);

var p=document.createElement("p");
p.innerHTML=prod[i].name;
p.id="parag"+pid+i;
over.appendChild(p);

var h=document.createElement("h3");
h.innerHTML="Price: US "+"<span>"+prod[i].price+"</span>";
h.id="price"+pid+i;
over.appendChild(h);

var d=document.createElement("div");
d.className="cart";
over.appendChild(d);

var ii=document.createElement("i");
ii.className="fas fa-shopping-basket";
d.appendChild(ii);

var a=document.createElement("a");
a.innerHTML="Add to Cart";
a.href="#";
a.id="cart"+pid+i;
d.appendChild(a);
var cart=document.getElementById(a.id);
cart.addEventListener('click',AddToCart);


}

//////////////////Add To Cart//////



function AddToCart()
{

    //var furncart=document.getElementById("furnCart");
var idCart=document.getElementById(event.path[0].id);
var parg= idCart.id;
parg=parg.substr(4,parg.length);

var pp=document.getElementById("parag"+parg);
var hh=document.getElementById("price"+parg);
var imgg=document.getElementById("img"+parg);


if(localStorage.name){

if(localStorage.AllCart){
localStorage.AllCart=localStorage.AllCart+"("+pp.innerHTML+"]"+ hh.innerHTML+"]"+imgg.src+")";
}
else
localStorage.AllCart=pp.innerHTML+"]"+ hh.innerHTML+"]"+imgg.src+")";
// console.log(localStorage.AllCart);

alert("Successfully Add To Cart");

/////////////////////Draw cart--->one product
 var i=localStorage.AllCart.split('(');
 i=i.length;
 i--;
 
 console.log(i);

var create= document.createElement("div");
create.className="child";
create.id="child"+i;
furncart.appendChild(create);
var imgtext=document.createElement("div");
imgtext.className="img-text";
create.appendChild(imgtext);

var img=document.createElement("img");
img.id="img";
img.src=imgg.src;
imgtext.appendChild(img);

var text=document.createElement("div");
text.className="text";
imgtext.appendChild(text);

var p=document.createElement("p");
p.innerHTML=pp.innerHTML;
text.appendChild(p);

var price=document.createElement("h4");
price.innerHTML=hh.innerHTML;

text.appendChild(price);

var del=document.createElement("a");
del.innerHTML="Delete";
del.id=i;
del.href="#";
del.addEventListener('click',remove);
text.appendChild(del);
    
}else
{
alert("You Must Sign In.");

}

}




}

else{






//////category


// <section class="categories">
//  <div class="container" id="container">



cont.innerHTML= `<p style='text-align: center; font-size: 40px; color: #7f5f84; font-family: 'Dancing Script', cursive; font-weight: 600;'>Categories</p>`;

var cate=document.createElement('section');
cate.className='categories';

var con=document.createElement("div");
con.className="container";
con.id="container";
cate.append(con);


    

        for(var i=0;i<cat.length;i++)
        {
        var docu=document.getElementById("container");

        var el=document.createElement("div");
        docu.appendChild(el);
        el.className="box";
        var img=document.createElement("img");
        el.appendChild(img);
        img.src=cat[i].img;

        var overlay=document.createElement("div");
        el.appendChild(overlay);
        overlay.className="overlay";

        var p=document.createElement("a");
        overlay.appendChild(p);
        p.innerHTML=cat[i].name;
        p.href="collections.html?"+cat[i].id;

        }

    
    

//  </div>
// </section>





}