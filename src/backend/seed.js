import db from './db.js'
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', '..')

function read(p) {
  if (!existsSync(p)) { console.warn(`  ⚠  missing: ${p}`); return null }
  return readFileSync(p, 'utf-8')
}

function slug(str) {
  return str.toLowerCase()
    .replace(/[àáâã]/g,'a').replace(/[éèêë]/g,'e').replace(/[îï]/g,'i')
    .replace(/[ôõ]/g,'o').replace(/[ùûü]/g,'u').replace(/ç/g,'c')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')
}

function extractMermaid(content) {
  const blocks = []
  const re = /```mermaid\n([\s\S]*?)```/g
  let m
  while ((m = re.exec(content)) !== null) blocks.push(m[1].trim())
  return blocks
}

// Clear all tables for idempotent re-seeding
db.exec(`DELETE FROM mind_maps; DELETE FROM flash_cards; DELETE FROM cheat_sheets; DELETE FROM bacs;`)

// ── BACS ─────────────────────────────────────────────────────────────────────
const bacDefs = [
  { path: ['Selma_Revision_2026','01_BAC_I_Theorique_2025.md'],        title:'BAC I Théorique 2025',                  year:'2025', session:'theorique', level:'I'       },
  { path: ['Selma_Revision_2026','02_BAC_II_PremierPalindrome.md'],     title:'BAC II — Premier Palindrome',           year:'2025', session:'pratique',  level:'II'      },
  { path: ['Selma_Revision_2026','03_BAC_III_DiviseursUnitaires.md'],   title:'BAC III — Diviseurs Unitaires',         year:'2025', session:'pratique',  level:'III'     },
  { path: ['Selma_Revision_2026','04_BAC_IV_NombresRonds.md'],          title:'BAC IV — Nombres Ronds',                year:'2025', session:'pratique',  level:'IV'      },
  { path: ['Selma_Revision_2026','06_BAC_Pratique_2022_SemiPremier.md'],title:'BAC Pratique 2022 — Nombres Semi-Premiers', year:'2022', session:'pratique', level:'pratique'},
  { path: ['Selma_Revision_2026','05 _bac_theorique_2022.md','05_bac_th2022.md'], title:'BAC Théorique 2022', year:'2022', session:'theorique', level:'I' },
  { path: ['MarkdownFiles','bac_i.md'],   title:'BAC I Théorique — Corrigé',   year:'2024', session:'theorique', level:'I'   },
  { path: ['MarkdownFiles','bac_ii.md'],  title:'BAC II Théorique — Corrigé',  year:'2024', session:'theorique', level:'II'  },
  { path: ['MarkdownFiles','bac_iii.md'], title:'BAC III Théorique — Corrigé', year:'2024', session:'theorique', level:'III' },
  { path: ['MarkdownFiles','bac_iv.md'],  title:'BAC IV Théorique — Corrigé',  year:'2024', session:'theorique', level:'IV'  },
  { path: ['MarkdownFiles','bac-pratique-24052023-eco-8h.md'], title:'BAC Pratique Éco 2023', year:'2023', session:'pratique', level:'eco' },
]

const insertBac = db.prepare(`INSERT INTO bacs (title, slug, year, session, level, content, source_file) VALUES (?,?,?,?,?,?,?)`)
for (const b of bacDefs) {
  const fp = join(ROOT, ...b.path)
  const content = read(fp)
  if (content) insertBac.run(b.title, slug(b.title), b.year, b.session, b.level, content, fp)
}
console.log('✓ BACs')

