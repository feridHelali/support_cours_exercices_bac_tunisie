# Correction — Épreuve Pratique d'Informatique
**Baccalauréat 2022 | Section : Économie et Gestion**

---

## PARTIE A — Base de données « DonSang » (12 points)

---

### A.1 — Création de la base de données (0,5 pt)

> Ouvrir **Microsoft Access** → *Nouvelle base de données vide* → nommer le fichier **DonSang** → l'enregistrer dans le dossier de travail (numéro d'inscription).

---

### A.2 — Création des tables et relations (4,5 pts)

#### Table `CENTRE`

| Champ | Type | Taille | Contrainte |
|---|---|---|---|
| **CodeCentre** (CP) | Texte | 4 | Clé primaire |
| NomCentre | Texte | 100 | Null interdit |
| AdresseCentre | Texte | 100 | — |
| TelCentre | Texte | 8 | — |

#### Table `DONNEUR`

| Champ | Type | Taille / Format | Contrainte |
|---|---|---|---|
| **CIN** (CP) | Texte | 8 | Clé primaire |
| NomPrenom | Texte | 50 | Null interdit |
| DateNais | Date/Heure | Date abrégée | Null interdit |
| Genre | Texte | 1 | Null interdit |
| GS | Texte | 3 | Null interdit |
| Poids | Numérique | Entier | Null interdit, ≥ 50 |
| TelDonneur | Texte | 8 | — |

#### Table `TYPEDON`

| Champ | Type | Taille | Contrainte |
|---|---|---|---|
| **CodeType** (CP) | Texte | 4 | Clé primaire |
| LibType | Texte | 100 | Null interdit |

#### Table `DON`

| Champ | Type | Taille / Format | Contrainte |
|---|---|---|---|
| **CIN#** (CE) | Texte | 8 | Clé étrangère → DONNEUR |
| **DateDon** | Date/Heure | Date abrégée | Null interdit |
| **CodeCentre#** (CE) | Texte | 4 | Clé étrangère → CENTRE |
| **CodeType#** (CE) | Texte | 4 | Clé étrangère → TYPEDON |
| Quantite | Numérique | Entier | Null interdit, 400 ≤ Quantite ≤ 600 |

> **Clé primaire composite de DON :** (CIN, DateDon)

#### Relations à créer (Outils → Relations)

```
DONNEUR (CIN) ──────< DON (CIN#)
CENTRE  (CodeCentre) ──────< DON (CodeCentre#)
TYPEDON (CodeType) ──────< DON (CodeType#)
```
> Cocher **Appliquer l'intégrité référentielle** pour chaque relation.

---

### A.3 — Remplissage des tables (2 pts)

#### CENTRE
| CodeCentre | NomCentre | AdresseCentre | TelCentre |
|---|---|---|---|
| C001 | C.N.T.S | Rue Djebel Lakhdar | 71573884 |
| C002 | C.R.T.S Sfax | Rue Majida Boulila | 74245462 |
| C003 | C.R.T.S Sousse | Rue Farhat Hached | 73214200 |

#### DONNEUR
| CIN | NomPrenom | DateNais | Genre | GS | Poids | TelDonneur |
|---|---|---|---|---|---|---|
| 04589765 | Saoussen AYADI | 03/06/1998 | F | A+ | 65 | 54289745 |
| 04879652 | Salma ABED | 22/10/1979 | F | O- | 76 | 25687451 |
| 05589746 | Samir GAZZEH | 23/05/1999 | M | AB+ | 60 | 95365897 |
| 05697423 | Ali CHAWECH | 18/12/1980 | M | O- | 69 | 51489736 |

#### TYPEDON
| CodeType | LibType |
|---|---|
| T001 | Sang total |
| T002 | Aphérèse |
| T003 | Plasma |
| T004 | Plaquette |

#### DON
| CIN | DateDon | CodeCentre | CodeType | Quantite |
|---|---|---|---|---|
| 04589765 | 03/01/2023 | C001 | T004 | 450 |
| 04879652 | 04/03/2023 | C001 | T001 | 400 |
| 05589746 | 18/04/2023 | C002 | T001 | 500 |
| 05697423 | 02/04/2023 | C003 | T001 | 600 |

---

### A.4 — Requêtes (4 pts)

#### R1 — Liste des donneurs (CIN, NomPrenom, TelDonneur)

```sql
SELECT CIN, NomPrenom, TelDonneur
FROM DONNEUR;
```

#### R2 — Dons du mois d'Avril 2023, triés par date croissante

