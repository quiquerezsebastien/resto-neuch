# Restaurants Neuchâtelois

Notre projet consiste à afficher des restaurants de la ville de Neuchâtel.

Les utilisateurs pourront y découvrir une description des établissements avec images, spéacialités de la maison ainsi que les données de contact. Ils auront également la possibilité d'imprimer les données de contact de l'établissement souhaité.

Le site compte également une rubrique "A propos" décrivant un peu le site Internet, la ville de Neuchâtel et 2-3 mots sur les développeurs du site, et une autre, "Contact", contenant nos données de contact.

## Répartition des tâches

Nous nous sommes répartis les tâches de manière à ce que nous ayons toujours les deux quelques à faire.

Nous nous tenons toujours au courant de ce que fait l'autre et faisons un maximum de mise à jour de notre avancement afin de limiter les risques de corrections de la part des deux sur des mêmes parties de code. Avant de commencer, nous reprenons les données (git pull) afin d'être à jour.

Même si nous effectuons chacun tous les types de tâches, nous avons quand même nos "spécialités", qui, heureusement pour nous, se complètent :
- Sébastien : Base de données (Firebase), Javascript
- Johan : HTML, CSS

## Mise en place de l'espace de travail

Tout d'abord, nous avons dû nous mettre d'accord sur les éléments présentés sur notre site ainsi que sur la présentation de celui-ci. Nous avons donc réalisé quelques maquettes (www.moqups.com) afin d'avoir une meilleure idée de notre objectif.

Il a ensuite fallu installer les outils et l'espace de travail.

Installation de **npm, yeoman, bower et grunt** :

```sh
$ npm install -g yo bower grunt-cli
```

Installation du **générateur yeoman** :

```sh
$ npm install -g generator-webapp
```

Création d'un **nouveau projet** :

```sh
$ mkdir monCV
$ cd monCV
$ yo webapp
```

Installation **des dépendances** :

```sh
$ npm install && bower install
```

## Logiciels utilisées

* Google Chrome (Edition du code et débogueur)
* Paint (Redimentionnement des images)
* PhotoShop (Création du logo)
* Moqups (Réalisation des maquettes)

## Technologies utilisées

Voici les technologie que nous avons utilisées pour développer notre projet:

