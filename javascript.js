
$(document).ready(function(){
  $(".owl-carousel").owlCarousel(); 
});


var galary = document.querySelectorAll(".flipLightBox,img");
var bat = document.querySelectorAll("#imggalary,ul,li");



bat[11].onclick= function(){
    if(2==2)

        galary[5].className='bounceInUp2';
       galary[6].className='bounceInUp2';
       galary[7].className='bounceInUp2';
       galary[8].className='bounceInUp2';
       galary[9].className='bounceInUp2';
       galary[10].className='bounceInUp2';
       galary[11].className='bounceInUp2';
       galary[12].className='bounceInUp2';
       galary[13].className='bounceInUp2';
       
       setTimeout(function() {
                     galary[5].style.display='block';
                     galary[5].style.float='left';

                    galary[6].style.display='block';
                    galary[6].style.float='left';
                    galary[7].style.display='block';
                     galary[7].style.float='left';
                      galary[8].style.display='block';
                    galary[8].style.float='left';
                    galary[9].style.display='block';
                     galary[9].style.float='left';
                      galary[10].style.display='block';
                    galary[10].style.float='left';
                    galary[11].style.display='block';
                     galary[11].style.float='left';
                     galary[12].style.display='block';
                     galary[12].style.float='left';
                     galary[13].style.display='block';
                     galary[13].style.float='left';
                       
                    


                 }, 500); 
                 

 };


 bat[12].onclick= function(){
    if(2==2)
       galary[7].className='bounceOutDown2';
       galary[9].className='bounceOutDown2';
       setTimeout(function() {
                    galary[7].style.display='none';
                    galary[9].style.display='none';
                    galary[7].className='';
                    galary[9].className='';
                 }, 2000);
                 

 };


 bat[13].onclick= function(){
    if(2==2)
        galary[7].className='bounceInUp2';
       galary[9].className='bounceInUp2';
       galary[8].className='fadeOutLeftBig2';
       galary[10].className='fadeOutLeftBig2';
       setTimeout(function() {
                     galary[7].style.display='block';
                    
                    galary[9].style.display='block';
                     
                    galary[8].style.display='none';
                    galary[8].style.float='left';
                    galary[10].style.display='none';
                    galary[10].style.float='left';
                 }, 1000);
                 

 };
 bat[14].onclick= function(){
    if(2==2)
       
       galary[5].className='fadeOutUpBig2';
       galary[6].className='fadeOutUpBig2';
       setTimeout(function() {
                     galary[5].style.display='none';
                    
                     
                    galary[6].style.display='none';
                    
                 }, 1000);
                 

 };


 bat[15].onclick= function(){
    if(2==2)
       
       galary[11].className='fadeOutUpBig2';
       galary[13].className='fadeOutUpBig2';
        galary[10].className='bounceInUp2';
       setTimeout(function() {
                     galary[10].style.display='block';
                    
                     
                    galary[11].style.display='none';
                    galary[13].style.display='none';
                    
                 }, 1000);
                 

 };



       
  
 var but = document.getElementById('but').onclick = function( ){
     var ul =document.getElementById('ul');
      ul.style.left = -240+'px'; 
    }
 var but1 = document.getElementById('but1').onclick = function( ){
     var ul =document.getElementById('ul');
     ul.style.left = -634+'px'; 
    
 }
 var but2 = document.getElementById('but2').onclick = function( ){
     var ul =document.getElementById('ul');
    ul.style.left = -1040+'px'; 
 } 


    
  

 