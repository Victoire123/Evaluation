$(document).ready(function(){

// POUR CLIQUER SUR UNE VIGNETTE ET CA AFFICHE SON IMAGE
$('#videos nav li').click(function(){
    var numeroLigne = $(this).index();
    console.log(numeroLigne);
    $('#video div iframe').hide(2000);
    $('#videos div iframe').eq(numeroLigne).show(2000);
  });
  
  
  
 // récupérer la valeur width et la mettre aussi dans height

 $('#troiBlocs.container').height($('#troiBlocs.container').width());
  

 //pour ajouter un element on utilise append ou appendto. on crée une variable ds laquelle on met la div
 var $loupe = $('<div id = "loupe"></div>').appendTo('#tableau').css("display", "none");
                        
 //cibler nos td et mettre le hover
 $('td').hover(
         function(){//une fonction au moment du survole et une deuxieme fonction pour après le survole
            //pour faire apparaitre la loupe on crée une variable ds lakel on met le text
            $loupe.css("display", "block");
            var $text = $(this).text();
            //console.log($text);
            $loupe.text($text);
         },
         function(){
         $loupe.css("display","none");
         }
                 );



// Variables contenant l'ensemble des liens du menu par onglet :
var $ongletItems = $(".menu button") ;
		
// Fonction d�clench�es quand on clique sur l'un de ces items
$ongletItems.click(function(){
    
    // On enl�ve la classe sur tous les items
    $ongletItems.removeClass("active") ;
    
    // On met la classe active sur l'item qui a été cliqué
    $(this).addClass("active") ;
    
    // Annule l'action par d�faut
    return false ;
    
});

        
       //Quand on clique sur un onglet, le tableau lié apparait.
//Le cas échéant, les autres tableaux disparaissent.
        
        //je stock d'abord les tableaux et je les cache en css (display none).pour ça je crée une variable ds laquelle je mets les tableaux
          var tableau = $('table').css('display', 'none');
          var vignettes = $('box').css('display', 'none');
          var videos = $('#box').css('display', 'none');

$('.menu button').click(function(){
    //Cache 
    $('table').css('display', 'none');
    $('box').css('display', 'none');
    $('#videos').css('display', 'none');
    //récupérer le selecteur
    var attr_href = $(this).attr('href');
    
    //clic sur le selecteur pour montrer ton tableau
    tableau.filter(attr_href).css('display', 'block');
    vignettes.filter(attr_href).css('display', 'block');
    videos.filter(attr_href).css('display', 'block');
});
       
       
  $tables = $("table").css("display", "none");
  $vignettes = $('box').css('display', 'none');
  $videos = $('#box').css('display', 'none');

  console.log(tables); //permet de savoir si ça fonctionne ou pas. permet de voir ce qu'il y a dans la variable      
      
  $ongletItems.click(function(){ //l'onglet
     var $clique = $(this);
     console.log($clique);
     $("table").css("display", "none"); //on cache les autres
     selecteur = $clique.attr("href");//pour ensuite mettre le lien selon l'onglet cliqué
     console.log(selecteur);
     $tables.filter(selecteur).css("display","block");//affiche l'element
     $vignettes.filter(selecteur).css("display","block");
     $videos.filter(selecteur).css("display","block");
     return false; //annule l'action par defaut.
     });
        //afficher par defaut un tableau
       

  });





 


    