```sql
SELECT DON.DateDon, DONNEUR.NomPrenom, DONNEUR.GS, DONNEUR.Poids,
       TYPEDON.LibType, DON.Quantite
FROM (DONNEUR INNER JOIN DON ON DONNEUR.CIN = DON.CIN)
     INNER JOIN TYPEDON ON DON.CodeType = TYPEDON.CodeType
WHERE Month(DON.DateDon) = 4 AND Year(DON.DateDon) = 2023
ORDER BY DON.DateDon ASC;
```

> **Résultat attendu :**
> | DateDon | NomPrenom | GS | Poids | LibType | Quantite |
> |---|---|---|---|---|---|
> | 02/04/2023 | Ali CHAWECH | O- | 69 | Sang total | 600 |
> | 18/04/2023 | Samir GAZZEH | AB+ | 60 | Sang total | 500 |

#### R3 — Quantité totale collectée par groupe sanguin

```sql
SELECT DONNEUR.GS, Sum(DON.Quantite) AS TotalQuantite
FROM DONNEUR INNER JOIN DON ON DONNEUR.CIN = DON.CIN
GROUP BY DONNEUR.GS;
```

> **Résultat attendu :**
> | GS | TotalQuantite |
> |---|---|
> | A+ | 450 |
> | AB+ | 500 |
> | O- | 1000 |

---

### A.5 — Export CSV (1 pt)

> Dans Access : **Données externes → Exporter → Fichier texte**
> - Nom du fichier : `donneur.csv`
> - Séparateur : **Point-virgule (;)**
> - Séparateur décimal : **Point (.)**
> - Encodage : **Unicode (UTF-8)**
> - ✅ Inclure les noms des champs sur la première ligne

---

## PARTIE B — Python / Pandas (8 points)

---

### B.1 — Création du fichier (0,5 pt)

> Ouvrir l'environnement de développement (ex. Thonny / IDLE) → créer un nouveau fichier → l'enregistrer sous le nom **`donsang.py`** dans le dossier de travail.

---

### B.2 — Scripts Pandas

#### a) Importation du fichier CSV dans un DataFrame `don` (1,25 pt)

```python
import pandas

don = pandas.read_csv("donneur.csv", sep=";")
```

---

#### b) Affichage du contenu du DataFrame (0,25 pt)

```python
print(don)
```

---

#### c) Ajout d'une nouvelle ligne (1 pt)

```python
don.loc[len(don)] = ["10253344", "Rim SALHI", "13/09/2000", "F", "O-", 51, "82111666"]
print(don)
```

> `len(don)` retourne l'indice suivant la dernière ligne — technique propre pour éviter les conflits d'index.

---

#### d) Affichage des donneurs universels (groupe O-) (1,5 pt)

```python
print(don[don["GS"] == "O-"]["NomPrenom"])
```

> **Résultat attendu :**
> ```
> 1    Salma ABED
> 3    Ali CHAWECH
> 4    Rim SALHI
> ```

---

#### e) Tri par NomPrenom dans un nouveau DataFrame `don_tri` (1,5 pt)

```python
don_tri = don.sort_values(by=["NomPrenom"], ascending=[True])
print(don_tri)
```

> **Résultat attendu (ordre alphabétique) :**
> ```
> Salma ABED
> Saoussen AYADI
> Ali CHAWECH
> Samir GAZZEH
> Rim SALHI
> ```

---

#### f) Graphique en barres rouges — Poids des donneurs (2 pts)

```python
import matplotlib.pyplot as plt

don.plot.bar(x="NomPrenom", y="Poids", title="Poids des donneurs", color="red")
plt.show()
```

> **Points de vigilance :**
> - L'alias `plt` est obligatoire pour l'appel `plt.show()`.
> - `color="red"` produit les barres rouges demandées.
> - Le titre est passé directement à `plot.bar()` via `title=`.

---

## Script complet `donsang.py`

```python
import pandas
import matplotlib.pyplot as plt

# a) Importation
don = pandas.read_csv("donneur.csv", sep=";")

# b) Affichage
print(don)

# c) Ajout d'une ligne
don.loc[len(don)] = ["10253344", "Rim SALHI", "13/09/2000", "F", "O-", 51, "82111666"]

# d) Donneurs universels (O-)
print(don[don["GS"] == "O-"]["NomPrenom"])

# e) Tri par NomPrenom
don_tri = don.sort_values(by=["NomPrenom"], ascending=[True])
print(don_tri)

# f) Graphique barres rouges
don.plot.bar(x="NomPrenom", y="Poids", title="Poids des donneurs", color="red")
plt.show()
```

---

*Correction rédigée conformément au programme officiel de la section Économie et Gestion — Baccalauréat tunisien.*