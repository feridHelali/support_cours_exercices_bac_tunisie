
Pages 2 **......** ..27 Rappel html 5 et css et iframe

Pages 28 **...**. 35 Animation,trasformation et transition avec css

Pages 36 **......** 84 Javasript cour et TP

Pages 85 **...** ..13 6 Base de données cours et TP

Pages 137 **...** 167 PHP cours et tp

Pages 169 **...**. 209 Annexes html,css,sql,javascript,php et et examens

## Sommaire


4 ème SI -sti

HTML

```
HTML 5 (HyperText Markup Language) est un langage de balisage (dit aussi langage de
marquage) qui permet de structurer le contenu des pages web dans différents éléments.
1 C’est un langage interprété par les navigateurs (Internet Explorer, Firefox, Chrome
...), ne pouvant en aucun cas effectuer des calculs, même simples comme une multiplication.
```
### Rappel HTML5 +css^

```
Les balises de listes
Mise en forme avec css
```
```
C’est quoi HTML
```
```
Advantages HTML
```
```
Amélioration de la sémantique des pages Web.
Structure de code plus propre et organisation du site en fonction des contenus.
Déclaration claire et simple de Doctype : <! DOCTYPE html>.
Création des animations, diffusion des vidéos ou de la musique.
Compatibilité entre les différents navigateurs et appareils (Pc, Smartphones...).
Ajout d’un Canevas pour l'animation et le développement de jeux. Possibilité de navigation hors ligne.
Prise en charge de la géolocalisation.
Amélioration de stockage.
Fournit des avantages d'optimisation pour les moteurs de recherche.
```
Structures HTML

```
En‐tête du document,
Il fournit de multiples
renseignements sur le
document lui ‐ même.
```
```
Corps du
document.
Le contenu de la
page :texte, blocs,
images
```
```
La balise <HTML>
indique au navigateu
qu’il s’agit d’un
document HTML
```
```
Le Doctype au
début
de page
renseigne le type
de document
HTML délivré
```


4SI-TIC

**Mr Slim REGAIEG**

**1**

Balise < meta >

Les balises META servent à placer des métadonnées (metadata) dans une page HTML. On
placera ces informations dans l’élément head, et elles ne seront pas affichées sur la page et qui
sont destinées aux
❖ Navigateurs web
❖ Moteurs de recherche
❖ Outils d’indexation
Exemples

```
 Définissez des mots-clés pour les moteurs de recherche :
```
```
 Définissez une description de votre page Web :
```
```
 Définir l'auteur d'une page :
```
```
 Actualiser le document toutes les 30 secondes :
```
```
 Configuration de la fenêtre d'affichage
```
```
 Encodage des caractères à destination des navigateurs celle-ci doit se placer après le
```
<head> et avant le <title>

```
❖ Balise < title >
```
La norme HTML a prévu une balise spéciale pour le titre de la page, c'est la balise< title>.
Les moteurs de recherche y ont d'ailleurs accordé une grande importance

❖
❖ Balise < link >
Permet de charger les fichiers de code annexes à la page HTML, notamment les fichiers de
feuilles de style (.css)
Exemples

1 Utilisé pour définir un script en JavaScript encore elle peut pointer vers un fichier de script
externe (.js) avec l’attribut src, dans ce cas le contenu de la balise doit rester vide

```
Les balises d’en-tête < head>
```

4SI-TIC

**Mr Slim REGAIEG**

**2**

###### TP 1 ( HTML 5 et CSS 3 )

```
1 ) Lancer l’éditeur visual code
2 ) Lancer un nouveau fichier
3 ) Enregistrer votre travail dans D:/votre dossier/html 5 et css 3 / tp 1 .html
4 ) Ecrire un code HTML permettant de réaliser la page web représentée ci-dessous.:
```
```
5 ) Ajouter les lignes suivantes à la fin du fichier tp 5 et visualiser votre travail.
```
```
<h3>Évolutions du langage</h3>
<ul><li> 1989 - 1992 : Origine</li></ul>
</body>
```
```
En déduire le rôle de chaque balise.
......................................................................................................
......................................................................................................
6 ) Compléter le reste de la liste sachant qu’elle contient aussi :
o 1993 : HTML 1. 0
o 1995 - 1996 : HTML 2. 0
o 1997 : HTML 3. 2. et 4. 0
o 2000 : XHTML
o De 2007 à nos jours : HTML 5 et abandon du XHTML 2
7 ) Effectuer les modifications présentées dans le tableau ci-dessous sur votre code
HTML.^
Modification Résultat
<ul type="square">
```
```
<ul type="circle">
```
```
8 ) Remplacer la balise la balise ul par la balise ol et observer les résultats obtenus.
En déduire le rôle de chaque balise ol.^
.................................................................................................................
...............................................................................................................
```

4SI-TIC

**Mr Slim REGAIEG**

**3**

```
9 ) Effectuer les modifications présentées dans le tableau ci-dessous sur votre code
HTML.
N° Modification Résultat
```
(^1) <ol type="A">
(^2) <ol type="a">
(^3) <ol type="I">
(^4) <ol type="i">
**Le résultat final de la page est le suivant :
10 )** créer une feuille de style appelé « **style.css** » qui permet de faire les mises en forme
suivantes à la page web « TP 1 .html » :
**Couleur d’arrière-plan** : rose
**Titre :** centré , souligné , de couleur bleu , taille=40px , police= verdana
**Paragraphe :** taille =20px ,
**La liste numéroté** : Gras , Italique
**11 )** Quelle est la balise qui nous permet de faire la liaison entre la page web et le fichier css?
Quel est son emplacement dans le code HTML?


4SI-TIC

**Mr Slim REGAIEG**

**4**

###### TP 2 ( HTML 5 et CSS 3 )

```
1 ) Lancer l’éditeur visual code
2 ) Lancer un nouveau fichier
3 ) Enregistrer votre travail dans D:/votre dossier/html 5 et css 3 / tp 2 .html
4 ) Ecrire un code HTML permettant de réaliser la page web représentée ci-dessous.:
```
```
5 ) Copier deux images d'extension jpg dans votre dossier de travail, et renommer-les
en image1.jpg et image 2 .jpg.
```
```
6 ) Ecrire la balise qui permet d’insérer les deux images de la façon suivante :
Image 1 : aligné à gauche
Largeur = 200
Hauteur = 150
Info bulle de l’ image : « première image »
Image 2 : aligné à droite
Bordure = 4
Largeur = 100
Hauteur = 100
Info bulle de l’ image : « deuxième image »
```
```
7 ) Comment peut-on mettre une image en arrière-plan de la page web?
```

4SI-TIC

**Mr Slim REGAIEG**

**5**

```
Voici deux colonnes fusionnées
Hello
```
```
Bonjour
bonsoir
hi
```
```
8 ) ajouter à la fin de la page web le tableau suivant :^
Image 1 Image 2
```
```
9 ) Ecrire le code qui construit les tableaux suivants :
```
```
Table 1 :
Les types d’images
Image vectorielle Image bitmap Image animée
```
```
Table 2 :
Bonjour Hello
```
```
bonsoir Hi
```
```
Table 3 :
```
Balise TD
Attribut Type de valeur Description
colspan entier Le nombre de colonnes à fusionner
rowspan entier Le nombre de lignes à fusionner


4SI-TIC

**Mr Slim REGAIEG**

**6**

```
Mises en forme demandées Code en CSS
```
```
Lien non visité : couleur rouge
```
```
Lien visité : souligné et de couleur bleu
```
```
Lien survolé par le pointeur de la souris :
```
```
couleur rose
```
```
Lien en cours d’activation : couleur jaune
```
###### TP 3 ( HTML 5 et CSS 3 )

- Les liens hypertextes (externes et internes) + iframe

```
1 ) Lancer l’éditeur Visual code
2 ) Lancer un nouveau fichier
3 ) Enregistrer votre travail dans C:/votre dossier/html 5 et css 3 / liens.html
4 ) intégrer dans une page HTML le contenu d'une autre page HTML : créer une fenêtre qui
nous permet de faire une recherche sur google dans la page web « tp2.html ».
5 ) Lien hypertexte externe : Ecrire un code HTML permettant de réaliser la page
web liens.html qui contient deux liens hypertextes vers les deux pages tp 1 .html et tp 2 .html
(Ajouter des liens pour retournes des pages tp 1 et tp 2 vers la page « liens.html »)
6 ) Lien hypertexte interne :
a) Ajouter en haut de la page web tp 2 .html le mot « descendre vers le bas » qui sera
la source d’un lien hypertexte interne vers la fin de page.
b) Ajouter à la fin de page web tp 2 .html le mot « Remonter » qui sera la source d’un
lien hypertexte interne vers le début de page.
7 ) Ajouter à chaque balise a les propriétés suivantes, puis interpréter :^
Propriété interpréter
<a href= ” “ target= ” _self ” >
```
```
<a href= ” “ target= ” _parent ” >
```
```
<a href= ” “ target= ” _blank ” >
```
```
8 ) En se basant sur le « rappel des mises en forme des liens », appliquer les
mises en forme suivantes aux liens de la page web« liens.html »
```

4SI-TIC

**Mr Slim REGAIEG**

**7**

```
Mises en forme demandées Code en CSS
```
```
Lien non visité : couleur rouge a^ :link{^ color^ : red^ ;^ }^
```
```
Lien visité : souligné et de couleur bleu a^ :visited{^ text-decoratin^ : underline;^
Color : blue; }
```
```
Lien survolé par le pointeur de la souris : rose a^ :hover{^ color^ : pink^ ;^ }^
```
```
Lien en cours d’activation : couleur jaune a^ : active^ {^ color^ : yellow^ ;^ }^
```
###### Correction duTP 3 ( HTML 5 et CSS 3 )

- Les liens hypertextes (externes et internes)

```
Q 4 ) <iframe src=" http://www.google.com " title=" description "></iframe>
Q 5 )
<!DOCTYPE html>
<html>
<head>
<title></title>
<meta charset="utf- 8 ">
</head>
<body>
<p>< a href="tp 1 .html" >TP 1 </a></p>
<p>< a href="tp 2 .html" >TP 2 </a></p>
</body>
</html>
Q 6 )
lien du bas vers le haut :
< a name ="top"></a>
```
..
< **a href** =" **#** top">top</a>
    **Lien du haut vers le bas :**^
<!--source du lien - ->
<p>< **a href** =" **#** down">cliquer ici pour descendre</a></p>
...
<!--nom du cible -->
<h 2 **id** ="down">Section plus bas</h 2 >
Q 7 ) Ajouter à chaque balise a les propriétés suivantes , puis interpréter :
Propriété interpréter

```
<a href=” “ target=”_self”> le contexte^ de navigation^ actuel.^ (Par^ défaut)^
```
```
<a href=” “ target=”_parent”> le contexte^ de navigation^ parent^ de celui^ en^ cours.^ S'il^ n'y^ a^ pas^ de^
parent, il se comporte comme _self.
```
```
<a href=” “ target=”_blank”> généralement^ un^ nouvel^ onglet,^ mais^ les^ utilisateurs^ peuvent
configurer les navigateurs pour ouvrir une nouvelle fenêtre à la place.
```
```
Q 8
```

4SI-TIC

**Mr Slim REGAIEG**

**8**

```
LES FORMULAIRES
```
Les pages Web construites en HTML permettent de présenter et de diffuser de l’information en
provenance d’un serveur Web vers un navigateur client. Un « dialogue » client-serveur s’instaure lorsque
le client peut à son tour envoyer des informations au serveur, notamment par le biais de formulaires :

1. recueil d’informations à l’aide de contrôles dans un formulaire HTML,
2. envoi des informations au serveur,
3. traitement des informations par le serveur (à l’aide d’un langage adapté tels que PHP ou Perl),
4. renvoi éventuel d’informations HTML au client (réponse, accusé de réception, demande de
    précision...).

Une page peut comprendre un à plusieurs formulaires dans sa section <body>. Tous les contrôles du
formulaire doivent être insérés entre les balises **<form>** ... **</form>** :
Balise Description Attributs facultatifs

<form> (^) formulaire contenant des contrôles name="nomFormulaire"
method="get|post" méthode d’envoi des données
au serveur (get par défaut).
action (="URL") adresse du script auquel les
données sont envoyées (pour être traitées).
Un à plusieurs évènements JavaScript peuvent être
spécifiés
Une zone de texte permet de saisir tout type de données. La voici en version « minimale » :
contrôle de formulaire code HTML
La zone de texte : Nom :^ <input type="text"
name="nom" />
L’attribut **name** est obligatoire afin de permettre au serveur, chargé de traiter les valeurs, de récupérer
ces valeurs à partir du nom qui leur est attribué ( **deux contrôles d’un même formulaire ne peuvent donc
pas avoir la même valeur de l’attribut name** ).
Le message issu du **placeholder** disparaît lorsque le curseur est placé dans la zone (ce qui est d’emblée le
cas ici du fait de l’autofocus) : il apparaît lorsque la zone n’est pas sélectionnée et qu’aucun contenu n’a
été saisi. **placeholder** , **autofocus** et **required** sont des attributs HTML5 pas encore reconnus par tous les
navigateurs.
L’attribut **default** permet d’indiquer une valeur par défaut dans la zone (que l’arrivée du curseur
dans la zone ne supprime pas) : s’il n’y a pas de ressaisie, c’est cette valeur qui sera transmise
(alors que placeholder n’indique pas une valeur).
La balise **<label>** a une portée sémantique (repérer les libellés de formulaire), son attribut **for** se
réfère à l’id de la zone de texte (qui peut porter la même valeur que **name** ) permet d’envoyer le
curseur dans la zone quand on clique sur le libellé.


4SI-TIC

**Mr Slim REGAIEG**

**9**

Présentons les contrôles de formulaire :

```
contrôle de formulaire code HTML
La zone de champ caché : elle peut servir à
stocker (et transmettre) des valeurs qui n’ont
pas besoin d’être affichées à l’écran (mais
visibles dans le code source).
```
```
<input type="hidden" name="c"
value="caché" />
```
```
La zone mot de
passe :
```
```
Mot de passe : <input type="password"
name="mp" />
```
```
La zone de texte
long :
```
```
<textarea type="text" name="lib"
rows="3" cols="25">valeur par
défaut</textarea>
L’apparence de la zone de texte multilignes est
paramétrable soit à l’aide des attributs rows
(lignes) et cols (caractères en elle permet de
saisir tout type de données, sur plusieurs lignes
colonnes) ou en CSS (propriétés width et
height).
Les boutons radio :
```
```
ils permettent d’effectuer un seul choix
(conditionné par une valeur identique pour
l’attribut name) parmi des propositions
L’attribut facultatif checked détermine la
valeur préselectionnée.
```
```
Sexe :
<input type="radio" name="sexe"
value="M" checked /> Homme
<input type="radio" name="sexe"
value="F" /> Femme
```
```
Les cases à cocher
:
```
```
elles permettent d’effectuer un à plusieurs
choix parmi un nombre limité de propositions ;
les choix effectués peuvent être stockés dans un
tableau (attribut name ci-contre) ou chaque
case peut avoir sa propre valeur de l’attribut
name
```
```
Jour(s) de disponibilité :
<input type="checkbox"
name="jour[]" value=" 1 " />
Mercredi
<input type="checkbox"
name="jour[]" value=" 2 " /> Samedi
<input type="checkbox" name="jour[]"
value=" 3 " /> Dimanche
```
```
La liste déroulante :
```
```
elle permet d’effectuer un
seul choix parmi un nombre élevé de
propositions
```
```
Statut :
<select name="statut">
<option value=" 1 ">Etudiant</option>
<option
value=" 2 ">Professeur</option>
</select>
L’attribut value indique la valeur renvoyée.
La zone de liste :
```
```
elle permet d’afficher
d’emblée plusieurs (selon
l’attribut size) propositions. L’attribut
```
```
Jour(s) de disponibilité :
<select size=" 3 " multiple
name="jour[]">
<option value="l">lundi</option>
<option value="m">mardi</option>
<option value="j">jeudi</option>
```

4SI-TIC

**Mr Slim REGAIEG**

```
10
facultatif multiple permet le choix multiple
(l’attribut name doit alors désigner un tableau)
```
```
<option value="v">vendredi</option>
</select>
L’attribut facultatif selected de la balise
<option> permettrait de préselectionner un
élément de la liste.
Le fichier joint :
```
```
il permet de rechercher un fichier à envoyer en
pièce jointe
```
```
PJ : <input type="file" name="pj"
value="fichier" />
```
```
Le bouton Annuler :
il réinitialise tous les contrôles du formulaire à
vide ou à leur valeur par défaut
```
```
<input type="reset"
value="Annuler" />
```
```
Le bouton Envoyer :
```
```
il envoie les données du formulaire au serveur
pour un traitement par le script spécifié dans
l’attribut action de la balise <form>
```
```
<input type="submit"
value="Envoyer" />
```
Les zones de saisie enrichies

Regroupement de champ du formulaire par thématique

```
Liste (déroulante ou non) avec groupements d’options
extrait du code HTML
```
```
affichage par un
navigateur
<select size=" 9 " name="jour">
<optgroup label="semaine">
<option value=" 1 ">lundi</option>
<option value=" 2 ">mardi</option>
<option value=" 3 ">mercredi</option>
<option value=" 4 ">jeudi</option>
<option value=" 5 "
selected>vendredi</option>
</optgroup>
<optgroup label="week end">
<option value=" 6 ">samedi</option>
<option value=" 7 ">dimanche</option>
</optgroup> </select>
```
```
Les libellés de groupes
(semaine et week-end)
ne sont pas cliquables
```

4SI-TIC

**Mr Slim REGAIEG**

**11**

Script HTML Affichage (^) Liste de suggestions
Ce type de valeur est
le plus souvent
alimenté à partir
de valeurs déjà
enregistrées
dans une base de
données.
<input type="text" list="serie">
<datalist id="serie">
<option value="juillet">
<option value="août"> </datalist>
Rq : si août est saisi il
sera ensuite proposée
deux fois (une fois par
la liste de suggestion,
une fois par la mémoire
cache du navigateur).
extrait du code HTML affichage par un navigateur
<fieldset>
<legend>identité</legend>
<table>
<tr><td><label for="idNom">Nom :</label></td>
<td><input type="text" name="nom" /></td>
</tr>
<tr> <td><label for="idPrenom">Prenom
:</label></td>
<td><input type="text" name="prenom" /></td>
</tr> </table>
</fieldset>
Remarque :
Output <output onload="value = 2 + 2"></output>
Progress
<progress id="prog" max=100 value=75> 75%</progress>
(^)
L’apparence des messages de validation est personnalisables à l’aide de pseudo-classes CSS :
:required | :optional, :valid | :invalid et :in-range | :out-of-range.
Exercice1 :


4SI-TIC

**Mr Slim REGAIEG**

**12**

Exercice2 :


4SI-TIC

**Mr Slim REGAIEG**

**13**

Résumé :Les formulaires en HTML (^5)
Les éléments d’un formulaire :
<input type="text" name=" " value=" " > Liste déroulante :
<input type="email" name=" " value=" ">
<input type="number" name=" " value=" ">
<input type="tel" name=" " value=" ">
<input type="password" name=" " value=" ">
<input type="date" name=" " value=" ">
<input type="time" name=" " value=" ">
<input type="range" name=" " value=" ">
<input type="button" name=" " value=" ">
<input type="submit" name=" " value=" ">
<input type="reset" name=" " value=" ">
Exemple:
<select name="profil">
<option value="parti">Un
particulier</option>
<option value="profe" selected="selecte
d">Un professionnel</option>
<option value="insti">Un
institutionnel</option>
</select>
</p>
<input type="checkbox" name=" " value=" ">
Exemple :
<p> Quel est votre sport préféré ?</p>
<input type=′′checkbox′′ name=′′CB′′
value=′′foot′′>Football
<input type=′′checkbox′′ name=′′CB′′
value=′′course′′>Course
<input type=′′checkbox′′ name=′′CB′′
value=′′box′′>Box Américain
<input type="radio">
Exemple :
<p>
<input type="radio" name="civi" value="M
me" /> Madame
<input type="radio" name="civi" value="Mll
e" /> Mademoiselle
<input type="radio" name="civi" value="Mr
" /> Monsieur
</p>
Liste déroulante avancée :
Exemple:
<input list="nom">
<datalist id="nom">
<option value=".......">
<option value=".........">
</datalist>
<textarea id=" " name=" “ rows=” 5 ”
cols=” 33 ”>
</textarea>
Groupe d’éléments d’un formulaire:
<fieldset>
<legend>nom du groupe </legend>

.....
</fieldset>

```
Tous les elements d’un formulaire doivent être dans la balise :
< form action =" " method ="post">
Elements du formulaire
</ form >
```

4SI-TIC

**Mr Slim REGAIEG**

**14**

###### TP 4 ( HTML 5 et CSS 3 )

- Les formulaires

```
1 ) Lancer l’éditeur visual code
2 ) Lancer un nouveau fichier
3 ) Enregistrer votre travail dans D:/votre dossier/html 5 et css 3 / liens.html
4 ) formulaire : Ecrire un code HTML permettant de réaliser la page web
formulaire 1 .html pour remplir les données suivantes :
Créer la liste de sélection en utisant la balise « SELECT »
```
```
5 ) Recréer la liste déroulante en utilisant la balise « datalist »
```

4SI-TIC

**Mr Slim REGAIEG**

**15**

###### Correction du TP 4 ( HTML 5 et CSS 3 )

- Les formulaires

```
4 ) <form name="mon-formulaire 1 " action=" " method="get">
<p>
<input type="radio" name="civi" value="Mme" /> Madame
<input type="radio" name="civi" value="Mlle" /> Mademoiselle
<input type="radio" name="civi" value="Mr" /> Monsieur
</p>
<p>
Votre prénom :<br />
<input type="text" name="prenom" value="" />
</p>
<p>
Votre nom :<br />
<input type="text" name="nom" value="" />
</p>
<p>
Votre mot de passe :<br />
<input type="password" name="passe" value="" />
</p>
<p>
Vous êtes<br />
<select name="profil">
<option value="parti">Un particulier</option>
<option value="profe" selected="selected">Un professionnel</option>
<option value="insti">Un institutionnel</option>
</select>
</p>
<p>
Quel type de prestation recherchez vous ?<br />
<input type="checkbox" name="interet" value="loc" /> Location de
mobilier
<input type="checkbox" name="interet" value="achat" /> Achat de
mobilier
</p>
<p>
Votre message :<br />
<textarea name="le-message" rows=" 6 " cols=" 40 ">Vous pouvez saisir ici
un message.</textarea>
</p>
<p>
<input type="submit" value="Envoyer" />
<input type="reset" value="Annuler" />
</p>
</form>
```
```
5 ) <input list="profil" id="myprofil" name="p"/>
<datalist id="profil">
<option value="Un particulier">
<option value="Un professionnel">
<option value="Un institutionnel">
</datalist>
```

4SI-TIC

**Mr Slim REGAIEG**

**16**

Les événements
Les évènements permettent d’effectuer une action (un algorithme) à des moments bien précis

```
1.1 Les événements de la page
Attribut Description
onload Se déclenche lorsque la page est complètement chargée.
```
```
Exemple d’appel :
<body onload="myFunction()">
```
```
1.2 Les événements des éléments du formulaire
Attribut Description
onsubmit Se déclenche lorsqu'un formulaire est soumis.
```
```
Exemple d’appel :
<form action="..." onsubmit=" return myFunction( )">
oninput Se déclenche dès que la valeur d'un élément a changé.
```
```
Exemples d’appels :
<input id="..." oninput="myFunction()">
<textarea id="..." oninput="myFunction()">
```
```
onblur Se déclenche au moment où l'élément perd le focus.
```
```
Exemple d’appel :
<input id="..." onblur="myFunction()">
onfocus Se déclenche au moment où l'élément obtient le focus.
```
```
Exemple d ’appel :
<input id="..." onfocus="myFunction()">
1.3 Les événements de la souris
Attribut Description
onclick Se déclenche lors d’un clic sur l’élément.
```
```
Exemples d’appels :
<p onclick="myFunction()">
<input onclick=" myFunction()">
<div onclick=" myFunction()">
<h1 onclick="myFunction()">
```
```
onmouseover Se déclenche lorsque le pointeur de la souris survole l’élément.
```
```
Exemples d’appels :
<p onmouseover =" myFunction()">
<input onmouseover =" myFunction()">
<div onmouseover =" myFunction()">
<h1 onmouseover =" myFunction()">
```

4SI-TIC

**Mr Slim REGAIEG**

**17**


4SI-TIC

**Mr Slim REGAIEG**

**18**

###### TP 5 ( HTML 5 et CSS 3 )

- Les balises sémantiques + Rappel (image, table, formulaire)

```
1 ) Lancer l’éditeur visual code
2 ) Lancer un nouveau fichier
3 ) Enregistrer votre travail dans D:/votre dossier/html 5 et css 3 /Projet 1 / accueil.html
4 ) Ecrire un code HTML permettant de réaliser la page web représentée ci-dessous:^
```
###### HEADER

###### NAV

```
SECTION
```
**ARTICLE**

```
aside
```
**ARTICLE**

```
footer
```
```
5 ) choisir un sujet de votre site web et remplir les différentes parties de cette page web
```
```
6 ) Améliorer cette page, en ajoutant un code CSS pour bien organiser ces parties, et faire
des mises en forme.
```
```
7 ) créer une page qui contient des images, une page qui contient une table et une page qui
contient un formulaire
```
```
8 ) pour pouvoir naviguer dans votre site web, ajouter des liens hypertexte internes et
externes
```

4SI-TIC

**Mr Slim REGAIEG**

**19**

###### Correction du TP 5 ( HTML 5 et CSS 3 )

- Les balises sémantiques + Rappel (image, table, formulaire)

```
Q 4 ) <body>
<header> <h1>bienvenue a mon site web</h 1 > </header>
<nav>
```
```
</nav>
```
```
<p> <a href="page 1 .html" >pqge 1</a></p>
<p> <a href="page 2 .html" >pqge 2</a></p>
```
```
<section>
<article>
......................
</article>
<article>
.....................
</article>
</section>
<aside> publicite </aside>
<footer>........................ </footer>
</body>
```

4SI-TIC

**Mr Slim REGAIEG**

