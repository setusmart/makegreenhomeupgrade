
window.onload = function() {
   
// Get the button that opens the modal
var areca_palm = document.getElementById("areca_palm");
var betel_leaf = document.getElementById("betel_leaf");
var stromanthe_triostar = document.getElementById("stromanthe_triostar");
var jade = document.getElementById("jade");
var lucky_bamboo = document.getElementById("lucky_bamboo");
var dracena_compacta = document.getElementById("dracena_compacta");
var thuja = document.getElementById("thuja");
var fan_palm = document.getElementById("fan_palm");
var holy_basil = document.getElementById("holy_basil");
var croton = document.getElementById("croton");

// for container
var  container_areca_palm_popup= document.getElementById('container_areca_palm_popup');
var container_betel_leaf_popup = document.getElementById('container_betel_leaf_popup');
var container_stromanthe_triostar_popup = document.getElementById('container_stromanthe_triostar_popup');
var container_jade_popup = document.getElementById('container_jade_popup');
var container_lucky_bamboo_popup = document.getElementById('container_lucky_bamboo_popup');
var container_dracena_compacta_popup = document.getElementById('container_dracena_compacta_popup');
var container_thuja_popup = document.getElementById('container_thuja_popup');
var container_fan_palm_popup = document.getElementById('container_fan_palm_popup');
var container_holy_basil_popup = document.getElementById('container_holy_basil_popup');
var container_croton_popup = document.getElementById('container_croton_popup');

// Get the <span> element that closes the modal
var  close_areca_palm_popup = document.getElementsByClassName("close_areca_palm_popup")[0];
var close_betel_leaf_popup = document.getElementsByClassName("close_betel_leaf_popup")[0];
var close_stromanthe_triostar_popup = document.getElementsByClassName("close_stromanthe_triostar_popup")[0];
var close_jade_popup = document.getElementsByClassName("close_jade_popup")[0];
var close_lucky_bamboo_popup = document.getElementsByClassName("close_lucky_bamboo_popup")[0];
var close_dracena_compacta_popup = document.getElementsByClassName("close_dracena_compacta_popup")[0];
var close_thuja_popup = document.getElementsByClassName("close_thuja_popup")[0];
var close_fan_palm_popup = document.getElementsByClassName("close_fan_palm_popup")[0];
var close_holy_basil_popup = document.getElementsByClassName("close_holy_basil_popup")[0];
var close_croton_popup = document.getElementsByClassName("close_croton_popup")[0];


// When the user clicks the button, open the modal 
areca_palm.onclick = function() {container_areca_palm_popup.style.display = "block";}
betel_leaf.onclick = function() {container_betel_leaf_popup.style.display = "block";}
stromanthe_triostar.onclick = function() {container_stromanthe_triostar_popup.style.display = "block";}
jade.onclick = function() {container_jade_popup.style.display = "block";}
lucky_bamboo.onclick = function() {container_lucky_bamboo_popup.style.display = "block";}
dracena_compacta.onclick = function() {container_dracena_compacta_popup.style.display = "block";}
thuja.onclick = function() {container_thuja_popup.style.display = "block";}
fan_palm.onclick = function() {container_fan_palm_popup.style.display = "block";}
holy_basil.onclick = function() {container_holy_basil_popup.style.display = "block";}
croton.onclick = function() {container_croton_popup.style.display = "block";}

// When the user clicks on <span> (x), close the modal
close_areca_palm_popup.onclick = function() {container_areca_palm_popup.style.display = "none";}
close_betel_leaf_popup.onclick = function() {container_betel_leaf_popup.style.display = "none";}
close_stromanthe_triostar_popup.onclick = function() {container_stromanthe_triostar_popup.style.display = "none";}
close_jade_popup.onclick = function() {container_jade_popup.style.display = "none";}
close_lucky_bamboo_popup.onclick = function() {container_lucky_bamboo_popup.style.display = "none";}
close_dracena_compacta_popup.onclick = function() {container_dracena_compacta_popup.style.display = "none";}
close_thuja_popup.onclick = function() {container_thuja_popup.style.display = "none";}
close_fan_palm_popup.onclick = function() {container_fan_palm_popup.style.display = "none";}
close_holy_basil_popup.onclick = function() {container_holy_basil_popup.style.display = "none";}
close_croton_popup.onclick = function() {container_croton_popup.style.display = "none";}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
  {
   if (event.target == container_areca_palm_popup, 
    event.target == container_betel_leaf_popup,  
    event.target == container_stromanthe_triostar_popup,
     event.target == container_jade_popup,
     event.target == container_lucky_bamboo_popup ) 
     {
       container_areca_palm_popup.style.display = "none";
       container_betel_leaf_popup.style.display = "none";
       container_stromanthe_triostar_popup.style.display = "none";
        container_jade_popup.style.display = "none";
        container_lucky_bamboo_popup.style.display = "none";


     }
  }

} // window onload



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//for slide show
/*var image=["gallery/image1.jpg", "gallery/image2.jpg","gallery/image3.jpg"];
var i=0;
function slide()
{ 
	document.getElementById("slide-set").src = image[i];
	if(i<(image.length-1))
		i++;
	else
		i=0;
}
 setInterval(slide,4000);*/


 


