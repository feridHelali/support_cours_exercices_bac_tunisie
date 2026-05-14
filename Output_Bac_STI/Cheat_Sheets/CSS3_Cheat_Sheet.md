# Cheat Sheet - CSS3
## Référence Rapide BAC Informatique STI

---

## Syntaxe de Base

```css
selecteur {
    propriete: valeur;
    propriete2: valeur2;
}

/* Exemple */
h1 {
    color: blue;
    font-size: 24px;
}
```

---

## Sélecteurs

```css
/* Élément */
p { }

/* Classe */
.maClasse { }

/* ID */
#monId { }

/* Descendant */
div p { }        /* tous les p dans div */

/* Enfant direct */
div > p { }      /* p directement dans div */

/* Frère adjacent */
h1 + p { }       /* p juste après h1 */

/* Frère général */
h1 ~ p { }       /* tous les p après h1 */

/* Attribut */
[input] { }           /* a un attribut */
[input="text"] { }    /* valeur exacte */
[href^="https"] { }   /* commence par */
[href$=".pdf"] { }    /* termine par */
[href*="google"] { }  /* contient */

/* Pseudo-classes */
:hover { }      /* survol */
:active { }     /* clic */
:focus { }      /* focus */
:visited { }    /* lien visité */
:first-child { }/* premier enfant */
:last-child { } /* dernier enfant */
:nth-child(n) { }/* n-ième enfant */
:not(.classe) { }/* exclusion */
```

---

## Couleurs

```css
/* Nom */
color: red;
color: transparent;

/* Hexadécimal */
color: #FF0000;      /* Rouge */
color: #F00;         /* Court */
color: #FF000080;    /* Avec alpha */

/* RGB/RGBA */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);

/* HSL/HSLA */
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);
```

**Couleurs web communes:**
| Couleur | Hex | RGB |
|---------|-----|-----|
| Noir | #000000 | rgb(0,0,0) |
| Blanc | #FFFFFF | rgb(255,255,255) |
| Rouge | #FF0000 | rgb(255,0,0) |
| Vert | #00FF00 | rgb(0,255,0) |
| Bleu | #0000FF | rgb(0,0,255) |
| Jaune | #FFFF00 | rgb(255,255,0) |
| Orange | #FFA500 | rgb(255,165,0) |

---

## Texte

```css
/* Police */
font-family: Arial, sans-serif;
font-family: 'Times New Roman', serif;

/* Taille */
font-size: 16px;
font-size: 1.2em;
font-size: 120%;

/* Style */
font-style: italic;    /* normal, italic, oblique */
font-weight: bold;     /* normal, bold, 100-900 */

/* Décoration */
text-decoration: underline;
text-decoration: line-through;
text-decoration: none;

/* Alignement */
text-align: left;      /* right, center, justify */
vertical-align: middle; /* top, bottom, baseline */

/* Transformation */
text-transform: uppercase; /* lowercase, capitalize */

/* Ombre portée */
text-shadow: 2px 2px 4px #000000;
/* x-offset, y-offset, blur, couleur */

/* Espacement */
letter-spacing: 2px;
word-spacing: 4px;
line-height: 1.5;

/* Retour à la ligne */
white-space: nowrap;   /* pas de retour */
white-space: pre-wrap; /* conserve espaces */
```

---

## Box Model (Modèle de Boîte)

```
┌─────────────────────────────┐
│          Margin             │  ← Marge externe
│   ┌─────────────────────┐   │
│   │      Border         │   │  ← Bordure
│   │   ┌─────────────┐   │   │
│   │   │   Padding   │   │   │  ← Marge interne
│   │   │   ┌─────┐   │   │   │
│   │   │   │Content│   │   │   │  ← Contenu
│   │   │   └─────┘   │   │   │
│   │   └─────────────┘   │   │
│   └─────────────────────┘   │
└─────────────────────────────┘
```

