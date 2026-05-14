### EXAMEN DU BACCALAURÉAT

### SESSION 2025

(^)
RÉPUBLIQUE TUNISIENNE
---------------
MINISTÈRE DE L’ÉDUCATION
(^)

## ÉPREUVE PRATIQUE D’INFORMATIQUE

## Sections : Mathématiques, Sciences expérimentales et

```
Sciences techniques
```
## Coefficient de l’épreuve : 0.5 Durée : 1h

```
Important :
Le candidat est appelé à créer, dans le répertoire BAC202 5 , un dossier de travail ayant comme nom son numéro
d’inscription (6 chiffres) et dans lequel il doit enregistrer, au fur et à mesure, tous les fichiers solution à ce sujet.
```
(^)

# Premier Palindrome

On se propose de concevoir une interface graphique permettant de saisir un nombre N de trois chiffres au
minimum, puis d’afficher s’il est premier palindrome.
 Un nombre est dit premier palindrome s'il est à la fois premier et palindrome.
 Un nombre est dit premier s’il est divisible seulement par 1 et lui-même.
 Un nombre est dit palindrome s’il est symétrique, c’est-à-dire qu’il se lit de la même manière de
droite à gauche et de gauche à droite.
Exemples :
o Pour N = 71317 : N est à la fois un nombre premier et un nombre palindrome.
7 1 3 1 7
Le programme affiche : 71317 est premier palindrome
o Pour N = 232 : N n’est pas un nombre premier.
Le programme affiche : 232 **n’** est pas premier palindrome
o Pour N = 137 : N n’est pas un nombre palindrome.
Le programme affiche : 137 **n’est pas** premier palindrome
o Pour N = 2514 : N n’est ni un nombre premier ni un nombre palindrome.
Le programme affiche : 2514 **n’est pas** premier palindrome
Travail demandé

```
1) Créer l’interface graphique illustrée dans la figure Fig- 1 et l’enregistrer sous le nom Interface.
Cette interface contient les éléments suivants :
 Un label contenant le texte : "Premier Palindrome".
 Un label contenant le texte : "N = ".
 Une zone de saisie pour la saisie d’un nombre N.
 Un bouton intitulé "Vérifier".
 Un label dédié à l’afficher.
Fig- 1
```
```
Kiteb.net: le site web éducatif
```

2) Créer un programme python et l’enregistrer sous le nom PrePal, dans lequel on demande :
a) de développer une fonction Premier(A) qui permet de tester si un entier strictement positif A est
premier ou non.
b) d’implémenter l’algorithme suivant de la fonction Palindrome qui permet de vérifier si une
chaine de caractères CH est palindrome ou non.
Fonction Palindrome (CH : Chaîne de caractères) : Booléen
DEBUT
i 0
jLong(CH)- 1
Tant que (i<j) et (CH[i]=CH[j]) Faire
i i+
j j- 1
Fin Tant que
Retourner i ≥ j
FIN

### T.D.O.L

```
Objet Type/Nature
i, j Entier
```
```
c) de développer une fonction Verif(N) qui permet de vérifier si un nombre N est un nombre
premier palindrome ou non, en utilisant les fonctions Premier et Palindrome précédentes.
d) de développer un module Play, qui s’exécute suite au clic sur le bouton "Vérifier", permettant :
 de récupérer la valeur du nombre N saisi, de s’assurer de sa validité et d’afficher, le cas échéant,
le message adéquat via le label dédié à l’affichage, comme illustré dans la figure Fig- 2.
 d’exploiter la fonction Verif afin d’afficher le message adéquat via le label dédié à
l’affichage, comme illustré dans les figures Fig- 3 , Fig- 4 et Fig- 5.
e) d’exploiter l’annexe présentée ci-après tout en apportant les modifications nécessaires à
l’intégration de l’interface graphique Interface.
```
```
Fig- 2
Fig- 3
```
```
Fig- 4
Fig- 5
```
```
Kiteb.net: le site web éducatif
```

## Annexe

```
from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication
......
......
app = QApplication([])
windows = loadUi ("Nom_Interface.ui")
windows.show()
windows.Nom_Bouton.clicked.connect (Nom_Module)
app.exec_()
```
(^)
Grille **d’évaluation**
Tâches Nombre de points

1. Création de l’interface Interface. 3
2. Création du programme PrePal. 17 =
    a) Développement de la fonction Premier 4
    b) Implémentation de la fonction Palindrome 4
    c) Développement de la fonction Verif 1.

d) Développement du module Play. (^6)
e) Exploitation de l’annexe. 1.
Kiteb.net: le site web éducatif


