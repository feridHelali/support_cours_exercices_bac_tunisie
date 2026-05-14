### EXAMEN DU BACCALAURÉAT

## SESSION 2025

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
# Diviseurs Unitaires

On se propose de concevoir une interface graphique permettant de saisir un entier naturel N composé de trois

chiffres et d’afficher ses diviseurs unitaires s’ils existent.

On dit qu’un entier A est un diviseur unitaire d’un entier N si et seulement s’il existe un entier B tels que :

```
 N = A * B
 A est composé d’un seul chiffre différent de 1.
 A et B sont premiers entre eux. Deux entiers sont dits premiers entre eux si leur plus grand commun
diviseur (PGCD) est égal à 1.
```
Exemples :

```
1) Pour N = 252
 252 = 4 * 63
 4 est composé d’un seul chiffre
 4 et 63 sont premiers entre eux
car PGCD (4,63) = 1
```
###  252 = 7 * 36

```
 7 est composé d’un seul chiffre
 7 et 36 sont premiers entre eux
car PGCD (7,36) = 1
```
###  252 = 9 * 28

```
 9 est composé d’un seul chiffre
 9 et 28 sont premiers entre eux
car PGCD (9,28) = 1
Le programme affiche : Les diviseurs unitaires de 252 sont : 4, 7, 9
```
```
2) Pour N = 901
```
```
N n’a aucun diviseur formé d’un seul chiffre.
```
```
Le programme affiche : 901 ne possède aucun diviseur unitaire
```
```
3) Pour N = 999
 999 = 3 * 333
 3 est composé d’un seul chiffre
 3 et 333 ne sont pas premiers entre eux car
PGCD (3,333) = 3 ≠ 1
```
###  999 = 9 * 111

```
 9 est composé d’un seul chiffre
 9 et 111 ne sont pas premiers entre eux car
PGCD (9,111) = 3 ≠ 1
```
```
Le programme affiche : 999 ne possède aucun diviseur unitaire
```
```
Kiteb.net: le site web éducatif
```

Travail demandé

```
1) Créer l’interface graphique illustrée dans la figure Fig- 1 et l’enregistrer sous le nom Interface.
Cette interface contient les éléments suivants :
 Un label contenant le texte : "Diviseurs Unitaires"
 Un label contenant le texte : "N =".
 Une zone de saisie pour la saisie d’un entier N.
 Un bouton intitulé "Afficher".
 Un label dédié à l’affichage.
2) Créer un programme python et l’enregistrer sous le nom DivUnit, dans lequel on demande :
a) d’implémenter l’algorithme suivant de la fonction PGCD qui permet de déterminer le plus grand
commun diviseur de deux entiers A et B.
Fonction PGCD (A, B : Entier) : Entier
DEBUT
Tant que (B ≠ 0) Faire
R  A MOD B
A  B
B  R
Fin Tant que
Retourner A
FIN
```
### T.D.O.L

```
Objet Type/Nature
R Entier
```
```
b) de développer la fonction Verif (N, A) qui permet de vérifier si l’entier A est un diviseur
unitaire de l’entier N en exploitation la fonction PGCD précédente.
c) de développer la fonction Unitaire (N) qui permet de déterminer les diviseurs unitaires de N
s’ils existent en exploitant la fonction Verif précédente.
d) de développer un module Play qui s'exécute suite au clic sur le bouton "Afficher" permettant :
 de récupérer la valeur de l’entier N saisi , de s’assurer de sa validité et d’afficher, le cas
échéant, le message adéquat via le label dédié à l’affichage, comme illustré dans la figure Fig- 2.
 d’exploiter la fonction Unitaire précédente afin d’afficher le message adéquat via le label
dédié à l’affichage, comme illustré dans les figures Fig- 3 et Fig- 4.
e) d’exploiter l’annexe présentée ci-après tout en apportant les modifications nécessaires à
l’intégration de l’interface graphique Interface.
```
```
Fig- 2
```
```
Fig- 3
Fig- 4
```
```
Fig- 1
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
windows = loadUi (" Nom_Interface.ui ")
windows.show()
windows. Nom_Bouton .clicked.connect ( Nom_Module )
app.exec_()
```
(^)
Grille **d’évaluation**
Tâches Nombre de points
1) Création de l’interface Interface. 3
2) Création du programme DivUnit. (^1) 7 =
a) Implémentation de la fonction PGCD 4
b) Développement de la fonction Verif 3
c) Développement de la fonction Unitaire 4
d) Développement du module Play. (^) 4.
e) Exploitation de l’annexe. 1.
(^)
(^)
(^)
(^)
(^)
(^)
(^)
Kiteb.net: le site web éducatif


