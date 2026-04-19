```
Ministère de l’Éducation
Direction Générale des Programmes
et de la Formation Continue
❖◆❖
```
## LES CONVENTIONS

## ALGORITHMIQUES

### Année scolaire 2022/


###### Dans le but de développer le raisonnement et la capacité de résolution des problèmes chez

###### l’apprenant, le domaine « Pensée computationnelle et programmation » met l’accent sur

###### l’algorithmique. L’écriture d’un algorithme doit respecter les conventions citées dans ce

###### document.

#### A. La forme générale d’un algorithme

```
ALGORITHME Nom
DEBUT
Traitements
FIN
Déclaration des objets
```
```
Objet Type / Nature
```
#### B. Les syntaxes des structures algorithmiques

##### 1. Les opérations élémentaires simples

###### a. L’opération d’entrée

```
Lire (Objet)
```
###### b. L’opération de sortie

```
Écrire ("Message", Objet, Expression)
Écrire_nl ("Message", Objet, Expression)
```
###### c. L’opération d’affectation

```
Objet  Expression
N.B. : Objet est de type simple.
```
##### 2. Les types de données simples

```
o Entier
o Réel
o Booléen
o Caractère
o Chaîne de caractères
```
##### 3. Les structures de données

```
o Tableau (à une ou à deux dimensions)
o Enregistrement
o Fichier
```

##### 4. Les déclarations

###### a. Les objets de type de donnée simple

```
Objet Type / Nature
```
```
Nom_objet Type_objet
```
###### b. Les tableaux

```
Objet Type / Nature
Tableau à une
dimension
Nom_tableau Tableau de N Type _élément
```
```
Tableau à deux
dimensions
Nom_tableau Tableau de N lignes * M colonnes Type _élément
```
###### c. L’enregistrement

```
Objet Type / Nature
Nom_enregistrement Enregistrement
Nom_champ1 : Type_champ
Nom_champ2 : Type_champ
...
Fin
```
###### d. Les fichiers

```
Objet Type / Nature
```
```
Fichier texte Nom_ fichier Fichier Texte
```
**Fichier de données** (^) **Nom_ fichier Fichier de Type _élément**

###### e. Les nouveaux types utilisateurs

```
Nouveau type
Tableau à une
dimension
```
```
Nom_type = Tableau de N Type _élément
```
```
Tableau à deux
dimensions
Nom_type = Tableau de N lignes * M colonnes Type _élément
```
```
Enregistrement
```
```
Nom_type = Enregistrement
Nom_champ1 : Type_champ
Nom_champ2 : Type_champ
...
Fin
```
```
Fichier de données Nom_type = Fichier de Type _élément
```

###### Recommandations :

- L’écriture de l’algorithme doit respecter l’indentation.
- La nomenclature des objets doit être significative.
- Les éléments d’un tableau doivent être de même type.
- L’indice du premier élément d’une chaîne de caractères est **0**.
- Les indices des éléments d’un tableau sont de type scalaire.
- Pour accéder à un caractère d’une chaîne **Ch** , on utilise la notation **Ch[i]** avec 0i<long(Ch).
- Pour accéder à un élément d’un tableau **T** de **n** éléments, on utilise la notation **T[i]**.
- Pour accéder à un élément d’un tableau **M** à deux dimensions (L, C), on utilise la notation
    **M [i, j]**.
- Pour accéder à un champ d’un enregistrement **E** , on utilise la notation **E.Nom_champ**

##### 5. Les structures de contrôle conditionnelles

###### a. La structure de contrôle conditionnelle simple

```
Si Condition Alors
Traitement
FinSi
```
###### b. La structure de contrôle conditionnelle complète

```
Si Condition Alors
Traitement
Sinon
Traitement
FinSi
```
###### c. La structure de contrôle conditionnelle généralisée

```
Si Condition1 Alors
Traitement
Sinon Si Condition2 Alors
Traitement
Sinon Si Condition3 Alors
Traitement
.......................................................................................
........................................................................................
Sinon Si conditionN- 1 Alors
TraitementN- 1
[ Sinon
TraitementN]
FinSi
```

###### d. La structure de contrôle conditionnelle à choix multiples

```
Selon <Sélecteur>
Valeur 1 _1 [ , Valeur1_2, ... ] : Traitement
Valeur2_1.. Valeur2_2 : Traitement
.....................................................
[Sinon TraitementN ]
Fin Selon
```
```
N.B. : Le sélecteur doit être de type scalaire.
```
##### 6. Les structures de contrôle itératives

###### a. La structure de contrôle itérative complète

```
Pour Compteur de Début à Fin [Pas = valeur_pas] Faire
Traitement
Fin Pour
```
```
N.B. :
```
- La valeur du **pas** peut être **positive ou négative**. Par défaut, elle est égale à **1**.
- Éviter de modifier la valeur du compteur de la structure itérative complète au
    niveau du traitement.

###### b. Les structures de contrôle itérative à condition d'arrêt

- **_La structure Tant que_**
    **Tant que** Condition **Faire**
    Traitement
    **Fin Tant que**
- **_La structure Répéter_**
    **Répéter**
       Traitement
    **Jusqu'à** Condition

##### 7. Les modules

###### a. Les Fonctions