```
20
Q 6 )
```
(^) Autre méthode qQ6
header{
border: 1 px dashed;
top: 0 %;background-color: pink; width:
100 %; height: 20 %; }
nav{
border: 1 px dashed;
float: left; width: 20 %; position:
absolute; height: 65 %;
top: 15 %; }
section{
border: 1 px dashed; margin-left: 21 %;
width: 60 %;
height: 65 %;
position: absolute;
top: 15 %; }
aside{
border: 1 px dashed; margin-left: 82 %;
width: 17 %;
height: 65 %;
position: absolute;
top: 15 %; }
footer{
border: 1 px dashed;
position: absolute;
bottom: 0 %;
background-color: pink;
height: 20 %; width: 100 %;
}


### <iframe>

**Définition :**

Un iframe HTML est utilisé pour afficher une page Web dans une page Web.

La balise HTML <iframe>spécifie un cadre en ligne.

Un cadre en ligne est utilisé pour incorporer un autre document dans le document
HTML actuel.

Syntaxe :

**Conseil :** Il est recommandé de toujours inclure un title attribut pour
le <iframe>. Ceci est utilisé par les lecteurs d'écran pour lire le contenu de l'iframe.
**Exemple:**
a)
<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe
Example"></iframe>
Résultat:

b)Ou vous pouvez ajouter le style attribut et utiliser
le CSS height et les width propriétés :
<iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe
Example"></iframe>
Q1: ajouter un couleur de fond
c) Avec CSS, vous pouvez également modifier la taille, le style et la couleur de
la bordure de l'iframe :
<iframe src="demo_iframe.htm" style="border:2px solid
red;" title="Iframe Example"></iframe>
Résultat:

d)Iframe - Cible pour un lien utilisation de **target**

Un iframe peut être utilisé comme cadre cible pour un lien.

L' attribut target du lien doit faire référence à l' attribut name de l'iframe :

- La balise HTML <iframe>spécifie un cadre en ligne
- L' attribut src définit l'URL de la page à intégrer
- Toujours inclure un attribut title (pour les lecteurs d'écran)
- Les attributs height et width spécifient la taille de l'iframe
- Utilisez border:none; pour supprimer la bordure autour de l'iframe

Exemple avec <a href=” target”> :
Ajouter un lien pour afficher le site d’inscription :inscription.education.tn dans un cafre (iframe)
Syntaxe :target <a target= ‘’_blank |_self|_parent|_top|nom_du_frame’’>

_blank (^) La page cible s’ouvre dans un nouvel onglet ou dans une
nouvelle fenêtre


_self (^) Valeur par défaut : la page cible s’ouvre dans le même
emplacement (cadre ou « frame ») que là où l’utilisateur a
cliqué
_parent (^) La page cible s’ouvre dans la cadre (frame) de niveau
immédiatement supérieur par rapport à l’emplacement du
lien
_top (^) La page cible s’ouvre dans la fenêtre hôte (par dessus le
frameset)
nom_du_frame (^) Ouverture de la page cible dans le cadre portant le nom cité
(en valeur de l’attribut name)


###### CSS 3 (mise en forme des textes)

couleurs Utilisation de la balise “div”
color: red;
color: #0 0 ff 00 ;
color: rgb( 34 , 12 , 64 );

```
<div class="conteneur">
<h 1 >Un titre de niveau 1</h1>
```
```
<p class="p1">Un premier paragraphe</p>
<p class="p2">Un autre paragraphe</p>
</div>
------CSS-----------
/*On ajoute une bordure autour de l'élément conteneur.
*Le div fait 70% de la largeur de son parent (le body)*/
.conteneur{
border: 1px solid black;
width: 70 %;
box-shadow: 5px 5px 0px red;
padding: 10px 50px 10 0 px 200px; /* top right bottom
left*/
margin: 20px 10px 10px 2 0px;
}
```
```
/*Le texte est centré p/r à l'élément parent (le div
conteneur)*/
h 1 {
text-align: center;
}
/*Texte aligné à gauche p/r à l'élément parent (le div)*/
.p 1 {
text-align: left;}
```
fontes
font-family: arial;

font-size: 10 px;

font-size: 2 .6em;
font-style: normal;
font-style: italic;
font-style: oblique;

font-weight:
400 ;/*normal */
font-weight: normal;
font-weight: bold;

Souligner ou surligner un texte (^) Ombre d’un texte
h1{
text-decoration: underline;
}
.p1{
text-decoration: underline overline
red;
}
.p2{
text-decoration: overline dashed;
}
.p3{
text-decoration: underline wavy;
}
a{
text-decoration: none;
}
/*Ombre noire en bas à droite, nette*/
h 1 {
text-shadow: 5px 5px;
}
/*Ombre bleue en bas à gauche, nette*/
.p 1 {
text-shadow: - 5px 2px blue;
}
/*Ombre rouge centrée sur le texte (décalement horizontal et
vertical de
0px), floue*/
.p 2 {
text-shadow: 0px 0px 5px
red;
}
/*Double ombre de .p1 et de .p2*/
.p 3 {
text-shadow: - 5px 2px 1px blue, 0px 0 px 5px red;
Transformation d’un texte
h1{
text-transform: uppercase;}
.p1{
text-transform: lowercase;
}
.p2{
text-transform: capitalize;}
NB : Ces mises en forme peuvent être appliquées
aux balises de types textes (exemple : p , h 1 , a...)


###### Les couleurs en CSS

En anglais, Rouge-Vert-Bleu s'écrit Red -Green-Blue

```
rgb (0..255,0..255,0..255)
rgba (0..255,0..255,0..255,opacité:0..1)
```

###### CSS 3 (mise en forme d’une table)

###### code résultat

```
bordures d’une table
table, th, td {
border: 1 px solid black;
}
```
```
table {
width: 100 %;
}
```
```
table {
border-collapse:
collapse;
}
table {
border: 1 px solid black;
}
```
```
th, td {
border-bottom: 1 px solid
#ddd;
}
Styles d’une table
table {
width: 100 %;
}
th {
height: 70 px; }
table {
width: 50 %;
box-shadow : 5 px 5 px 2 px
grey;
}
Alignements d’une table
td {
text-align: center;
}
td {
height: 50 px;
vertical-align: bottom;
}
th, td {
padding: 15 px;
text-align: left; }
```
les styles de bordures : **dotted** (pointillé), **dashed** (tirets), **solid** (solide), **double** (double)


La propriété CSS **table-layout** permet de spécifier l'algorithme utilisé pour disposer les
cellules, colonnes et lignes d'un tableau.

La propriété de feuille de style **table-layout** CSS peut prendre la valeur de :

- fixed : la largeur du
    tableau et des colonnes est
    fixé par la largeur des
    éléments table et col ou par
    la largeur de la première
    ligne de cellules.
- auto : la largeur du
    tableau et de ces cellules
    dépendent du contenu.


```
}
```
###### CSS 3 (mise en forme d’un lien hypertexte)

(Quelques exemples)

a:link {

```
color: yellow;
```
}

/* visited link */

a:visited {

```
color: green;
```
}

/* mouse over link */

a:hover {

```
color: hotpink;
```
```
text-decoration: underline;
```
}

/* selected link */

a:active {

```
color: blue;
```
text-decoration: none;

}

**-------A link styled as a button:--------**

a:link, a:visited {

```
background-color: #f 44336 ;
```
```
color: white;
```
```
padding: 14px 25px;
```

❖ **Les sélecteurs avancés**

```
Les sélecteurs avancés sont l’une des grandes forces du CSS. En effet, grâce à eux, nous allons pouvoir
cibler du contenu très précisément et assez simplement. Il existe de très nombreux sélecteurs avancés
en CSS on présentera les plus utiles et les plus utilisés dans le tableau suivant :
```
```
Sélecteur Sert a ...
* Sélectionner tous les éléments (sélecteur universel)
A, B Sélectionner deux éléments A et B
A B Sélectionner un élément B contenu dans un élément A
A + B Sélectionner le premier élément B suivant un élément A
A[nom de l’attribut] Sélectionner tous les éléments A possédant un attribut
particulier
A[nom de l’attribut* =
« valeur »]
```
```
Sélectionner tous les éléments A possédant un attribut
particulier avec
une valeur
A[nom de l’attribut =
« valeur »]
```
```
Sélectionner tous les éléments A possédant un attribut
particulier avec
une valeur précise
```
#### Le modèle des boîtes

```
Dans une mise en page réalisée en CSS, tous les éléments sont considérés comme des boîtes.
Chacune de ces boîtes est constituée d’un contenu, d’un espacement intérieur, d’une bordure,
et d’une marge externe.
Voici les propriétés CSS qui permettent de déterminer les dimensions, la couleur, le style de
chacun de ses constituants :
```
```
Propriété CSS
Ce qui est concerné :
```
```
width et height largeur et hauteur du contenu (texte, image,
etc.)
padding espacement intérieur, entre le contenu et la
bordure
border bordure (ou encadrement)
margin marge externe, espace (transparent)
entourant le tout
```

###### Animations

Pour créer une animation CSS on doit :

- créer et nommer l’animation (avec @keyframes)
- attacher cette animation à un élément (avec animation-name)
1. Notre première animation :

On commence par créer une animation :

**@keyframes** taille {
**from** {width: 0px;}
**to** {width: 200px;}
}

On utilise la règle @keyframes et on nomme l’animation taille.

Rque : Il existe quelques règles avec le signe @ (nommées at-rules) qui permettent d’encapsuler plusieurs
règles pour le processeur CSS du navigateur, par exemple @media, @page...
Ici, on change la largeur (width) de (from) 0px à (to) 200px.

On attache ensuite cette animation à un élément :

div {
**animation-name: taille;**
height: 100px;
width: 200px;
background-color: blue;
**animation-duration: 4s;**
}

On utilise :

- animation-name : pour désigner l’animation utilisée. (obligatoire)
- animation-duration : pour définir la durée de l’animation (par défaut elle est de 0 seconde).
    (obligatoire)
2. Plusieurs étapes :
L’intérêt des animations est de pouvoir gérer des étapes intermédiaires. Voici une nouvelle version de
l’animation :
@keyframes taille {
0% {width: 0px;}
50% {width: 300px;}
100% {width: 200px;}
}

On a 3 étapes :

- le départ (0%) avec une largeur de 0px
- la moitié (50%) avec une largeur de 300px


- l’arrivée (100%) avec une largeur de 200px
3. Plusieurs propriétés :

On peut aussi changer plusieurs propriétés :

@keyframes taille {
0% {width: 0px; **background-color: red;** }
25% {width: 50px; **background-color: yellow** ;}
50% {width: 1 0 0px; **background-color: green** ;}
75% {width: 150px; **background-color: pink** ;}
/* 100% {width: 200px; background-color: blue;} devient **facultatif** car
l'état 100% est déjà l'état du div " _final_ ".*/
}

4. Démarrage différé :
Dans les exemples ci-dessus, l’animation commence dès le chargement, ce qui n’est pas toujours souhaitable.
On dispose de la propriété animation-delay pour différer le départ de la durée voulue.
En poursuivant notre exemple ça pourrait donner ce code :

div {
animation-name: taille;
height: 100px;
width: 200px;
background-color: blue;
animation-duration: 4s;
**animation-delay: 2s;**
}

5. **Nombre d’exécutions** :
Par défaut, une animation est exécutée une seule fois, si on en veut plus, il faut utiliser la propriété animation-
iteration-count. Toujours avec notre exemple :

div {
animation-name: taille;
height: 100px;
width: 200px;
background-color: blue;
animation-duration: 4s;
**animation-iteration-count: 2** ;
}

Rque :
Si on veut un nombre d’exécutions infini, au lieu de mettre une valeur on utilisera infinite.

6. **Sens de l’animation** :
Par défaut une animation va dans le sens normal mais on peut aussi l’obliger à aller dans l’autre sens en utilisant
la propriété animation-direction. On dispose de deux valeurs :
- reverse : on va dans le sens inverse.
- alternate : on alterne d’un sens à l’autre (dans ce cas évidemment il faut prévoir au moins deux
exécutions).


div {
height: 100px;
width: 200px;
background-color: blue;
animation-name: taille;
animation-duration: 4s;
animation-iteration-count: infinite;
**animation-direction: alternate** ;
}

7. **Progression de l’animation** :

On peut modifier l’animation avec la propriété animation-timing-function et ces valeurs :

- ease : début rapide, puis ça accélère, puis ça ralentit à la fin (c’est l’effet par défaut).
- linear : même vitesse du début à la fin.
- ease-in : début lent.
- ease-out : fin lente.
- ease-in-out : début et fin lents.
8. **Le style avant et après l’animation** :
Le style avant et après l’animation est défini par défaut par les règles de l’élément. On a la possibilité de changer
ce comportement en utilisant la propriété animation-fill-mode. On dispose de ces valeurs :
- none : comportement par défaut (en gros ça sert à rien)
- forwards : on garde les valeurs calculées lors de la dernière étape
- backwards : on garde les valeurs calculées lors de la première étape
L’interprétation peut être délicate selon les répétitions et sens des animations.

Par exemple avec ce code :

@keyframes taille {
0% {width: 0px ;}
100% {width: 200px ;}
}
div {
height: 100px;
width: 200px;
background-color: blue;
animation-name: taille;
animation-duration: 4s;
animation-delay: 2s;
**animation-fill-mode: backwards** ;
}

Au départ et pendant le délai de démarrage, la largeur sera de 0px qui correspond à la première étape (à 0%)
parce qu’on a utilisé la valeur backwards pour animation-fill-mode.

9. Action sur une animation :
Pour l’instant nous n’avons pas vu de possibilité d’intervention sur une animation. On dispose de la
propriété animation-play-state qui permet une interaction avec ces valeurs :
- running : valeur par défaut de l’animation en action.
- paused : animation en pause.

Voici le code d’un exemple où on met l’animation en pause en survolant l’élément :


@keyframes taille {
0% {width: 50px ;}
100% {width: 200px ;}
}
div {
height: 100px;
background-color: blue;
animation-name: taille;
animation-duration: 4s;
animation-fill-mode: forwards;
animation-iteration-count: infinite;
animation-direction: alternate;
animation-timing-function: linear;
}
div:hover {
**animation-play-state: paused** ;
}

On peut faire exactement l’inverse et mettre l’animation en action seulement au survol :

@keyframes taille {
0% {width: 50px}
100% {width: 200px}
}
div {
height: 100px;
background-color: blue;
animation-name: taille;
animation-duration: 4s;
animation-fill-mode: forwards;
animation-iteration-count: infinite;
animation-direction: alternate;
animation-timing-function: linear;
**animation-play-state: paused** ;
}
div:hover {
**animation-play-state: running** ;
}


TP 6 : transformation et transition d’élément avec css3
A l’aide du logiciel « visual code » rédiger le code de la page web nommée « Tp2css.html » qui doit avoir
l’apparence ci-dessous :

- Créer un titre de premier niveau : « Transformation et Transition ».
- Créer 5 balises « div » à chaque balise associée un ID.
- Dans chaque balise écrire respectivement : « paragraphe 1 » « paragraphe 2 » « paragraphe 3 »
    « paragraphe 4 » « paragraphe 4 »..
- Dans la balise div 2 : créer une liste de 4 puces : Accueil, à propos, liens, contact.
- Créer une page CSS nommée « Tp 2 css.css » et lier ce fichier avec la page « Tp2css.html »

```
Pour la transition on a les propriétés suivantes :
✓ La propriété transition-duration permet de spécifier la durée de la transition (la durée que mettra
l'animation pour aller de l'état 1 à l'état 2). Elle est exprimée en secondes.
✓ La propriété transition-property : permet de désigner quels sont les propriétés qui devront subir la
transition et quels sont celles qui ne s'animeront pas.
✓ La propriété transition-delay : permet de retarder le début de la transition lorsque l’événement qui la
déclenche est détecté.
```
L'exemple suivant montre un élément <div> rouge de 100px * 100px. L'élément <div> a également spécifié un
effet de transition pour la propriété width, d'une durée de 2 secondes :
#d1 {
width: 100px;
height: 100px;
background: red;
transition: width 2s;
}

L'effet de transition commencera lorsque la propriété CSS spécifiée (largeur) changera de valeur.
Maintenant, spécifions une nouvelle valeur pour la propriété width lorsqu'un utilisateur survole l'élément <div>
:
Exemple :

#d1:hover {
width: 300px;
}

L'exemple suivant ajoute un effet de transition pour les propriétés width et height, avec une durée de 2
secondes pour la largeur et de 4 secondes pour la hauteur :
#d1 {
transition: width 2s, height 4s;
}

Dans ce cas, l'animation fera une demi seconde. Comme pour la propriété transition-property il faut prévoir
le préfixe vendeur à transition-duration :
#d1{
border:solid 1px blue;
background-color:orange;
}
#d1:hover{
border:dotted 1px green;
background-color:yellow;

```
#d1:hover {
width: 300px;
height: 200px;}
```

transition-property:background;
transition-duration:0.5s;
}
Dans l’exemple suivant, on opère une transition CSS sur la taille de police du titre de quatre secondes après
deux secondes écoulées lorsque l'utilisateur passe la souris sur l'élément :
h1{
font-size: 14px;
transition-property: font-size;
transition-duration: 4s;
transition-delay: 2s;
}
h1:hover{
font-size: 36px; }
On utilise parfois CSS pour mettre en avant les éléments d'un menu lorsque l'utilisateur les survole avec sa
souris. On peut facilement utiliser les transitions CSS pour améliorer l'effet obtenu. On construit l'apparence
du menu :

a {
color: #fff;
background-color: #333;
transition: all 1s;
}
a:hover,a:focus {
color: #333;
background-color: #fff;
border-radius: 10px; }

Appliquer une transition sur plusieurs propriétés CSS :
Cette boîte utilisera des transitions pour width, height, background-color, avec une rotation de 180 degré :

#d3{
border-style: solid;
border-width: 1px;
display: block;
width: 150px;
height: 150px;
background-color: #0000FF;
transition: width 2s, height 2s, background-color 2s, transform 2s;
}
#d3:hover {
background-color: #FFCCCC;
width: 200px;
height: 200px;
transform: rotate(180deg); }
Un autre exemple :
#d4{
background-color: red;
width:150px;
height: 150px;
transition-property: opacity, left, top, height;;
transition-duration: 3s, 5s, 3s, 5s;
}


#d4:hover{
background-color: red;
height: 200px;
opacity: 0.5;
}
La propriété transform va nous permettre de définir un ou plusieurs effets de transformation à appliquer à un
élément : inclinaison, rotation, déformation, etc.

Nous appliquons un premier effet de transformation qui va être une translation, c’est-à-dire un déplacement
selon une direction. Ici, on va donc déplacer l’élément de 100px à partir de leur point d’origine vers la droite.
#d2{
background-color: pink;
width:150px;
height: 150px;
transform-origin: 0 0;
transform:translate(100px);
text-transform: uppercase;
}

Le point d’origine de la transformation est le centre. Comme la transformation n’est ici qu’un déplacement
horizontal, modifier le point d’origine ne change pas le résultat de la transformation.
#d5{
background-color: green;
width:150px;
height: 150px;
transform-origin: 50% 50%;
transform:rotate(45deg);
}

#d5:hover{
border:dotted 1px green;
background-color:orange;
transition-property:background;
transition-duration:0.5s; }
Exemple de transformation 2D :

La fonction scale() permet de modifier la taille ou plus exactement l’échelle de l’élément. Nous allons pouvoir lui
passer deux nombres qui vont correspondre au pourcentage d’agrandissement en largeur et en hauteur de
l’élément.

Par exemple, en écrivant transform : scale(2, 0.5), l’élément va doubler en largeur et être diminué de moitié en
hauteur.
Déformer un élément avec skewX() et skewY()
A la place, il faudra plutôt utiliser les fonctions skewX() et skewY() qui vont nous permettre de déformer un
élément selon son axe horizontal ou vertical.
#d1{
transform: skewX(30deg); }
#d2{
transform: skewY(30deg); }
#d3{
transform: skewX(30deg) skewY(30deg);}


```
INTRODUCTION :
JavaScript est un langage de scripts, permet d'améliorer la présentation et l'interactivité des pages
Web (tel que la communication avec le navigateur).
Il permet de :
✓ Contrôler la saisie dans un formulaire
✓ Permet d'accéder aux objets du navigateur
✓ Exécuter des commandes du côté client (date système, gestion de la fenêtre, gestion de navigateur)
etc...
Avantage :
✓ Rapide en exécution
✓ Faible coût, exécuté par le navigateur : (il ne nécessite pas une installation particulière pour pouvoir
être exécuté)
Inconvénients :
 Code source visible et peut être copié par tout le monde (view source).
I.FORMALISME DE BASE DU JAVASCRIPT
```
1. Pour ajouter un script java, il faut utiliser **_<script >_** et pour le terminer **_</script>._**
2. Tout ce qui est écrit entre le symbole **_"//"_** et la fin de la ligne, représente un commentaire et il sera
    ignoré pendant l’exécution.
3. Il est possible d’inclure des commentaires sur plusieurs lignes avec le code :
    **_/* commentaire sur_**
       **_Plusieurs lignes*/_**

**II. DOM JAVASCRIPT HTML**

```
Avec le DOM HTML , JavaScript peut accéder et modifier tous les éléments d'un document HTML.
Lorsqu'une page Web est chargée, le navigateur crée un D ocument O bjet M odèle de la page.
Avec le modèle objet, JavaScript obtient toute la puissance dont il a besoin pour créer du HTML
dynamique :
```
- JavaScript peut modifier tous les éléments HTML de la page
- JavaScript peut modifier tous les attributs HTML de la page
- JavaScript peut changer tous les styles CSS de la page
- JavaScript peut supprimer les éléments et attributs HTML existants
- JavaScript peut ajouter de nouveaux éléments et attributs HTML
- JavaScript peut réagir à tous les événements HTML existants dans la page
- JavaScript peut créer de nouveaux événements HTML dans la page

### Javascript


```
Le modèle HTML DOM est construit comme un arbre d’Objets :
```
```
IV. Différents emplacements du code JavaScript
a. Avec un script intégré dans le code HTML :
```
```
c. Avec un script externe (recommandé) :
```
```
Tout d'abord il faut créer un document que l'on appellera Controles.js ( par exemple) dans lequel on
écrira le code que l'on souhaite intégrer. Ensuite dans la page Web il suffira d'intégrer :
```
```
Dans ce cas, la balise doit être vide
```
**III. Les Structures de données en JavaScript :**

```
Il existe 3 façons de déclarer une variable JavaScript :
```
- À l'aide de **var**
- À l'aide de **let**
- À l'aide de **const**

```
 Lorsque vous déclarez une nouvelle variable, pensez à privilégier d'abord const , puis let et
enfin var en dernier recours.
 Attention néanmoins, let et const ne sont supportés que par les navigateurs qui sont
compatibles avec l'ES6
```
```
< script>
// Code JavaScript
< /script >
b. Avec un attribut d’évènement^ :
```
```
< p onClick= 'alert(" 4 SI 1 ")' > Bonjour < /p >
```
< script src= "Controles.js" > < /script >


```
JavaScript est un langage à typage dynamique. Cela signifie que vous n'avez pas besoin de spécifier
le type de données d'une variable lorsque vous la déclarez. Les types de données sont convertis
automatiquement durant l'exécution du script.
```
```
Type Exemples de valeurs typées / Notes
```
**Nombres (number)** 42, 3.14159

**Booléens (boolean)** true / false

**Chaînes de caractères (string)** "Bac Informatique"

**null**
Un mot-clé spécifique pour désigner une valeur informatique nulle (et
pas mathématique).

**undefined**

```
Une variable pour laquelle aucune valeur n'a été assignée sera de type
undefined.
```
```
IV. OPERATEURS PREDEFINIS
```
1. LES OPERATEURS ARITHMETIQUES : SOIT Y = 5
    V

```
Opérateur Description Exemple Y X
+ Addition x = y + 2 y = 5 x = 7
```
- Soustraction x = y - 2 y = 5 x = 3
* Multiplication x = y * 2 y = 5 x = 10
/ Division x = y / 2 y = 5 x = 2.5
% Modulo x = y % 2 y = 5 x = 1
++ Pré-Incrémentation x = ++y y = 6 x = 6
++ Post-Incrémentation x = y++ y = 6 x = 5
-- Pré-Décrémentation x = --y y = 4 x = 4
-- Post-Décrémentation x = y-- y = 4 x = 5
2. LES OPERATEURS D **’** AFFECTATION : SOIENT X = 10 ET Y = 5

```
Opérateur Exemple Identique à X
= x = y x = y x = 5
+= x += y x = x + y x = 15
```
- = x -= y x = x - y x = 5
*= x *= y x = x * y x = 50
/= x /= y x = x / y x = 2
%= x %= y x = x % y x = 0
3. LES OPERATEURS RELATIONNELS :

```
JavaScript Description
```

4. LES OPERATEURS LOGIQUES :

```
V. ENTREES / SORTIES EN JAVASCRIPT
```
→ **_L’opération d’entrée_** : On peut utiliser soit :

```
la méthode prompt() de l’objet window ,
à l’aide d’objets graphiques du formulaire HTML.
```
→ **_L’opération de sortie_** : on peut utiliser soit :

```
les méthodes alert ou confirm de l’objet window.
les méthode write ou innerHTML de l’objet document.
à l’aide d’objets graphiques du formulaire HTML.
```
**_les entrées / sorites à l’aide des objets graphiques des formulaires seront traitées
ultérieurement. (Les formulaires JavaScript)_**

```
VI. STRUCTURES DE CONTROLE :
```
```
Structure Exemple Description/Note
if (condition)
{ instructions1 }
else {
instructions2
}
```
```
if (Moy >= 10 ) { alert("Succès");
} else {
alert("Echec");
}
```
```
Les parenthèses sont obligatoires.
Les accolades sont facultatives si le
traitement comporte une seule
instruction.
```
```
while (condition) {
instructions
}
```
```
var i = x = 0 ;
while (i<10) {
i++;
x += i;
}
```
```
Permet de calculer la somme des
entiers de 1 à 10.
```
```
do{ instructions }
while (condition);
```
```
do {
N = prompt("N: ")
} while (N <= 0 );
```
```
Permet de saisir un entier
strictement positif
```
```
for ([initialisation]; [condition]; [expression_finale]){ insructions }
```
```
== égalité
> supérieur
>= Supérieur ou égale
< Inferieur
<= inferieur ou égale
!= différent
```
```
JavaScript Description
&& Et Logique
|| Ou logique
! NON logique
```

