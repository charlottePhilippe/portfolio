$(document).ready(function() {


$(function() {

	var words = [
	'BIENVENUE',
  'BONJOUR'
	],
	i = 0;

  $(".navbar-responsive").toggle();

  $(".menu").click(function () {
	$(".navbar-responsive").toggle("slow");
  })

 // On gère l'affichage aléatoire des phrases d'accroche du header (toutes les 3.5 secondes)
setInterval(function() {
	$("#word").fadeOut(function() {
		$(this).html(words[i = (i + 1) % words.length]).fadeIn();
		});		
}, 3500);


 // On gère le scroll vers les différentes sections du site
  $(".scroll").click(function() {
    var section = $("." + this.id);
    $("html,body").animate({scrollTop: section.offset().top}, 'slow');
  });

// on gère l'affichage des progress bar

window.sr = ScrollReveal();
sr.reveal('.progress-bar', { 
origin: 'left',
duration: 2000,
distance: '100%' 
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
$('#myBtn').click(function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

$("#work-one").hide();

$(".hideshow").click(function () {
	$("#work-two").hide();
	$("#work-three").hide();
  $("#work-four").hide();
  $("#work-five").hide();
  $("#work-six").hide();
    $("#work-one").toggle("slow");
  });
    $(".close").click(function () {
	$("#work-one").hide("slow");
});

$("#work-two").hide();

$(".hideshow1").click(function () {
	$("#work-one").hide();
	$("#work-three").hide();
  $("#work-four").hide();
  $("#work-five").hide();
  $("#work-six").hide();
    $("#work-two").toggle("slow");
  });
    $(".close").click(function () {
	$("#work-two").hide("slow");
});


$("#work-three").hide();

$(".hideshow2").click(function () {
	$("#work-one").hide();
	$("#work-two").hide();
  $("#work-four").hide();
  $("#work-five").hide();
  $("#work-six").hide();
    $("#work-three").toggle("slow");
  });
    $(".close").click(function () {
	$("#work-three").hide("slow");
});


$("#work-four").hide();

$(".hideshow3").click(function () {
  $("#work-one").hide();
  $("#work-two").hide();
  $("#work-three").hide();
  $("#work-five").hide();
  $("#work-six").hide();
    $("#work-four").toggle("slow");
  });
    $(".close").click(function () {
  $("#work-four").hide("slow");
});

$("#work-five").hide();

$(".hideshow4").click(function () {
  $("#work-one").hide();
  $("#work-two").hide();
  $("#work-three").hide();
  $("#work-four").hide();
  $("#work-six").hide();
    $("#work-five").toggle("slow");
  });
    $(".close").click(function () {
  $("#work-five").hide("slow");
});

    $("#work-six").hide();

$(".hideshow5").click(function () {
  $("#work-one").hide();
  $("#work-two").hide();
  $("#work-three").hide();
  $("#work-five").hide();
  $("#work-four").hide();
    $("#work-six").toggle("slow");
  });
    $(".close").click(function () {
  $("#work-six").hide("slow");
});
    // fin
});


	});