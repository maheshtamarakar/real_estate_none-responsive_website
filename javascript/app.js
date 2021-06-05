var myIndex = 0;
carousel();

function carousel() {
    var el = document.getElementsByClassName('myimg ');
    for(let i = 0; i < el.length;i++){
        el[i].style.display= 'none';

    }
    myIndex++;
    if(myIndex>el.length){myIndex=1}
    el[myIndex-1].style.display= 'block';
    setTimeout(carousel, 3000);
}

var span = document.getElementsByClassName('span');
var div = document.getElementsByClassName('div');
var l = 0;
span[1].onclick = ()=>{
    l++;
    for(var i of div)
    {
        if(l==0){i.style.left = '0px';}
        if(l==1){i.style.left = '-340px';}
        if(l==2){i.style.left = '-640px';}
        if(l==3){i.style.left = '-940px';}
        if(l>3){l=1;}
    }
} 
span[0].onclick = ()=>{
    l--;
    for(var i of div)
    {
        if(l==0){i.style.left = '0px';}
        if(l==1){i.style.left = '-340px';}
        if(l==2){i.style.left = '-640px';}
        if(l==3){i.style.left = '-940px';}
        
        if(l<0){l=0;}
    }
} 

var tlarrow = document.getElementsByClassName('tl-arrow');

tlarrow[0].onclick = ()=>{
    document.getElementById('tl-img').src = '../img/testimonial-2.jpg';
    document.getElementById('name').innerHTML = 'Pablo & Emma';
    document.getElementById('tl-img-logo').src = '../img/testimonial-2.jpg';


     
}
tlarrow[1].onclick = ()=>{
    document.getElementById('tl-img').src = '../img/testimonial-1.jpg';
    document.getElementById('name').innerHTML = 'Albert & Erika';
    document.getElementById('tl-img-logo').src = '../img/testimonial-1.jpg';

     
}