// ── CHEAT SHEETS ─────────────────────────────────────────────────────────────
const sheetDefs = [
  { path:['Selma_Revision_2026','00_Cheat_Sheet_General.md'],              title:'Cheat Sheet Général BAC',          category:'Algorithmique & Python' },
  { path:['Output_Bac_STI','Cheat_Sheets','HTML5_Cheat_Sheet.md'],         title:'HTML5 Cheat Sheet',                category:'Web'                    },
  { path:['Output_Bac_STI','Cheat_Sheets','CSS3_Cheat_Sheet.md'],          title:'CSS3 Cheat Sheet',                 category:'Web'                    },
  { path:['MarkdownFiles','Convention_Algorithmique_2022-2023.md'],         title:'Convention Algorithmique',          category:'Algorithmique'          },
  { path:['MarkdownFiles','Implementation_Python_2022-2023.md'],            title:'Implémentation Python',             category:'Python'                 },
  { path:['Output_Bac_STI','MEMORY_BAC_STI.md'],                           title:'Mémoire Cours BAC STI',            category:'Web'                    },
  { path:['MarkdownFiles','Recueil_d_exercices_v2.md'],                     title:'Recueil d\'Exercices',             category:'Exercices'              },
]

const insertSheet = db.prepare(`INSERT INTO cheat_sheets (title, slug, category, content, source_file) VALUES (?,?,?,?,?)`)
for (const s of sheetDefs) {
  const fp = join(ROOT, ...s.path)
  const content = read(fp)
  if (content) insertSheet.run(s.title, slug(s.title), s.category, content, fp)
}
console.log('✓ Cheat sheets')

// ── MIND MAPS (extract mermaid blocks from Selma revision files) ──────────────
const mmSources = [
  { path:['Selma_Revision_2026','00_Cheat_Sheet_General.md'],          prefix:'Vue d\'ensemble',        category:'Algorithmique' },
  { path:['Selma_Revision_2026','01_BAC_I_Theorique_2025.md'],         prefix:'BAC I',                  category:'Algorithmique' },
  { path:['Selma_Revision_2026','02_BAC_II_PremierPalindrome.md'],     prefix:'BAC II — Palindrome',    category:'Algorithmique' },
  { path:['Selma_Revision_2026','03_BAC_III_DiviseursUnitaires.md'],   prefix:'BAC III — Diviseurs',    category:'Algorithmique' },
  { path:['Selma_Revision_2026','04_BAC_IV_NombresRonds.md'],          prefix:'BAC IV — Ronds',         category:'Algorithmique' },
  { path:['Selma_Revision_2026','06_BAC_Pratique_2022_SemiPremier.md'],prefix:'BAC Pratique — Semi-Premier', category:'Algorithmique' },
]

const diagramFiles = [
  { path:['Output_Bac_STI','Diagrams','Architecture_Web.mmd'],            title:'Architecture Web Client-Serveur',      category:'Web'            },
  { path:['Output_Bac_STI','Diagrams','MCD_Bibliotheque.mmd'],            title:'MCD — Base de Données Bibliothèque',   category:'Base de Données'},
  { path:['Output_Bac_STI','Diagrams','Flux_Traitement_Formulaire.mmd'],  title:'Flux Traitement Formulaire PHP',        category:'PHP'            },
]

const insertMM = db.prepare(`INSERT INTO mind_maps (title, slug, mermaid_code, source_file, category) VALUES (?,?,?,?,?)`)
let idx = 0

for (const src of mmSources) {
  const fp = join(ROOT, ...src.path)
  const content = read(fp)
  if (!content) continue
  extractMermaid(content).forEach((block, i) => {
    idx++
    const title = `${src.prefix} — Diagramme ${i + 1}`
    insertMM.run(title, `${slug(src.prefix)}-diagram-${idx}`, block, fp, src.category)
  })
}

for (const d of diagramFiles) {
  const fp = join(ROOT, ...d.path)
  const content = read(fp)
  if (content) insertMM.run(d.title, slug(d.title), content, fp, d.category)
}
console.log('✓ Mind maps')

