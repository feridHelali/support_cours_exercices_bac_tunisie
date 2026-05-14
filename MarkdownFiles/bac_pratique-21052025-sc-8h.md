 PDF To Markdown Converter
Debug View
Result View
```
Section : ................................ N° d’inscription : ......................... Série : ..................
Nom et Prénom : ............................................................................................................
```
```
Date et lieu de naissance : ..........................................................................................
```
```

Informatique - Sections : Mathématiques, Sciences expérimentales et Sciences techniques – Session 2025
```
```
Le sujet comporte 4 pages numérotées de 1 sur 4 à 4 sur 4.
Les pages 1 sur 4 et 2 sur 4 sont à remettre avec la copie de l’examen à la fin de l’épreuve.
```
### Exercice n°1 (3,25 points).^

Pour chaque séquence algorithmique indiquée dans le tableau ci-dessous remplir les colonnes :

- **Résultat** par le résultat d’exécution de la séquence pour la valeur indiquée de la variable.
- **Rôle** par le rôle de la séquence.

Sachant que :

- x, n, s : sont des variables de type entier.
- ch, c : sont des variables de type chaine de caractères.
- T : est un tableau de 5 entiers.

```
Séquence algorithmique Résultat Rôle
x ← 0
Pour i de 1 à n Faire
Si (n Mod i = 0) Alors
x ← x + 1
FinSi
Fin Pour
Ecrire (x)
```
n = (^4) .........................................
.........................................
.........................................
.........................................
.........................................
.........................................
............................................
............................................
.............................................
.............................................
.............................................
............................................
s ← 0
ch ← Convch (n)
Pour i de Long(ch) - 1 à 0 (Pas= - 1) Faire
s ← s + Valeur (ch[i])
Fin Pour
Ecrire(s)
n = 4253 .........................................^
.........................................
.........................................
.........................................
.........................................
.........................................
............................................
............................................
.........................................
.........................................
...........................................
c ← ""
Pour i de 0 à Long(ch) - 1 Faire
c ← ch[i] + c
Fin Pour
Ecrire(c)
ch ="bac" .........................................^
.........................................
.........................................
.........................................
.........................................
............................................
............................................
..........................................
............................................
i ← 1
Tant que (i < n) et (T[i-1] >= T[i]) Faire
i ← i+
Fin Tant que
Ecrire (i = n)
**1 er cas : n = 5
T
0 1 2 3 4**
............................................
............................................
............................................
............................................
.........................................
.........................................
.........................................
.........................................
.........................................
.........................................
.........................................
.........................................
.........................................
.........................................
.........................................
...........................................
...........................................
**2 ème cas : n = 5
T
0 1 2 3 4**
............................................
............................................
.............................................

##### . .... / 3.

```
Signature des
surveillants
............................
............................
```
```
25 20 17 12 9
```
```
25 9 12 20 17
```
```
Kiteb.net : Le site web éducatif
```

### Exercice n°2 (3,75 points)

Soit l’algorithme suivant de la fonction **Quoi** :

```
Fonction Quoi (T : TAB, d, f : Entier) : ................................
DEBUT
kd
Pour i de d+1 à f Faire
Si T[i]<T[k] Alors
k i
FinSi
Fin Pour
Retourner k
FIN
1) Déterminer le type de résultat retourné par la fonction Quoi
.....................................................................................................................
2) Soit le tableau T suivant de 10 entiers
T
0 1 2 3 4 5 6 7 8 9
```
```
a) Donner le résultat de chacun des appels ci-dessous de la fonction Quoi
▪ Quoi (T,4,8) = ......................
▪ Quoi (T,6,9) = ......................
▪ Quoi (T,0,9) = ......................
```
```
b) Déduire le rôle de la fonction Quoi
.....................................................................................................................
.....................................................................................................................
....................................................................................................................
3) Ecrire l’algorithme d’un module intitulé ORDONNER qui permet de réordonner les éléments d’un
tableau V de N entiers et de type TAB dans un ordre croissant. Le module ORDONNER doit faire
appel à la fonction Quoi.
NB. Le candidat n’est pas appelé à déclarer le nouveau type TAB.
......................................................................................................................
......................................................................................................................
......................................................................................................................
.....................................................................................................................
.....................................................................................................................
.....................................................................................................................
.....................................................................................................................
.....................................................................................................................
.....................................................................................................................
......................................................................................................................
```
## Ne rien écrire ici

##### .......

##### .......

##### .......

##### .......

```
..... /3.
```
##### 112 54 59 - 15 1 - 5 29 17 0 47

```
Kiteb.net : Le site web éducatif
```

#### EXAMEN DU BACCALAURÉAT

```
Épreuve :
```
#### Durée :

# Session 2025

```
Sections :
```
#### Coefficient de l’épreuve :

```
N° d’inscription
```
## Problème (13 points)

