# Google Slides - BAC Informatique STI (50 Slides)
## Synthèse Complète du Cours Programmation Web

---

### SECTION 1: INTRODUCTION (Slides 1-3)

**Slide 1: Titre**
- Titre: BAC Informatique STI - Programmation Web
- Sous-titre: HTML5, CSS3, JavaScript, SQL, PHP
- Auteur: Mr Slim REGAIEG
- Année: 2025-2026

**Slide 2: Vue d'Ensemble**
- 5 modules principaux
- Durée: Année scolaire complète
- Objectif: Préparation au BAC et projets web

**Slide 3: Plan du Cours**
1. HTML5 & CSS3 Fondamentaux
2. Animations CSS3
3. JavaScript
4. Base de Données
5. PHP

---

### SECTION 2: HTML5 (Slides 4-12)

**Slide 4: Qu'est-ce que HTML5?**
- Langage de balisage structurant
- Interprété par les navigateurs
- Avantages: sémantique, compatibilité, multimédia

**Slide 5: Structure de Base HTML5**
```
<!DOCTYPE html>
<html>
<head>...</head>
<body>...</body>
</html>
```

**Slide 6: Balises Sémantiques**
- `<header>`, `<nav>`, `<section>`
- `<article>`, `<aside>`, `<footer>`
- SEO et accessibilité améliorés

**Slide 7: Métadonnées (META)**
- `charset`: Encodage UTF-8
- `viewport`: Responsive design
- `description`: SEO
- `keywords`: Indexation

**Slide 8: Les Listes**
- `<ul>`: Liste non ordonnée (type="square", "circle")
- `<ol>`: Liste ordonnée (type="1", "A", "a", "I", "i")
- `<li>`: Élément de liste

**Slide 9: Tableaux HTML**
- `<table>`, `<tr>`, `<td>`, `<th>`
- Attributs: `colspan`, `rowspan`
- Fusion de cellules

**Slide 10: Formulaires - Structure**
```html
<form method="post" action="traitement.php">
  <input type="text" name="nom">
  <input type="submit" value="Envoyer">
</form>
```

**Slide 11: Types de Champs**
- text, password, email, number
- radio, checkbox, file
- select, textarea
- submit, reset

**Slide 12: Attributs Importants**
- `name`: Identifiant côté serveur
- `id`: Identifiant unique (CSS/JS)
- `placeholder`, `required`, `autofocus`
- `value`: Valeur par défaut

---

### SECTION 3: CSS3 (Slides 13-22)

**Slide 13: Introduction CSS3**
- Séparation contenu/présentation
- Cascading: priorité des styles
- 3 façons d'appliquer: inline, internal, external

**Slide 14: Sélecteurs CSS**
- Élément: `p`, `div`
- Classe: `.maClasse`
- ID: `#monId`
- Descendant: `div p`

**Slide 15: Propriétés de Texte**
- `color`, `font-family`, `font-size`
- `text-align`, `text-decoration`
- `font-weight`, `font-style`

**Slide 16: Propriétés de Boîte**
- `width`, `height`
- `padding`: Marge interne
- `margin`: Marge externe
- `border`: Bordure

**Slide 17: Modèle de Boîte (Box Model)**
```
Margin
 Border
  Padding
   Content
```
- `box-sizing: border-box`

**Slide 18: Liens CSS**
- `a:link` - Non visité
- `a:visited` - Visité
- `a:hover` - Survol
- `a:active` - Activation

**Slide 19: Positionnement**
- `static`, `relative`, `absolute`, `fixed`
- `float`, `clear`
- Flexbox: `display: flex`

**Slide 20: Transitions CSS**
```css
transition: property duration timing-function;
transition: width 0.3s ease-in-out;
```
- `transition-delay`, `transition-property`

**Slide 21: Transformations**
- `transform: rotate(45deg)`
- `transform: scale(1.5)`
- `transform: translate(50px, 100px)`
- `transform: skew(20deg)`

**Slide 22: Animations @keyframes**
```css
@keyframes monAnimation {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
animation: monAnimation 2s infinite;
```

---

### SECTION 4: JAVASCRIPT (Slides 23-32)

**Slide 23: Introduction JavaScript**
- Langage client-side
- Interactivité et dynamisme
- Manipulation du DOM

**Slide 24: Variables et Types**
```javascript
let nom = "John";     // String
let age = 25;         // Number
let estActif = true; // Boolean
let tab = [1, 2, 3]; // Array
```

**Slide 25: Opérateurs**
- Arithmétiques: `+`, `-`, `*`, `/`, `%`
- Comparaison: `==`, `===`, `!=`, `>`, `<`
- Logiques: `&&`, `||`, `!`

**Slide 26: Structures Conditionnelles**
```javascript
if (condition) {
  // code
} else if (autre) {
  // code
} else {
  // code
}
```

**Slide 27: Boucles**
```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}

while (condition) {
  // code
}
```

**Slide 28: Fonctions**
```javascript
function saluer(nom) {
  return "Bonjour " + nom;
}

// Fonction fléchée
const add = (a, b) => a + b;
```

**Slide 29: DOM - Sélection**
```javascript
document.getElementById("id");
document.getElementsByClassName("classe");
document.querySelector(".classe");
document.querySelectorAll("div");
```

**Slide 30: DOM - Modification**
```javascript
element.innerHTML = "<b>HTML</b>";
element.textContent = "Texte";
element.style.color = "red";
element.setAttribute("class", "maClasse");
```