```
initialisation
Une expression (pouvant être une expression d'affectation) ou une déclaration de variable. On
utilise généralement une variable qui agit comme un compteur. Cette expression peut
éventuellement déclarer de nouvelles variables avec le mot-clé var ou let.
condition
Une expression qui est évaluée avant chaque itération de la boucle. Si cette expression est
vérifiée, les instructions sont exécutées.
expression finale
Une expression qui est évaluée à la fin de chaque itération. Cela se produit avant l'évaluation de
l'expression condition. Cette expression est généralement utilisée pour mettre à jour ou
incrémenter le compteur.
```
```
var f = 1 ; // Un script qui calcule la factorielle de 10
for (var i = 1 ; i <= 10 ; i++) { f *= i; }
switch (expression) {
case val1:
instructions1
[break;]
case val2:
instructions2
[break;]
... default:
val_par_defaut
}
```
```
switch (val){
case 1 : case 2 : alert("1 ou 2");
break;
case 3 : case 4 : alert("3 ou 4");
break;
default : alert("Valeur par défaut"); }
```
```
VII. FONCTIONS EN JAVASCRIPT
```
```
function nom_fonction(arguments)
{ Instructions;
return nom_variable ; }
Arguments : représentent les paramètres en entrée pour la fonction : les paramètres ne sont pas
obligateurs mais les parenthèses oui.
Return nom_vaiable : permet de retourner le résultat de la fonction vers l’objet appelant.
```
- La définition de la fonction est faite dans la partie entête alors que son appel est fait dans la
    partie corps.
- En JavaScript, il existe deux types de fonctions :
    1. Les fonctions prédéfinies en JavaScript
    **2.** Les fonctions définies par le programmeur selon les besoins de l’application.

**VIII. GESTION DES EVENEMENTS EN JAVASCRIPT**

```
Evénement Description
```
CLICK (^) Lorsque l'utilisateur clique sur un bouton, un lien ou tout autre élément.
FOCUS Lorsqu’un élément du formulaire a le focus c à d devient la zone d'entrée active.
CHANGE Lorsque la valeur d'un champ de formulaire est modifiée.
BLUR (^) Se produit lorsque l'élément perd le focus, c'est-à-dire que l'utilisateur clique hors
de cet élément, celui-ci n'est alors plus sélectionné comme étant l'élément actif.


```
LOAD Se produit lorsque le navigateur de l'utilisateur charge la page en cours
UNLOAD Se produit lorsque le navigateur de l'utilisateur quitte la page en cours
SUBMIT Se produit lorsque l'utilisateur clique sur le bouton de soumission d'un formulaire
(le bouton qui permet d'envoyer le formulaire)
```
**IX. Les fonctions globales prédéfinies du JavaScript :**

**1. L’objet NUMBER**

```
Fonction Param Rôle Exemples
```
Number() - (^) Convertie le paramètre en un nombre Number("10");
_//retourne 10_
String() - Convertie le paramètre en une chaîne String( 50 ); _//retoune
"50"_
isNaN() -
Vérifie si le paramètre n'est pas un
nombre.
isNaN essaie de convertir le paramètre
fourni en un nombre. Si cette conversion
n'est pas possible, la fonction renvoie
true.
Dans les autres cas, elle renvoie false.
isNaN("Ali"); _// renvoie
true_ isNaN(" -12.2e+3
"); _//false!_ isNaN( 12 ); _//
renvoie false_ isNaN("");
_// renvoie false!_
isNaN(" "); _// renvoie
false!_ isNaN(null); _//
renvoie false!_
parseInt() Chaîne
Analyse la chaîne et renvoie un entier.
Si le premier caractère ne peut pas être
convertie en un entier, elle renvoie
NaN. Les caractères d'espacement au
début et à la fin de la chaîne sont
ignorés. Seule la première partie qui
peut être convertie sera retournée.
parseInt("10") _// 10_
parseInt(" 10 ") _//
10_ parseInt("10 25")
_// 10_ parseInt("4 SI")
_//retourne 4_
parseInt("Bac 2021") _//
NaN_
parseFloat() Chaîne Analyse la chaîne et renvoie un réel.
parseFloat("10.25")
_//10.25_ parseFloat("Bac
2021") _// NaN_


**2. Les méthodes & les propriétés de l’objet « window » :**

```
Méthodes Rôle Exemples
```
```
alert()
```
```
Affiche un dialogue d'alerte contenant le
texte spécifié. alert("Bac SI");^
prompt() Pour la saisie d'une entrée textuelle. nom = prompt("Votre nom:");
confirm() Renvoie un booléen ok = confirm("Quitter la
page?");
```
**3. Les méthodes & les propriétés de l’objet « String » :**

```
Méthodes Rôle Exemples
```
ch.length
_(Propriété)_
Retourne la longueur de **ch**

```
var ch = "4SI"; var x =
ch.length; //x=3 var y =
"4SI-Bac2021".length;
//y=11
```
ch.indexOf(ch2)
[ _ch.lastIndexOf(ch2)_ ]

```
Retourne la première
[ dernière ] position de ch2
dans ch si elle existe, ou - 1
dans le cas contraire.
```
```
var ch = "Javascript" ; var
p1 = ch.indexOf('a');
//p1=1 var p2 =
ch.lastIndexOf('a'); //p2=3
var p3 =
'4SI'.indexOf("@"); //p3= - 1
```
ch.substr(p, n)

```
Renvoie une sous-chaîne de
n caractères à partir de p. Si
n est omis, substr renvoie
le reste des caractères
jusqu'à la fin de ch.
```
```
ch = "Bac2021";
sch1 =
ch.substr( 0 , 3 ); //sch1="Bac"
sch2 =
ch.substr( 3 ); //sch2="2021"
```
ch.substring(a, b)

```
Renvoie la sous-chaîne entre
les indices a et b , b exclu. Si b
est omis, substring
effectuera l'extraction des
caractères jusqu'à la fin de la
chaîne.
```
```
ch = "Bac2021";
sch1 =
ch.substring( 3 , 5 ); //sch1="20"
sch2 =
ch.substring( 3 ); //sch2="2021"
```
ch.toLowerCase()
Convertie une chaîne en
minuscule

```
ch = "Bac".toLowerCase()
//ch="bac"
```
ch.toUpperCase()

```
Convertie une chaîne en
majuscule
```
```
ch = "Bac".toUpperCase()
//ch="BAC"
```
ch.replace(sch, nouv_sch)

```
Renvoie une copie de ch en
remplaçant la première
occurrence de sch par
nouv_sch.
```
```
ch =
"Baccalauréat".replace("a",
"A") // ch = "BAccalauréat"
```

ch.split(sep)

```
La méthode split permet de
diviser une chaîne de
caractères à partir d'un
séparateur pour fournir un
tableau de sous-chaînes.
(Utiliser join pour joindre
les éléments d'un tableau
dans une chaîne)
```
```
var ch = "14 Janvier
2011" var T =
ch.split(" ")
// T = ["14", "Janvier",
"2011"]
```
```
Ch2 = T.join("*")
// ch2 = "14*Janvier*2011"]
```
```
X. Autres instructions
window.status='message' ; ➔ Ecrire un message dans la barre d’état du navigateur
window.close(); ➔ Fermer la page Web
```
```
XI. FORMULAIRE EN JAVASCRIPT
```
**1. Zone de texte, Mot de passe, Zone de saisie :**
    <form name="f1">
    Nom Prénom:<input type="text"name="nom" id="nom">

```
→ Pour lire le contenu d'un champ de texte nom on écrit, par exemple :
var Nom = document.f1.nom.value;
//Ou bien
let Nom=document.getElementById("nom").value ;
alert("votre Nom est:"+Nom);
```
```
→ Pour affecter une valeur à un champ de texte nom on écrit, par exemple :
document.f1.nom.value= "Ali";
//Ou bien
document.getElementById("nom").value="Ali" ;
```
```
→ Pour mettre le curseur dans la zone de texte :
```
```
document.f1.nom.focus();
//Ou bien
document.getElementById("nom").focus() ;
```
**2. Boutons Radio**
<form name="f1">
<label>Civilité:</label>
<input type="radio" name="R" id="C"
value="Celibataire"><label>Célibataire</label>
<input type="radio" name="R" id="M" value="marie"><label>Marié(e)</label>

```
Nom & Prénom :
```

→ **_Pour tester si un bouton radio est coché ou non utiliser la propriété :_** _checked_
if (document.f1.R[ 0 ].checked) {alert('Bouton radio 1 coché.');}
else alert('Bouton radio 2 coché.');

//Ou bien
_let_ liste= document.getElementsByName("R");

if(liste[ 0 ].checked){alert('Bouton radio 1 coché.');}
else alert('Bouton radio 2 coché.');

→ **_Pour déterminer le nombre de boutons radios ayant un même nom utiliser la propriété :_** _length
var_ nbr= document.f1.R.length;
alert("le nombre des boutons est"+nbr)
//Ou bien
_let_ liste= document.getElementsByName("R");
alert("le nombre des boutons est"+liste.length)

→ **_Pour déterminer la valeur d'un bouton radio utiliser la propriété :_** _value_
alert(document.f1.R[ 0 ].value); // renvoie la valeur associée au premier bouton
radio
//Ou bien
_let_ liste= document.getElementsByName("R") ;
alert(liste[ 0 ].value) ;

**3. Cases à cocher**
4. <form name="f1">
5. <label>Votre langue préférée:</label>
6. <input type="checkbox"name="A" id="A"
    value="arabe"><label>Arabe</label>
7. <input type="checkbox"name="F"
    id="F"value="francais"><label>Français</label>
8. <input type="checkbox"name="An" id="An"
    value="anglais"><label>Anglais</label>
9. <input type="checkbox"name="E" id="E"
    value="espanol"><label>Espagnol</label>
10. <input type="button" value="ok" onclick="affichage()">

→ **_Pour tester si une case à cocher est cochée utiliser la propriété :_** _checked_

if (document.f1.A.checked) {
alert("L'Arabe est la langue du Coran.");
}
//Ou bien
if(document.getElementById("A").checked ){
alert("L'Arabe est la langue du Coran.");

```
Civilité : Célibataire Marié(e)
```
```
Votre langue préférée : Arabe Français Anglais Espagnol
```

}

→ **_Pour déterminer la valeur associée à une case à cocher utiliser la propriété :_** _value_
if (document.f1.A.checked) {
alert("votre langue est: "+document.f1.A.value);
}
//Ou bien
if(document.getElementById("A").checked ){
alert("Votre langue est:"+document.getElementById("A").value);

}

**Liste de Choix :**

<form name="f1">
<label>Votre Classe:</label>
<select name="Cl" id="Cl">
<option value="4SI">4éme Sciences de l'Informatique </option>
<option value="4Tec">4éme Technique </option>
</select>

→ **_Pour déterminer l'indice de l'élément sélectionné utiliser :_** _selectedIndex (0 pour le 1èr et -1 pour
aucun)_

alert("Vous avez sélectionné l'option num : "+document.f1.Cl.selectedIndex);
// Ou bien :
alert("Vous avez sélectionné l'option num : "+document.getElementById("Cl").selectedIndex);

→ **_Pour déterminer la valeur ou le texte associés à un élément d'une liste de choix utiliser :_** _value et
text_

_var_ valeur = document.f1.Cl.options[index].value; // index : indice de
l'élément
//Ou bien
_let_ valeur= document.getElementById("Cl").options[index].value

//Pour déterminer le texte d'une option dans une liste de choix utiliser :
text
_var_ txt = document.f5.cl.options[index].text; // index : indice de l'élément
//Ou bien
_let_ txt= document.getElementById("Cl").options[index].text

→ **_Pour ajouter un élément à la fin de la liste :_**

```
Votre classe :
4ème Sciences de l'Informatique
```

Taille = document.f1.Cl.options.length;
VariableAux = new _Option_ ('4 SCientifique','4Sc') ;
document.f1.Cl.options[Taille]=VariableAux ;
//Ou bien
liste= document.getElementById("Cl") ;
liste.options[liste.length]= new _Option_ ('4 SCientifique','4Sc') ;

→ **_Pour supprimer un élément N° i de la liste :_**

document.f1.Cl.options[indice]= null ;
//Ou bien
document. getElementById("Cl").options[indice]= null ;


Javascript (serie1)

Exercice :1
a)Afficher un message de bien venu 4 SI avec alert()
b)Ecrire dans une page html en utilisant document.write le même message de bienvenu

Exercice :2
Modifier le contenu d’un paragraphe en affichant un message de bienvenu

Exercice :3
a)Afficher la somme de deux entier en utilisant prompt dans la console
b)afficher la somme via une alert
c)afficher la somme dans une paragraphe

Exercice 4: (if et else)
créer une page html et un programme javascript (fonction absolue) qui permet de calculer la valeur absolue
d’un entier saisie (prompt) et afficher le résultat en utilisant une alert.

Exercice 5 : Manipulation de quelques méthodes prédéfinies isNaN,Number,toString,indexOf
Saisir une valeur au clavier et afficher « conversion impossible » si elle n’est pas numérique,si non,afficher
cette valeur augmenté de 1 et dire si c’est un entier ou réel.Enregistrer la page sous le nom conversion.html.

Rappel :


Javascript (serie1)correction

Exercice 4 (if else valeur absolu)

Javascript :abs.js

Exercice5 :html

```
Javascript :ex3s4.js
```

Serie2 (javascript)

Exercice 1 :
Ecrire un script javscript qui permet de résoudre l’équation de premier degré ax+b=0 dans l’ensemble des reels
distinguer les différents cas a et b sont deux données.

Exercice 2 :( for et if else)

Exercice 3 :

Créer un formulaire et Ecrire un script qui permet de calculer le factoriel d’un nombre saisie dans une zone de
texte et l’afficher.
Rappel :
var f = 1 ; _// Un script qui calcule la factorielle de 10_

for (var i = 1 ; i <= 10 ; i++) { f *= i; }

b)ajouter un contrôle de saisie pour n’accepter que les valeurs positif (do while)
rappel:


```
Correction serie 2
Exercice 1 :
Exercice : 2
```
```
Function equation()
{
```
```
function ex 2 ()
{
```
Exercice : 3


b)function factoriel()

{


Serie 3 (javascript)
Exercice1 : (switch)

Exercice 2 :
a)Ecrire un script qui permet de n’accepter que des messages composés uniquement de lettres majuscules.

Exercice 3
On se propose de créer un site web permettant de traiter deux problèmes sur les nombres entiers à savoir la

somme des diviseurs et les nombres amis.

```
a. Créer la page Somme_div.Html qui comporte le formulaire suivant :
```
b. Créer la page Amis.Html qui comporte le formulaire suivant :


```
➢ Modifier le code pour que l’affichage du résultat soit dans un paragraphe.
```
Exercice 4 :
Le sujet consiste à développer un site Web contenant un formulaire permettant à un élève de répondre à un test
pour évaluer ses connaissances en algorithmique.

1. Créer une page web intitulée **Exam.html** contenant le formulaire suivant :
2. L’élève répond au test puis valide en cliquant sur le bouton **Envoyer**. L’appui sur le bouton **Envoye** r
    fait appel à une fonction JavaScript intitulée **calculer()** qui permet de vérifier les champs CIN, Nom et
    Prénom (CIN doit être composé de 8chiffres, Nom et Prénom doivent être non vide) ensuite de
    calculer et d’afficher la note obtenue par l’élève.

```
Syntaxe Rôle
........................................................................................ récupérer le contenu d’une zone de
texte
........................................................................................ affecter une valeur à une zone de
texte
```

```
Syntaxe Rôle
```
**.......................................................................................**. Retourne l’état d’un élément de la

```
liste (sélectionné ou non)
```
**.......................................................................................**. Rétourne la valeur de l’élément

```
sélectionné
```
**.......................................................................................**. Retourne l’indice de l’élément

```
sélectionné
```
**.......................................................................................**. Retourne le nombre d’éléments de
la liste


Exercice 5 :

Le clic sur le bouton "Valider" fait appel à une fonction JavaScript intitulée "verif" permettant de

s’assurer de la validité des champs du formulaire tout en respectant les contrôles ci-dessous :

```
Champ Contrôle
```
```
N° Permis
```
```
Une chaîne de 8 caractères respectant le format suivant :
xx/xxxxx (où chaque x représente un chiffre).
Modèle testé La sélection d’un modèle est obligatoire.
Sécurité Un entier entre 1 et 5.
Conduite Un entier entre 1 et 5.
Confort Un entier entre 1 et 5.
Je ne suis pas un robot La sélection de la case à cocher est obligatoire.
```
```
Syntaxe Rôle
........................................................................................ Retourne l’état d’une case à cocher
(cochée ou non)
........................................................................................ Rétourne la valeur d’une case à
cocher
```
Exercice

```
Syntaxe Rôle
```
**.......................................................................................**. (^) Retourne l’état d’un bouton radio
(coché ou non)
**.......................................................................................**. Retourne la valeur d’un bouton radio


Créer la page " **enregistrement.html** " permettant d’ajouter un testeur à la base

de données via le formulaire suivant :

Sachant que le clic sur le bouton " **Ajouter** " fait appel à une fonction JavaScript intitulée " **verif 1** "

permettant de s’assurer de la validité des champs du formulaire tout en respectant les contrôles suivants

:

```
Champ Contrôle
```
```
N° Permis
Une chaîne de 8 caractères respectant le format suivant : xx/xxxxx
(où chaque x représente un chiffre).
Nom Une chaîne alphabétique ayant une longueur comprise entre 3 et 20.
Prénom Une chaîne alphabétique ayant une longueur comprise entre 3 et 20.
Genre La sélection d’un genre est obligatoire.
```
Exercice

Développer une fonction Javascript Espaces(ch) permettant de retourner une chaine qui résulte de l’application

des traitements ci-dessous sur la chaine ch saisie dans une zone de texte et passée en paramètre :

- Supprimer les espaces de début et de fin,
- Supprimer les espaces superflus afin de garder un seul espace entre deux mots consécutifs,
- Remplacer la première lettre de chaque mot par son équivalent majuscule.

Enregistrer votre page sous le nom espaces.html


Correction serie 3

Exercice 1
function ex1()
{

Exercice2

```
a)
```
Exercice 3 :

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................


...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

Exercice 4 :

...............................................................

...............................................................................

..............................................................................

................................................................................


...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................


Exercice 5 :...... .................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................


...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................

..............................................................................

...............................................................................

..............................................................................

................................................................................

...............................................................................


###### Serie 4

**Date (javascript)**

**C’est quoi La gestion du temps?** 

Il s'agit en fait, en Javascript, du nombre de millisecondes écoulées depuis le 1er janvier 1970 à minuit. Cette manière
d'enregistrer la date est très fortement inspirée du système d'horodatage utilisé par les systèmes Unix.

La seule différence entre le système **Unix** et le système **du Javascript** , c'est que ce dernier stocke le nombre de
millisecondes, tandis que le premier stocke le nombre de secondes. Dans les deux cas, ce nombre s'appelle un
**timestamp**. 

Ce nombre ne nous sert vraiment qu'à peu de choses à nous, développeurs, car nous allons utiliser l'objet Date qui va
s'occuper de faire tous les calculs nécessaires pour obtenir la date ou l'heure à partir de n'importe quel timestamp

##### L'objet Date?

Les méthodes et les propriétés de l’objet date :

L'objet Date nous fournit un grand nombre de méthodes pour lire ou écrire une date.  Le constructeur : Commençons
par le constructeur! Ce dernier prend en paramètre de nombreux arguments et s'utilise de différentes manières. Voici
les quatre manières de l'utiliser :

```
̈Pour créer un nouvel objet de type Date
Exemples :
```
```
const t = new Date ( 2023 , 04 , 04 , 18 , 18 , 54 , 0 );
//aa,mm,jj,h,m,s,ms alert (t);
```

Les méthodes de l'objet Date: Étant donné que l'objet Date ne possède aucune propriété standard, nous allons
directement nous intéresser à ses méthodes qui sont très nombreuses

Exemples :

```
Méthodes Rôle Exemples
```
getDate( ) (^) Renvoie le numéro du jour du
mois (1- 31)
var n = t. getDate( ); //n=4
getDay( )
Renvoie le numéro du jour de la
semaine sachant que zero
correspond au dimanche et six au
samedi.
var n1 = t. getDay( ); _//n1=4_
getFu11Year( ) (^) Renvoie l’année (4 chiffres) var^ y^ =^ t^.^ getFullYear(^ );^
_//y=2023_
getHours( ) (^) Renvoie l’heure courante (0-23) var _//h=18_^ h^ =^ t^.^ getHours^ ();^
getMînutes () Renvoie le^ nombre^ de^ minutes^ de^
l’heure
courante. (0-59)
var m=t.getMinutes () ;
_//m=18_
getMonth( ) Renvoie^ le^ numéro du^ mois
courant sachant
que 0 correspond à jan et 11 à déc.
var mo=t.getMonth();
_//mo=4_
getSeconds () Renvoie le nombre de secondes
de l’heure courante. (0-59)
var s=t.getSeconds ()
/ _/s=54_
toLoca1eDateStrîng( ) Renvoie une^ chaîne^ qui^ contient^ la^
partie date en utilisant les
conventions locales.
var lo= t. **toLoca1eDateString** ();
_//lo=“4/4/2023 “_
toLocaleTimeString( ) Renvoie une chaîne qui
contient l’heure locale.
n = t.toLocaleTimeString()
_//n—-"18: 18:54“_


##### Exercice 1 :

a)créer un script pour afficher la date d’aujourd’hui dans une paragraphe comme indiqué dans la figure.

**Exercice 2** :Créer une horloge numérique

Exercice3



Serie 4 javascript ‘date) correction

Exercice 1 :date

Créer un fichier html qui permet d’afficher la date du jour avec un code en JavaScript au chargement de
la page dans une paragraphe sous le format " JJ /MM/AAAA " (utilisez l’évènement onload)

Exemple :

```
<html lang="fr">
```
(^) <head>
(^) <meta charset="UTF-8">
(^) <meta http-equiv="X-UA-Compatible" content="IE=edge">
(^) <meta name="viewport" content="width=device-width, initial-scale=1.0">
(^) <title>Document</title>
(^) <script lang="javascript" src="date auj.js">
(^) </script>
(^) </head>
(^) <body onload="dateauj()">
(^) <p id="resultat" >bonjour</p>
(^) </body>
(^) </html>
date auj.js
function dateauj()
{ dt=new Date();
dj="bonjour nous sommes le "+dt.getDate()+"/"
+(dt.getMonth()+1)+"/"+dt.getFullYear();
document.getElementById('resultat').innerHTML=dj;
}
**Exercice 2** :Créer une horloge numérique
<html>
<head>
<script type="text/javascript">
function refresh(){


var t = 1000; // rafraîchissement en millisecondes

setTimeout('showDate()',t)

}

function showDate() {

var date = new Date()

var h = date.getHours();

var m = date.getMinutes();

var s = date.getSeconds();

if( h < 10 ){ h = '0' + h; }

if( m < 10 ){ m = '0' + m; }

if( s < 10 ){ s = '0' + s; }

var time = h + ':' + m + ':' + s

document.getElementById('horloge').innerHTML = time;

refresh();

}

</script>

</head>

<body onload=showDate();>

<span id='horloge' style="background-color:#1C1C1C;color:silver;font-size:40px;"></span>

</body>

</html>

**Exercice 3 :**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**


**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**


**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**................................................................................................................................................**

**..................................................................**


```
Serie 5
Chaine de caractères
```
Activité 1 : chaine de caractères

Activité2:
ch.replace (ch1, ch2) recherche dans la
chaine ch la première occurrence de ch1 et
la remplace par ch2 et renvoie une nouvelle
chaine. Pour remplacer toutes les
occurrences : ch.replace(/ch1/g,"ch2") ;

```
ch="good very good";
ch1=ch.replace(“good”,”lucky”) ;
ch2=ch.replace(/good/g,"lucky");
```
Exercice 1: substring
Créer une page qui affiche une zone de saisie pour saisir une date sous forme
jj/mm/aaaa
puis de Calculer l **’Age à partir de cette date.**

Exercice 2 :onkeyup,onkeypress,substr,checked(bouton radio),fonction avec paramètre
Créer la page suivante contenant un formulaire


```
Exécution :
```
1 - permetant de changer le lettres saisie dans la zone du nom en majuscule.
2 - de colorer la zone de mot de passe mdp en rouge lors du saisie du mot de passe.
3 - de générer un nom d’utilisteur composé
a-des deux première lettres du nom en majuscule,les deux premières lettres du prénom,la
longueur du mot de passe mdp+le genre(m ou f)
et de l’aficher via une alert.

Exercice 4 :(charAt() et boucle for (){} ou do while(){})
Saisir un texte au clavier et afficher s’il est composé de lettre alphabétique entièrement (des minuscules ou des
majuscules) pour cela créer une fonction alpha() grace à laquelle on saisie ce text et on affiche via des alert s’il
est valide ou non.
Exemple :

(^)
Exercice 5 :Créer ce formulaire :utilisation de la boucle for et indexof(verification d’un formulaire)
Saisir le formulaire suivant et effectuer les vérifications suivantes :

- Le pseudo doit être alphabétique ainsi que l’email.
- Le mot de passe doit contenir au moins une lettre
    majuscule et des valeurs numériques
- L’email doit être de la forme ch1@ch2.ch3
    (ch3 comporte au maximum 3 caractère
- Tester si l’utilisateur à choisi le genre (masculin ou
    féminin)


**Exercice: conjugaison d’un verbe(s** ubstr,length)
a)Créer une page html contenant un formulaire puis écrire un programme javascript qui permet conjuguer un
verbe du premier groupe qui sera saisie dans une zone de texte
au présent de l'indicatif,en cliquant sur le bouton conjuguer.

**Fonctions de l’objet String**
Méthode Description
Chaine.length Retourne le nombre de caractères de la chaine
Chaine.substr(position1, longueur) La méthode retourne une sous-chaîne commençant à l'index dont la
position est donnée en argument et de la longueur donnée en
paramètre.


