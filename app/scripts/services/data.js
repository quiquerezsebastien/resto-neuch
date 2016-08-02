'use strict';

/**
 * @ngdoc service
 * @name restoneuchApp.data
 * @description
 * # data
 * Service in the restoneuchApp.
 */
angular.module('restoneuchApp')
  .service('data', function ($firebaseArray, $sce) {

    var data = this;

    var myFirebaseRef = new Firebase("https://resto-neuch.firebaseio.com/Resto");
    data.restos = $firebaseArray(myFirebaseRef);

    

    // récupération des données d'un restraurant donné en paramètre'
    data.getResto = function(pId){
          data.restos.$loaded().then(function(x) {
              console.log("Success");          
          for(var i = 0; i< data.restos.length; i++){
              
            if(data.restos[i].id == pId){
              data.unResto = data.restos[i];
                data.images = [];
                //récupération des images d'un restaurant
              for(var j = 0; j< data.unResto.image.length;j++){
                  var test = {thumb: data.unResto.image[j], img: data.unResto.image[j], description: data.unResto.image[j]};
                  data.images.push(test);
              }
             data.map = $sce.trustAsResourceUrl(data.unResto.map);
            }
          }
          });
        }

        // fonction qui coupe la decription pour l'affichage sur la page d'accueil.
         function insertDescrCoupee() {
            data.restos.$loaded().then(function(x) {
            for(var i=0;i<data.restos.length;i++) {
                var descr = data.restos[i].description;
                var texteCoupe = descr.substring(0,327)+'...';

                data.restos[i].descrCoupee = texteCoupe;         
            }
            });
        }
        
        insertDescrCoupee();

           
         // fonction pour l'impression des donnés d'un restaurant'
            data.buildMessage = function (resto) {
           //Create an ePOS-Print Builder object
           var builder = new epson.ePOSBuilder();
           //Create a print document
           builder.addTextLang('en');
           builder.addTextSmooth(true);
           builder.addTextFont(builder.FONT_A);
           builder.addTextSize(3, 3);
           builder.addTextAlign(builder.ALIGN_CENTER);
           builder.addText(resto.nom+'\n\n');
           builder.addTextSize(1, 1);
           builder.addText(resto.rue+'\n');
           builder.addText(resto.ville+'\n');
           builder.addText(resto.telephone+'\n');
           builder.addText(resto.internet+'\n');
           builder.addCut(builder.CUT_FEED);
           //Acquire the print document
           var request = builder.toString();

           //Set the end point address
             var address = 'http://157.26.114.140/cgi-bin/epos/service.cgi?devid=local_printer&timeout=10000';
             //Create an ePOS-Print object
             var epos = new epson.ePOSPrint(address);
             //Send the print document
             epos.send(request);

           }        

       

  });