```
Un nombre entier nb de k chiffres est dit nombre de Keith s'il peut apparaître dans une suite de nombres
générée à partir de ses propres chiffres.
Voici les étapes pour déterminer si un nombre nb à k chiffres est un nombre de Keith ou non :
```
**1.** Déterminer les **k** premiers termes de la suite : les **k** premiers termes de la suite sont les **k** chiffres du
    nombre **nb** en commençant de gauche à droite.
**2.** Calculer le terme suivant de la suite : le terme suivant est la **somme** des **k** derniers termes.
**3.** Répéter l’étape n° **2** jusqu’à ce que le dernier terme calculé soit supérieur ou égal à **nb**.
**4.** Vérifier l'apparition du nombre **nb** : Si le nombre **nb** est un terme de la suite, alors il est un nombre
    de Keith sinon il n’est pas un nombre de Keith.
**Exemples :**
- **_Pour nb = 14, on a donc k =2 puisque 14 est un nombre formé de 2 chiffres_**
**1.** Les 2 premiers termes de la suite sont successivement : **1** et **4** (les **k** chiffres de **nb** ).
**2.** Le calcul du terme suivant de la suite : **5** = (1+4).
**3.** Le calcul des termes suivants : **9** = (4+5), puis **14** = (5+9). Arrêt du calcul puisque le terme 14 est

```
supérieur ou égal à nb.
```
**4.** Vérifier si **14** apparaît dans la suite : puisque le terme 14 est égal à **nb** , donc 14 est un nombre de
    Keith.
- **_Pour nb = 189, on a donc k =3 puisque 189 est un nombre formé de 3 chiffres_**
**1.** Les 3 premiers termes de la suite sont successivement : **1** , **8** et **9** (les **k** chiffres de **nb** ).
**2.** Le calcul du terme suivant de la suite : **18** = (1+8+9).
**3.** Le calcul des termes suivants : **35** = (8+9+18), puis **62** = (9+18+35), puis **115** = (18+35+62),
puis **212** = (35+62+115). Arrêt du calcul puisque le terme 212 est supérieur ou égal à **nb**.
**4.** Vérifier si **189** apparaît dans la suite : puisque le terme 212 est strictement supérieur à **nb** , donc **189**
n’apparait pas dans la suite et par conséquent **189** n’est pas un nombre de Keith.

##### 1 4 5 9 14

##### 1 8 9 18 35 62 115 212

```
Kiteb.net : Le site web éducatif
```

- **_Pour nb = 1537, on a donc k = 4 puisque 1537 est un nombre formé de 4 chiffres_**
    **1.** Les 4 premiers termes de la suite sont successivement : **1** , **5** , **3** et **7** (les **k** chiffres de **nb** ).
    **2.** Le calcul du terme suivant de la suite : **16** = (1+5+3+7).
    **3.** Le calcul des termes suivants : **31** = (5+3+7+16), puis **57** = (3+7+16+31), puis **111** = (7+16+31+57),
       puis **215** = (16+31+57+111), puis **414** = (31+57+111+215), puis **797** = (57+111+215+414),
       puis **1537** = (111+215+414+797). Arrêt du calcul puisque le terme **1537** est supérieur ou égal à **nb**.
    **4.** Vérifier si **1537** apparaît dans la suite : puisque le terme **1537** est égal à **nb,** donc le terme 1537 est
       un nombre de Keith.

On se propose d’écrire un algorithme d’un programme qui permet de :

```
▪ remplir un tableau T1 par N1 entiers (5 N1 20), sachant que chaque élément du tableau doit être un
entier composé de 2 chiffres au minimum et de 5 chiffres au maximum.
▪ générer un deuxième tableau T2 contenant les éléments de T1 qui sont des nombres de Keith.
▪ afficher les éléments de T2 regroupés selon leurs nombres de chiffres conformément à l’exemple
suivant :
```
**Exemple :**

Pour **N1 = 12** et le tableau **T1** suivant :

```
T
0 1 2 3 4 5 6 7 8 9 10 11
```
Le tableau **T2** généré sera donc :

```
T
0 1 2 3 4 5 6 7
```
Le programme affiche les lignes suivantes :

- 14, 61, 47 : nombre(s) de Keith de 2 chiffres.
- Aucun nombre de Keith de 3 chiffres.
- 1537, 4788 : nombre(s) de Keith de 4 chiffres.
- 31331, 55604, 34285 : nombre(s) de Keith de 5 chiffres.

### Travail demandé :

1. Ecrire un algorithme du programme principal, solution à ce problème, en le décomposant en
    modules.
2. Ecrire un algorithme pour chaque module envisagé.
**N.B. :** _Le candidat est appelé à dresser les tableaux de déclaration des objets et des nouveaux types
nécessaires._

##### 31331 189 14 1537 918 34705 4788 61 55604 713 47 34285

##### 31331 14 1537 4788 61 55604 47 34285

```
Kiteb.net : Le site web éducatif
```


This is a offline tool, your data stays locally and is not send to any server!
Feedback & Bug Reports