# Grille de notation détaillée & Erreurs fréquentes
**Baccalauréat 2022 | Informatique | Section : Économie et Gestion**

---

## PARTIE A — Base de données (12 pts)

---

### A.1 — Création de la base de données `0,5 pt`

| Critère | Points |
|---|---|
| Base créée, nommée exactement **DonSang**, enregistrée dans le bon dossier | 0,5 |

> ⚠️ **Erreur fréquente :** L'élève crée le fichier ailleurs que dans son dossier de travail (numéro d'inscription). Le fichier hors dossier = **0 pt**, même s'il est correct.

---

### A.2 — Tables et relations `4,5 pts`

#### Barème par table

| Élément évalué | Points |
|---|---|
| Table `CENTRE` — types, tailles, contrainte NomCentre | 0,5 |
| Table `DONNEUR` — types, tailles, toutes contraintes (Null + Poids ≥ 50) | 1,25 |
| Table `TYPEDON` — types, contrainte LibType | 0,5 |
| Table `DON` — types, contrainte Quantite (400–600), clé primaire composite | 1,25 |
| Relations (3 liaisons correctes + intégrité référentielle) | 1,0 |

#### Erreurs fréquentes

| # | Erreur | Conséquence |
|---|---|---|
| 1 | Oublier la **clé primaire composite** `(CIN, DateDon)` dans DON | −0,5 |
| 2 | Mettre `CIN` en NuméroAuto dans DONNEUR au lieu de **Texte(8)** | −0,25 par champ |
| 3 | Saisir la contrainte Poids comme `>50` au lieu de `>=50` | −0,25 |
| 4 | Contrainte Quantite saisie `>400` sans borne supérieure | −0,25 |
| 5 | Relations créées **sans** cocher "Appliquer l'intégrité référentielle" | −0,5 |
| 6 | Confondre **Clé étrangère** et **Clé primaire** dans DON | −0,5 |
| 7 | DateNais / DateDon en type **Texte** au lieu de **Date/Heure** | −0,25 par champ |

---

### A.3 — Remplissage des tables `2 pts`

| Critère | Points |
|---|---|
| Table CENTRE — 3 enregistrements corrects | 0,25 |
| Table DONNEUR — 4 enregistrements corrects | 0,75 |
| Table TYPEDON — 4 enregistrements corrects | 0,25 |
| Table DON — 4 enregistrements corrects | 0,75 |

#### Erreurs fréquentes