Serie 5 (corrigé)
Exercice 1 : correction :

Exercice 2 :
Correction :
Html :

javascript :form.js

Question : Modifier le code pourque la zone de mot de passe se colorise en rouge si la longueur est
inférieur à 6.Sinon en vert.

```
Exercice 4 :html
```

Javascript :ex4v1s4.js

Exercice 5 :


Exercice :conjugaison
Correction:


**Application**

Créer un dossier « TP02 »dans lequel vous enregistrer :
 La page « TpJs.html »contenant les formulaires ci-dessous
 Le fichier « Controle.js » qui doit contenir toutes les fonctions _JavaScript_
 le fichier « Style.css » qui contient les mises en forme nécessaires
La page « TpJs.html » contient les formulaires suivant :

Le clic sur le bouton envoyer fait appel à la fonction JavaScript verif1() qui permet
d’effectuer les contrôle de saisie suivant


Le clic sur le bouton _calculer_ fait appel à la fonction **_calculer()_** qui permet de calculer le
net à payer selon le tableau suivant :


Le clic sur le bouton _calculer_ fait appel à la fonction **_Imc()_** qui permet de calculer l’indice
de masse corporelle et afficher l’interprétation correspondante dans la zone résultat
**IMC = Poids / Taille²**
Interprétation :

- Moins de 18.5 : Maigreur
- Entre 18.5 et 25 : Normal
- Entre 25 et 30 : Obèse
- Supérieur à30 :Obésité sévère
    Le fichier « style.css » contient les mises en formes suivantes

Le fichier « contrôle.Js » contient les fonctions JavaScripts suivantes :
function **verif1** ()
{
ps=document. **getElementById** ('pseudo').value;
if ( (ps.length< 5 ) || ps.length> 10 )
{
**alert** ('pseudo invalide')
return false;
}
em=document. **getElementById** ('adr1').value;
if(em==''){
**alert** ('Remplir le champ Email!');
return false;
}
pw1=document. **getElementById** ('pwd1').value;
let chiffre=true;
let maj=true;
let min=true;
for(let i= 0 ;i<pw1.length;i++){
if( (pw1. **charAt** (i) >=' 0 ') && (pw1. **charAt** (i)<=' 9 ')) {
chiffre=false;

```
........................................
..............................................
.............................................
.........................
```

}
else
{
if( (pw1. **charAt** (i) >='A') && (pw1. **charAt** (i)<='Z' ) ) {
maj=false;
}
else{
if( (pw1. **charAt** (i) >='a') && (pw1. **charAt** (i)<='z' ) ){
min=false;
}
}
}
}
if (chiffre){
**alert** ('le mot de passe doit contenir au moins un chiffre');
return false;
}
if(maj){
**alert** ('le mot de passe doit contenir au moins une lettre majuscule');
return false;
}
if(min){
**alert** ('le mot de passe doit contenir au moins une lettre miniscule');
return false;
}
pw2=document. **getElementById** ('pwd2').value;
if(pw1!=pw2){
**alert** ('mot de passe différents');
return false;
}
}

function **calculer** (){
var net = 0 ;
var s=document. **getElementById** ('sport').value;
if(s=="Gymnastique"){if(document. **getElementById** ('en').checked){
if(document. **getElementById** ('m1').checked){ net= 40 ; }
else{ net= 100 ; }
}
if(document. **getElementById** ('ad').checked){
if(document. **getElementById** ('m1').checked){ net= 50 ; }
else{ net= 140 ; }
}
else{
if(document. **getElementById** ('en').checked){
if(document. **getElementById** ('m1').checked){ net= 30 ; }
else{ net= 80 ; }
}
if(document. **getElementById** ('ad').checked){


if(document. **getElementById** ('m1').checked){ net= 40 ; }
else{ net= 100 ; }
}
}
}
document. **getElementById** ('prix').value=net;
}
function **imc** (){
var p=document. **getElementById** ('poids').value;
var t=document. **getElementById** ('taille').value;
var i= p/(t*t);
**alert** (i);
let res="";
if(i<18.5){
res="Maigreur";
}
else{
if(i< 25 ){
res="Normal";
}
else{
if(i< 30 ){ res="Obèse"; }
else
{
res="Obésité sevère";
}
}
}
document. **getElementById** ('res').innerHTML=res;
}


Exemples de vérification en Javascript
Soit le formulaire suivant
<form _name_ ="f" _action_ ="..." _onsubmit_ ="return **verif** ()">
Veuillez saisir une valeur <br>
<input _type_ ="text" _name_ ="T1" _id_ ="T1" > <br>
<br>
choisir une couleur <br>
<input _type_ ="radio" _name_ ="c" _id_ ="c1" _value_ ="red">
Rouge <br>
<input _type_ ="radio" _name_ ="c" _id_ ="c2" _value_ ="green">
Vert <br>
<input _type_ ="radio" _name_ ="c" _id_ ="c3"
_value_ ="yellow"> Jaune <br>
<br>
Choisir un billet<br>
<input _type_ ="radio" _name_ ="b" _id_ ="b1" _value_ =" 10 "> 10
dinars <br>
<input _type_ ="radio" _name_ ="b" _id_ ="b2" _value_ =" 20 "> 20
dinars <br>
<br>
Choisir vos centres d'intérêt<br>
<input _type_ ="checkbox" _name_ ="mu" _id_ ="mu"
_value_ ="Musique"> Musique <br>
<input _type_ ="checkbox" _name_ ="th" _id_ ="th"
_value_ ="Théatre"> Théatre <br>
<input _type_ ="checkbox" _name_ ="des" _id_ ="des"
_value_ ="Dessin"> Dessin <br>
<br>
Choisir une matière<br>
<select _name_ ="matiere" _id_ ="mat">
<option _value_ =""></option>
<option _value_ ="m">Math</option>
<option _value_ ="ph">Physique</option>
<option _value_ ="an">Anglais</option>
</select> <br>
<br>
<input _type_ ="submit" _value_ ="Valider">
</form>
<script>
function **verif** () {
_// A terminer les vérifications
// ....._
return true;
}
</script>


