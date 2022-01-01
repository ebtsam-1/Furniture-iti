var furncart=document.getElementById("furnCart");
furncart.style.overflowY="scroll";
var data=localStorage.AllCart;
var l=0;
if(data){
 data=data.split('(');
  l=data.length;
}

for(var i=0;i<l;i++){
    var d=data[i];
    if(d.length>0){
    d=d.split(']');
var create= document.createElement("div");
create.className="child";
create.id="child"+i;
furncart.appendChild(create);
var imgtext=document.createElement("div");
imgtext.className="img-text";
create.appendChild(imgtext);

var img=document.createElement("img");
img.id="img";
img.src=d[2].split(')')[0];
imgtext.appendChild(img);

var text=document.createElement("div");
text.className="text";
imgtext.appendChild(text);

var p=document.createElement("p");
p.innerHTML=d[0];
text.appendChild(p);

var price=document.createElement("h4");
price.innerHTML=d[1]

text.appendChild(price);

var del=document.createElement("a");
del.innerHTML="Delete";
del.id=i;
del.href="#";
del.addEventListener('click',remove);
text.appendChild(del);
    }
}



function remove()
{

    var idC=document.getElementById(event.path[0].id);
    var x=idC.id;

   

    console.log(x);

    //*************remove box***********//

    var t="child"+x;
    var box=document.getElementById(t);
    while (box.hasChildNodes()) {   
    box.removeChild(box.firstChild);
    }
    
    box.remove();
    

/////////////////////////remove specific data///////////////////////////
    x=parseInt(x);
    var c=0;

    var y=localStorage.AllCart;
    
    
    for(var i=0;i<y.length;i++)
    {
        if(y[i]===')')
        {
            c++;
        }

        if(x+1==c)
        {
            c=i;
            break;
        }
        
    }

    var o=0;
    for(var i=c;i>=0;i--)
    {
        if(y[i]==='(')
        {
            o=i;
            break;
        }
        
    }
    var s='';
    if(y[o]!='(')
    {
        c++;
    }
    for(var i=0;i<y.length;i++)
    {
        if(i>=o&&i<=c)
        continue;

        s+=y[i];
    }


    localStorage.AllCart=s;
    //console.log(localStorage.AllCart);

   // location.reload();
   
    alert("Deleted Successfully!");
    
    
    
   
    
     
    
}