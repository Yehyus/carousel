window.onload = function(){
  (function(){

     /* -------------------------------------------------------- Variable du carrousel */
     let carrousel  = document.querySelector(".carrousel")
     let carrousel__x = document.querySelector(".carrousel__x")
     let carrousel__figure = document.querySelector(".carrousel__figure")
     let carrousel__form = document.querySelector(".carrousel__form")
     let fleche__gauche = document.querySelector(".fleche__gauche")
     let fleche__droite = document.querySelector(".fleche__droite")
     let body = document.querySelector('.site')
     
     /* -------------------------------------------------------- Variable de la galerie */
     let galerie = document.querySelector(".galerie")
     let galerie__img = galerie.querySelectorAll("img")
     /** ---------------------------------------------------- Positionnement de l'img active du carrousel */
     
     let index = 0 
     let dernier__index = -1
     let position = 0 // permet d'indexer les images de la galerie 
  
     /** 
      * ajouter_img_dans_carrousel
      * Ajouter l'ensemble des images de la galerie dans la boîte modale carrousel
      */
     
     for (const elm of galerie__img)
     {
      elm.dataset.index = position
      elm.addEventListener('mousedown',function(){
  
        if(!carrousel.classList.contains('carrousel--activer')){
          carrousel.classList.add('carrousel--activer')
        }
        index = this.dataset.index
        afficher_image(index)                      
      })
  
      creation_img_carrousel(elm)
      creation_radio_carrousel()
     }  
  
     /* ----------------------------------------------------  fermer boîte modale */
     carrousel__x.addEventListener('mousedown', function(){
         carrousel.classList.remove('carrousel--activer')
     })
  
     /* ----------------------------------------------------  changer img avec fleches */
  
     fleche__gauche.addEventListener('mousedown', function(){
      //console.log('changer photo a gauche',index)
        if(index == 0){
          index = galerie__img.length-1
        } else { index--}
      afficher_image(index)
     
    })
  
    fleche__droite.addEventListener('mousedown', function(){
      //console.log('changer photo a droite',index)
        if(index == galerie__img.length-1){
          index=0
        } else{index++}       
      afficher_image(index)
      
    })
  
   
     function creation_img_carrousel(elm){
  
       //console.log(elm.getAttribute('src'))
       let img = document.createElement('img')
       //img.setAttribute('src', elm.getAttribute('src'))
       img.src = elm.src
       img.classList.add('carrousel__img')
       //console.log (img.getAttribute('src'))
       carrousel__figure.appendChild(img)
       
     }
  
  
     /**
      * Création d'un radio-bouton
      */
     
     function creation_radio_carrousel(){
  
     let rad = document.createElement('input')
     //console.log(rad.tagName)
     rad.setAttribute('type', 'radio')
     rad.setAttribute('name', 'carrousel__rad')
     rad.classList.add('carrousel__rad')
     rad.dataset.index = position // permet d'asscocier chacun des radio bouton a l'image du carrousel 
     position++ // incrémentation de 1 
     carrousel__form.appendChild(rad)
  
     /** afficher image / Transition */
  
     rad.addEventListener('mousedown', function(){
      index = this.dataset.index
      afficher_image(index)
      //console.log('index : ',this.dataset.index)
     })
     }
  
     function afficher_image(index){
  
      if(dernier__index != -1){
        //carrousel__figure.children[dernier__index].style.opacity = 0
        carrousel__figure.children[dernier__index].classList.remove('carrousel__img--activer')
        carrousel__form.children[dernier__index].checked = false 
      } 
      //carrousel__figure.children[this.dataset.index].style.opacity = 1
      //console.log(index)
     
      carrousel__figure.children[index].classList.add('carrousel__img--activer')
      carrousel__form.children[index].checked = true
      dernier__index = index
  
     }
  
     /** Permet de vérifier si la classe "carrousel--activer se trrouve dans la liste des classes du carrousel"
      * carrousel.classList.contain('carrousel--activer')
      */
     })()
}   