_// La zone texte « T1 » ne doit
pas être vide_
ch =
document. **getElementById** ('T1').valu
e
if (ch =="") {
**alert** ("le champ ne doit pas être
vide");
return false
}

```
// La zone texte « T1 » doit contenir 3 caractères
ch = document. getElementById ('T1').value
if (ch.length != 3 ) {
alert ("le champ doit contenir 3 caractères ");
return false
}
```
_// La zone texte « T1 » doit
contenir au moins 3 caractères_
ch =
document. **getElementById** ('T1').valu
e
if ( ch.length< 3 ) {
**alert** ("le champ doit contenir au
moins 3 caractères ");
return false
}

```
// La zone texte « T1 » doit être numérique
ch = document. getElementById ('T1').value
if ( isNaN (ch)==true) {
alert ("le champ doit être numériques");
return false
}
```
_// La zone texte « T1 » doit
contenir exactement 8 chiffres_
ch =
document. **getElementById** ('T1').valu
e
if ( !( ch.length== 8 &&
**isNaN** (ch)==false ) ) {
**alert** ("le champ doit contenir 8
chiffres")
return false
}

```
// La zone texte « T1 » doit être numérique et >=0
ch = document. getElementById ('T1').value
if ( !( isNaN (ch)==false && Number (ch)> 0 ) ) {
alert ("le champ doit être numériques supérieur à 0");
return false
}
```
_// La zone texte « T1 » doit être
formée que par des lettres_
alphabétiques
ch =
document. **getElementById** ('T1').valu
e
for(i= 0 ; i < ch.length ;i++) {
if (
!(
ch. **charAt** (i). **toUpperCase** () >= "A"
&&
ch. **charAt** (i). **toUpperCase** () <= "Z"
)
)

```
// La zone texte « T1 » doit être formée que par des
lettres
alphabétiques ou espace
ch = document. getElementById ('T1').value
for(i= 0 ; i < ch.length ;i++) {
if (
!(
ch. charAt (i). toUpperCase () >= "A" &&
ch. charAt (i). toUpperCase () <= "Z"
|| ch. charAt (i) == " "
)
)
{
alert ("le champ doit contenir des lettres "+
```

{
**alert** ("le champ doit être
alphabétiques");
return false
}
}

```
" alphabétiques ou espace ");
return false
}
}
```
_// La zone texte « T1 » doit
contenir le caractère @_
ch =
document. **getElementById** ('T1').valu
e

if (ch. **indexOf** ("@")== - 1 ) {
**alert** ("le champ doit contenir le
caractère @");
return false
}

Traitement sur le premier caractère de la zone texte « T1 » :
_// Le_ **_premier_** _caractère de la zone
texte « //T1 » doit être une_
// _lettre_ **majuscule** **_(A .. Z)_**
ch =
document. **getElementById** ('T1').valu
e
if ((ch. **charAt** ( 0 ) <"A")
||(ch. **charAt** ( 0 ) >"Z") ) {
**alert** ("Le premier caractère doit
être une lettre majuscule")
return false
}

```
// Le premier caractère de la zone texte «
//T1 » doit être une lettre
//minuscule (a..z)
ch = document. getElementById ('T1').value
if ((ch. charAt ( 0 ) <"a") || (ch. charAt ( 0 ) >"z") ) {
alert ("Le premier caractère doit être une lettre
minuscule");
return false
}
```
_// Le premier caractère de la zone
texte « T1 » doit être « + » ou «_

_- »_
ch =
document. **getElementById** ('T1').valu
e if (!( ch. **charAt** ( 0 ) == "+" ||
ch. **charAt** ( 0 ) == "-" ) ) {
**alert** ("Le premier caractère doit
être A ou B "); return false }

```
// Le premier caractère de la zone texte « T1 » doit
être un chiffre
ch = document. getElementById ('T1').value
if ( isNaN (ch. charAt ( 0 ) )==true) {
alert ("Le premier caractère doit être un chiffre");
return false
}
```

_// Le premier caractère de la zone
texte « T1 » doit être une lettre
voyelle_
ch =
document. **getElementById** ('T1').valu
e
premier_carac = ch. **charAt** ( 0 ).
**toUpperCase** ( )
voyelles = "AEIOUY";
if ( voyelles. **indexOf** (
premier_carac ) == - 1 ) {
**alert** ("Le premier caractère doit
être une voyelle");
return false;
}

```
// Le premier caractère de la zone texte « T1 » doit
être une lettre alphabétique
ch = document. getElementById ('T1').value
if (
!(
ch. charAt ( 0 ). toUpperCase () >= "A" &&
ch. charAt ( 0 ). toUpperCase () <= "Z"
)
)
{
alert ("le premier caractère doit être
alphabétiques");
return false
}
```
_// Couleur obligatoire_
c1 = document. **getElementById** ('c1')
c2 = document. **getElementById** ('c2')
c3 = document. **getElementById** ('c3')
if (
c1.checked == false &&
c2.checked == false &&
c3.checked == false
) {
**alert** ("Il faut choisir une
couleur")
return false
}

```
// Afficher la valeur de la couleur choisie
c1 = document. getElementById ('c1')
c2 = document. getElementById ('c2')
c3 = document. getElementById ('c3')
if ( c1.checked){
alert ("la valeur de la couleur choisie est
"+c1.value)
}
if ( c2.checked){
alert ("la valeur de la couleur choisie est
"+c2.value)
}
if ( c3.checked){
alert ("la valeur de la couleur choisie est
"+c3.value)
}
```
_// Cocher au moins un centre
d'intéret_
mu = document. **getElementById** ('mu')
th = document. **getElementById** ('th')
des =
document. **getElementById** ('des')
if (
mu.checked == false &&

```
// Afficher la liste des valeurs des centres d'intérêt
cochés
```
```
mu = document. getElementById ('mu')
th = document. getElementById ('th')
des = document. getElementById ('des')
msg = ''
if ( mu.checked){
```

th.checked == false &&
des.checked == false
) {
**alert** ("Il faut choisir un centre
d'interet")
return false
}

```
msg = msg + mu.value + " "
}
if ( th.checked){
msg = msg + th.value + " "
}
if ( des.checked){
msg = msg + des.value + " "
}
if(msg != ""){
alert ("les valeurs des centres d'intérêt cochés sont
: " + msg)
}
else{
alert ("Aucun centre d'intérêt coché")
}
```
**Soit l’id de la liste est matière**
_// matière obligatoire_
liste =
document. **getElementById** ('matiere')
if(liste.options.selectedIndex== 0 )
{
**alert** ("la matière est
obligatoire");
return false
}
Ou bien
liste =
document. **getElementById** ('matiere')
if(liste.value==''){
**alert** ("la matière est
obligatoire");
return false
}

```
/Afficher une matière
liste = document. getElementById ('matiere')
indice_selection = liste.options.selectedIndex
if (indice_selection == 0 ){
alert ("il faut seletionner une matière");
}
else{
alert (
"la matière selectionner est " +
liste.options[indice_selection].text +
". Sa valeur est "+
liste.options[indice_selection].value +
". Son indice est "+indice_selection
) ;
}
```

GESTION DES DONNEES : LES BASES

# DE DONNEES RELATIONNELLES

**I. Introduction à la gestion des données :**

**1. Notion de donnée et d’information :**

**a. Définition :**
Les textes d'un traitement de texte, les chiffres d'un tableur, des noms, prénoms et des adresses, etc
constituent des **_données_**.
Une donnée est un élément fondamental pour effectuer une recherche, une étude ou un raisonnement.
**_L’ensemble de données_** , rattaché à un contexte et éventuellement transformé donne naissance à une
**_information_**.

**b. Eléments Constituant une information :**

Les données sont généralement regroupées par entité. Une entité est un ensemble d’attributs.

**2. La Persistance :**

La façon de mémoriser une donnée à une influence sur la rapidité de la retrouver lorsqu’on a besoin
d’elle.cette capacité de mémoriser et de pouvoir retrouver une donnée est appelé : **persistance.
Persistance=mémorisation+disponibilité**
Une donnée persistante est celle qui est mémorisée sur un support quelconque et disponible

La persistance des données peut être donc assurée grâce aux organisations suivantes :

```
a. Organisation papier : si la gestion des données n’est pas informatisée.
b. Organisation en fichiers : si la gestion des données est informatisée.
```
**c. Organisation Papier :**

Les données sont stockées sur supports papiers, tels que des fiches, des registres, des cahiers...etc pour

assurer **la persistance**.

Cette organisation présente plusieurs **_inconvénients_** :

- Le classement se fait sous une seule référence
- La consultation nécessite un certain délai


- Les contraintes de volume et de taille

```
L’organisation des données en papier consiste à utiliser différents supports papiers pour assurer la
persistance. Ces supports peuvent être des fiches, des registres, des cahiers, etc. Cette
organisation peut conduire à plusieurs problèmes parmi lesquels :
```
- Classement : un document ne peut être classé que sous une seule référence,
    limitant ainsi les possibilités de recherche.
- Consultation : le document est difficile d’accès, le délai de mise à disposition peut
    atteindre plusieurs jours ; en outre, pendant sa consultation par une personne, le
    document n’est plus disponible à d’autres personnes.
- Contraintes : de volume et de taille des documents.
- Délai : de recherche et de restitution mais aussi de conservation.
- Fiabilité du classement et du reclassement en cas d’utilisation d’une archive.
- Sécurité : destruction ou détérioration (volontaire ou non), vol.
- Qualité de la restitution : elle peut être médiocre (photocopie, fax...)
-

**d. Organisation Fichier :**

```
L’organisation des données en fichiers consiste à utiliser des supports
informatiques pour assurer la persistance. Ces supports peuvent être des disques
durs, des disquettes, des CD, des flashs disques, etc.
```
```
Un fichier (en anglais: file) est un ensemble de données structurées mémorisées sur un support de
stockage permanent.
Cette organisation en fichiers possède les inconvénients suivants :
```
- Lourdeur d’accès aux données. En pratique, pour chaque accès, même le plus simples, il faudrait
    écrire un programme.
- Manque de sécurité. Si tout programmeur peut accéder directement aux fichiers, il est impossible de
    garantir la sécurité et l’intégrité des données de ce fichier.
- Redondance de données. Etant donné que les fichiers sont généralement conçus par des équipes
    différentes, il y a un risque qu’un même ensemble de données figurent dans deux ou plusieurs fichiers
    : c’est la redondance. En plus du gaspillage de l’espace disque, il y a un risque d’incohérence dans
    le cas où la mise à jour n’a pas touché la totalité des copies.

```
Il faut alors structurer les données sous une forme qui ne
présente pas ces insuffisances.
```

**II. Bases données :**

**1. Définition :**

Une base de données (BD) est un ensemble de données structuré relatif à un ou plusieurs domaines du
monde réel.
**Exemple 1 :**
Une Base de Données « **Étudiants** » regroupe **toutes les données** concernant les étudiants (num_cin,
nom, prénom, adresse, modules auxquels est inscrit l’étudiant, notes, etc.) et servira à toutes les
applications.

Exemple 2 : Une base de données « **Bibliothèque** » regroupe les données concernant les ouvrages, les
adhérents qui empruntent les ouvrages, etc. De plus, il y a **des règles de fonctionnement** comme :

- Un adhérent ne peut emprunter en même temps plus de 5 ouvrages.
- La durée maximale d’emprunt est limitée à 10 jour

```
Lexique :
Français Anglais Arabe Synonymes
Base de données Data base قاعـدة بـيـانــات^ BD
```
```
Dans une architecture client/serveur, une base de données est considérée comme une ressource
partagée par un ensemble d’applications situées sur les postes clients. La machine qui gère cette
base de données est appelée « Serveur de données» ou bien « Serveur » tout simplement.
```
**2. Intérêts de l’utilisation des bases de données :**

a. Centralisation :


```
Les données peuvent être utilisées par plusieurs programmes et plusieurs
utilisateurs.
b. Indépendance entre données et programmes :
Dans une BD les données sont décrites indépendamment des programmes. ce qui
n'est pas le cas avec les fichiers.
c. Intégration des liaisons entre les données.
Ces relations font partie de la BD et non des programmes.Pas besoin d’un programme
pour retrouver les liens entre les données.
d. Intégrité des données
Ce sont des règles assurant la cohérence des données : (unicité,référence et valeur)
```
- Unicité des enregistrements.
- Interdiction de la suppression des données utilisées par d'autres utilisateurs.
e. Partage des données (concurrence d’accès) :
différents utilisateurs accède en même temps aux mêmes données (Accès multiple
simultané)
**3. Les Modèles des bases de données :**

Les modèles des BD se distinguent par la façon selon laquelle les liens entre les données sont représentés
on trouve :

```
➔ Le modèle Hiérarchique
➔ Le modèle Réseau
➔ Le modèle Relationnel
```
```
➔ Le modèle orienté objet
```

**4. Définition d’un SGBD**

```
Le logiciel qui permet d'interagir avec une base de données s'appelle un système de gestion
de base de données (S.G.B.D).
Un SGBD est constitué de deux composantes principales : un moteur et une interface. Le
moteur qui constitue la composante principale d’un SGBD et l’interface qui permet un accès
facile aux données.
```
```
a. Les fonctions d’un SGBD
```
```
Un SGBD doit permettre de:
▪ Décrire les données qui seront stockées,
▪ Manipuler ces données (ajouter, modifier, supprimer des informations),
```
```
▪ Obtenir des renseignements à partir de ces données (sélectionner, trier, calculer, etc.),
▪ Définir des contraintes d'intégrité sur les données (contraintes de domaines, d'existence,
▪ Définir des protections d'accès (mots de passe, autorisations, etc.),
▪ Résoudre les problèmes d'accès multiples aux données (blocages, interblocages),
▪ Prévoir des procédures de reprise en cas d'incident (sauvegardes, journaux, etc.).
```
```
b. Les principaux SGBD :
```
```
c. Types d’utilisateurs d’une BD :
```

- L’administrateur
- Le programmeur d’application
- L’utilisateur final

**III. Structure d’une BD relationnelle :**

**1. Notion de table**

**Définition**
Une **_table_** est un ensemble de données relatives à une même **_entité_** , structurée sous forme d’un tableau

( **_liste_** ). une table est composée horizontalement d’un ensemble de **lignes** et verticalement d’un ensemble

de **colonnes** : les colonnes décrivent les propriétés relatives au sujet représenté par la table et les lignes

correspondent aux occurrences du sujet.
Une table peut être appelée aussi une " **_Entité_** " ou " **_Relation_** ".

**Exemple :**

La table Article regroupe les données relatives aux articles commercialisés dans un magasin. Chaque
article est décrit par :

- **Code article** : C’est un code attribué de façon unique à chaque article.
- **Désignation article** : C’est le nom courant de l’article.
- **Prix unitaire** : C’est le prix de vente de l’article.
- **Quantité stock** : C’est la quantité actuellement disponible pour un article.

A un moment donné, la table Article peut être représentée comme suit :

```
Code article Désignation article Prix unitaire Quantité en stock
V10 Vis 50x3 40 2500
V20 Vis 20x2 20 1300
B100 Boulon 90x15 450 100
C60 Crau 60x2 5 5000
```
**Exemple 2** : Cas d’une bibliothèque

```
LIVRES PRETS
```
```
Code
livre
```
```
Titre Auteur Année Nbre
page
```
```
Numéro
prêt
```
```
Date Durée Code
abonné
```
```
Code
livre
```

```
Remarques :
```
- Les données d’une table peuvent être stockées sur un ou plusieurs fichiers.
- Une table peut être considérée comme un ensemble mathématique. Ainsi on pourra faire
    l’union ou l’intersection de deux tables
**2. Notion de colonne :**

```
Définition
```
```
Une colonne ( champ ) représente une propriété élémentaire de l’entité décrite par cette table.
Caractéristiques d’un champ :
```
- **Un nom :** C’est le nom de la colonne. Il est sous forme de code et il est généralement soumis aux mêmes
    règles de nommage des variables dans les langages de programmation.
- **Un type de données :** C’est le type de données prises par cette colonne. Les types de données les plus
    connus sont : numérique, chaîne de caractères (ou texte), date et booléen.
- **Une taille éventuelle :** Pour certains types de données tel que le type numérique ou chaînes de
    caractères, la taille indique la longueur maximale que peut prendre la colonne.
- **Un indicateur de présence obligatoire :** indique si cette colonne doit être toujours renseignée ou peut

```
être vide dans certains cas. Lorsque la colonne n’est pas renseignée, on dit qu’elle contient une valeur
nulle. Il est à noter que la valeur nulle est différente de zéro pour les colonnes de type numérique et de la
chaîne vide pour les chaînes de caractères.
```
- **Une valeur par défaut éventuelle :** Permet d’attribuer une valeur par défaut lorsqu’aucune valeur n’a
    été attribuée à cette colonne.
- **Une règle éventuelle indiquant les valeurs autorisées :** Dans certains cas, une colonne peut être

```
soumise à certaines règles tel que : les valeurs attribuées à cette colonne doivent être inférieures à une
certaine valeur, supérieures à une certaine valeur ou bien comprises entre deux valeurs.
```
```
Exemple :
```
- Nous avons vu dans l’exemple précédent que la table Article regroupe les quatre colonnes suivantes :

```
code article, désignation article, prix unitaire et quantité en stock.
```
```
Nous allons décrire de façon détaillée chacune de ces colonnes à travers le tableau suivant :
```

```
Nom de la table : Article
Description : Détail des articles commercialisés
```
```
Nom colonne Description
Type de
données
```
```
Taille Obligatoire Val
eur
par
déf
aut
```
```
Valeur
s
autoris
ées
```
```
Code_art Code de l’article Chaîne de
caractères
```
```
20 Oui
```
```
Des_art Désignation de
l’article
```
```
Chaîne de
caractères
```
```
50 Oui
```
```
PU Prix unitaire de
l’article
```
```
Numérique 8,3 Non > 0
```
```
Qte_stock Quantité en stock Numérique 4 Non 0 >= 0
```
**3. Notion de ligne**

**Définition :**

Une **_ligne_** ( **_enregistrement, n_uplet_** ) représente une **_occurrence_** du sujet représenté par la table

**Exemple**

```
Code livre Titre Auteur Année Nbre-page
```
```
........
```
```
L1005 Base de données Dan Brown 2004 224
```
**4. Notion de clé primaire**

```
Définition :
```
La **_clé primaire_** d’une table **est une colonne** ( champ ) **ou un ensemble de colonnes** (champs) qui
permet d’identifier d’une manière **_unique_** chaque enregistrement de la table. De ce fait, elle doit être
**_unique_** et **_non nul._** Autrement dit, la connaissance de la valeur de la clé primaire, permet de connaître
**sans aucune ambiguïté les valeurs des autres colonnes de la table.**

```
Lexique :
Français Anglais Arabe Synonymes
Clé primaire Primary key مـفـتـاح أسـاسي^ Identifiant
```
**Remarque** :Chaque table doit comporter une et une seule clé primaire. Pour distinguer une colonne qui
fait partie de la clé primaire des autres colonnes, on la **souligne,**

**5. Liens entre les tables**

```
a)Les tables d’une BD sont en relation par des liens ( association ).
Exemple : pour la BD commande_article, on a :
```

- Un article article peut être commandé plusieurs fois
- Une commande concerne un et un seul article
**Définition :**
➔ Un **_lien_** entre 2 tables **A** et **B** se traduit par l’ajout dans la table B d’un nouveau champ
correspondant à la clé primaire de la table A. ce champ est appelé **_clé étrangère_**
➔ Dans ce cas A est **_une table mère_** et B est une **_table fille_**
**Exemple :**

```
Nous avons ajouté au niveau de la table commande la clé primaire de la table Articles
La table article est la table mère et la table commande est la table fille.
Remarques !!!:
```
- **Il est fortement recommandé que le nom de la colonne qui est une clé étrangère soit identique** au
    nom de la colonne clé primaire à laquelle elle se réfère**.**
- **Pour distinguer une colonne qui fait partie d’une clé étrangère des autres colonnes, on la fait suivre**
    **d’un dièse (#).**
       - **Lexique :**
          **Français Anglais Arabe Synonymes**

```
Clé étrangère Foreign key مـفـتـاح خارجي
```
```
Référence, contrainte
d’intégrité référentielle
```
```
Retenons :
```

**6. Notion de contrainte d’intégrité :**

```
Définition :
Une contrainte d’intégrité est une règle appliquée à une colonne ( champ )ou à une table et qui
```
```
doit être toujours vérifiée.
➔ Les contraintes de domaine : ce sont des contraintes appliquées à des colonnes (valide si)
Exemple une moyenne n’est valide que si elle est comprise entre 0 et 20
➔ Les contraintes d’intégrité de tables : permettent d’assurer que chaque table a une clé
primaire
```
**Exemple :** La table Élève doit avoir une clé primaire, le numéro de carte d’identité par exemple.

```
➔ Les contraintes d’intégrité référentielle :
Permettent de s’assurer que les valeurs introduites dans une colonne figurent
dans une autre colonne en tant que clé primaire
La suppression d’un enregistrement d’une table mère A utilisé par une table B
fille est interdit
Lexique :
Français Anglais Arabe Synonymes
Contrainte
d’intégrité
```
```
Integrity
constraint
```
```
قــيــد
```
```
Exemple : On n’accepte pas le Code article saisi dans une Commande qui n’existe pas dans la
colonne Code article de la table Article.
```

**7. Représentation de la structure d’une BD**

```
La représentation des différentes structures d’une BD est appelée schéma ou modèle.
Cette représentation peut être effectuée selon deux formalismes :
➔ La représentation textuelle
La représentation textuelle consiste à décrire les tables, les colonnes et les liens entre les tables en
utilisant du texte.
```
Soient les deux tables A et B composées des attributs a1, a2, a3 et a4 pour la première et b1, b2

et b3 pour la deuxième et dont les clés primaires respectives sont a1 et b1. En supposant que B

se réfère à A, la représentation textuelle de ces deux tables se fait de la façon suivante :

**A** (a1, a2, a3, a4)

**B** (b1, b2, b3, a1#)
**Exemple :
Livre** ( **_Code livre_** , Titre, Auteur, Année, Nbre de page)

```
Prêts ( Numéro prêt, Date, Durée, Code-abonné, Code livre # )
➔ La représentation graphique
La représentation graphique consiste à décrire les tables, les colonnes et les liens entre les tables en
utilisant des symboles graphiques.
```
```
Exemple :Les deux tables décrites ci-dessus seront représentées comme suit :
```
Les clés primaires sont représentées en **gras** et les clés étrangères à l’aide d’un lien entre les deux tables :
le symbole ( **∞** ) est placé du côté de la **clé étrangère** et le symbole ( **1** ) du côté de la **clé primaire
référencée.
La relation** entre les deux tables est dite de type « **un à plusieurs** » car à une ligne de A peut correspondre
plusieurs lignes de B alors qu’à une ligne de B ne peut correspondre qu’une seule ligne de A.

**b)** **_Différents types de relations (les cardinalités):_**

Soit deux tables A et B. On distingue trois types de relations :

 **_Relation un- a- un (1-1):_**

```
Table A
champ1
...
```
```
Table B
Champ1
```

```
Chaque enregistrement de la table A ne peut correspondre qu’a un enregistrement de la table B et
inversement.
```
```
Exemples :
Un directeur dirige un seul club
Un club est dérigé par un seul directeur
```
```
 Relation un- à- plusieurs (1-N):
Dans ce type chaque enregistrement de la table contenant la clé primaire peut être associé à plusieurs
enregistrements de la deuxième table, mais chaque enregistrement de la deuxième table n’est associé qu’à
un seul enregistrement de la première table.
```
Exemples :

Un club lui adèrent un ou plusieurs abonnés

Un abonné est adére à un seul club

```
▪ Club(Numéro, Libellé,Adresse)
▪ Abonné(CIN, Nom,Prénom, Numéro )
```
```
Établir les conditions préalables:
```
- Il existe une clé primaire unique dans la table du côté 1.
- Le champ commun dans la table associée (côté plusieurs ) est de **même type** et de **même taille**
que **la clé primaire**.
    - **Une clé étrangère est un champ externe par rapport à la table en cours, importé d’une autre table.**
    - une **clé primaire** est la donnée qui permet d'identifier de manière unique un enregistrement dans une table.
       Une clé primaire peut être composée d'une ou de plusieurs colonnes de la table

```
Exemple:
```
```
▪ Champ1_A de la table A est un clé primaire
▪ Champ1_A de la table B est appelé clé étrangère
▪
```
(^1 1)
Table A
Champ1_A
Champ2_A
Champ3_A
...
Table B
Champ1_B
Champ2_B
Champ3_B
...
1
**∞**
Table A
Champ1_A
Champ2_A
Champ3_A
Table B
Champ1_B
Champ2_B
Champ1_A
Dans une relation 1-1 les deux champs Liés sont deux
clés primaires.
(^1 1)
Directeur
CIN
Prénom
Nom
...
Club
Numéro
Libellé
Adresse
1
**∞**
Club
Numéro
Libellé
Adresse
Abonné
CIN
Nom
Prénom
Numéro
Exemple: gestion d'un groupe de club
Une personne possède une seul CIN
Une CIN est possédé par une seul personne
Une personne possède plusieurs voitures
Une voiture est possédé par une seul personne
.......................................
...........


 Relation plusieurs- à -plusieurs (N-M):
Plusieurs enregistrements de la table A peut être mis en correspondance avec plusieurs enregistrements
de
la table B et inversement. Cette relation est traduire en Access par deux relations **_1 - N_**

**_Activité_** **:** Déterminer les relations entre les tables de la BD Gestion de notes et indiquer leurs cardinalités.

C Comment identifier une relation :

Pour savoir le type de relation entre deux tables, il faut poser la question suivante pour les deux tables :

```
Pour 1 enregistrement de cette table, combien peut-on avoir de correspondance dans
l’autre table?
```
```
On ne peut définir ce type qu’après définition d'une troisième table A_B (table de jonction ) dont la clé
primaire est formée de deux clés des tables A et B.
→ Dans une relation N-M on trouve deux relations 1-N avec une troisième table.
Ajouter une table supplémentaire, contenant uniquement les champs associés, pour servir de
jointure entre les deux tables.
```
**IV. Création et modification de la structure de base de**

**données relationnelle :**

```
Introduction :
```
Il existe deux modes pour créer une base de données :

```
➔ Mode assisté
```
```
➔ Mode commande
```
**1. Mode assisté :**
    Le **_mode assisté_** permet de créer les éléments de la base de données à l’aide des **_assistants_**

```
graphiques.
```
```
L’assistant graphique est une interface composée d’une suite de fenêtres où chacune
```
```
représente une étape du processus de création.
```

```
Le mode assisté est un moyen qui facilite la création des éléments d’une base de données.
```
**Création de la base de données**

```
1 2
```

**2. Mode Commande :**

```
Dans le mode commande, on utilise le langage SQL ( Structured Query Language ) est un langage pour
les bases de données relationnelles permet la :
✓ Définition de données ( LDD )
Ce sont des commandes qui permettent de créer, modifier et supprimer les différentes structures de la
BD.
✓ Manipulation de données ( LMD )
Ce sont des commandes qui permettent de manipuler le contenu de la BD, c’est à dire d’insérer, de
modifier, de consulter ou de supprimer des lignes dans les tables de la BD. ...
```
```
✓ Contrôle de données ( LCD )
Ce sont des commandes qui permettent de contrôler l’utilisation de la BD (un sous-ensemble
de SQL pour contrôler l'accès aux données d'une base de données.).
```
```
A. Langage de définition de données : LDD
```
```
Il permet de créer, modifier et supprimer des bases de données relationnelle, des tables, les associations,
et les contraintes.
```
```
➔ Création de la base de données :
```
```
CREATE DATABASE "Nom_de_la_bd" ;
```
```
➔ La création de tables :
```
```
Le langage de définition de données ( LDD ) permet de créer des tables grâce au mot clé CREATE TABLE.
CREATE TABLE nom_table
(définition_ colonne | définition_ contrainte, ... )
```
```
Remarques :
```
1. Le nom du table doit être unique dans la BD.
2. Une table doit contenir au mois une colonne.

➢ La clause « définition_colonne » **permet de préciser les caractéristiques d’une colonne. Elle a la syntaxe**
suivante :


```
Nom_colonne TYPE [[NOT] NULL] [DEFAULT valeur] [contrainte_colonne]
```
```
Les Principaux types sont :
```
```
INT (n) Numérique à n chiffres
DECIMAL (n, m) Numérique à n chiffres dont m décimales
VARCHAR(n) Chaîne de caractères de longueur variable dont la taille maximale est n
DATE Date et/ou heure
```
```
L’option NULL veut dire que la colonne n’est pas obligatoire.
L’option NOT NULL veut dire que la colonne est obligatoire.
L’option DEFAULT permet d’attribuer une valeur par défaut à cette colonne lorsque aucune valeur ne lui a été
affectée.
Cette option ne peut pas être indiqué lorsque la colonne est obligatoire (NOT NULL).
L’option « contrainte_colonne » permet de préciser une contrainte d’intégrité relative à la colonne. Cette
contrainte peut être une contrainte de clé primaire, de clé étrangère ou de valeurs.
La syntaxe correspondante est la suivante :
CONSTRAINT contrainte]
{ PRIMARY KEY} (colonne1, colonne2, ...)
| FOREIGN KEY (colonne1, colonne2, ...)
REFERENCES nom_table [(colonne1, colonne2, ... )]
[ON DELETE CASCADE]
| CHECK (condition)}
```
```
CONSTRAINT est un mot optionnel et sert à attribuer un nom à la contrainte. Le paramètre contraint
sert en tant qu’identificateur.
PRIMARY KEY spécifie que la colonne est utilisée comme clé primaire.
FOREIGN KEY définit une contrainte d’intégrité référentielle relative à plusieurs colonnes.
REFERENCES définit une contrainte d’intégrité référentielle. Le nom de la table précisé après le mot-
clé REFERENCES est celui de la table mère. Le nom de la colonne est celui de la colonne vers laquelle
on se réfère et il ne doit être précisé que lorsqu’il est différent du nom de la colonne courante.
ON DELETE CASCADE est une option qui permet de maintenir l'intégrité référentielle en supprimant
automatiquement les valeurs d'une clé étrangère dépendant d'une valeur d'une clé primaire si cette
dernière est supprimée.
CHECK est un mot clé associé à une condition qui doit être vérifiée pour chaque valeur insérée.
```
➢ La clause « définition_contrainte » de la commande CREATE TABLE permet de définir une contrainte
d’intégrité au niveau de la table. Elle doit être utilisée lorsque la contrainte ne s’applique pas à une
seule colonne. Elle a la syntaxe suivante :
**_[_**

```
CREATE TABLE Nom_table (définition_colonne|définition_contraintes,...)
```
```
✓ Définition_colonne :
```
```
Nomcolonne Type_donnée [contrainte][CONSTRAINT contrainte],...);
```
```
✓ Contraintes d’intégrité :
Les contraintes d’intégrité doivent être exprimées dès la création de la table grâce aux mots clés suivants:
```

```
Clause Rôle
```
```
DEFAULT valeur Valeur par défaut
```
```
PRIMARY KEY Indiquer la clé primaire
```
```
NULL La valeur de la colonne n’est pas obligatoire
```
```
NOT NULL La valeur de la colonne est obligatoire
```
```
CHECK (condition) Faire un test sur un champ
```
```
UNIQUE Vérifier que la valeur saisie pour un champ ne se répète pas
```
```
REFERENCES
table(colone_referée)
```
```
Indique la clé étrangère.
```
```
Exemple de création de table avec contraintes :
```
```
CREATE TABLE clients(
CIN INT(8) PRIMARY KEY,
Nom varchar(30) NOT NULL,
```
```
Prenom varchar(30) CONSTRAINT nl_pre NOT NULL,
Age int(2) check (age < 100),
Email varchar(50) NOT NULL check (Email LIKE "%@%"),
Adr int(3) UNIQUE REFERENCES Adresse(code_adr)
) ;
Application :
```
❖ Exemple 1:
Représentation textuelle :

```
Equipe (code_equ, Nom_equ, date_cre) ;
Joueur (Num_j, Nom_j, Prénom_j, date_j, code_equ#)
Arbitre (Num_arb, Nom_arb, Prénom_arb)
Match (Num_match, date_match, heure_match, res_match, Num_arb#)
Participe (Num_j#, Num_match#)
```
Ecrire les commandes nécessaires pour créer ces tables.
➢ Création de la table Equipe :
Create Table Equipe
(code_equ Varchar(10) primary Key,
Nom_equ Varchar(20) Not null,
Date_cre Date Not null) ;
➢ Création de la table Joueur :
Create Table joueur
( Num_ j Varchar (5) ,


Nom_ j Varchar(20) Not null,
Prénom_ j Varchar(20) Not null,
Date_ j Date Not null,
Code_equ Varchar(10) references Equipe [on delete cascade]) ;
On ajoute on delete cascade pour maintenir l’intégrité référentiel en supprimant automatiquement les valeurs
d’une table qui en relation avec d’autre table.
➢ Création de la table Arbitre :
Create Table Arbitre
( Num_arb Varchar (5) Primary Key,
Nom_arb Varchar(30) Not null,
Prénom_arb Varchar(30) Not null ) ;
➢ Création de la table **M** atch :

Create Table Match
( Num_match Int(2) Primary Key,
Date_match Date Not null,
Heure_match Date Not null,
Res_match Varchar (5) Not null,
Num_arb Varchar (5) references Arbitre [on delete cascade]) ;
➢ Création de la table Participe :
Create Table Participe
( Num_ j Varchar (5) references joueur [on delete cascade] ,
Num_match Int(2)references match [on delete cascade] ,
Primary Key (Num_ j, Num_match));
❖ Exemple 2:
Représentation textuelle :
Article (Code_art, des_art, PU, qte_stock)
Client (Code_cli, nom_cli, adr_cli, tel_cli)
Commande (Num_comm, date_comm, code_cli#)
Detail_commande (Num_ligne, num_comm#, code_art#, qte_comm)

➢ Création de la table Article :
Create Table Article
(code-art Varchar(10) Primary Key,
Des-art Varchar(50) Not Null,
PU Decimal(8,3) ,
Qte-Stock int(5) Default 0 check (Qte-Stock >=0)) ;

➢ Création de la table Client :
Create Table client
(Code-cl Varchar(10) Primary Key,
Nom-cl Varchar(30) Not Null,
Adr-cl Varchar(50) Not Null,
Tel-cl int(10)) ;
➢ Création de la table Commande :
Create Table Commande
(Num-cmd Varchar(20) Primary Key,
Date-cmd Date Not Null,
Code-cl Varchar(10) Références Client)) ;


➢ Création de la table Détail Commande :
(Num-cmd Varchar(20) Références Commande,
Num-ligne int (4),
Code-art Varchar(10) Références article,
Qte-cmd int(5) check (Qte-cmd >0),
Primary Key(Num-cmd, Num-ligne)) ;

```
✓ Nommer une contrainte :
```
```
Il est possible de donner un nom à une contrainte grâce au mot clé CONSTRAINT suivi du nom que l'on
donne à la contrainte.
```

Définition_contraintes :
**_Syntaxe :
[CONSTRAINT contrainte]_**

**_{PRYMARY KEY (colonne1, colonne2,...)_**

**_|FOREIGN KEY (colonne1, colonne2,...)_**

**_REFERENCES nom_table[(colonne1,colonne2,...)]_**

**_[ON DELETE CASCADE]_**

**_|CHECK (condition)}_**

_Exemple :_

**_CREATE TABLE clients(_**

```
CIN INT(8),
Nom varchar(30) NOT NULL,
Prenom varchar(30) CONSTRAINT nl_pre NOT NULL,
Age int(2) check (age < 100),
Email varchar(50) NOT NULL, check (Email LIKE "%@%"),
Adr int(3) UNIQUE,
CONSTRAINT PK_cin PRIMARY KEY (cin)
FOREIGN KEY (Adr) REFERENCES Adresse (code_adr)
) ;
✓ Modification de la structure d’une base de données :
```
```
▪ Modifier la structure d'une table :
```
C’est grâce à la close **ALTER TABLE** qu’on peut modifier la structure d’une table.

**_Syntaxe :_**

**_ALTER TABLE Nom_table_**

```
[DROP CONSTRAINT Nom_contrainte]
[ADD CONSTRAINT définition_contrainte]
[DROP COLUMN Nom_colonne]
[ADD COLUMN (définition_colonne)]
[MODIFY (définition_colonne)]
[ENABLE|DISABLE nom_contrainte]
```
L’option ADD COLUMN permet de rajouter des nouvelles colonnes à la table. La clause «
définition_colonne » a la même syntaxe que celle utilisée dans la commande CREATE TABLE.


**_Exemple_** _:_

**_ALTER TABLE clients MODIFY Age DATE ;_**

Question n°1 :
Ecrire la commande qui permet d’ajouter la colonne « E_mail » (de 70 caractères) à la table Joueur.
ALTER TABLE Joueur
ADD COLUMN (e_mail VARCHAR(7 **0** )) ;

L’option ADD CONSTRAINT permet de rajouter une nouvelle contrainte à la table. La clause «
définition_contrainte » a la même syntaxe que celle utilisée dans la commande CREATE TABLE.

Question n°2 :
Supposons que la table Joueur a été créée sans clé primaire. Ecrire la commande qui permet de
préciser cette clé primaire.
**ALTER TABLE Joueur
ADD CONSTRAINT Primary Key (Num_j);**
L’option MODIFY permet la modification de certaines caractéristiques d’une colonne existante. La
clause « définition_colonne » a la même syntaxe que celle utilisée dans la commande CREATE
TABLE.
Question n°3 :
Supposons qu’on souhaite élargir la taille de la colonne « E_mail »(taille 1 0 0) de la table Joueur.
ALTER TABLE Joueur

MODIFY e_mail VARCHAR(100);

L’option DROP COLUMN permet de supprimer une colonne de la table.

Supposons qu’on souhaite supprimer la colonne « e_mail » de la table Joueur.
ALTER TABLE Joueur

DROP COLUMN e_mail ;

L’option DROP CONSTRAINT permet de supprimer une contrainte d’intégrité de la table.

Question n°5 :
Supposons qu’on ne souhaite plus assurer l’identification des Joueur par le Num_j. Ecrire la
commande qui permet de supprimer la clé primaire de la table Joueur.
**ALTER TABLE Joueur
DROP CONSTRAINT PRIMARY KEY ;**

L’option DISABLE permet de désactiver une contrainte d’intégrité. Lorsqu’une contrainte est
désactivée, le SGBD ne va plus effectuer le contrôle imposé par cette contrainte.
Question n°6 :
Désactiver la clé primaire de la table Joueur.
ALTER TABLE Joueur

DISABLE CONSTRAINT PRIMARY KEY ;


Remarque : Lorsque cette clé primaire est référencée dans une ou plusieurs autres tables, il faut
supprimer les clés étrangères dans les tables qui s’y réfèrent avant de procéder à la suppression de
la clé primaire.
L’option ENABLE permet de réactiver une contrainte d’intégrité. Lorsqu’une contrainte est réactivée,
le SGBD va de nouveau effectuer le contrôle imposé par cette contrainte.
Question n°7 :
Réactiver la clé primaire de la table Joueur.
**ALTER TABLE Joueur
ENABLE CONSTRAINT PRIMARY KEY ;**

```
▪ La suppression d'une table :
```
Elle se fait en suivant la syntaxe suivante : **DROP** _Nom_table_ ;

**_Exemple_** _:_

**_DROP clients ;_**

Question n°8 :
Ecrire la commande qui permet de SUPPRIMER la table Joueur.
**DROP TABLE Joueur;**

```
B. Langage de manipulation de données : LMD
```
Il permet de sélectionner, insérer, modifier ou supprimer des données dans une table d'une base de
données relationnelle.

```
1 - Mise à jour des données
a. Insertion de lignes
Permet d’ajouter de nouvelles lignes dans une table dont la structure est déjà créée dans la
base
INSERT INTO nom_table [ liste_nom_colonnes]
VALUES (liste des valeurs )
```
Remarques :
Pour que l’opération d’insertion puisse être exécutée, les conditions suivantes doivent être
respectées :

- Les types des données de liste_valeur doivent être compatibles avec ceux des colonnes de
    la table,
- L’ordre des valeurs est celui des colonnes
- La liste des noms des colonnes est facultative dans le cas où toutes les colonnes de la table
    sont concernées par l’opération d’ajout
- Unicité des lignes (contrainte de clé primaire),


- Caractère obligatoire associé à une colonne (clause NOT NULL),
- Existence de la valeur dans une autre table quand il s’agit d’une clé étrangère (contrainte
    d'intégrité référentielle) : nécessité de respecter un certain ordre lors de l’insertion des
    lignes
- Vérification d’une condition de validité (contrainte valeur : clause CHECK).

```
b. La modification de lignes
Permet de modifier des valeurs de colonnes d’une table
UPDATE nom_table
SET nomcolonne1= Expression1[, nomcolonne2=Expression2....]
[WHERE condition]
Remarque :
```
- Toutes les lignes vérifiant la condition seront mises à jour
- Les nouvelles expressions peuvent utiliser les anciennes valeurs de la ligne à mettre à jour,
    le résultat de la nouvelle expression remplace l’ancienne valeur de la colonne
- Si la clause WHERE est absente, toutes les lignes de la table seront mises à jour
**c. Suppression de lignes**
    Permet de supprimer une ou plusieurs lignes existantes à partir d’une table
       DELETE FROM nom_table
       [WHERE condition]
Remarque :
- Toutes les lignes vérifiant la condition sont supprimées
- Si la clause WHERE **est absente** , toutes les lignes de la table **seront effacées**
- La suppression d’une ligne peut entraîner la suppression d’autres lignes dans d’autres
tables **si la contrainte ON DELETE CASCADE est définie au moment de la création
2 - Recherche de données : Requêtes**
Une requête est une opération de recherche de données à partir d’une ou plusieurs tables.
Cette recherche peut concerner :
- Certaines colonnes d’une table : Projection
- Certaines lignes d’une table : Sélection
- Deux tables en relation : jointure

```
Une requête peut être réalisée en combinant ces trois actions.
a. Requêtes de projection
Cette requête ne concerne qu’une seule table de la BD, elle doit comporter au moins une colonne
de la table, et toutes les lignes de cette colonne seront affichées au résultat.
```

SELECT [DISTINCT] * / liste_nom_colonnes
FROM nom_table
Remarque :

- La liste_nom_colonnes précise les colonnes à afficher au résultat, elle peut être remplacée

```
par *
pour tout afficher.
```
- **DISTINCT** permet d’éliminer les lignes en double dans le résultat.
- Le résultat de la commande **SELECT** est une nouvelle table résultat.
- Par défaut, les colonnes de la table résultat portent les mêmes noms que ceux de la table
    de départ
- On peut utiliser des **ALIAS** , pour modifier les noms des colonnes de la table résultat
**b. Requêtes de Sélection**
Cette requête permet d’afficher les lignes qui vérifient une condition.
SELECT [DISTINCT] * / liste_nom_colonnes
FROM nom_table
WHERE condition
Remarque :
- Le paramètre condition précise le critère qui doit être vérifié par les lignes à afficher
- La condition est une expression logique, qui peut utiliser :
▪ Les opérateurs de comparaison et logiques
▪ L’opérateur BETWEEN pour les intervalles de valeurs
▪ IN pour la liste de valeurs
▪ IS NULL / IS NOT NULL
▪ LIKE pour filtrer une chaîne de caractères
**c. Requêtes Jointure**

```
C’est une recherche à partir de plusieurs tables
SELECT [DISTINCT] * / liste_nom_colonnes
FROM nom_table1 [Alias1], nom_table2 [Alias2]...
WHERE condition
Remarque:
```
- La condition de jointure doit porter sur les **colonnes en communs** aux tables (clé
    primaire-clé étrangère) qui ne doit pas être confondue **avec la condition critère de**
    **sélection.**
- Pour alléger l’écriture de la commande SELECT, un **Alias** peut être utilisé. Il permet de
    donner un nom abrégé à une table.


**d. Recherche de données avec Tri**

```
SELECT [DISTINCT] * / liste_nom_colonnes
FROM nom_table1 [Alias1], nom_table2 [Alias2]...
[WHERE condition ]
ORDER BY nom_colonne1 [ASC / DESC] [, nom_colonne2 [ASC/ DESC]....]
```
```
Remarque:
```
- ORDER BY réalise le tri
- ASC /DESC ordre croissant / décroissant
- Le tri peut être associé à n’importe quelle opération de recherche (projection, sélection et
    jointure)

**e. Utilisation des fonctions de calcul (agrégat)**

```
Le langage SQL offre certaines fonctions standards de calcul appelées fonctions agrégat.
Ces fonctions permettent de faire un certain calcul sur les lignes recherchées.
Ces fonctions sont :
```
- **COUNT :** permet de compter le nombre de lignes du résultat obtenu par la commande
    SELECT
- **SUM :** permet de faire la somme des valeurs d’une colonne dont le type est numérique
- **MIN :** détermine la valeur minimale d’une colonne
- **Max :** détermine la valeur maximale d’une colonne
- **AVG :** détermine la moyenne des valeurs numériques d’une colonne


```
Application :
```
Créer une nouvelle base de données dans votre dossier de travail et lui donner le nom « Gestion des notes +
votre nom ».
Sql
:....................................................................................................................................
...........................
....................................................................................................................................
..................................
On veut Créer les tables suivantes en respectant le schéma de la base de données présenté ci- dessous.
ELEVE (id_élèves, Nom, Prénom, Date_naissance, Classe)
MATIERE (id_matières, libellé_matière,coefficient)
NOTE (id_élèves, id_matières, Note)

La table Elève (La clé primaire est ID_ELEVE)

Champ Type de données Propriétés
ID_ELEVE Varchar Taille = 8
Nom Varchar Taille = 30
Prénom Varchar Taille = 30
Date_naissance Date/Heure
Classe Varchar Taille = 8
La table Matière (La clé primaire est ID_MATIERE)

Champ Type de données Propriétés
ID_MATIERE Varchar Taille = 3
Libellé_matière Varchar Taille = 30
Coefficient Numérique réel simple
3) La table Note (La clé primaire est ID_ELEVE, ID_MATIERE)
Champ Type de données Propriétés
ID_ELEVE Varchar Taille = 8
ID_MATIERE Varchar Taille = 3
Note Numérique Taille = réel simple

A)Créer les tables élèves,matières et notes puis saisir les données
La table ELEVE
1)Création de la table élèves (structure )
Sql:


....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
.....................
2Création de la table matière
sql:.................................................................................................................................
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
...............
3)Création la table note
Sql
:....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
...............
Création des relations :
....................................................................................................................................
...............................................
....................................................................................................................................
..............................................
....................................................................................................................................
..........................................

b)Insertion de données:
Id_élève Nom Prénom Date de naissance Classe
E01 Tounsi Ahmed 04/01/2003 3SI
E02 Mrad Amira 23/10/2001 4ECO2
E03 Dridi Wided 22/01/2002 4ECO1
E04 Jileni Amira 23/10/2004 3ECO2
E05 Mtir Amine 22/03/2006 1s1
E06 Nouira Rami 05/04/2007 1s1
E07 Masmoudi Ahmed 06/12/2004 3SI

Sql: (se limiter à deux enregistrements)
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
.......................................................................
La table MATIERE

```
ID_MATIERE Libéllé_Matière Coefficient
M01 Algorithme 3
M02 STI 3
M03 Math 1,5
```

d)insertion de données dans la table matière :
**....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
...............................................**
La table NOTE
ID_ELEVE ID_MATIERE Note
E01 M01 14
E01 M02 13
E01 M03 10
E02 M03 11
E03 M03 17
E07 M02 14,5
Requête de sélection :
1)Afficher tous les élèves
**.............................................................
............................................................................**
2)Afficher les nom et prénom des élèves
**.........................................................................................
.........................................................................................**
3)Afficher les élèves dont la classe est 3SI
**..........................................................................................
..........................................................................................
...........................................................................................**
4)compter le nom des élèves (count)
**.........................................................................................................
.......................................................................................................
.......................................................................................................**
5) Afficher Les notes qui sont comprises entre 10 et 15 (opérateur BETWEEN)

```
(opérateur BETWEEN) Opérateur AND
```
```
..................................................................
..................
..................................................................
..................
..................................................................
.....................
```
```
...............................................................
..................
...............................................................
..................
...............................................................
..................
```
**6)Modifier La classe de l’élèves dont l’identifiant est E01 de 3SI à 4SI
...........................................................................................................
.........................................................................................................
...............................................................................................................**
7)Afficher le nombre des élèves du classe 4ECO
**.....................................................................................
....................................................................................
...................................................................................
8)Afficher les ID des élèves qui ont des notes supérieures à 12 et dont l’ID matière est « M02 »
..........................................................................................**


**..............................................................................................
................................................................................................
9) Afficher l’ID et la note de l’élève qui a eu la note maximale dont l’id matière est «M03»
.................................................................................................
...................................................................................................
.................................................................................................
10) Afficher l’ID et la note de l’élève qui a eu la note minimale dont l’id matière est «M03»
.................................................................................................
.................................................................................................
................................................................................................**


Correction serie 1
Création des tables
Table élèves
CREATE TABLE élèves (
id_élèves varchar(8),
Nom varchar(20),
Prénom varchar(20),
Date_naissance date,
classe varchar(8),
PRIMARY KEY (id_élèves)
);

```
CREATE TABLE élèves (
id_élèves varchar(8) PRIMARY
KEY,
Nom varchar(20),
Prénom varchar(20),
Date_naissance date,
classe varchar(8)
);
```
Table matière
CREATE TABLE matière (
id_matière varchar(8) ,
libellé_mat varchar(20),
Coefficient float ,
PRIMARY KEY
(id_matière)
);

```
CREATE TABLE matière (
id_matière varchar(8) PRIMARY
KEY ,
libellé_mat varchar(20),
Coefficient float
);
```
Table note
CREATE TABLE note (
id_élèves varchar(8) REFERENCES élèves(id_élèves),
id_matière varchar(8) REFERENCES matière(id_matière),
note float,
PRIMARY KEY (id_élèves, id_matière)
);

Création de relation :
1)changement du type de la tables élèves ,matière et note à INNODB au lieu de MyISAM

b)Création des relations