```css
/* Taille */
width: 300px;
height: 200px;
max-width: 100%;
min-height: 100px;

/* Box sizing */
box-sizing: content-box;  /* défaut */
box-sizing: border-box;   /* padding/border inclus */

/* Margin */
margin: 10px;                    /* tous côtés */
margin: 10px 20px;               /* haut/bas, gauche/droite */
margin: 10px 20px 15px;          /* haut, gauche/droite, bas */
margin: 10px 20px 15px 25px;     /* haut, droite, bas, gauche */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 15px;
margin-left: 25px;
margin: auto;                    /* centrer */

/* Padding */
padding: 10px;
padding: 10px 20px;
padding-top: 10px;
/* etc. (même logique que margin) */

/* Bordure */
border: 2px solid #000000;       /* largeur style couleur */
border-width: 2px;
border-style: solid;             /* dashed, dotted, double, groove */
border-color: #000000;
border-radius: 10px;             /* arrondi */
border-radius: 50%;              /* cercle */

/* Bordures individuelles */
border-top: 2px solid black;
border-top-left-radius: 10px;

/* Ombre de boîte */
box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
/* x-offset, y-offset, blur, couleur */
box-shadow: inset 0 0 10px #000; /* ombre interne */
```

---

## Display et Positionnement

```css
/* Display */
display: block;       /* prend toute la largeur */
display: inline;      /* dans le flux texte */
display: inline-block;/* mix des deux */
display: none;        /* masqué */
display: flex;        /* flexbox */
display: grid;        /* grid layout */

/* Visibilité */
visibility: hidden;   /* invisible mais prend de la place */

/* Positionnement */
position: static;     /* défaut (flux normal) */
position: relative;   /* relatif à sa position */
position: absolute;   /* relatif au parent positionné */
position: fixed;      /* fixe dans la fenêtre */
position: sticky;     /* colle au défilement */

/* Coordonnées (avec relative, absolute, fixed) */
top: 10px;
right: 20px;
bottom: 15px;
left: 25px;

/* Z-index (profondeur) */
z-index: 10;          /* plus élevé = au-dessus */

/* Float */
float: left;          /* flotte à gauche */
float: right;         /* flotte à droite */
float: none;          /* annule */

/* Clear */
clear: both;          /* évite les flottants */
```

---

## Flexbox

```css
/* Conteneur flex */
.container {
    display: flex;
    flex-direction: row;         /* row, row-reverse, column, column-reverse */
    flex-wrap: wrap;             /* nowrap, wrap, wrap-reverse */
    flex-flow: row wrap;         /* raccourci direction + wrap */
    
    justify-content: center;     /* alignement horizontal */
    /* flex-start, flex-end, center, space-between, space-around, space-evenly */
    
    align-items: center;         /* alignement vertical */
    /* flex-start, flex-end, center, stretch, baseline */
    
    align-content: center;       /* alignement multi-lignes */
    gap: 10px;                   /* espacement entre éléments */
    row-gap: 15px;
    column-gap: 20px;
}

/* Éléments flex */
.item {
    flex-grow: 1;                /* capacité à grandir */
    flex-shrink: 0;              /* capacité à rétrécir */
    flex-basis: 200px;           /* taille de base */
    flex: 1 0 200px;             /* raccourci grow shrink basis */
    align-self: flex-end;        /* alignement individuel */
    order: 1;                    /* ordre d'affichage */
}
```

---

## Grid Layout

```css
/* Conteneur grid */
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;    /* 3 colonnes égales */
    grid-template-columns: repeat(3, 1fr);   /* équivalent */
    grid-template-columns: 100px 1fr 2fr;  /* mix fixe/flexible */
    
    grid-template-rows: auto 100px;          /* lignes */
    
    gap: 10px;                               /* espacement */
    
    justify-items: center;                   /* alignement horizontal */
    align-items: center;                     /* alignement vertical */
    place-items: center;                     /* raccourci des deux */
    
    justify-content: center;               /* alignement conteneur */
}

/* Éléments grid */
.item {
    grid-column: 1 / 3;          /* s'étend sur 2 colonnes */
    grid-row: 1 / 2;             /* première ligne */
    grid-area: 1 / 1 / 2 / 3;    /* row-start / col-start / row-end / col-end */
    justify-self: end;           /* alignement individuel */
}
```

---

## Transitions

```css
/* Définition */
transition: propriete duree timing-function delai;

/* Exemples */
transition: width 0.3s ease;
transition: all 0.5s ease-in-out;
transition: opacity 1s linear 0.5s;  /* avec délai */

/* Séparées */
transition-property: width, height;
transition-duration: 0.3s;
transition-timing-function: ease;
transition-delay: 0s;

/* Timing functions */
/* ease, linear, ease-in, ease-out, ease-in-out */
/* cubic-bezier(0.4, 0, 0.2, 1) */
```