// ── FLASH CARDS ───────────────────────────────────────────────────────────────
const cards = [
  {
    topic:'Nombre premier', category:'Algorithmes fondamentaux', difficulty:'medium',
    question:'Algorithme pour tester si N est premier ?',
    answer:`**Principe :** Diviser N par tous les entiers de 2 à √N. Si aucun ne divise N → premier.

\`\`\`python
import math
def est_premier(n):
    if n <= 1: return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0: return False
    return True
\`\`\`

**Cas particuliers :** 0 et 1 ne sont pas premiers.`,
  },
  {
    topic:'Nombre premier', category:'Algorithmes fondamentaux', difficulty:'hard',
    question:'Pourquoi tester jusqu\'à √N et pas N/2 ?',
    answer:`Si N = a × b et a > √N, alors b < √N — on l'aurait déjà trouvé.

**Complexité :** O(√N) au lieu de O(N). Pour N = 1 000 000 : 1000 tests au lieu de 500 000.`,
  },
  {
    topic:'Palindrome', category:'Algorithmes fondamentaux', difficulty:'easy',
    question:'Comment vérifier si une chaîne est un palindrome ?',
    answer:`\`\`\`python
def est_palindrome(ch):
    return ch == ch[::-1]
\`\`\`

**Méthode algorithmique :** Comparer \`ch[i]\` et \`ch[len-1-i]\` pour i de 0 à len//2.`,
  },
  {
    topic:'Premier Palindrome', category:'BAC II', difficulty:'medium',
    question:'Qu\'est-ce qu\'un nombre premier palindrome ? Exemples ?',
    answer:`Nombre **premier** ET dont les chiffres forment un **palindrome**.

Exemples : 2, 3, 5, 7, 11, 101, 131, 151, 181, 191

\`\`\`python
def est_premier_palindrome(n):
    return est_premier(n) and est_palindrome(str(n))
\`\`\``,
  },
  {
    topic:'PGCD', category:'Algorithmes fondamentaux', difficulty:'medium',
    question:'Écrire l\'algorithme d\'Euclide pour le PGCD.',
    answer:`\`\`\`python
def pgcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
\`\`\`

**Trace a=12, b=8 :**
| a | b |
|---|---|
| 12 | 8 |
| 8 | 4 |
| 4 | 0 |
→ PGCD = 4`,
  },
  {
    topic:'Conversion binaire', category:'Algorithmes fondamentaux', difficulty:'medium',
    question:'Comment convertir un entier N en binaire par divisions successives ?',
    answer:`\`\`\`python
def en_binaire(n):
    if n == 0: return "0"
    bits = []
    while n > 0:
        bits.append(str(n % 2))
        n //= 2
    return "".join(reversed(bits))
\`\`\`

**Exemple 13 :** 13÷2=6r**1** → 6÷2=3r**0** → 3÷2=1r**1** → 1÷2=0r**1** → **1101**`,
  },
  {
    topic:'Nombres ronds', category:'BAC IV', difficulty:'medium',
    question:'Qu\'est-ce qu\'un nombre rond ? Comment le détecter ?',
    answer:`Nombre dont la représentation binaire contient **autant de 0 que de 1**.

\`\`\`python
def est_nombre_rond(n):
    b = bin(n)[2:]          # enlève le préfixe "0b"
    return b.count("0") == b.count("1")
\`\`\`

Exemples : 10 → 1010 (2 zéros, 2 uns) ✓ | 6 → 110 (1 zéro, 2 uns) ✗`,
  },
  {
    topic:'Diviseurs unitaires', category:'BAC III', difficulty:'hard',
    question:'Définir "diviseur unitaire" et son algorithme de vérification.',
    answer:`D est diviseur unitaire de N si **D | N** et **PGCD(D, N/D) = 1**.

\`\`\`python
def est_div_unitaire(d, n):
    if n % d != 0: return False
    return pgcd(d, n // d) == 1
\`\`\`

**Exemple :** D=4, N=12 → 12÷4=3, PGCD(4,3)=1 → ✓ diviseur unitaire`,
  },
  {
    topic:'Nombre semi-premier', category:'BAC Pratique 2022', difficulty:'hard',
    question:'Qu\'est-ce qu\'un nombre semi-premier ? Algorithme de vérification.',
    answer:`N est semi-premier si **N = p × q** avec p et q deux nombres premiers.

Exemples : 4=2×2, 6=2×3, 9=3×3, 10=2×5, 15=3×5

\`\`\`python
def est_semi_premier(n):
    for p in range(2, n):
        if est_premier(p) and n % p == 0:
            return est_premier(n // p)
    return False
\`\`\``,
  },
  {
    topic:'PyQt5 — Structure', category:'Python & PyQt5', difficulty:'medium',
    question:'Quelle est la structure minimale d\'une application PyQt5 BAC ?',
    answer:`\`\`\`python
from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5 import uic
import sys

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        uic.loadUi("interface.ui", self)
        self.bouton.clicked.connect(self.traitement)

    def traitement(self):
        valeur = self.champ.text()
        self.resultat.setText(str(valeur))

app = QApplication(sys.argv)
window = MainWindow()
window.show()
sys.exit(app.exec_())
\`\`\``,
  },
  {
    topic:'PyQt5 — Widgets', category:'Python & PyQt5', difficulty:'easy',
    question:'Quels widgets PyQt5 sont au programme BAC et leurs méthodes clés ?',
    answer:`| Widget | Méthode lecture | Méthode écriture |
|--------|----------------|------------------|
| QLineEdit | \`.text()\` | \`.setText(v)\` |
| QLabel | — | \`.setText(v)\` |
| QPushButton | — | \`.clicked.connect(f)\` |
| QSpinBox | \`.value()\` | \`.setValue(n)\` |
| QListWidget | \`.currentItem().text()\` | \`.addItem(v)\` |
| QCheckBox | \`.isChecked()\` | \`.setChecked(b)\` |`,
  },
  {
    topic:'Tri par sélection', category:'Algorithmes fondamentaux', difficulty:'medium',
    question:'Écrire le tri par sélection. Quelle est sa complexité ?',
    answer:`\`\`\`python
def tri_selection(tab):
    n = len(tab)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if tab[j] < tab[min_idx]:
                min_idx = j
        tab[i], tab[min_idx] = tab[min_idx], tab[i]
    return tab
\`\`\`

**Complexité :** O(n²) dans tous les cas — pas sensible à l'ordre initial.`,
  },
  {
    topic:'Trace d\'exécution', category:'Algorithmique — Traces', difficulty:'easy',
    question:'Méthode pour effectuer la trace d\'une boucle POUR ?',
    answer:`1. Créer un tableau : une colonne par variable + colonne Résultat
2. Remplir ligne par ligne, noter les valeurs **après** chaque itération
3. Vérifier les conditions de sortie

**Exemple** — Factorielle de 4 :
| i | F |
|---|---|
| 1 | 1 |
| 2 | 2 |
| 3 | 6 |
| 4 | 24 |

Résultat : F = 24`,
  },
  {
    topic:'HTML5 — Sémantique', category:'Web — HTML5', difficulty:'easy',
    question:'Quelles balises sémantiques HTML5 sont essentielles pour le BAC ?',
    answer:`\`\`\`html
<header>   <!-- En-tête de page/section -->
<nav>      <!-- Navigation principale -->
<main>     <!-- Contenu principal (unique) -->
<section>  <!-- Section thématique -->
<article>  <!-- Contenu autonome -->
<aside>    <!-- Contenu secondaire/sidebar -->
<footer>   <!-- Pied de page -->
\`\`\`

**Formulaires HTML5 :**
\`<input type="email|number|date|range|color">\`
Attributs : \`required\`, \`placeholder\`, \`min\`, \`max\`, \`pattern\``,
  },
  {
    topic:'CSS3 — Animations', category:'Web — CSS3', difficulty:'medium',
    question:'Comment créer une animation CSS3 avec @keyframes ?',
    answer:`\`\`\`css
/* 1. Définir l'animation */
@keyframes glissement {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
}

/* 2. Appliquer */
.element {
  animation: glissement 0.5s ease-in-out forwards;
}
\`\`\`

**Propriétés :** \`duration\` | \`timing-function\` | \`delay\` | \`iteration-count\` | \`fill-mode\``,
  },
  {
    topic:'SQL', category:'Base de Données', difficulty:'medium',
    question:'Requêtes SQL fondamentales pour le BAC (SELECT, JOIN, GROUP BY)',
    answer:`\`\`\`sql
-- Sélection avec filtre
SELECT nom, prenom FROM eleves WHERE moyenne >= 10;

-- Jointure interne
SELECT e.nom, c.libelle
FROM eleves e INNER JOIN classes c ON e.classe_id = c.id;

-- Agrégat + groupe
SELECT classe, COUNT(*), AVG(moyenne)
FROM eleves GROUP BY classe HAVING AVG(moyenne) > 12;

-- Insertion / Modification / Suppression
INSERT INTO eleves (nom, moyenne) VALUES ('Ben Ali', 14.5);
UPDATE eleves SET moyenne = 15 WHERE id = 3;
DELETE FROM eleves WHERE moyenne < 5;
\`\`\``,
  },
  {
    topic:'PHP — Formulaires', category:'Web — PHP', difficulty:'medium',
    question:'Comment traiter un formulaire HTML en PHP (POST) ?',
    answer:`\`\`\`php
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom   = htmlspecialchars(trim($_POST["nom"]));
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);

    if ($email !== false && !empty($nom)) {
        echo "Bienvenue, " . $nom;
    } else {
        echo "Données invalides.";
    }
}
?>
<form method="POST">
    <input type="text"  name="nom"   required>
    <input type="email" name="email" required>
    <button type="submit">Envoyer</button>
</form>
\`\`\``,
  },
  {
    topic:'JavaScript — DOM', category:'Web — JavaScript', difficulty:'medium',
    question:'Comment sélectionner et manipuler des éléments DOM en JavaScript ?',
    answer:`\`\`\`javascript
// Sélection
const elem  = document.getElementById("monId");
const elems = document.querySelectorAll(".maClasse");

// Contenu
elem.textContent = "Nouveau texte";       // texte seul
elem.innerHTML   = "<b>Gras</b>";         // HTML

// Style & classes
elem.style.color = "red";
elem.classList.add("active");
elem.classList.toggle("visible");

// Événements
elem.addEventListener("click", () => {
    alert("Clic !");
});
\`\`\``,
  },
  {
    topic:'Pièges Python BAC', category:'Python & PyQt5', difficulty:'easy',
    question:'Quels sont les 5 pièges les plus fréquents en Python au BAC ?',
    answer:`1. **\`input()\` retourne une chaîne** → toujours faire \`int(input())\` ou \`float(input())\`
2. **\`range(1, n+1)\`** pour inclure n dans la boucle
3. **Division entière** : \`//\` pour quotient, \`%\` pour reste, \`/\` pour flottant
4. **Indentation stricte** : 4 espaces, jamais de mélange espaces/tabulations
5. **\`int("3.5")\` → Erreur** : passer par \`int(float("3.5"))\`

**Bonus :** Ne pas oublier \`return\` dans les fonctions !`,
  },
  {
    topic:'MCD / MLD', category:'Base de Données', difficulty:'hard',
    question:'Comment passer d\'un MCD à un MLD (modèle relationnel) ?',
    answer:`**Règles de transformation :**

1. **Entité** → Table (colonnes = attributs, clé primaire = identifiant)
2. **Association 1-N** → Clé étrangère côté N
   - Client(1,N) — passe — Commande → \`commande.client_id\`
3. **Association N-M** → Table de jointure avec les 2 clés étrangères
   - Étudiant — suit — Cours → \`inscription(etudiant_id, cours_id)\`
4. **Association 1-1** → Clé étrangère dans l'une des 2 tables (côté obligatoire)

**Notation MLD :** Table(**PK** souligné, attributs, #FK)`,
  },
]

const insertCard = db.prepare(`INSERT INTO flash_cards (topic, question, answer, category, difficulty) VALUES (?,?,?,?,?)`)
for (const c of cards) insertCard.run(c.topic, c.question, c.answer, c.category, c.difficulty)
console.log(`✓ ${cards.length} flash cards`)

console.log('\n🎉 Database ready!')