Résultat :
ALTER TABLE `note`
ADD CONSTRAINT `note_ibfk_1` FOREIGN KEY (`id_élèves`) REFERENCES `élèves` (`id_élèves`)
ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `note_ibfk_2` FOREIGN KEY (`id_matière`) REFERENCES `matière`
(`id_matière`) ON DELETE CASCADE ON UPDATE CASCADE;

OU


Insertion de données
INSERT INTO élèves VALUES ( **‘** E01 **’** , **‘** Tounsi', 'Ahmed', '2003- 01 - 04', '4SI');
INSERT INTO matière VALUES ('M01', 'Algorithme', 3);
Requête de sélection :
1)Afficher tous les élève
R1 : SELECT *
FROM élèves;

2)Afficher les nom et prénom des élèves
R2 : SELECT
Nom,Prénom
FROM élèves ;

3) Afficher id_elèves,id_matière dont la note est supérieur à 12
SELECT id_élèves, id_matière, note
FROM note
WHERE note >12;

4) **Afficher le nombre des élèves en utilisant l’opérateur count**
SELECT count(*)
FROM élèves ;

5)Afficher id_elèves,id_matière **dont la note est entre 12 et 17 en utilisant l’opérateur** BETWEEN
(a)
SELECT note
FROM note
WHERE (note BETWEEN 12
AND 17);

```
(b)
SELECT note
FROM note
WHERE (note > 12
AND note <17)
```
Requête de mise à jour
6 )Modifier La classe de l’élèves dont l’identifiant est E01 de 3SI à 4SI
UPDATE élèves
SET classe="4SI"
WHERE
id_élèves="E01";


Requête de sélection :
7)Afficher les élèves dont la classe est 3SI
(a)
SELECT élèves.*
FROM élèves
WHERE
élèves.classe= **’3SI’** ;

```
Ou
(b)
SELECT *
FROM élèves
WHERE classe= ’3SI’ ;
```
Remarque :on peut ecrire dans la clause select le Nom_du_table.nom_du_colonne → (a)
ou le nom du du colonne directement.-- **>(b) s’il n ya deux colle qui porte le même nom.**
8)Afficher les ID des élèves qui ont des notes supérieures à 12 et dont l’ID matière est « M02 »
SELECT id_élèves
FROM note
WHERE note>12 AND
id_matière="M02";

9) Afficher la note maximale
(a)
SELECT MAX(note)
FROM note;

(b) avec un titre le champ calculé MAX.

10) Afficher la note de l’élève minimale

(^)
11)Afficher la moyenne des notes
(^)


**-** Application 2 base de données

```
Soit le schéma relationnel de la base de données « gestion de projets »
```
```
Employé (NumEmp, nom, Prénom, Adresse, Tél, Grade, NumService #)
```
```
Service (NumService, NomService, Responsable, Tél)
```
```
Projet (NumProjet, DatDeb, Datfin, Numservice#).
```
1) Créer cette base de données avec le nom « gestion de projets »
Sql :..............................................................
2) Créer les tables de la base de données
Employé
champ Type de données propriétés
NumEmp Numérique Entier taille 8
Nom texte Taille= 15
Prénom Texte Taille = 20
Adresse texte Taille = 30
Tél numérique Entier taille=8
Grade texte Taille = 15
NumService texte Taille = 3

```
Service
champ Type de données propriétés
NumService texte Taille = 3
NomService texte Taille= 20
Responsable texte Taille = 25
Tél numérique Entier taille=8
```
```
Projet
champ Type de données propriétés
NumProjet Numérique Entier taille 11
NomProjet texte Taille= 10
DatDeb Date
Datfin Date
Numservice texte Taille = 3
```
3) Créer les relations entre les tables.
4) Donner la représentation graphique des tables


```
5)Insérer les données des différents tables en mode sql.
Service
NumService, NomService Responsable Tél
S01 financier 001 73787987
S02 commercial 003 73123543
S03 Administratif 001 73126543
S04 commercial 003 73254376
S05 travaux 001 73238765
```
```
Employé
NumEmp Nom Prénom Adresse Tél Grade NumService
001 Tounsi Safa Tunis 98765676 Ingénieur S01
002 Kefi Ali Tunis 97867897 ouvrier S02
003 Beji Mohamed Béja 99876786 employé S02
004 Soussi Lamia Sousse 96545674 ouvrier S03
005 Touati leila Sousse 95765423 cadre S04
```
```
Projet
NumProjet NomProjet DatDeb Datfin Numservice
01 Projet1 02/01/2004 15/07/2005 S01
03 Projet2 28/10/2005 15/05/2006 S03
04 Projet3 12/01/2004 18/06/2006 S04
05 Projet4 20/01/2006 01/07/2006 S01
```
5) Créer les requêtes suivantes

✓ R1:Afficher la liste des employés
.................................................
..................................................
✓ R2 : donner la liste des employés (nom, prénom) qui habitent à tunis
...........................................................................................................................................
..........................................................................................................................................


✓ R 3:Afficher la liste des employés qui habitent à Sousse par ordre croissant des noms.

..........................................................................
......................................................................
.......................................................................
.........................................................................
✓ R4 : donner la liste des employés (nom, prénom) dont le nom commencent par T.
..........................................................................
..........................................................................
.........................................................................
✓ R 5 :Afficher les projets dont la datedeb est supérieur au 02/01/2004
.............................................................................
............................................................................
...........................................................................
✓ R6:Afficher les noms de services dont la datedeb est inférieur au 20/08/2005.
...............................................................................
..............................................................................
.............................................................................
✓ R7 :donner la liste des projets dont la datedeb est entre 02/01/2004 et 20/01/2006.
............................................................................
............................................................................
...........................................................................
✓ R8a) Afficher le nombre de projets (count)
................................................................................
...............................................................................
......................................................................................
✓ R8a) Afficher le nombre de projets du service S01
................................................................................
...............................................................................
...............................................................................
✓ R8c) Afficher le nombre de projets pour chaque service (group by)
................................................................................
...............................................................................
......................................................................................
R8d) Afficher le nombre de projets du service S01
.........................................................................................
.........................................................................................
..........................................................................................
✓ R9 Insérer le champ “email” dans la table Employé (texte(20)).
....................................................................................................................................
.......................................................................................................................
✓ _ALTER TABLE Nom_table_
✓ _[DROP CONSTRAINT Nom_contrainte]_
✓ _[ADD CONSTRAINT définition_contrainte]_
✓ _[DROP COLUMN Nom_colonne]_
✓ _[ADD COLUMN (définition_colonne)]_
✓ _[MODIFY (définition_colonne)]_
✓ _[ENABLE|DISABLE nom_contrainte_ **_]_**

```
Rappel
```

✓
✓ R10 Ajouter la contrainte suivante (le champ email doit contenir le caractère”@”).
....................................................................................................................................
..........................................................................................................................................
....................................................................................................

✓ R11 : Afficher les nom des villes des employés sans répétition (DISTINCT)
✓ Quels sont les noms des services correspondants à l’employé « Tounsi Safa »

..........................................................................................................................................................
........................................................................................................................................................
..........................................................................................................................................................
✓ R12 : compter le nombre de villes des employés
..........................................................................................................................................................
........................................................................................................................................................
..........................................................................................................................................................
✓ R13 Ajouter un email pour Tounsi Safa (UPDATE) Email :tounsiSafa@gmail.com
.................................................................................................................
...................................................................................................................
Permet de modifier des valeurs de colonnes d’une table
UPDATE nom_table
SET nomcolonne1= Expression1[, nomcolonne2=Expression2....]
[WHERE condition]

✓ R14 Afficher les employées qui n’ont pas d’émail
..........................................................................................................................................................
....................................................................................................................
✓ R15 compter le nombre d’employées qui n’ont pas un email
..........................................................................................................................................................
........................................................................................................................................................
..........................................................................................................................................................

✓ R16 Supprimer les enregistrement de la table employé dont le champ email est vide
✓ Permet de supprimer une ou plusieurs lignes existantes à partir d’une table
✓ DELETE FROM nom_table
✓ [WHERE condition]
..........................................................................................................................................................
........................................................................................................................................................
..........................................................................................................................................................
✓ R17-Supprimer le champ email de la table employé
..........................................................................................................................................................
........................................................................................................................................................
..........................................................................................................................................................
✓ R18 Quels sont les noms des services correspondants au employés dont la deuxième lettre du nom est « o »
..........................................................................................................................................................
........................................................................................................................................................
..........................................................................................................................................................
✓ R19 Afficher les nom des services qui ont des projet
..........................................................................................................................................................
........................................................................................................................................................


```
Serie 2 base de données(correction)
```
```
Soit le schéma relationnel de la base de données « gestion de projets »
```
```
Employé (NumEmp, nom, Prénom, Adresse, Tél, Grade, NumService #)
```
```
Service (NumService, NomService, Responsable, Tél)
```
```
Projet (NumProjet, DatDeb, Datfin, Numservice#).
```
1) Créer cette base de données avec le nom « gestion de projets »
Sql : CREATE DATABASE `gestionprojet` ;.
2) Créer les tables de la base de données

```
Employé
champ Type de données propriétés
sql
NumEmp Numérique Entier taille 10 CREATE TABLE employée (
numemp int(10) ,
Nom varchar(15),
Prénom varchar(20),
Adresse varchar(30),
Tél int(8) ,
Grade varchar(15),
numservice varchar(3) REFERENCES
service(numservice),
PRIMARY KEY (numemp)
) ;
```
```
Nom texte Taille= 15
Prénom Texte Taille = 20
Adresse texte Taille = 30
Tél numérique Entier taille 8
Grade texte Taille = 15
NumService texte Taille = 3
```
```
Service
champ Type de données propriétés sql
NumService texte Taille = 3 CREATE TABLE service (
numservice varchar(3),
nomservice varchar(20),
Responsable varchar(25),
tel bigint,
PRIMARY KEY (numservice)
)
```
```
NomService texte Taille= 20
Responsable texte Taille = 25
Tél numérique Entier long
```
```
Projet
champ Type de données propriétés sql
NumProjet Numérique entier CREATE TABLE projet (
numprojet int
nomprojet varchar(10),
datdeb date,
datfin date,
numservice varchar(3) REFERENCES
service(numservice),
PRIMARY KEY (numprojet),
)
```
```
NomProjet texte Taille= 10
DatDeb Date
Datfin Date
Numservice texte Taille = 3
```

3) Créer les relations entre les tables.
1)changement du type de la tables Employé ,service et projet à INNODB au lieu de MyISAM

```
2 - Création d’index pour numservice du table projet et du table employée.
Table projet :
```
```
3 - création des relations
Table projet
```
```
Sql :
ALTER TABLE `projet`
ADD CONSTRAINT `projet_ibfk_1` FOREIGN KEY (`numservice`) REFERENCES `service` (`numservice`)
ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `employée`
ADD CONSTRAINT `employée_ibfk_1` FOREIGN KEY (`numservice`) REFERENCES `service`
(`numservice`) ON DELETE CASCADE ON UPDATE CASCADE;
Donner la représentation graphique des tables
```
```
5)Insérer les données des différentes tables en mode sql.
Service
NumService, NomService Responsable Tél
S01 financier 001 73787987
```

```
S02 commercial 003 73123543
S03 Administratif 001 73126543
S04 commercial 003 73254376
S05 travaux 001 73238765
```
```
Employé
NumEmp Nom Prénom Adresse Tél Grade NumService
001 Tounsi Safa Tunis 98765676 Ingénieur S01
002 Kefi Ali Tunis 97867897 ouvrier S02
003 Beji Mohamed Béja 99876786 employé S02
004 Soussi Lamia Sousse 96545674 ouvrier S03
005 Touati leila Sousse 95765423 cadre S04
```
```
Projet
NumProjet NomProjet DatDeb Datfin Numservice
01 Projet1 02/01/2004 15/07/2005 S01
03 Projet2 28/10/2005 15/05/2006 S03
04 Projet3 12/01/2004 18/06/2006 S04
05 Projet4 20/01/2006 01/07/2006 S01
```
```
Table service (se limiter à un enregistrement)
Sql: INSERT INTO service VALUES ('s01', 'financier', '001', 73787987);
Table employée(se limiter à un enregistrement)
Sql :INSERT INTO employee VALUES (1, 'Tounsi', 'Safa', 'Tunis', 98765676, 'ingenieur', 's01');
Table Projet : (se limiter à un enregistrement)
Sql :INSERT INTO projet VALUES (1, 'projet1', '2004- 02 - 01', '2005- 07 - 15', 's01');
Créer les requêtes suivantes (se limiter à un enregistrement)
```
✓ R1:Afficher la liste des employés
SELECT *
FROM employée ;
✓ R2 : donner la liste des employés (nom, prénom) qui habitent à tunis
SELECT nom,prénom
FROM employée
WHERE adresse="Tunis" ;
✓ R 3:Afficher la liste des employés qui habitent à Sousse par ordre croissant des noms.

```
SELECT *
FROM employée
WHERE adresse="Sousse"
ORDER BY (nom) ASC;
```
```
R4 : donner la liste des employés (nom, prénom) dont le nom commencent par T.(LIKE)
SELECT nom,prénom
FROM employée
WHERE nom LIKE "T%" ;
```
✓ R 5 :Afficher les projets dont la datedeb est inférieurr au 02/01/2004
SELECT *


FROM projet
WHERE datdep<"2004- 02 - 01"
✓ R6 :donner la liste des projets dont la datedep est entre 02/01/2004 et 20/01/2006. (BETWEEN)
SELECT *
FROM projet
WHERE datdeb BETWEEN "2004- 02 - 01" AND "2006- 01 - 20";
R8a) : Afficher le nombre de projets des services
SELECT COUNT(numprojet)
FROM projet

```
R8b) : Afficher le nombre de projets du service S01
```
```
SELECT COUNT(numprojet)
FROM projet
Where numservice=’S01’ ;
R8c) : Afficher le nombre de projets pour chaque service (GROUP BY)
SELECT numservice,COUNT(numprojet)
FROM projet
GROUP BY(numservice)
```
✓ R8d) : Afficher le nombre de projets du service S01 (HAVING)
SELECT numservice,COUNT(numprojet)
FROM projet
GROUP BY(numservice)
HAVING numservice="S01";

✓ R9 Insérer le champ “email” dans la table Employé (texte(20)).(ALTER TABLE)
ALTER TABLE employée
ADD email varchar(20);

```
R10 Ajouter la contrainte suivante (le champ email doit contenir le caractère”@”).
ALTER TABLE employée
ADD CONSTRAINT c1 CHECK(email LIKE ‘ %@%’);
```
✓ R11 Afficher les nom des villes des employés sans répétition (DISTINCT)

```
SELECT DISTINCT(adresse)
FROM employée
```
✓ R12 compter le nombre de villes des employés

```
SELECT COUNT(DISTINCT(adresse))
FROM employée
```
✓ R13 Ajouter un email pour Tounsi Safa (UPDATE)
Email :tounsiSafa@gmail.com


```
UPDATE employée
SET email="tounsisafa@gmail.com"
Where nom="Tounsi" AND prénom="Safa";
```
✓ R14 Afficher les employées qui n’ont pas d’émail
SELECT *
FROM `employée`
WHERE email IS NULL ;

✓ R15 compter le nombre d’employées qui n’ont pas un email
SELECT count(*)
FROM `employée`
WHERE email IS NULL

```
SELECT count(numemp)
FROM `employée`
WHERE email IS NULL
```
✓ R16 Supprimer les enregistrement de la table employé dont le champ email est vide
DELETE FROM employée
WHERE email IS NULL;

✓ R17-Supprimer le champ email de la table employé
ALTER TABLE employée
DROP COLUMN email;

```
Résultat :
```

Serie 3
Exercice N°1 :
Pour chacune des propositions suivantes, cocher la (ou les) bonne(s) réponse(s).

 Dans une base de données relationnelle, on peut dire que :

```
Les tables servent à stocker des données
Les tables servent à stocker des règles de validation
Les tables doivent comporter chacune au moins deux clés étrangères
```
 Une clé primaire :

```
Doit être définie par une seule colonne
Peut être une clé étrangère dans une autre table
Ne peut être que de type numérique
```
 Dans une base de données relationnelle :

```
Il existe des liens entre les différentes tables de la base
Les liens entre les tables s’organisent d’une manière hiérarchique
Les liens peuvent être de différents types (1,1) ou (1, n)
```
Exercice N°2 :
Traduire cette représentation graphique en représentation textuelle :

....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
....................................................................................................................................
.........................................................................................................................
Exercice 3 :
Corriger les commandes de création de tables suivantes :

```
CREATE TABLEAU Personne
(Nom VARCHAR (40) PRIMARY KEY,
Prénom VARCHAR (40) PRIMARY KEY,
Adresse VARCHAR (50),
E-mail VARCHAR (50),
```

```
Téléphone DECIMALE (10,3) DEFAULLT
1) ;
```
```
CREATE TABLE Voiture
(immat int(3) ,
Marque VARCHAR (15) NOT NULL,
Modèle VARCHAR (20),
Puis_CH VARCHAR (2) DEFAULT 4 CHECK
(Pui_CH >=4)) ;
```
Exercice 4:

1)donner la représentation textuelle de la table ESPECE
....................................................................................................................................
..............................................


Correction serie3
Exercice N°1 :( 3 Points)
Pour chacune des propositions suivantes, cocher la (ou les) bonne(s) réponse(s).

 Dans une base de données relationnelle, on peut dire que :

```
x Les tables servent à stocker des données
Les tables servent à stocker des règles de validation
Les tables doivent comporter chacune au moins deux clés étrangères
```
 Une clé primaire :

```
Doit être définie par une seule colonne
x Peut être une clé étrangère dans une autre table
Ne peut être que de type numérique
```
 Dans une base de données relationnelle :

```
x Il existe des liens entre les différentes tables de la base
Les liens entre les tables s’organisent d’une manière hiérarchique
x Les liens peuvent être de différents types (1,1) ou (1, n)
```
Exercice N°2 :( 5 Points)
Traduire cette représentation graphique en représentation textuelle :

Equipe (code-eq, nom-eq,date-eq)

Joueur (Numéro-jr, nom-jr, prénom-jr, date-jr, code-eq#)

Participation (Numéro-jr#,Numéro-mt#, Rôle-pt, Durée-pt)

Matches (Numéro-mt, date-mt, heure-deb, résultat-mt, Numéro-ar#)

Arbitre (Numéro-ar, Nom-ar, Prénom-ar)


```
Exercice3 :
Corriger les commandes de création de tables suivantes :
CREATE TABLEAU Personne
(Nom VARCHAR (40) PRIMARY KEY,
Prénom VARCHAR (40) PRIMARY KEY,
Adresse VARCHAR (50),
E-mail VARCHAR (50),
Téléphone DECIMALE (10,3) DEFAULLT 1) ;
```
```
CREATE TABLE Personne
(Nom VARCHAR (40),
Prénom VARCHAR (40),
Adresse VARCHAR (50) NOT NULL,
E-mail VARCHAR (50),
Téléphone INT (8) DEFAULLT 11111111,
PRIMARY KEY(Nom, Prénom);
```
```
CREATE TABLE Voiture
(immat int(3) ,
Marque VARCHAR (15) NOT NULL,
Modèle VARCHAR (20),
Puis_CH VARCHAR (2) DEFAULT 4 CHECK
(Pui_CH >=4)) ;
```
```
CREATE TABLE Voiture
(immat Varchar(10) PRIMARY KEY ,
Marque VARCHAR (15) NOT NULL,
Modèle VARCHAR (20) NOT NULL,
Puis_CH int (2) DEFAULT 4 CHECK (Pui_CH
>=4)) ;
```
```
Exercice4 : Exercice d’application :
On considère la création des tables suivantes :
Table client :
Nom colonne Type Taille Contrainte
Codeclt
Nom
Prenom
Adresse
Chiffre_affaire
```
```
Numérique
Chaine
Chaine
Chaine
Numérique
```
```
4
20
20
50
10, 3
```
```
Clé primaire
Non nulle
Non nulle
Nulle
>= 0
Table commande :
Nom colonne Type Taille Contrainte
Code_com
Date_com
Codeclt
```
```
Numérique
Date
Numérique
```
```
2
```
-
4

```
Clé primaire
Non nulle
Clé étrangère
Question :
```
1. Créer les tables suivantes en langage SQL.
2. Ecrire les commandes SQL suivantes :

a) Ajouter la colonne Tel_clt (numérique 13) à la table client.

b) Supprimer la colonne Adresse de la table client.

c) Supprimer la clé primaire de la table client.

d) Désactiver la clé primaire de la table commande.

e) Supprimer la table client.


................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................

................................................................................................................................


**Serie 4 base de données**
(Mode Commande)
**Objectifs** :Maitriser les commandes SQL pour la création des bases de données et la manipulation des
données.
Rappel :

Un langage de définition de données (LDD, ou en anglais DDL, Data
definition language) qui permet de modifier la structure de la base de
données.

- Un langage de manipulation de données (LMD, ou en anglais DML, Data
manipulation language) qui constitue la partie la plus courante et la plus visible
de SQL, permettant de consulter et modifier le contenu de la base de
données.
Le mode commande a comme principal avantage l'indépendance par rapport au
SGBD. La forme générale des trois commandes permettant de créer
et de modifier la structure d'une base de données (CREATE, ALTER et
DROP) est la même dans tous les SGBD qui utilisent SQL.

**Enoncé :**

**1.** Créer la base de données « BDgestion_deptg.. », qui est décrite par le schéma textuel simplifié
suivant:
**Employes** ( **Num_Emp** , Nom_emp, Fonction, Salaire, Prime, DateEmb, Num_dept#)
**Departement** ( **Num_dept** , Nom_dept , Ville,)

2.b)Insérer dans la table « Employes » les lignes suivantes :


**Travail demandé :** 1 - **Création de table** en respectant les contraintes d’intégrités(de domaine, de table et référentiels)
Q0-Créer les tables Employés et départements.
**II-La projection avec sql :SELECT liste des attributs FROM nom de relation ;
Q1** :Donner les noms de tous les employés et le salaire de chacun d’eux?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
**Q2** :La liste de tous les départements dans lesquels travaille au moins un employé?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
**Q3** :Liste de tous les enregistrement de la relation Département?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