---

## Transformations

```css
/* Translation (déplacement) */
transform: translate(50px, 100px);
transform: translateX(50px);
transform: translateY(100px);

/* Rotation */
transform: rotate(45deg);
transform: rotateX(45deg);
transform: rotateY(45deg);
transform: rotateZ(45deg);

/* Mise à l'échelle */
transform: scale(1.5);           /* zoom 150% */
transform: scaleX(2);
transform: scaleY(0.5);

/* Inclinaison */
transform: skew(20deg);
transform: skewX(20deg);
transform: skewY(10deg);

/* Combinaisons */
transform: translate(50px) rotate(45deg) scale(1.2);

/* Point d'origine */
transform-origin: center;
transform-origin: top left;
transform-origin: 50% 50%;

/* Perspective 3D */
transform: perspective(500px) rotateY(45deg);
```

---

## Animations (@keyframes)

```css
/* Définition de l'animation */
@keyframes monAnimation {
    from {                    /* ou 0% */
        opacity: 0;
        transform: translateY(-20px);
    }
    50% {
        opacity: 0.5;
    }
    to {                      /* ou 100% */
        opacity: 1;
        transform: translateY(0);
    }
}

/* Application */
.element {
    animation: monAnimation 2s ease-in-out 0.5s infinite alternate;
    /* nom | duree | timing | delai | iteration | direction */
}

/* Propriétés séparées */
animation-name: monAnimation;
animation-duration: 2s;
animation-timing-function: ease-in-out;
animation-delay: 0.5s;
animation-iteration-count: infinite;    /* ou nombre */
animation-direction: alternate;          /* normal, reverse, alternate-reverse */
animation-fill-mode: forwards;           /* none, forwards, backwards, both */
animation-play-state: paused;             /* running, paused */
```

---

## Media Queries (Responsive)

```css
/* Mobile first */
/* Styles par défaut (mobile) */

/* Tablette */
@media screen and (min-width: 768px) {
    /* Styles pour tablette */
}

/* Desktop */
@media screen and (min-width: 1024px) {
    /* Styles pour desktop */
}

/* Grand écran */
@media screen and (min-width: 1200px) {
    /* Styles pour grand écran */
}

/* Orientation */
@media screen and (orientation: landscape) {
    /* Mode paysage */
}

/* Impression */
@media print {
    /* Styles pour impression */
    body { background: white; }
}
```

**Breakpoints courants:**
- Mobile: < 768px
- Tablette: 768px - 1024px
- Desktop: > 1024px

---

## Liens CSS

```css
/* Non visité */
a:link {
    color: blue;
    text-decoration: none;
}

/* Visité */
a:visited {
    color: purple;
}

/* Survol */
a:hover {
    color: red;
    text-decoration: underline;
}

/* Clic actif */
a:active {
    color: green;
}

/* Focus (accessibilité) */
a:focus {
    outline: 2px solid orange;
}
```

---

## Variables CSS (Custom Properties)

```css
:root {
    --couleur-primaire: #3498db;
    --couleur-secondaire: #2ecc71;
    --espacement: 16px;
    --bordure-radius: 8px;
}

/* Utilisation */
.bouton {
    background-color: var(--couleur-primaire);
    padding: var(--espacement);
    border-radius: var(--bordure-radius);
}

/* Valeur par défaut */
element {
    color: var(--couleur-inexistante, black);
}
```

---

## Unités de Mesure

| Unité | Description | Usage |
|-------|-------------|-------|
| px | Pixels | Tailles fixes |
| % | Pourcentage | Responsive |
| em | Relatif au parent | Texte, espacements |
| rem | Relatif à html | Consistance globale |
| vw | % de largeur fenêtre | Responsive |
| vh | % de hauteur fenêtre | Responsive |
| cm, mm, in | Métriques | Impression |
| pt | Points | Impression |

---

## Bonnes Pratiques

1. **Utiliser des classes** plutôt que IDs pour CSS
2. **Éviter !important** (sauf cas exceptionnels)
3. **Organiser** par composants ou sections
4. **Commenter** le code complexe
5. **Tester** sur plusieurs navigateurs
6. **Minifier** en production
7. **Préfixer** anciens navigateurs (-webkit-, -moz-)

---

*Cheat Sheet BAC Informatique STI - CSS3*
