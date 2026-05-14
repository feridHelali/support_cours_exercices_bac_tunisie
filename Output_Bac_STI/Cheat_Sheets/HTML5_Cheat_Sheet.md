# Cheat Sheet - HTML5
## Référence Rapide BAC Informatique STI

---

## Structure de Base

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de la page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Contenu visible -->
</body>
</html>
```

---

## Balises Sémantiques

| Balise | Description | Usage |
|--------|-------------|-------|
| `<header>` | En-tête de page/section | Logo, navigation principale |
| `<nav>` | Navigation | Menu, liens de navigation |
| `<section>` | Section thématique | Chapitre, partie |
| `<article>` | Article autonome | Post blog, actualité |
| `<aside>` | Contenu annexe | Barre latérale, publicité |
| `<footer>` | Pied de page | Copyright, liens secondaires |
| `<main>` | Contenu principal | Une seule par page |

---

## Texte et Titres

```html
<h1>Titre principal</h1>      <!-- Un seul par page -->
<h2>Sous-titre</h2>
<h3>Titre de niveau 3</h3>    <!-- Jusqu'à h6 -->

<p>Paragraphe de texte</p>
<br>                      <!-- Saut de ligne -->
<hr>                      <!-- Ligne horizontale -->

<strong>Gras</strong>
<em>Italique</em>
<mark>Surligné</mark>
<sub>Indice</sub>
<sup>Exposant</sup>
```

---

## Liens

```html
<!-- Lien externe -->
<a href="https://example.com">Texte du lien</a>

<!-- Lien interne -->
<a href="page.html">Aller à la page</a>
<a href="#section1">Aller à l'ancre</a>

<!-- Lien avec target -->
<a href="url" target="_blank">Nouvel onglet</a>  <!-- _self, _parent, _top -->

<!-- Ancre cible -->
<section id="section1">...</section>
<a name="ancre"></a>        <!-- Ancien -->
```

---

## Images

```html
<img src="image.jpg" alt="Description" 
     width="300" height="200">

<!-- Image cliquable -->
<a href="lien.html">
    <img src="image.jpg" alt="Description">
</a>

<!-- Figure avec légende -->
<figure>
    <img src="photo.jpg" alt="Photo">
    <figcaption>Légende de l'image</figcaption>
</figure>
```

---

## Listes

```html
<!-- Liste non ordonnée -->
<ul type="disc">        <!-- circle, square -->
    <li>Élément 1</li>
    <li>Élément 2</li>
</ul>

<!-- Liste ordonnée -->
<ol type="1">          <!-- A, a, I, i -->
    <li>Premier</li>
    <li>Deuxième</li>
</ol>

<!-- Liste de définitions -->
<dl>
    <dt>Terme</dt>
    <dd>Définition</dd>
</dl>

<!-- Liste imbriquée -->
<ul>
    <li>Item 1
        <ul>
            <li>Sous-item</li>
        </ul>
    </li>
</ul>
```

---

## Tableaux

```html
<table border="1">
    <thead>
        <tr>              <!-- Ligne -->
            <th>En-tête 1</th>  <!-- Cellule en-tête -->
            <th>En-tête 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Donnée 1</td>  <!-- Cellule -->
            <td>Donnée 2</td>
        </tr>
    </tbody>
</table>
```

**Fusion de cellules:**
```html
<td colspan="2">Occupe 2 colonnes</td>
<td rowspan="2">Occupe 2 lignes</td>
```

---

## Formulaires

```html
<form action="traitement.php" method="POST">
    <!-- Champ texte -->
    <input type="text" name="nom" 
           placeholder="Votre nom" 
           required>
    
    <!-- Mot de passe -->
    <input type="password" name="mdp">
    
    <!-- Email -->
    <input type="email" name="email">
    
    <!-- Nombre -->
    <input type="number" min="0" max="100">
    
    <!-- Date -->
    <input type="date" name="date">
    
    <!-- Fichier -->
    <input type="file" name="document">
    
    <!-- Boutons radio -->
    <input type="radio" name="sexe" value="M" checked> Homme
    <input type="radio" name="sexe" value="F"> Femme
    
    <!-- Cases à cocher -->
    <input type="checkbox" name="sport" value="foot"> Foot
    <input type="checkbox" name="sport" value="tennis"> Tennis
    
    <!-- Liste déroulante -->
    <select name="pays">
        <option value="tn">Tunisie</option>
        <option value="fr" selected>France</option>
    </select>
    
    <!-- Zone de texte -->
    <textarea name="message" rows="4" cols="50">
Texte par défaut
    </textarea>
    
    <!-- Boutons -->
    <input type="submit" value="Envoyer">
    <input type="reset" value="Annuler">
</form>
```

---

## Iframe et Médias

```html
<!-- Intégration page externe -->
<iframe src="https://www.google.com" 
        width="600" height="400"
        title="Description"></iframe>

<!-- Vidéo -->
<video width="320" height="240" controls>
    <source src="film.mp4" type="video/mp4">
    Votre navigateur ne supporte pas la vidéo.
</video>

<!-- Audio -->
<audio controls>
    <source src="musique.mp3" type="audio/mpeg">
</audio>
```

---

## Attributs Importants

| Attribut | Description | Exemple |
|----------|-------------|---------|
| `id` | Identifiant unique | `<div id="header">` |
| `class` | Classe CSS | `<p class="important">` |
| `name` | Nom (formulaires) | `<input name="email">` |
| `value` | Valeur | `<input value="10">` |
| `placeholder` | Texte indicatif | `<input placeholder="Nom">` |
| `required` | Champ obligatoire | `<input required>` |
| `disabled` | Désactivé | `<input disabled>` |
| `readonly` | Lecture seule | `<input readonly>` |
| `hidden` | Champ caché | `<input type="hidden">` |
| `autofocus` | Focus automatique | `<input autofocus>` |

---

## Métadonnées (Head)

```html
<head>
    <!-- Encodage -->
    <meta charset="UTF-8">
    
    <!-- Viewport (responsive) -->
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0">
    
    <!-- Description SEO -->
    <meta name="description" 
          content="Description du site">
    
    <!-- Mots-clés -->
    <meta name="keywords" 
          content="html, css, web">
    
    <!-- Auteur -->
    <meta name="author" content="Nom Auteur">
    
    <!-- Rafraîchissement -->
    <meta http-equiv="refresh" content="30">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    
    <!-- CSS externe -->
    <link rel="stylesheet" href="style.css">
    
    <!-- JavaScript -->
    <script src="script.js" defer></script>
</head>
```

---

## Caractères Spéciaux

| Caractère | Code HTML | Description |
|-----------|-----------|-------------|
| < | `&lt;` | Inférieur à |
| > | `&gt;` | Supérieur à |
| & | `&amp;` | Esperluette |
| " | `&quot;` | Guillemet |
| ' | `&apos;` | Apostrophe |
| © | `&copy;` | Copyright |
| ® | `&reg;` | Marque déposée |
| € | `&euro;` | Euro |
|   | `&nbsp;` | Espace insécable |

---

## Validation W3C

**Outils:**
- https://validator.w3.org/
- Extension navigateur

**Bonnes pratiques:**
- Toujours fermer les balises
- Minuscules pour balises
- Guillemets pour attributs
- Alt obligatoire sur images
- Structure sémantique

---

*Cheat Sheet BAC Informatique STI - HTML5*