III-La projection avec sql : **SELECT** liste des attributs **FROM** nom de relation **WHERE** condition ;
**Q4** :Quels sont les employés travaillant dans le département 30?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**Q5** :Quels sont les numéros et les noms des employés travaillant dans le département 30?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**Q6** :Quels sont les numéros et les noms des employés du département 30 et qui ont un salaire >2000?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**Q7** :Quels sont les fonctions exercés par les employés des départements 20 et 30 en éliminant les lignes
en double?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................


**Q8** : Quels sont les fonctions dont Le salaire est compris entre 2000 et 4000?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**Q9** : Quels sont les employés du départent numéro 30 dont le nom commence par ’S’?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**Q10** :Quels sont les employés du département numéro 20 dont la fonction n’est ni ‘Ingénieur’ ni
‘Analyste’?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**IV-La jointure avec sql :
Q11** :Quels sont les numéros et les noms des employés qui travaillent à ‘Tunis’?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**Q12** :Quels sont les noms,les fonctions et les salaires des employés du département ‘Recherche’ dont le
salaire est supérieur à 2400?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**V-Les fonctions
Q13** :Quel est le salaire maximum,le salaire minimum et la différence entre ces deux valeurs?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
**Q14** :Quel est le nombre d’employés percevant une prime?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................
**Q15** :Quel est le nombre des différentes fonctions dans le département 20
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**Q16** :Quel est la moyenne des salaires du département 20?
...............................................................................................................................
...............................................................................................................................


............................................................................................................................
............................................................................................................................

**V-Groupement
Q17** : Quel est le nombre des employés de chaque département
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**Q18** : Quel est la somme des salaires de chaque département
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**Q19** - afficher la somme des salaires de chaque département >5000
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**VI-Sous requête : requête non corrélée**
Q20 Afficher les nompEmployé dont le salaire est supérieur au **moyenne** des salaire
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**VII-Tri du résultat d’une requête :
Q21** :liste des employés du département 20 par ordre décroissant des salaires?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................

**Q22** :La liste par ordre alphabétique des employés du département 30?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................

**Q23** :La liste des employés triés selon un **ordre alphabétique** de leurs **fonctions** et à l’intérieur de
chaque fonction les trier selon un **salaire décroissant**?
...............................................................................................................................
...............................................................................................................................
............................................................................................................................
............................................................................................................................
**VIII-Requête de mise à jour
Q24** : Augmenter les salaires des ingénieurs de 15%
...............................................................................................................................
...............................................................................................................................
...........................................................................................................................


Serie5 LDD-LMD Fonctions chaines et date

**_Soit la base de données réduite suivante relative à la gestion de la sécurité sociale d’un assuré_**

Questions :
En utilisant le langage SQL répondre aux questions suivantes :

1. Afin d’optimiser la Base de données on veut changer les valeurs de la colonne Genre par ‘H’ au lieu
de ‘Homme’ et ‘F’ au lieu de ‘Femme’, on veut aussi changer le type de la même colonne vers un
seul caractère, écrire les requêtes SQL qui permettent de répondre à cette demande :
..........................................................................................................................
........................................................................................................................
..........................................................................................................................
2.Faites une projection de la table Résidence :
..................................................................................................................
3 .Liste des assurés (Numéro, nom et prénom) qui sont divorcés et le genre est Homme :
..................................................................................................................
..................................................................................................................
.................................................................................................................
4. Nom et prénom des assurés (affiché en une seule colonne avec l’alias ‘Nom et prénom’) dont le
nombre de caractères du mot de passe est inférieur ou égal à 4 :
..........................................................................................................................
........................................................................................................................
5. Liste des assurés (numéro, nom et prénom) qui sont de Sidi Hcine et dont le type de sécurité sociale
est CNPRS trié par ordre alphabétique des noms puis alphabétique décroissant des prénoms :
..........................................................................................................................
..........................................................................................................................
6.Le nombre d’assurés qui sont nés l’année 2000 :
.......................................................................................................................
......................................................................................................................
7.Le nombre d’assurés par délégation, afficher seulement ceux qui dépassent 100 :
........................................................................................................................
........................................................................................................................
8. La liste des assurés (Numéro, nom et prénom, afficher que les 3 premiers caractères du nom) dont le
nom commence par ‘A’, qui sont du gouvernorat de ‘Mannouba’ et ont le type de sécurité social
‘CNSS’


.......................................................................................................................
......................................................................................................................
......................................................................................................................
9.La liste des assurés (numéro, nom et prénom) qui ont le même mot de passe que ‘Bennour Ahmed’ :
.........................................................................................................................
...........................................................................................................................
.........................................................................................................................

10. La liste des assurés (Nom-utilisateur, nom et prénom) qui ont les mêmes 3 premiers caractères du
nom d’utilisateur que celui de ‘Bennour Ahmed’ :
...........................................................................................................................
.......................................................................................................................
........................................................................................................................


**PHP
I. INTRODUCTION :**
1) **Définition et principe de fonctionnement :**

```
Un site Web dynamique est un site dont les pages peuvent être générées à ‘la volée’ (dynamiquement) en
fonction d’une demande d’un utilisateur.
```
```
1) Le client demande une page web avec du code PHP.
2) Le serveur Web (Apache, IIS...) demande à l’interpréteur PHP d’exécuter le code PHP.
```
```
3) L’interpréteur PHP demande les données à partir du SGBD (MySql, PostegrSql...).
4) Le SGBD retourne les données
5) L’interpréteur PHP génère le code HTML et le renvoi au serveur.
6) Le serveur envoi la page demandée au client ( Sans aucun code PHP ).
```
```
2) Environnement de Travail :
```
```
Pour pouvoir développer en PHP, on a besoin :
```
```
 d’un serveur Web ( Apache , IIS, NgineX...),
 de l’interpréteur PHP et
 si notre site web contient une base de données, on aura besoin aussid'un SGBD ( MySql , Oracle,
PostegreSQL...).
```
```
Dans la suite du cours, on utilisera le paquetage « EasyPHP » qui installera Apache , Php , MySQL et
phpMyAdmin qui est une interface Web pour la gestion des bases de données MySQL.
```

**II. LE LANGAGE PHP :**
1) **Introduction : Règles à respecter**

```
Une page PHP est en fait une simple page HTML qui contient des instructions en langage PHP.
```
```
Une page web qui comporte le moindre petit bout de code PHP , doit avoir l’extension " .php".
```
```
En clair : si vous avez une page nommée index.htm et que vous y insérez du code PHP , il vous faudra la
renommer en index.php
```
```
Un code PHP doit être délimité par les deux marqueurs <?php et ?>
Les variables en PHP commencent obligatoirement par le signe $.
Chaque instruction en PHP se termine obligatoirement par un point-virgule " ; "
Pour les variables, PHP est sensible à la casse ( $somme , $SOMME et $Somme sont 3 variables
différentes)
Pour pouvoir tester les fichiers PHP , on doit les enregistrer dans un dossier à créer dans le
répertoire d’hébergement du serveur (Dossier www de EasyPHP )
```
```
2) Les commentaires en PHP :
```
```
Pour commenter le code on utilise // cmt mono-ligne ou /* cmt multi-lignes */
```
```
3) Les variables :
```
```
a. Les différents types de variables :
```
- Les chaînes de caractères ( **string** ) **_(entre guillemets doubles ou simples)_**
- Les nombres entiers ( **integer, int** )
- Les nombres décimaux ( **double, float** )
- Les booléens ( **boolean, bool** )
- Les tableaux ( **array** )
b. **Conversion de types :**

```
o La fonction settype permet de définir le type d’une variable.
▪ Exemple : settype ( $somme ,"integer") ;
o La fonction settype renvoie TRUE en cas succès et FALSE dans le cas contraire.
```
- **En précédant les variables à convertir par des clauses (type).**
    ▪ Exemple **: $somme** =( **integer** ) **$somme;** //Renvoie 0 s’il n’est pas possible de faire
       la conversion

```
c. Fonctions de manipulation de variables :
```
- **isset() : Permet de savoir si une variable existe ou pas. Elle retourne TRUE si la variable**
    **existe, sinon FALSE.**
- **var_dump() : Affiche les informations d'une variable (Type / Valeur)**


```
4) Les opérateurs :
```
**Arithmétiques : + , - , / , * , %
Relationnels (de comparaison) : < , <= , > , >= , == , !=
Logiques : AND (** **_ou_** **&&), OR (** _ou_ **||), !, XOR**

```
5) L’instruction « echo » :
```
L’instruction echo permet d’afficher du texte dans la page.
L’opérateur de concaténation est le point.
**Exemple 1** : **<?php echo** 'Ceci est du texte' **; ?>**
On peut même inclure des balise HTML :
**Exemple 2** : **<?php echo** "Ceci est du <b>texte</b>" **; ?>**
→le mot **texte** s’affichera en gras
Affichage du contenu d’une variable :
**Exemple 3** : **$somme** = 50 **;
<?php echo $somme; ?>** //Affichera : 50
**Exemple 4** : **$somme** = 50 **;
<?php echo** "Somme= "**. $somme; ?>** //Affichera : Somme= 50
**<?php echo** "Somme= " **, $somme; ?>** //Affichera : Somme= 50
**<?php echo** "Somme=$somme" **; ?>** //Affichera : Somme= 50
**<?php echo** 'Somme=$somme' **; ?>** //Affichera : Somme=$somme

```
6) Les Structures de contrôle :
```
```
<?php
$a=5;
$b=3;
if ($a>=$b) {
echo 'a est plus grand que b' ;
} else {
echo 'a est plus petit que b' ;
}
?>
```
```
<?php
$ i= 0 ; $ x= 0 ;
while ($i<10) {
$ i++ ; $x+=$i ;
}
echo’$x ‘ ;
?>
```
```
$ i= 0 ; $ x= 0 ;
do {
$i++ ; $x+=$i ;
} while ($i<10) ;
```
```
var val= 8 ;
switch (val) {
case 1 :
case 3 :
case 4 :
echo '1 ou 3 ou 4' ;
break;
default :
echo 'Val par défaut' ;
break;
}
```
```
for ( $i = 1 ; $i <10 ; $i ++) {
echo '4SI'. $i .'<br>' ;
}
```
```
7) Récupérer les données en PHP :
```
Pour récupérer des données envoyées par un formulaire, on utilise l'une des deux syntaxes suivantes :
**$_GET** ['nomobjet'] **ou $_POST** ['nomobjet']


Récupérer les données en PHP :
Pour récupérer des données envoyées par un formulaire, on utilise l'une des deux
syntaxes suivantes :

$_GET['nomobjet'] ou $_POST['nomobjet']
Selon la méthode utilisée dans la balise <form> :

```
<form method="POST"> ou <form method="GET">
```
Les deux méthodes GET et POST sont utilisées pour transférer des données du client au serveur

avec le protocole HTTP. La différence clé entre les méthodes POST et GET est que GET transporte

le paramètre dans la chaîne d’URL, tandis que POST transporte le parameter dans le corps du

message, ce qui le rend plus sûr le transfère des données du client au serveur avec le protocole

http.

Exemple de récupération des données de formulaire avec la méthode GET :
Fichier 4_a.html
<!DOCTYPE _html_ >
<head>
<meta _charset_ ="UTF- 8 "><title>Document</title>
</head>
<body><form _action_ ="4_a.php" _method_ ="GET">
<fieldset><table>
<tr><td>Votre nom</td><td><input _type_ ="text" _name_ ="nom"></td> </tr>
<tr><td>Votre age</td><td><input _type_ ="text" _name_ ="age"></td></tr>
<input _type_ ="submit" _value_ ="ENVOYER">
</table>
</fieldset>
</form></body></html>

Fichier 4_a.php
<!DOCTYPE _html_ >
<html _lang_ ="en">
<head>
<meta _charset_ ="UTF- 8 ">

```
<title>Document</title>
</head>
<body>
<h1>bonjour, <?php echo $_GET["nom"] ?></h1>
```

```
<h2>votre age est: <?php echo $_GET["age"] ?></h2>
</body>
</html>
```
Exemple2: Exemple de récupération des données de formulaire avec la méthode POST :
Fichier 4-a.php
<!DOCTYPE _html_ >
<html _lang_ ="en">
<head>
<meta _charset_ ="UTF- 8 ">
<meta _http-equiv_ ="X-UA-Compatible" _content_ ="IE=edge">
<meta _name_ ="viewport" _content_ ="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<form _action_ =" 4 - a.php" _method_ ="POST">
<fieldset>
<table>
<tr>
<td>saisir votre nom et prenom</td>
<td><input _type_ ="text" _name_ ="np"></td>
<td><input _type_ ="submit" _value_ ="valider"></td>
</tr></table>
</fieldset>
</form>
<?php
$np=$_POST["np"];
**echo** ("bienvenu Mr: $np");
?>
</body></html>

```
Les fonctions en PHP :
```
**<?php
for** ( **$i** = 1 **; $i** <10 **; $i** ++) **{
echo** 'Le cube de '. **$i** .' est égal à :'.Cube( **$i** ).'<br>' **;
}
function** Cube( **$x** ) **{
return $x** * **$x** * **$x;
} ?>**

```
8) Les tableaux :
```

a. **Introduction :**
Les tableaux en PHP peuvent contenir des indice de type **integer et/ou string**.
**Il est possible de stocker des éléments de types différents dans un même tableau**.
b. **Déclaration et initialisation d’un tableau :**
Exemple.a : **$T** [ 0 ]="P" **; $T** []= 2 **; $T** [ 55 ]= **true; $T** ["Classe"]="4SI" **; $T** []="TIC" **;**
Exemple.b : **$T** = **array** ("P" , 2 ) **;**
Exemple.c : **$T** = **array** ("Janvier"=> 31 , 2 => 28 , "Mars"=> 31 , 30 ) **;**
c. **Parcourir un tableau :**
La structure de contrôle **foreach** existe tout spécialement pour les tableaux. Elle fournit une manière
pratique de parcourir un tableau.
**Exemple d’utilisation de froeach :**
soit : **$T** [ 0 ]="P" **; $T** []= 2 **; $T** ["Classe"]="4SI" **; $T** []="TIC" **;
Code PHP Résultat de l’exécution
Valeur
sans
indice**

```
foreach ($T as $Valeur){
echo $Valeur. "<br>";
}
```
```
P
2
4SI
TIC
```
```
Indice &
Valeur
```
```
foreach ($T as $i => $Valeur){
echo $i. " --> " .$Valeur. "<br>";
}
```
0 --> P
1 --> 2
Classe --> 4SI
2 --> TIC
d. **Fonctions pour les tableaux :
Fonctions pour parcourir un tableau
Fonction Description
sizeof** () Retourne le nombre d'éléments dans un tableau
**sort** () Trie un tableau en ordre croissant
**rsort** () Trie un tableau en ordre décroissant
**N.B. : sort()** et **rsort()** assignent de nouveaux indices pour les éléments du tableau $T. ( _et effacent les
anciens indices_ )


```
9) Les fonctions sur les chaînes de caractères :
```
```
 substr () : $ch2=substr($ch1,début, taille) ;
```
```
//Retourne une portion de $ch1, spécifiée avec le début et la longueur taille.
Lorsqu'un début négatif est spécifié, la chaîne retournée commencera au caractère numéro début à partir
de la fin de la chaîne.
Si taille est omise, la sous chaine commençant à partir de début jusqu'à la fin sera retournée.
```
```
 trim() : $ch=trim ($ch) ;
```
```
// Supprime les espaces en début et fin de chaîne et retourne la chaîne nettoyée.
```
```
 strlen(): $x=strlen ($ch) ;
```
```
// Retourne la longueur de la chaîne string.
```
```
 implode() : $ch= implode ("separateur", $T3) ;
```
```
//Retourne une chaîne constituée de tous les éléments du tableau, pris dans l'ordre,transformés en chaîne, et
séparés par "separateur".
```
```
 explode() : $T3=explode ("separateur", $ch) ;
```
```
//Retourne un tableau qui contient les éléments de la chaîne $ch extraite en utilisant le "separateur".
```
```
 str_replace() : $ch=str_replace("modèle", "remplacement", $ch) ;
```
```
//Remplace toutes les occurrences de "modèle" dans chaîne $ch par "remplacement".
```
```
PHP & MYSQL
L'utilisation de MySql avec Php s'effectue en cinq étapes :
```
Étape 1. Connexion au serveur MySql :
**mysql_connect** ("localhost", "root") **;**
Avec gestion des erreurs de la connexion au SGBD MySql:
**mysql_connect** ("localhost", "root") **or
exit** ("Problème de connexion à MySql :". **mysql_error** ()) **;**

Étape 2. Sélection de la base de données :
**mysql_select_db** ("BD123456") **;**
Avec gestion des erreurs de la connexion à la base de données :
**mysql_select_db** ("BD123456") **or
die** ("Problème de connexion à la BD :". **mysql_error** ()) **;**


```
Envoyer une requête à la base de données :
$R = mysql_query ("SELECT * FROM Revue") ;
mysql_query($Q);
SELECT
(Requêtes de sélection)
```
```
UPDATE , INSERT , DELETE ...
(Requêtes de mise à jour)
```
```
Exemple:
$Q= "SELECT * FROM Eleves" ;
$R=mysql_query($Q);
```
```
$Q= "DELETE FROM Eleves
WHERE MoyGen>=10" ;
$R=mysql_query($Q);
```
```
Résultat :
```
```
Échec FALSE Échec FALSE
```
```
Succès
```
```
Une ressource (≡ Un fichier,
dont chaque
enregistrement/ligne est un
tableau)
```
```
Succès TRUE
```
```
Déterminer
le nombre de
lignes
```
```
Retournées
dans la
Ressource
```
```
$Nb=mysql_num_rows($R);
```
```
Affectées par
la requête de
MAJ
```
```
$Nb=mysql_affected_rows();
// Sans paramètres
```
Étape 3. Exploitation du résultat de la requête SELECT :
**$Tab** = **mysql_fetch_array** ( **$R** )
**mysql_fetch_array** ( **$R** ) renvoie un tableau qui contient une ligne de la ressource **$R** et déplace le
pointeur vers la ligne suivante.
Le résultat retourné par **mysql_fetch_array** ( **$R** ) est un tableau avec des indices associatifs et numériques
en même temps.
S'il n'y a plus de lignes dans la ressource **$R** , **mysql_fetch_array** ( **$R** ) retourne **FALSE**.
_//Exemple de parcours complet d'une ressource_
**While** ( **$Tab** = **mysql_fetch_array** ( **$R** )) **{
echo $Tab** ["Champ1"]." | ". **$Tab** ["Champ2"] **;}**

Étape 4. Fermeture de la connexion :
**mysql_close** () **;**
La fermeture de la connexion est optionnelle parce qu’elle sera détruite automatiquement lorsque le script
PHP termine son exécution.


Les chaines en PHP
**Activité1 : Taille d’une chaîne**
Pour connaître le nombre de caractères contenu dans une chaîne, vous pouvez utiliser la
fonction strlen()
<?php
$str='tounsi';
**echo strlen** ($str); _//
6_
$str=' ef gh ';
**echo strlen** ($str); _//
7_
?>

Activité 2 :Trouver la première position
La fonction strpos() trouve la position de la première occurrence d’un caractère dans une
chaîne.
<?php
$machaine = 'nom-composé';
**echo** ( **strpos** ($machaine,'-'));//3

```
?>
```
b)
<?php
$machaine = 'nom-composé';
$pos= **strpos** ($machaine,'-'); _//_
**echo** ($pos);
**var_dump** ($pos);
?

```
<?php
$machaine = 'nomcomposé';
$pos= strpos ($machaine,'-'); //
echo ($pos);
var_dump ($pos);
?>
```
c)

```
<?php
$machaine = 'nomcomposé';
$pos= strpos ($machaine,'n'); //
echo ($pos);
var_dump ($pos);
if ($pos == false) {
echo "n'est pas trouvé ";
} else {
```
```
echo " exists at position
$pos";
```

```
}
```
```
?>
```
```
<?php
$machaine = 'nomcomposé';
$pos= strpos ($machaine,'n'); //
echo ($pos);
var_dump ($pos);
if ($pos === false) {
echo "n'est pas trouvé ";
} else {
```
```
echo " exists at position
$pos";
}
```
```
?>
```
La fonction strpos() retourne false si elle ne trouve pas. Remarquez l’utilisation de
l’opérateur === qui signifie que la comparaison se fera sur la valeur et le type. En PHP le
zéro peut prendre la valeur false. Si une valeur est trouvée en position zéro elle ne doit pas
être interprétée comme pas trouvée.
Activité 3 :Extraire une sous-chaîne
la fonction substr() permet d’extraire une chaîne (à partir d’une position précise, en
partant de la fin, sur une quantité bien définie de caractères...). Il elle accepte trois
paramètres : la chaîne d’entrée, la position de départ, la position de fin ou la quantité. Si
aucune chaîne est trouvée, la fonction retournera
false.
<?php
**echo substr** ('tounsi', 1 ,
3 )."<br>"; _// affiche 'oun'_
?>

Activité 4 : Remplacer un motif dans une chaîne
La fonction str_replace() permet de remplacer un motif dans une chaîne. Il faut
indiquer la sous-chaîne à rechercher, puis la sous-chaîne de remplacement et enfin la
chaîne de référence où faire le remplacement.
<?php
$recherche = "ali"; _// la sous-chaîne
recherchée_
$remplacement = "tounsi"; _// la sous-chaîne de
remplacement_
$chaine = "ali dort!"; _// chaîne de référence_
**echo
str_replace** ($recherche,$remplacement,$chaine);
?>


Activité5 : Élagage d’une chaîne en PHP
L’élagage se fait avec la fonction trim() et consiste à retirer les caractères blancs avant et
après un texte.
<?php
$chaine = " ali ";
**echo trim** ($chaine); _// les espaces
avant et après seront supprimés_
?>

b)on peut spécifier une liste de caractères à supprimer en deuxième paramètre de la fonction
trim().
<?php
$chaine = "****ali!!!!!";
**echo trim** ($chaine,"*!"); _// les
caractères spécifiés en deuxième
parmètre seront supprimés_
?>

Activité6 : strtoupper() et strtolower()

La conversion minuscule en majuscule se fait en PHP avec la fonction strtoupper() et
l’inverse avec la fonction strtolower().

```
<?php
$chaineMinuscule = "ali";
echo
strtoupper ($chaineMinuscule)."<br>";
$chaineMajuscule = "TOUNSI";
echo strtolower ($chaineMajuscule);
?>
```
Activité 7 : ord($car): retourne le code ASCII du caractère $car.

chr($int): retourne le caractère correspondant au code ASCII $int.

```
<?php
$car="A";
echo ( ord ($car)); // retourne le code
ASCII du caractère $car.
?>
```

Fonction date en PHP
La fonction date() vous renvoie l’heure locale de votre serveur.

**Activité1**

```
<?php
$date = date ("d-m-Y");
echo ("Nous sommes le $date");
?>
```
Activité 2
Le premier paramètre concerne le format de la date (voir les differents formats en dessous).
La fonction date() accepte un deuxième argument qui correspond à un nombre de secondes
écoulées depuis le début de l’époque UNIX, (1er janvier 1970 00:00:00 GMT). Dans l’exemple
ci-dessous la fonction affiche la date qu’il était après 0 seconde écoulé depuis le 01/01/1970.

```
<?php
$date = date ("d-m-Y", 0 );
echo ("Nous sommes le $date");
?>
```
Activité 3 : **Format de date**

Les options permettent une bonne représentation d’une date et heure.
Exemple :

```
<?php
$date = date ("d-m-Y H:i:s") ;
echo ("Nous sommes le $date");
?>
```
Les différentes options sont :
Jour
J : Jour du mois sur deux chiffres sans les zéros initiaux 1 à 31
d : Jour du mois sur deux chiffres avec un zéro initial en fonction du jour 01 à 31
l : (L minuscule) Jour de la semaine en anglais Sunday à Saturday
w : Jour de la semaine au format numérique 0 (dimanche) à 6 (samedi) z : Jour de l’année 0 à
366

```
<?php
$date = date ("l");
echo ("Nous sommes le
$date");
?>
```
Semaine

W : Numéro de semaine dans l’année (les semaines commencent le lundi) Exemple : 42 (la
42ème semaine de l’année)

Mois
F : Mois, textuel, version longue; en anglais, comme January ou December January à
December


m : Mois au format numérique, avec zéros initiaux 01 à 12
n : Mois sans les zéros initiaux 1 à 12 t Nombre de jours dans le mois 28 à 31.

Année
L : Est ce que l’année est bissextile 1 si bissextile, 0 sinon.
Y : Année sur 4 chiffres Exemples : 1999 et 2003
y : Année sur 2 chiffres Exemples : 99 et 03.

Heure
a : Ante méridien et Post méridien (minuscules) am ou pm
A : Ante méridien et Post méridien (majuscules) AM ou PM
g : Heure (format 12h) sans les zéros initiaux 1 à 12
G : Heure (format 24h) sans les zéros initiaux 0 à 23
h : Heure (format 12h) avec les zéros initiaux 01 à 12
H : Heure (format 24h) avec les zéros initiaux 00 à 23
s : Secondes avec zéros initiaux 00 à 59
i : Minutes avec zéros initiaux 00 à 59

**checkdate()**

La fonction checkdate() permet de vérifier si une date est valide. La liste des paramètres
doit respecter cet ordre : mois, jour, année

```
<?php
$result = checkdate ( 13 , 10 , 2002 );
// 10- 13 - 2002
if( $result == true ){
echo 'la date est valide';
}else{
echo 'la date n\'est pas valide';}
?>
```

Les tableaux en PHP
Les tableaux permettent de rassembler plusieurs valeurs. Pour créer un tableau vide on peut
utiliser la fonction array()
Activité1: créer un tableau vide

```
<?php
$tab = array ();
echo $tab;
?>
```
Pour son remplissage, vous pouvez utiliser deux types de tableau, les tableaux indexés et
les tableaux associatifs.
Le tableau indicé
C’est un tableau qui contient une liste d’éléments. Chaque élément est séparé par une
virgule. Il n’y pas à déclarer la taille du tableau, elle sera géré automatiquement par PHP.
Dans un tableau indexé, chaque valeur est repérée par une clé numérique.
La clé zéro représente la première valeur.
Pour lire une valeur d’un tableau indexé, on appelle la variable avec, entre les crochets [ ], le
numéro de la clé correspondant à la valeur.
Activité2 :
<?php
$tab = **array** ( 1 , 2 ,"ali");
**echo** $tab[ 0 ]; _// affichera 1_
?>