| # | Erreur | Conséquence |
|---|---|---|
| 1 | Saisir `C0 01` avec espace au lieu de `C001` → violation de clé étrangère | Enregistrement refusé par Access |
| 2 | Date saisie au mauvais format (ex. `1998-06-03`) | Access peut refuser ou mal interpréter |
| 3 | Oublier de saisir TYPEDON **avant** DON (contrainte d'intégrité) | Access bloquera la saisie dans DON |
| 4 | Poids saisi avec virgule (`65,0`) → Access accepte mais type incohérent | −0,25 |

> 💡 **Conseil pédagogique :** Rappeler l'**ordre de saisie** imposé par les clés étrangères : d'abord les tables parents (`CENTRE`, `DONNEUR`, `TYPEDON`) puis la table enfant (`DON`).

---

### A.4 — Requêtes `4 pts`

#### R1 `0,5 pt`

| Critère | Points |
|---|---|
| Les 3 champs affichés correctement (CIN, NomPrenom, TelDonneur) | 0,25 |
| Source correcte (table DONNEUR) | 0,25 |

**Erreur fréquente :** Ajouter des champs non demandés (GS, DateNais...) → pas de pénalité si les 3 champs demandés sont présents, mais montrer à l'élève la notion de **sélection minimale**.

---

#### R2 `2 pts`

| Critère | Points |
|---|---|
| Jointures correctes (DONNEUR ⋈ DON ⋈ TYPEDON) | 0,5 |
| Tous les champs demandés présents | 0,5 |
| Condition filtre : mois = 4 ET année = 2023 | 0,5 |
| Tri croissant sur DateDon | 0,5 |

**Erreurs fréquentes**

| # | Erreur | Conséquence |
|---|---|---|
| 1 | Filtre `DateDon Between #01/04/2023# And #30/04/2023#` — acceptable mais moins propre que `Month()/Year()` | 0 pénalité si résultat correct |
| 2 | Oublier une des deux jointures (ex. oublier TYPEDON) | −0,5 |
| 3 | Condition `DateDon = "Avril 2023"` — syntaxe incorrecte | −0,5 |
| 4 | Tri décroissant au lieu de croissant | −0,25 |
| 5 | Filtre sur mois seul sans l'année (`Month(DateDon)=4`) | −0,25 (résultat ambigu) |

---

#### R3 `1,5 pt`

| Critère | Points |
|---|---|
| Jointure DONNEUR ⋈ DON | 0,25 |
| Regroupement par GS (`GROUP BY`) | 0,5 |
| Fonction d'agrégation `Sum(Quantite)` correcte | 0,5 |
| Résultat correct (A+=450, AB+=500, O-=1000) | 0,25 |

**Erreurs fréquentes**

| # | Erreur | Conséquence |
|---|---|---|
| 1 | Utiliser `Count()` au lieu de `Sum()` | −0,5 |
| 2 | Oublier le `GROUP BY` → Access retourne une erreur | −0,5 |
| 3 | Regrouper par CIN au lieu de GS | −0,5 |

---

### A.5 — Export CSV `1 pt`

| Critère | Points |
|---|---|
| Fichier nommé exactement `donneur.csv` | 0,25 |
| Séparateur `;` correct | 0,25 |
| Encodage UTF-8 sélectionné | 0,25 |
| Noms des champs inclus en première ligne | 0,25 |

**Erreurs fréquentes**

| # | Erreur | Conséquence |
|---|---|---|
| 1 | Séparateur virgule `,` au lieu de `;` → problème à l'import Pandas | −0,25 |
| 2 | Encodage ANSI → caractères accentués corrompus (ex. `DateNaÃ¯s`) | −0,25 |
| 3 | Noms de champs absents → Pandas utilise la 1ère ligne comme données | −0,25 |

---

## PARTIE B — Python / Pandas (8 pts)

---

### B.1 — Création du fichier `0,5 pt`

| Critère | Points |
|---|---|
| Fichier créé, nommé **`donsang.py`**, enregistré dans le bon dossier | 0,5 |

> ⚠️ **Erreur fréquente :** Nommer le fichier `donsang.ipynb` (notebook Jupyter) ou `donsang.txt` — accepté seulement si l'environnement disponible l'impose.

---

### B.2.a — Import CSV `1,25 pt`

| Critère | Points |
|---|---|
| `import pandas` présent | 0,25 |
| Utilisation de `pandas.read_csv()` | 0,5 |
| Paramètre `sep=";"` correct | 0,25 |
| DataFrame nommé exactement **`don`** | 0,25 |

```python
# ✅ Correct
import pandas
don = pandas.read_csv("donneur.csv", sep=";")

# ❌ Erreurs fréquentes
don = pandas.read_excel("donneur.csv")        # mauvaise méthode
don = pandas.read_csv("donneur.csv")          # sep manquant → mauvais découpage
don = pandas.read_csv("donneur.csv", sep=",") # mauvais séparateur
```

---

### B.2.b — Affichage `0,25 pt`

| Critère | Points |
|---|---|
| `print(don)` ou `don` seul (si environnement interactif) | 0,25 |

---

### B.2.c — Ajout d'une ligne `1 pt`

| Critère | Points |
|---|---|
| Utilisation de `don.loc[...]` | 0,25 |
| Index correct (indice suivant le dernier) | 0,25 |
| Valeurs dans le bon ordre et bon type | 0,5 |

```python
# ✅ Correct
don.loc[len(don)] = ["10253344", "Rim SALHI", "13/09/2000", "F", "O-", 51, "82111666"]

# ❌ Erreurs fréquentes
don.loc[4] = [...]          # index hardcodé — fragile si données changent
don.loc[5] = [...]          # mauvais index
don.append([...])           # méthode dépréciée depuis Pandas 2.0
```

> 💡 `len(don)` retourne dynamiquement le bon indice — habitude professionnelle à inculquer.

---

### B.2.d — Donneurs universels (GS = "O-") `1,5 pt`

| Critère | Points |
|---|---|
| Filtrage booléen sur colonne GS | 0,75 |
| Affichage de la colonne **NomPrenom** uniquement | 0,75 |

```python
# ✅ Correct
print(don[don["GS"] == "O-"]["NomPrenom"])

# ❌ Erreurs fréquentes
print(don[don["GS"] == "O-"])               # affiche tout le DataFrame, pas seulement NomPrenom
print(don[don["GS"] = "O-"]["NomPrenom"])   # = au lieu de == (erreur de syntaxe)
print(don[don["GS"] == "O"]["NomPrenom"])   # oubli du tiret dans "O-"
```

---

### B.2.e — Tri et nouveau DataFrame `don_tri` `1,5 pt`

| Critère | Points |
|---|---|
| Utilisation de `sort_values()` | 0,5 |
| Paramètre `by=["NomPrenom"]` correct | 0,25 |
| `ascending=[True]` ou `ascending=True` | 0,25 |
| Résultat stocké dans un **nouveau DataFrame** nommé `don_tri` | 0,25 |
| Affichage de `don_tri` | 0,25 |

```python
# ✅ Correct
don_tri = don.sort_values(by=["NomPrenom"], ascending=[True])
print(don_tri)

# ❌ Erreurs fréquentes
don.sort_values(by=["NomPrenom"])                    # résultat non stocké dans don_tri
don_tri = don.sort_values(by=["NomPrenom"], ascending=[False])  # tri décroissant
don = don.sort_values(...)                           # écrase don au lieu de créer don_tri
```

---

### B.2.f — Graphique barres rouges `2 pts`

| Critère | Points |
|---|---|
| `import matplotlib.pyplot as plt` présent | 0,5 |
| Utilisation de `don.plot.bar()` | 0,5 |
| `x="NomPrenom"`, `y="Poids"` corrects | 0,5 |
| `title="Poids des donneurs"`, `color="red"` corrects | 0,25 |
| `plt.show()` présent | 0,25 |

```python
# ✅ Correct
import matplotlib.pyplot as plt
don.plot.bar(x="NomPrenom", y="Poids", title="Poids des donneurs", color="red")
plt.show()

# ❌ Erreurs fréquentes
don.plot.bar(x="NomPrenom", y="Poids", color="rouge")  # "rouge" invalide, doit être "red"
don.plot.line(...)                                      # mauvais type de graphique
# Oublier plt.show() → graphique ne s'affiche pas
# Oublier import matplotlib → NameError sur plt
```

---

## Récapitulatif des pièges majeurs à signaler en cours

| Piège | Partie | Impact |
|---|---|---|
| Ordre de saisie des tables (parents avant enfants) | A.3 | Blocage Access |
| `sep=";"` obligatoire dans `read_csv` | B.2.a | DataFrame mal découpé |
| `==` et non `=` dans le filtre Pandas | B.2.d | Erreur de syntaxe Python |
| `import matplotlib` séparé de Pandas | B.2.f | `plt.show()` inaccessible |
| Nommer le résultat `don_tri` et non écraser `don` | B.2.e | Perte du DataFrame original |
| Encodage UTF-8 à l'export CSV | A.5 | Caractères corrompus à l'import Python |

---

*Document à usage pédagogique interne — Session Baccalauréat 2022*