**Slide 31: Événements**
```javascript
element.addEventListener("click", function() {
  alert("Cliqué!");
});

// Événements: click, mouseover, keydown, submit, load
```

**Slide 32: Validation Formulaire**
```javascript
function validerFormulaire() {
  let email = document.getElementById("email").value;
  if (email === "") {
    alert("Email requis!");
    return false;
  }
  return true;
}
```

---

### SECTION 5: BASE DE DONNÉES (Slides 33-42)

**Slide 33: Introduction SQL**
- SGBD: MySQL, PostgreSQL, SQLite
- Modèle relationnel
- Tables, lignes, colonnes

**Slide 34: Modélisation MCD**
- Entités et attributs
- Associations et cardinalités
- Clés primaires et étrangères

**Slide 35: Création de Tables (DDL)**
```sql
CREATE TABLE Eleve (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  age INT CHECK (age >= 0)
);
```

**Slide 36: Contraintes**
- `PRIMARY KEY`: Identifiant unique
- `FOREIGN KEY`: Référence
- `NOT NULL`: Obligatoire
- `UNIQUE`: Valeur unique
- `CHECK`: Condition

**Slide 37: Insertion (DML)**
```sql
INSERT INTO Eleve (nom, email, age)
VALUES ('Dupont', 'dupont@mail.com', 18);

-- Insertion multiple
INSERT INTO Eleve VALUES 
  (1, 'A', 'a@mail.com', 18),
  (2, 'B', 'b@mail.com', 19);
```

**Slide 38: Mise à Jour et Suppression**
```sql
UPDATE Eleve 
SET age = 19 
WHERE id = 1;

DELETE FROM Eleve 
WHERE age < 18;
```

**Slide 39: Sélection Simple (DQL)**
```sql
SELECT * FROM Eleve;
SELECT nom, email FROM Eleve WHERE age > 18;
SELECT DISTINCT ville FROM Eleve;
SELECT * FROM Eleve ORDER BY nom ASC;
SELECT * FROM Eleve LIMIT 10 OFFSET 5;
```

**Slide 40: Fonctions d'Agrégation**
```sql
SELECT COUNT(*) FROM Eleve;
SELECT AVG(age) FROM Eleve;
SELECT MAX(note), MIN(note) FROM Examen;
SELECT SUM(salaire) FROM Employe;
```

**Slide 41: Jointures**
```sql
-- INNER JOIN
SELECT e.nom, c.libelle
FROM Eleve e
INNER JOIN Classe c ON e.classe_id = c.id;

-- LEFT JOIN, RIGHT JOIN, FULL JOIN
```

**Slide 42: GROUP BY et HAVING**
```sql
SELECT classe_id, COUNT(*) AS nb_eleves
FROM Eleve
GROUP BY classe_id
HAVING COUNT(*) > 20;
```

---

### SECTION 6: PHP (Slides 43-48)

**Slide 43: Introduction PHP**
- Langage serveur-side
- Génération HTML dynamique
- Extension: `.php`

**Slide 44: Variables et Types PHP**
```php
$nom = "John";           // String
$age = 25;               // Integer
$prix = 19.99;           // Float
$actif = true;           // Boolean
$tab = [1, 2, 3];        // Array
$assoc = ["nom" => "A"]; // Array associatif
```

**Slide 45: Structures Conditionnelles**
```php
if ($age >= 18) {
    echo "Majeur";
} elseif ($age >= 16) {
    echo "Presque";
} else {
    echo "Mineur";
}

// Switch
switch ($note) {
    case 20: echo "Parfait"; break;
    default: echo "OK";
}
```

**Slide 46: Boucles PHP**
```php
// For
for ($i = 0; $i < 10; $i++) {
    echo $i;
}

// Foreach (tableaux)
foreach ($eleves as $eleve) {
    echo $eleve['nom'];
}

// While
while ($row = $result->fetch()) {
    echo $row['nom'];
}
```

**Slide 47: Fonctions PHP**
```php
function calculerMoyenne($notes) {
    $somme = array_sum($notes);
    $nb = count($notes);
    return $somme / $nb;
}

$moyenne = calculerMoyenne([15, 18, 12]);
```

**Slide 48: Connexion MySQL avec PDO**
```php
try {
    $pdo = new PDO(
        'mysql:host=localhost;dbname=ecole;charset=utf8',
        'user',
        'password'
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Requête préparée (sécurisée)
    $stmt = $pdo->prepare("SELECT * FROM eleve WHERE id = ?");
    $stmt->execute([$id]);
    $eleve = $stmt->fetch();
} catch (PDOException $e) {
    echo "Erreur: " . $e->getMessage();
}
```

---

### SECTION 7: SYNTHÈSE (Slides 49-50)

**Slide 49: Architecture Web Complète**
```
Client (Navigateur)
    ↕ HTTP
Serveur Web (Apache/Nginx)
    ↕
PHP (Traitement)
    ↕
MySQL (Base de données)
```

**Slide 50: Récapitulatif et Examen**
- Points clés à retenir
- Examens types dans le livre (Pages 169-209)
- Bonnes pratiques
- Questions fréquentes BAC

---

## Notes pour le Présentateur

### Timing Recommandé
- 2-3 minutes par slide
- Pause questions toutes les 10 slides
- Démonstration live après chaque section

### Ressources Visuelles à Ajouter
- Schémas explicatifs
- Captures d'écran de code
- Diagrammes de flux
- Exemples visuels de rendu

### Interactivité
- Exemples pratiques en live
- QCM rapide entre sections
- Exercices courts en classe

---

*Document généré pour BAC Informatique STI 2025-2026*