Activité 3 : Le tableau associative
C’est un tableau plus intuitif qui permet de retrouver plus facilement les valeurs. En effet,
dans un tableau associatif, chaque valeur est repérée par une chaine de caractères.
On peut créer un tableau associatif rempli de valeurs. Les valeurs sont associées aux clés par
la syntaxe =>
<?php
$tab = **array** ("taille" => 170 ,"age"
=> 30 , "prenom" => "ali");
**echo** $tab;
?>

Pour lire une valeur d’un tableau associatif, on appelle la variable avec, entre les crochets [],
la clé sous forme de chaîne correspondant à la valeur.
<?php
$tab = **array** ("taille" => 170 ,"age"
=> 30 , "prenom" => "ali");
**echo** $tab["taille"];
?>

Activité 4:Parcourir un tableau


Php propose un moyen simple pour parcourir un à un tous les éléments d’un tableau, il s’agit
de l’instruction foreach(). Il existe deux syntaxes possibles :

- Voici la syntaxe pour parcourir un tableau indexé (indicé):
    <?php
    $tab = [ 1 , 2 , 3 ];
    foreach($tab as $valeur){
    **echo** $valeur."<br>";
    }
    ?>

Activité 5 : La fonction foreach() commence par lire la première valeur puis elle lit, à chaque

itération,
la valeur suivante du tableau. Chaque valeur du tableau que la fonction parcourt est
assignée à
$valeur.

- Voici la syntaxe pour parcourir un tableau associatif :
    <?php
    $tab = ['nom'=>'ali','age'=> 30 ];
    foreach($tab as $cle=>$valeur){
    **echo** $cle." : ".$valeur."<br>";
    }
    ?>

Le fonctionnement est identique à la précédente avec en plus, la récupération pour chaque
valeur, de la clé du tableau assignée à
$cle.
Activité 6:Taille du tableau
Pour compter le nombre d’éléments contenu dans un tableau, utilisez la fonction count().
<?php
$tab = [ 1 , 2 , 3 , 4 ];
**echo** "Le tableau contient
". **count** ($tab)."éléments";
?>

Activité7 : Parcourir un tableau avec la boucle FOR
La fonction
count() peut aussi être utile pour parcourir un tableau. Pour une meilleur
gestion du pointeur d’un tableau, il est recommandé d’utiliser la boucle
for(). En effet la
boucle
foreach() renvoie toutes les valeurs une à une depuis le début, tandis qu’avec la
boucle
for(), la recherche peut commencer sur un index précis du tableau et terminer avant
la fin. De plus le pointeur peut avancer de plusieurs éléments.


```
<?php
$tab = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];
for($i= 3 ; $i< count ($tab)- 2 ; $i+= 2 ){
echo $tab[$i]."<br>";
}
?>
```
La lecture commence à 4 (le premier élément du tableau est indexé à zéro) et se termine à 7
(count($tab)-2). Le pointeur avance de 2 à chaque itération

Activité 8:

<?php
$vente=array( 1742 , 1562 , 1920 , 1239 , 2012 , 720 );
$s= 0 ;
for($i= 0 ;$i<count($vente);$i++){
$s+=$vente[$i];
}
echo("le total des ventes est".$s);
?>
<?php
$vente=array('lundi'=> 1742 ,'Mardi'=> 1562 ,'Mercredi'=> 1920 ,'jeudi'=> 1239 ,'vendredi'=> 2012 ,'sa
medi'=> 720 );
$s= 0 ;
foreach($vente as $i=>$v){
echo("<br> vente de $i:$v unités \n");
$s+=$v;
}
echo("le total des ventes est".$s);
?>


#### Application1

Soit la base des données «Biblio » suivante:

**Livre** (NumLivre, typeLivre, TitreLivre, NbreExemplairesDisp)
**Abonné** (CIN, Nom, Prenom, Classe)
**Emprunt** (CIN#, NumLivre#, DateEmprunt)
**Travail demandé :**
1 - Créer la base les tables ainsi que les relations entre les tables.
2 - a **Insérer** dans la table « **Livre** » les lignes suivantes :
**NumLivre TypeLivre TitreLivre NbrExemplairesDisp
A0001** Algorithmique Les structures de
controles

```
15
```
```
B0132 Base de données SQL 22
```
2 - b **Insérer** dans la table « **Abonne** » les lignes suivantes :

```
CIN Nom Prenom
01111111 Alaya Ibtissem
03333333 Barhoumi Mohamed
```
- c- **Insérer** dans la table « **Emprunt** » la ligne suivante :
- **Ibtissem Alaya** a emprunté le livre « **SQL** » aujourd’hui
- On souhaite créer un site web dynamique qui nous aide à la gestion des livres
- 3 - **Insérer** un enregistrement dans la table « **Livre** » à travers ce formulaire
- A-Créer le formulaire suivant:


```
Code php:ajout.php
<?php
//connexion
$conx= mysqli_connect ('localhost','root','','biblio') or die;
```
```
$livre=$_POST['livre'];
$type=$_POST['type'];
$titre=$_POST['titre'];
$nbex=$_POST['nbex'];
//requette
$req1="INSERT INTO `livre` (`NumLivre`, `TypeLivre`, `TitreLivre`, `NbrExemplairesDisp`) VALUES
('$livre', '$type', '$titre', '$nbex');";
//exécution de la requête
$res1= mysqli_query ($conx,$req1)or die;
//nombre de ligne affecté
if( mysqli_affected_rows ($conx)!=-1) echo ("Ajout de livre fait avec succès");
//fermer la connexion
```
```
mysqli_close ($conx);
```
```
?>
A)Préparation d'environnement
Installer Xampp
```
- Lancer le logiciel Xampp puis démarrer les services apache et MySQL

puis cliquer sur le bouton Admin

```
B) Création d’une connexion à MySQL
Pour travailler avec des enregistrements dans MySQL, on doit d’abord créer une connexion au
serveur à l’aide de php. Ceci est fait avec la function mysqli_connect(), qui renvoie le résultat
comme une ressource de connexion. Cette ressource sera utilisée dans toutes les opérations futures
de la base de données (MySQL).
Syntaxe:
$con=mysqli_connect("hote","nom_utilisateur","mot_de_passe","nom_bd");
Exemple :hote: localhost , nom_utilisateur :r oot ,mot_de_passe(pas de mot)
```
```
$conx= mysqli_connect ('localhost','root','','biblio') or die("erreur1". mysqli_error ($conx));
```

```
die() est un alias de la fonction exit() : c'est une fonction de PHP qui permet de stopper
l'exécution du script , Il en résulte donc l'affichage du message d'erreur (passé en
argument)et l'arrêt brutal du script.
```
- Mysqli_error($con): renvoie une description de l'erreur MySQL.

```
Remarque : utilisation de require
On crée d'abord dans notre dossier de travail un fichier "connect.php" contenant le script
suivant:
$conx= mysqli_connect ('localhost','root','','biblio') or die("erreur1". mysqli_error ($conx));
Et comme la connexion à la base va figurer dans tous les scripts PhP qu'on va créer, on va
inclure le fichier "connect.php" dans les autres à l'aide de PHP
require 'connexion.php';
require : inclut le contenu d'un autre fichier appelé, et provoque une erreur bloquante s'il est
indisponible.
```
```
C)Préparation et exécution de requête :
```
```
Préparation $req="SELECT * FROM livre";
Exécution
$res=mysqli_query($conx,$req);
```
```
SELECT (Requêtes de sélection)
```
```
UPDATE , INSERT , DELETE ...(Requêtes
de mise à jour)
```
```
Exemple:
$Q= "SELECT * FROM livre" ;
$res=mysqli_query($conx,$q);
```
```
$Q= "DELETE FROM Eleves
WHERE MoyGen>=10" ;
$res=mysqli_query($conx,$q);
```
Résultat :

```
Échec FALSE Échec FALSE
```
```
Succès
```
```
Une ressource (≡ Un fichier, dont
chaque enregistrement/ligne est un
tableau)
```
```
Succès TRUE
```
Déterminer
le nombre
de lignes

```
Retournées
dans la
Ressource
```
```
$Nb=mysqli_num_rows($conx,$res);
```
```
Affectées
par la
requête
de MAJ
$Nb=mysqli_affected_rows($conx);
```
```
Exploitation du résultat de la requête SELECT :
$Tab=mysqli_fetch_array($con,$res)
```
```
renvoie un tableau qui contient une ligne de la ressource $res et déplace le pointeur
vers la ligne suivante.Le résultat retourné par mysqli_fetch_array($con,$res ) est
```
```
Variable de
la connexion
Variable de
la requête
```

```
un tableau avec des indices associatifs et numériques en même temps. S'il n'y a plus
de lignes dans
```
```
la ressource res , mysqli_fetch_array($con,$res ) retourne FALSE.
While ( $Tab = mysql_fetch_array ( $R )) {
echo $Tab ["Champ1"]." | ". $Tab ["Champ2"] ;}
//Exemple de parcours complet d'une ressource
Fermeture de la connexion : mysql_close () ;
```
La fermeture de la connexion est optionnelle parce qu’elle sera détruite

automatiquement lorsque le script PHP termine son exécution.

**4):** Créer une page web pour afficher la liste des livres dans un tableau avec l’entête suivante ligne par
ligne Qu’on va la nommer **liste_livre.php.**

```
Identifiant type du livre titre du livre Nombre d'exemplaires
```
Code PHP :
<?php
$cnx= **mysqli_connect** ("localhost","root"
,"","biblio");
$req="SELECT* FROM livre";
$res= **mysqli_query** ($cnx,$req);
**echo** "
<!DOCTYPE html>
<html>
<head>
<title>Affichage des livres</title>
</head>
<body>
<h1>Liste des livres</h1>
<table>
<tr>
<th>Identifiant</th>
<th>type du livre</th>
<th>titre du livre</th>
<th>Nombre d'exemplaires</th>
</tr>
";
while($l= **mysqli_fetch_array** ($res)){
**echo** "<tr>
<td>".$l['NumLivre']."</td>
<td>".$l['typeLivre']."</td>
<td>".$l['TitreLivre']."</td>
<td>".$l['NbreExemplairesDisp']."</td>
</tr>";
}
**echo** "</table></body></html>";
?>


**5 :Modifier** un enregistrement dans la table « **Livre** » à travers ce formulaire.

- A-Créer le formulaire suivant:
- B Créer un script php pour **Modifier** un enregistrement dans la table « **Livre** » à travers ce
    formulaire.

**Exemple:** on va modifier le titre du livre don’t le numLivre est:A0001 en modifiant le titre à **Les str de**

**controles** au lieu de **Les structures de controles.
Aprés exécution:**

Code PHP :

6 :

- **Supprimer** un enregistrement de la table « **Livre** » à travers ce formulaire.

```
Exemple :on veut supprimer le livre dont le NumLivre est B0132
```
Code PHP du fichier supprimer.php
............................................................................................................................
.............................................................................................................................


............................................................................................................................
............................................................................................................................
...........................................................................................................................
...........................................................................................................................
..........................................................................................................................
..........................................................................................................................
............................................................................................................................
..........................................................................................................................
..........................................................................................................................
.........................................................................................................................
...........................................................................................................................
..........................................................................................................................
........................................................................................................................
7)

```
a) Effectuer une vérification sur la clé primaire avec une requête select , avant les opérations
d’insertion , de modification ou de suppression.
```
Exemple:
on veut vérifier si un livre existe déjà dans la base de données
Exemple :Le livre dont le code est A001existe déjà
copier le formulaire précédent un script PHP pour voir si un numéro de livre existe ou pas.

b)Modifier Le code de l’exercice n1 pour que avant de modifier un livre on vérifie s’il existe ou non.


###### Application N°2 (S.T.I)

Important :
Dans votre dossier c:\xampp_lite\www, créez votre dossier de travail intitulé SWNom_prénom. ‘Exp :
SWArbi_foulen’
Créer une base de données en la nommant BDNom_prénom. ‘Exp : BDArbifoulen’

```
Une banque offre à ses clients un servir de payement à distance à travers un site web. En effet,
nous allons développer des pages permettant de :
▪ Réaliser une transaction bancaire (payement facture, loyer, virement, salaire, ...)
▪ Lister les transactions réalisées par un client.
```
**Travail demandé :**

**1.** Dans la base de données « BDNom_prénom », créer les tables suivantes :
    ➢ **Compte** ( **NumCompte** , Titulaire, type, MotPasse, Solde, DateOuvr)

```
➢ Transaction ( Cdtrans , NumCompte # , DateTrans, Libelle, Montant)
Le tableau suivant indique les noms et les types des champs de chaque table.
Champ Description Type
--- Table Compte ----
1 Numcompte Numéro du compte Chaine de 10 Chiffres
2 Titulaire Nom et prénom ou raison social Chaine de 35 caractères
3 Type Type du compte (Courant, Epargne, joint, ...) Chaine de 25 caractères
4 MotPasse Mot de passe d’accès au compte Chaine de 10 caractères
5 Solde Solde du compte Décimal (10,3)
6 DateOuvr Date d’ouverture du compte Date
--- Table Transaction ---
1 Cdtrans Code de la transaction Entier (auto-incrémanté)
2 NumCompte Numéro du compte Chaine de 10 chiffres
3 DateTrans Date de la transaction DateTime
4 Libelle Libellé de la transaction Chaine de 40 caractères
5 Montant Montant de la transaction Décimal (10,3)
```
**2.** Insérer dans la table « Compte » les lignes suivantes :
    NumCompte Titulaire Type MotPasse Solde DateOuvr
    1111222212 Arbi Farid Epargne AF111000fa 1500,500 2010 - 05 -
       20
    1111222213 Ismail wafa Courant EW101010we 2950,820 2020 - 10 -
       28
    1111333314 Tounsi Arbia Courant TOTAaA2020 - 50,000 2020 - 11 -
       04
    1111444415 Ste Farhan+ Courant SF+0550+in 183000,000 2005 - 06 -
       13
**3.** Insérer dans la table « Transaction » les lignes suivantes :
    Cdtrans NumCompte Datetrans Libelle Montant
    101 1111222212 2010 - 05 - 20 Loyer 400,000
    102 1111222212 2020 - 11 - 04 Virement 180,500
    103 1111444415 2005 - 06 - 13 Virement simple 1220,000
**4.** Créer une page intitulé « transaction.html » contenant le formulaire suivant :


4 ème SI

Le clic sur le bouton **‘Valider’** fait appel à :

```
 Une fonction Javascript intitulée verif() affectant les contrôles suivants :
```
- Le champ " **Numéro du compte** " doit être composé de 10 chiffres.
- Le champ " **Montant** " doit contenir une valeur strictement positive,
 Un script php enregistré dans une page nommée « action.php » permettant, si c’est possible :
- L’ajout des informations relatives à la table **‘transaction’**.
- La mise à jour de champ **‘solde’** de la table **‘Compte’**.
**N.B :**
_La transaction est possible si le numéro du compte saisi existe dans la table ‘Compte’ et le montant est
inférieur ou égal au solde ; sinon la transaction est impossible et la message ’transaction échouée’
s’affichera.
Le clic sur le bouton_ **‘Annuler’** _initialise les champs du formulaire._
**5.** Créer une page nommée « liste.html » contient le formulaire suivant :

Le clic sur le bouton lister fait appel à :

```
 Une fonction Js vérifiant que :
```
- Le champ " **Numéro du compte** " est formé de 10 chiffres.
- Le champ **"mot de passe"** est composé de 10 caractères.
 Un script Php, dans une page nommée ‘Liste.php’ permettant d’afficher :
- Le message _"Veuillez vérifier les paramètres de votre identification"_ dans le cas ou **le
couple** (numéro du compte et le mot de passe) saisi n’existe pas dans la table Compte.
- En cas de validité, un tableau formé par les champs [DateTrans], [Libelle], et [montant]
ainsi que le nombre de transactions effectuées par ce client.

```
N.B :
Le clic sur le bouton ‘annuler’ initialise les champs du formulaire.
```
```
Saisie d’une transaction
```
Liste des transactions


**Correction ;**
Q4 :
Html :
<!DOCTYPE html>
<html>
<head>
<title>Hello!</title>
<link rel="stylesheet" href="forme.css">
</head>
<body>

<form id="FR" name="F" action="ajout.php" method="POST">
Date de transaction : <input id="D" name="Dt" type="datetime-local">
<br>
Numéro du compte : <input id="N" name="Nt" type="text">
<br>
Libellé de la transaction : <select id="L" name="Lt" size="1">
<option value="Virement simple">Virement classique</option>
<option value="Loyer">Loyer</option>
<option value="payement facture">payement facture</option>
<option value="Salaire">Salaire</option>
<option value="Don">Autre...</option>
</select> <br>
Montant: <input id="M" name="Mt" type="text">
<br>
<input name="B1" type="submit" value="Valider">
<input name="B2" type="reset" value="annuler">
</form>

</body>
</html>

**Ajout.php**
<!DOCTYPE _html_ >
<html> <head> <title>transactionPHP</title> </head>
<body>
<?php

if ( **isset** ($_POST['Dt']))
{
_//r_ � _cup_ � _rer les donnees introduites dans les champs du formulaire..
//-----------------------------------------------------------------------------_
$vb=$_POST['Dt'];
_//echo $vb;
//$d=date("Y-m-d H:i:s") ;_
**echo** $d;
$va=$_POST['Nt'];
$vc=$_POST['Lt'];
$vd=$_POST['Mt'];
_//----------- Se connecter au serveur local----------_
$con= **mysqli_connect** ("localhost","root","","bdsifoulen")or die("erreur connection au
serveur");
if ($vd< 0 )
{ **echo** ("<script> alert('Erreur ... verifie le montant de la transaction');</script>") ;}
else
{


$rq="select numcompte from compte where (numcompte='$va') and solde>='$vd'";
$res= **mysqli_query** ($con,$rq);
$nb= **mysqli_affected_rows** ($con); _//Retourne le nombre de lignes affectees lors de la
//derniere operation MySQL.
//Il est possible d'utliser 'mysql_num_rows()': Elle retourne le nombre de lignes
//d'un resultat d'execution d'une requ_ � _te SQL <SELECT .. From >.
// $nb=mysqli_num_rows($res);_
if($nb<= 0 )
_//Le r_ � _sultat de la requ_ è _te est 0 si $va n'existe pas dans la table
// Compte ou - 1
//suite o une erreur d'ex_ é _cution..._
{ **echo** ($nb." vérifier numéro du compte ou contacter votre agence ou solde
insuffisant!");}
else
{
$rq1="insert into transaction values(NULL,'$va','$vb','$vc','$vd')" ;
_// le premier champ sera incr_ � _ment_ � _automatiquement.._
$rq2="update compte set solde=solde-$vd where (numcompte='$va')";
_// mise_ � _jour du solde dans la table compte
//Ex_ � _cuter les deux requ_ � _tes et r_ � _cup_ � _rer le r_ � _sultat..._
**mysqli_query** ($con,$rq1);
$n1= **mysqli_affected_rows** ($con);
_//Retourne le nombre de lignes affect_ � _es lors de
//la derni_ � _re op_ � _ration MySQL_
if($n1== 1 )
{ **echo** "r1 reussi";}
**mysqli_query** ($con,$rq2);
$n2= **mysqli_affected_rows** ($con);
if($n2== 1 )
{ **echo** "r2 reussi";}
if($n1== 1 && $n2== 1 ) _// une ligne ins_ � _r_ � _e dans la table
// transaction et
//une autre modifi_ � _dans la table compte_
{ **echo** " OK--Transaction valid�e";}
else
{ **echo** "Erreur --probl�me d'insertion et de mise � jour... v�rifier vos donn�es";}
_/*
ou bien
$ex1=mysqli_query($con,$rq1);
$ex2=mysqli_query($con,$rq2);
if ($ex1 && $ex2)
{echo"OK--Transaction valid_ � _e";}
else
{echo"Erreur --probl_ � _me d'insertion... v_ � _rifie vos donn_ � _es";}
*/_
}
}
**mysqli_close** ($con);
}


?>
</body></html>

**Q5:**

**Liste.html**
<!DOCTYPE _html_ >

<html>

<head>
<title>Hello!</title>
</head>

<body>
<form _id_ ="F" _name_ ="FL" _action_ ="liste.php" _method_ ="POST">
<h2>Liste des transactions </h2>
Numéro du compte: <input _id_ ="Nc" _name_ ="Nc" _type_ ="text"> <br>
Mot de passe: <input _type_ ="text" _name_ ="Mp"> <br>
<input _id_ ="b1" _name_ ="ba" _type_ ="submit" _value_ ="Lister"> <br>
<input _id_ ="b2" _name_ ="bn" _type_ ="reset" _value_ ="annuler">
</form>
</body>
</html>

Liste.php
<!DOCTYPE _html_ >
<html>
<head>
<title>Liste des trans</title>
</head>
<body>
<?php

if (( **isset** ($_POST['Nc']))&&( **isset** ($_POST['Mp'])))
{
_//récupérer les données introduites dans les champs du formulaire..
//-----------------------------------------------------------------------------_
$cp=$_POST['Nc'];
$mp=$_POST['Mp'];
$con= **mysqli_connect** ("localhost","root","","bdsifoulen");
if (!$con)
{ **echo** ("erreur connection au serveur");}
else
{
_// pour vérifier que le numéro du compte et le mot de passe ..._
$rq="select * from compte where (numcompte='$cp') and (MotPasse='$mp')";
$res= **mysqli_query** ($con,$rq);
$nL= **mysqli_num_rows** ($res);


if ($nL== 0 ) _//numéro de compte ou mot de passe invalide : 0 enregistrement lors de
l'exécution de la requête $rq..._
{ **echo** (" vérifier les paramètres de votre identification");}
else
{
$rq1="select Datetrans,libelle,Montant from transaction where (numcompte='$cp')";
$rslt= **mysqli_query** ($con,$rq1);
**echo** ("<table border='1'
<tr>
<th> Datetrans </th> <th>Libellé trans </th> <th> Montanttrans</th>
</tr>");
_//plusieurs transactions seront afichées_
while($ligne= **mysqli_fetch_array** ($rslt))
{ **echo** ("<tr>
<td> $ligne[ 0 ]</td>
<td> $ligne[ 1 ]</td>
<td> $ligne[ 2 ]</td>
</tr>");}
**echo** "</table>";

$rq2="select count(numcompte) from transaction where (numcompte='$cp') group
by(numcompte)";
$rs= **mysqli_query** ($con,$rq2)or die ("erreur exécution troisième requêtte");
$lig= **mysqli_fetch_array** ($rs);
{ **echo** ("<br> Le nombre des transactions :".'['.$lig[ 0 ].']');}

}
}
**mysqli_close** ($con);
}
?>

</body>
</html>


```
Application 3 PHP
(Utilisation des fonctions sur les chaînes de caractères+ fonction sur les dates)
```
1. Créer la base de données « bdclasse » contenantt la table « eleve » dont la structure est la suivante :

1 - Créer le formulaire suivant

2. Ecrire un script qui permet de contrôler la saisie des champs de la façon suivante :
    - Le champ Nom et prénom non vide et contient l’espace
    - L’élève doit choisir une classe
3. Si les champs sont bien rempli, un script coté serveur sera exécuter pour permettre
    - De calculer la note de l’élève
    - D’insérer le nom et prénom, la classe ainsi que la note la date courante dans la base de donnée
       « bdclasse »

eleve type
Numero
Classe
Nom
Prenom
Note
Date de
naissance

```
Entier
auto-incrément
Chaîne
Chaîne
Chaîne
float
date
```

Correction

Formulaire.html
<html><head>
<title>NomClasseN°</title>
<script language=javascript src= "lib.js" >
</script>
</head>
<body bgcolor="#C0C0C0">
<form method="POST" action="ajout.php" name="f"

onsubmit="return note(f);">
<p><b>Nom et Prénom</b><input name="T1" size="20" style="font-weight:
700">
<b>Classe</b><select size="1" name="D1" style="font-weight: 700">
<option>Choisir une classe</option>
<option value="première">première</option>
<option value="deuxième">deuxième</option>
<option value="troisième">troisième</option>
</select></p>
<hr>
<p align="left"><u><b>Evaluation 3pts (1+1+1)</b></u></p>
<p>La lettre &quot;A&quot; est
<input type="radio" value="consonne" name="R1">consonne
<input type="radio" name="R1" value="voyelle">voyelle</p>
<p>Ecrire le mot &quot;classe&quot; en majuscule
<input type="text" name="T2" size="20"></p>
<p>Le mot &quot;TIC&quot; est composé par <select size="3" name="D2">
<option value="un">un</option>
<option value="deux">deux</option>
<option value="trois">trois</option>
</select>Lettres</p>
<input type="submit" value="ajouter" name="B1" ></form></body></html>

```
Fichier « lib.js »
function note(f)
{np=document.getElementById(“T1”).value;p= document.getElementById(“D1”).selectedIndex;
if((np=='')||(np.indexOf(' ')==-1)){alert("erreur np "); return false;}
if (p==-1){alert("erreur choisir une classe"); return false;}}
```

Ajout.php

<?php
_//récupération des données_
$v1=$_POST['T1'];
$v2=$_POST['D1'];
$v3=$_POST['R1'];
$v4=$_POST['T2'];
$v5=$_POST['D2'];
_// calcul de la note et préparation des champs à insérer_
$note= 0 ;
if ($v3=='voyelle'){$note=$note+ 1 ;}
if ($v4=='CLASSE'){$note=$note+ 1 ;}
if ($v5=='trois'){$note=$note+ 1 ;}
$d= **date** ("Y/m/d") ; _// récupérer la date courante_
$P= **strpos** ($v1," ");
$No= **substr** ($v1, 0 ,$P);
$Pr= **substr** ($v1,$P+ 1 , **strlen** ($v1)-$P- 1 );
_// Connexion à la base_
$conx= **mysqli_connect** ('localhost','root','','bdclasse');

$req="insert into eleve values (NULL,'$v2','$No','$Pr','$note','$d')";
$res= **mysqli_query** ($conx,$req);
if ($res== 1 ){ **echo** ("insertion réussie");}else{ **echo
mysqli_error** ($conx);}
?>


