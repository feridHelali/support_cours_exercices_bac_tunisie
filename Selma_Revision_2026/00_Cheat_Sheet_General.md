# Cheat Sheet Général — Informatique BAC 2025
> Sections : Mathématiques · Sciences Expérimentales · Sciences Techniques

---

## 1. Mind Map — Vue d'ensemble

```mermaid
mindmap
  root((BAC Info 2025))
    Algorithmique
      Types simples
        Entier
        Réel
        Booléen
        Chaîne de caractères
      Structures de contrôle
        Si / Sinon / FinSi
        Tant que / Fin Tant que
        Pour / Fin Pour
        Répéter / Jusqu'à
      Tableaux
        1D : Tableau de N Type
        2D : N lignes × M colonnes
      Fonctions & Modules
        Retourner valeur
        Passage par valeur vs var
    Python
      Types
        int · float · bool · str
      Conversions
        int() · float() · str() · bool()
      Fonctions utiles
        len() · input() · print()
      Chaînes
        ch[i] · ch.count() · ch + ch
    PyQt5
      loadUi
      label.setText()
      lineEdit.text()
      button.clicked.connect()
    Algorithmes clés
      Tri par sélection
      PGCD Euclide
      Test premier
      Palindrome
      Conversion binaire
      Nombres de Keith
```

---

## 2. Correspondances Algorithmique ↔ Python

| Algorithmique | Python |
|---|---|
| `Lire(x)` | `x = input()` ou `x = int(input())` |
| `Écrire("msg", x)` | `print("msg", x)` |
| `x ← expr` | `x = expr` |
| `Si cond Alors … FinSi` | `if cond:` |
| `Si … Sinon … FinSi` | `if … else:` |
| `Tant que cond Faire … Fin Tant que` | `while cond:` |
| `Pour i de a à b Faire` | `for i in range(a, b+1):` |
| `Pour i de a à b (Pas=-1)` | `for i in range(a, b-1, -1):` |
| `Répéter … Jusqu'à cond` | `while True: … if cond: break` |
| `Long(ch)` | `len(ch)` |
| `Convch(x)` | `str(x)` |
| `Valeur(ch)` | `int(ch)` |
| `T[i]` | `T[i]` |
| `n Mod k` | `n % k` |
| `n Div k` | `n // k` |
| `Retourner val` | `return val` |

---

## 3. Fonctions fondamentales — Algorithme + Python

### 3.1 Test de nombre premier

```
Fonction Premier (A : Entier) : Booléen
DEBUT
  Si A < 2 Alors
    Retourner Faux
  FinSi
  Pour i de 2 à A-1 Faire
    Si A Mod i = 0 Alors
      Retourner Faux
    FinSi
  Fin Pour
  Retourner Vrai
FIN
```

```python
def Premier(A):
    if A < 2:
        return False
    for i in range(2, A):
        if A % i == 0:
            return False
    return True
```

> **Piège :** Ne pas oublier le cas `A < 2` (0 et 1 ne sont pas premiers).

---

### 3.2 Palindrome (chaîne)

```
Fonction Palindrome (CH : Chaîne) : Booléen
DEBUT
  i ← 0
  j ← Long(CH) - 1
  Tant que (i < j) et (CH[i] = CH[j]) Faire
    i ← i + 1
    j ← j - 1
  Fin Tant que
  Retourner i ≥ j
FIN
```

```python
def Palindrome(CH):
    i = 0
    j = len(CH) - 1
    while (i < j) and (CH[i] == CH[j]):
        i += 1
        j -= 1
    return i >= j
```

> **Piège :** Convertir le nombre en `str` avant d'appeler `Palindrome(str(N))`.

---

### 3.3 PGCD (Algorithme d'Euclide)

```
Fonction PGCD (A, B : Entier) : Entier
DEBUT
  Tant que (B ≠ 0) Faire
    R ← A Mod B
    A ← B
    B ← R
  Fin Tant que
  Retourner A
FIN
```

```python
def PGCD(A, B):
    while B != 0:
        R = A % B
        A = B
        B = R
    return A
```

---

### 3.4 Conversion en binaire

```
Fonction Conv_binaire (N : Entier) : Chaîne
DEBUT
  Si N = 0 Alors
    Retourner "0"
  FinSi
  ch ← ""
  Tant que N ≠ 0 Faire
    r ← N Mod 2
    N ← N Div 2
    ch ← Convch(r) + ch
  Fin Tant que
  Retourner ch
FIN
```

```python
def Conv_binaire(N):
    if N == 0:
        return "0"
    ch = ""
    while N != 0:
        r = N % 2
        N = N // 2
        ch = str(r) + ch
    return ch
```

> **Piège :** La concaténation `str(r) + ch` place le nouveau bit **à gauche** — c'est voulu !

---

### 3.5 Tri par sélection (Selection Sort)

```
Module ORDONNER (V : TAB, N : Entier)
DEBUT
  Pour i de 0 à N-2 Faire
    k ← i
    Pour j de i+1 à N-1 Faire
      Si V[j] < V[k] Alors
        k ← j
      FinSi
    Fin Pour
    Si k ≠ i Alors
      Temp ← V[i]
      V[i] ← V[k]
      V[k] ← Temp
    FinSi
  Fin Pour
FIN
```

```python
def ordonner(V, N):
    for i in range(N - 1):
        k = i
        for j in range(i + 1, N):
            if V[j] < V[k]:
                k = j
        if k != i:
            V[i], V[k] = V[k], V[i]
```

---

## 4. Template PyQt5 — Structure de base

```python
from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication

def Play():
    # 1. Récupérer la saisie
    saisie = windows.lineEdit.text()
    # 2. Valider
    try:
        N = int(saisie)
    except ValueError:
        windows.label_result.setText("Saisie invalide")
        return
    # 3. Traiter et afficher
    if condition:
        windows.label_result.setText(f"Message résultat : {N}")
    else:
        windows.label_result.setText(f"Autre message")

app = QApplication([])
windows = loadUi("Interface.ui")
windows.show()
windows.btnVerifier.clicked.connect(Play)
app.exec_()
```

---

## 5. Pièges fréquents à éviter

```mermaid
mindmap
  root((Pièges BAC))
    Algorithme
      Oublier var dans les paramètres modifiés
      Indice de tableau hors bornes
      Boucle infinie si condition mal posée
      Confondre Mod et Div
    Python
      input() retourne str, pas int
      Indices Python commencent à 0
      Division entière avec // pas /
      Comparer strings sensible à la casse
    PyQt5
      .text() retourne toujours str
      Convertir avant de calculer
      Valider N avant tout traitement
    Keith Numbers
      Suite commence par les chiffres de nb
      Fenêtre glissante de k termes
      Arrêt quand dernier terme >= nb
    Nombres ronds
      Compter 0 ET 1 dans la conversion binaire
      Cas N=0 retourne "0" (1 zéro, 0 uns → pas rond)
```

---

## 6. Checklist avant de rendre la copie

- [ ] Déclaration de tous les objets (T.D.O.L)
- [ ] Nouveau type TAB déclaré si tableau utilisé
- [ ] Paramètres `var` pour les sorties de module
- [ ] Appel correct des fonctions (bon nombre d'arguments)
- [ ] Cas limites vérifiés (tableau vide, N=0, saisie invalide)
- [ ] Python : `int(input())` pour saisir un entier
- [ ] PyQt5 : connexion bouton → module `clicked.connect(Play)`
- [ ] Nom du fichier `.ui` correct dans `loadUi`