* Node.js
	* yeoman (générateur)
	* bower (permet de gérer les dépendances)
	* grunt (permet d'automatiser les tâches qui se répètent)
* Bootstrap (framwork css)
* Bootswatch (thèmes bootstrap)
* AngularJS (framwork javascript)
* Impression (impression de certains éléments de notre site)
* Firebase (permet de mettre nos données sur firebase)
* AngularFire(complémentaire à Firebase)
* Github (pour la gestion des version et pour le travail en équipe)
* ngGallery (galerie photo)
* Google MAP (Afficher des map pour les restos)

## Développement

Voici les nombreux développements que nous avons effectués.

### Logo

Afin de personnaliser encore plus notre application web, nous avons fait un logo à l'aide de PhotoShop.

### AngularJS

AngularJS nous à permis de concevoir notre projet selon ses normes:

* Vues
* Controllers
* Services

### Filtre

Sur la page d'accueil où les restaurant sont affichés, l'utilisateurs a la possibilité de faire une recherche du restaurant qu'il souhaite.
La recherche se fait sous forme de filtre : dès que l'utilisateur tape une lettre au clavier, les restaurant sont automatiquements triés.

### Impression

Lorsque l'utilisateur affiche un restaurant, il a la possibilité d'en imprimer ses coordonnées de contact.

### Thème

Grâce au plugins bootstwatch, nous avons pu modifier le thème de notre site.

### Scroll

Nous avons insérer du code javascript qui permet, lorsque que l'on descend assez, de faire apparaitre un bouton pour nous faire remonter jusqu'en haut sans avoir à utiliser la barre de défilement ou la roulette de la souris.

### Firebase

Toutes nos données se situent sur Firebase.

Notre application récupère les données depuis firebase afin de les afficher à l'écran.

### GitHub

Nous avons utilisé Github afin de faire du versioning.

Nous avons créé 2 branches supplémentaires:
* dev: Cette branche était dédiée au développement de l'application. Une fois que l'on était sûr du resultat, nous faisions un merge sur la branche master.
* gh-pages: Afin de rendre notre application web visible sur internet.

### Google Map

Dans l'onglet "Contact", nous avons intégré une carte Google Map montrant l'emplacement de la HEG-Arc de Neuchâtel.

### Progress-bar

Pour que cela fonctionne bien, les liens google map ont dû être définies en tant que liens autorisés. Sans cela, angular black-list automatiquement les liens grâce au service $sce (Strict Contextual Escaping).

### ngGallery

Afin d'avoir une représentation un peu plus clair (ou du moins, plus "amusante") de la note attribuée à nos restaurants, nous avons placé des Progress-bar (Bootstrap) qui sont remplis en fonction de cette note. Plus celle-ci est haute, plus la Progress-bar sera remplie.

## Progress-bar

Afin d'avoir une représentation un peu plus clair (ou du moins, plus "amusante") de la note attribuée à nos restaurants, nous avons placé des Progress-bar (Bootstrap) qui sont remplis en fonction de cette note. Plus celle-ci est haute, plus la Progress-bar sera remplie.

### Popover

Afin de ne pas afficher doublement l'information de la note des restaurants, mais de pouvoir néanmoins visualiser la note en texte et pas uniquement la barre de progression, nous avons ajouté un popover sur celle-ci. Cela signifie que, lorsque l'utilisateur survol la barre de progression avec sa souris, une sorte d'infobulle s'affiche, indiquant la note du restaurant.

Pour cela, nous avons ajouté le code suivant dans le fichier .js de nos restaurants :

```sh
$('[data-toggle="popover"]').popover({trigger: 'hover','placement': 'top'});
```

Dans notre fichier HTML, nous avons ensuite ajouté ce code avant notre barre de progression afin d'utiliser le **popover** :

```sh
<a href="" data-toggle="popover" title="Note" data-content="{{restaurant.data.unResto.note}}/10">
```

## Développeurs

Certaines aspects de la mise en page ne nous convenaient pas (couleurs par exemple). Nous les avons donc corrigés. L'exemple le plus concret est le design des boutons : nous sommes partis d'un bouton bleu, sans effet lors du survol par la souris (hover) et avec un effet de "pression" lors du clic, pour arriver à un bouton noir au texte blanc qui, au survol de la souris, devient blanc, avec texte et bordure noirs.

## CSS

D'autres éléments qui ne figuraient pas dans le CSS ont été ajoutés par nos soins. C'est notamment le cas pour gérer la couleur des Progress-bar ou encore les chevrons placés sur les boutons (couleur également).

### ngGallery

Nous avons installé le plugin ngGallery afin d'afficher les images des restaurant autrement que la manière traditionnelle. Dès que l'utilisateur cliquera sur une image dans le détail d'un restaurant, elle s'affichera sous forme de galerie et pourra depuis là naviguer dans dans les images.

##Développeurs

* Johan Steiner
* Sébastien Quiquerez

## Nos objectifs

Nous avions divers objectifs pour ce projet.

### Connaissances

Nous souhaitions en premier lieu approfondir nos connaissances en web étant donnée que durant notre formation précédente en informatique de gestion, nous avions acquis peu de notions (pas assez à notre goût). Nous souhaitions donc être plus à l'aise avec du HTML et du CSS ainsi que mettre en pratique la théorie vue en cours pour Javascript.

### Design

Il nous tenait à coeur de livrer un projet final agréable à voir, avec un design sobre et des couleurs restant dans les mêmes tons (nous sommes restés sur du noir et blanc).

Non seulement l'aspect du site devait être agréable, mais également des détails du site que l'on pourrait avoir tendance à oublier, notamment les images auxquelles nous avons mis une "bordure" à l'aide de la classe "Thumbnail".

Nous souhaitions donc que notre site internet "donne envie" à l'utilisateur.

### Ergonomie

En tant qu'informaticien, nous trouvons que l'on a souvent tendance à mettre en place les choses telles qu'elles nous conviennent et à oublier que le site internet sera créé pour des utilisateurs. Nous souhaitions donc rendre les choses pratiques pour l'utilisateur.

L'exemple le bouton permettant de revenir en haut de page. Nombreux sont les sites internet où il est long de revenir en haut avec la simple roulette de la souris. De plus, les plus "paresseux" ne souhaitent pas aller placer leur souris sur la barre de défilement, cliquer dessus, tenir et remonter (ou tout simplement que cela demande une petite manoeuvre en raison d'une zone de déplacement réduite pour la souris). Un simple bouton nous a paru une bonne solution.

## Conclusion

Nous sommes très satisfait de notre projet et très fiers des progrès que l'on a pu faire ces dernières semaines en matières de technologie web. Nous ne connaissions pas toutes les technologies que l'on a vu dans ce cours mais nous avons su les apprendre en nous exercer.

### Problèmes rencontrés

* Apprendre et intégrer les nouvelles technologies.
* Reprise des données depuis FireBase car nous ne connaissions pas bien les méthodes à mettre en place pour la reprise de ces dernières.
* Trouver la méthode qui nous a permis d'accepter les liens google map.
* Conflit avec le plugin smooth-scroll qui ne permet pas le lien entre les vues.

### Ce qui a fonctionné

Tous les points qui posaient problèmes ont évidemment été résolus.

* Toute la partie HTML et CSS.
* La collaboration entre nous.
* Le resultat correspond aux objectifs que nous nous étions fixés.

## Annexes

Vous trouverez des documents complémentaires dans le dossier "doc" du projet