- **La déclaration**
    **Fonction** Nom_fonction (pf 1 : type 1 , pf 2 : type 2 , ... , pfn : typen) **: Type_résultat**
    **DEBUT**
       Traitement
       **Retourner** Résultat
    **FIN**
- **L’appel**
    Objet  Nom_fonction (pe 1 , pe 2 , ..., pen)


###### b. Les Procédures

- **La déclaration**
    **Procédure** Nom_procédure (pf 1 : type 1 , pf 2 : type 2 , ... , pfn: typen)
       **DEBUT**
          Traitement
       **FIN**
- **L’appel**

```
Nom_procédure (pe 1 , pe 2 , ... , pen)
```
- **Le mode de passage**

##### Si le mode de passage est par référence (par adresse), on ajoutera le symbole @ avant

```
le nom du paramètre.
```
```
N.B. : Une fonction retourne un seul résultat de type simple (entier, réel, booléen,
caractère, chaîne).
```
##### 8. Les opérateurs arithmétiques et logiques

```
Opérateurs arithmétiques Opérateurs de comparaison
Opération Opérateur Opération Opérateur
Somme +^ Egal^ =^
Soustraction - Différent ≠^
Multiplication *^ Strictement^ supérieur^ >^
Division / Supérieur ou égal ≥
Division entière Div Strictement inférieur <^
Reste de la division entière Mod^ Inférieur ou égal^ ≤^
```
(^) Appartient ( **entier** ,
**Opérateurs Logiques caractère** )^ ^
Négation **Non**^^^
Conjonction **Et**^^^
Disjonction **Ou**^^

##### 9. Les fonctions prédéfinies

###### a. Les fonctions sur les types numériques

```
Algorithmique Rôle^
Arrondi (x) Retourne l’entier le plus proche de la valeur de x.
RacineCarré (x) Retourne la racine carrée d’un nombre x positif.
Aléa (vi, vf) Retourne un entier aléatoire de l’intervalle [vi, vf].
Ent (x) Retourne la partie entière de x.
Abs (x) Retourne la valeur absolue de x
```

###### b. Les fonctions sur le type caractère

```
Algorithmique Rôle^
Ord (c) Retourne le code ASCII du caractère c.
```
```
Chr (d) Retourne le caractère dont le code ASCII est d.
```
###### c. Les fonctions sur le type chaînes de caractères

```
Algorithmique Rôle^
Long (ch) Retourne le nombre de caractères de la chaîne ch.
```
```
Pos (ch1, ch2)
Retourne la première position de la chaîne ch1 dans la
chaîne ch2, sinon elle retourne - 1
```
```
Convch (x)
Retourne la conversion d’un nombre x en une chaîne de
caractères.
```
```
Estnum (ch)
Retourne Vrai si la chaîne ch est convertible en une valeur
numérique, elle retourne Faux sinon.
```
```
Valeur (ch)
```
```
Retourne la conversion d’une chaîne ch en une valeur
numérique, si c’est possible.
```
```
Sous_chaine (ch, d, f)
Retourne une partie de la chaîne ch à partir de la position d
jusqu’à la position f (f exclue).
```
```
Effacer (ch, d, f)
Retourne une sous chaîne de ch après la suppression des
caractères de la position d à la position f (f exclue).
```
```
Majus (ch) Retourne l’équivalent de la chaîne ch en majuscule.
```
```
N.B. : On utilise l’opérateur + pour concaténer deux chaînes.
```
##### 10. Les fonctions et les procédures prédéfinies sur les fichiers

###### a. Les fichiers de données

```
Algorithmique Rôle^
```
```
Ouvrir ("Chemin\Nom_physique",
Nom_logique, "Mode")
```
```
Ouverture d’un fichier
```
- Mode d’ouverture :
    o " **rb** " : Lecture (pointer au début)
    o " **wb** " : Ecriture (création)
    o " **ab** " : Ajout à la fin du fichier
**Lire** (Nom_logique, Objet) Lecture d’un objet à partir d’un fichier

```
Ecrire (Nom_logique, Objet) Écriture d’un objet dans un fichier
```
```
Fin_fichier (Nom_logique)
Retourne Vrai si le pointeur est à la fin du
fichier sinon elle retourne Faux
```
```
Fermer (Nom_logique) Fermeture d’un fichier
```

###### b. Les fichiers textes

```
Algorithmique Rôle^
```
```
Ouvrir ("Chemin\Nom_physique",
Nom_logique, "Mode")
```
```
Ouverture d’un fichier
```
- Mode d’ouverture :
    o " **r** " : Lecture
    o " **w** " : Ecriture (création)
    o " **a** " : Ajout à la fin du fichier
**Lire** (Nom_logique, ch) Lecture de la totalité d’un fichier

```
Lire_ligne (Nom_logique, ch) Lecture d’une ligne depuis un fichier texte
```
```
Ecrire (Nom_logique, ch) Écriture de la chaîne ch dans un fichier texte
```
```
Ecrire_nl (Nom_logique, ch)
Écriture de la chaine ch dans un fichier texte
et retour à une nouvelle ligne
```
```
Fin_fichier (Nom_logique)
Retourne Vrai si le pointeur est à la fin du
fichier sinon elle retourne Faux
```
```
Fermer (Nom_logique) Fermeture d’un fichier
```

