# Exercices de Synthèse - BAC Informatique STI
## Préparation Examen BAC - Niveau Challenge

---

## EXERCICE 1: Application Web Complète "Gestion Bibliothèque" (45 points)

### Contexte
Vous devez développer une application web complète de gestion de bibliothèque scolaire utilisant HTML5, CSS3, JavaScript, PHP et MySQL.

### Partie A: Structure et Mise en Forme (10 points)

**Question 1.1** (3 points)
Créez la structure HTML5 sémantique d'une page "index.html" pour la bibliothèque contenant:
- Un en-tête avec logo et navigation
- Une section principale affichant les livres récents
- Une barre latérale avec formulaire de recherche
- Un pied de page avec informations de contact
- Utilisation appropriée des balises sémantiques HTML5

**Question 1.2** (4 points)
Écrivez le CSS externe "style.css" avec:
- Une mise en page responsive utilisant Flexbox ou Grid
- Un menu de navigation horizontal avec effet hover
- Des cartes de livres avec ombre et transition au survol
- Un formulaire de recherche stylisé
- Media queries pour adaptation mobile (<768px)

**Question 1.3** (3 points)
Créez une animation CSS pour:
- Faire apparaître progressivement les livres au chargement de la page
- Ajouter une transformation 3D au survol des cartes
- Durée: 0.5s, timing: ease-in-out

---

### Partie B: Interactivité JavaScript (10 points)

**Question 2.1** (3 points)
Écrivez un script JavaScript qui:
- Valide en temps réel le formulaire de recherche
- Affiche un message d'erreur si le champ est vide
- Empêche la soumission si la validation échoue
- Utilise les événements DOM appropriés

**Question 2.2** (4 points)
Créez une fonction JavaScript `filtrerLivres(categorie)` qui:
- Prend en paramètre une catégorie de livres
- Filtre dynamiquement l'affichage sans rechargement de page
- Anime la disparition/apparition des éléments filtrés
- Gère le cas "Tous" pour réafficher tous les livres

**Question 2.3** (3 points)
Implémentez un système de "favoris" localStorage qui:
- Sauvegarde les IDs des livres favoris dans localStorage
- Affiche une icône différente pour les livres favoris
- Persiste les favoris après fermeture du navigateur
- Permet d'ajouter/retirer des favoris en cliquant sur l'icône

---

### Partie C: Base de Données (10 points)

**Question 3.1** (4 points)
Conception MCD et MLD:
- Concevez le MCD pour gérer: Livres, Auteurs, Emprunteurs, Emprunts
- Transformez-le en MLD relationnel
- Identifiez les clés primaires et étrangères
- Indiquez les cardinalités

**Question 3.2** (3 points)
Écrivez les requêtes SQL pour:
- Créer les tables avec toutes les contraintes nécessaires
- Insérer 3 auteurs et 5 livres avec données réalistes

**Question 3.3** (3 points)
Rédigez les requêtes SQL suivantes:
- Liste des livres disponibles (non empruntés) avec nom de l'auteur
- Nombre d'emprunts par catégorie de livre
- Emprunteurs ayant des livres en retard de plus de 7 jours
- Mise à jour du statut d'un livre lors du retour

---

### Partie D: PHP et Intégration (15 points)

**Question 4.1** (4 points)
Créez un script PHP "connexion.php" qui:
- Établit une connexion sécurisée à la base de données avec PDO
- Gère les erreurs de connexion avec try-catch
- Utilise des variables d'environnement pour les identifiants
- Configure UTF-8 et le mode erreur

**Question 4.2** (4 points)
Développez "rechercher.php" qui:
- Reçoit une requête AJAX GET avec terme de recherche
- Exécute une requête préparée SQL sécurisée contre les injections
- Retourne les résultats au format JSON
- Gère la pagination des résultats

**Question 4.3** (4 points)
Implémentez "emprunter.php" qui:
- Vérifie si le livre est disponible
- Enregistre l'emprunt avec date de début et fin prévue
- Met à jour le statut du livre
- Gère les erreurs avec messages appropriés
- Utilise des transactions SQL

**Question 4.4** (3 points)
Créez "admin/rapport.php" accessible uniquement aux administrateurs qui:
- Affiche un tableau de bord avec statistiques (nombre total de livres, emprunts en cours, retardataires)
- Génère un rapport PDF des emprunts du mois (utilisez une bibliothèque comme TCPDF)
- Exporte les données en CSV

---

## EXERCICE 2: Mini-Réseau Social "StudyConnect" (30 points)

### Contexte
Créez une plateforme collaborative pour les élèves du lycée.

### Partie A: Frontend (12 points)

**Question 1** (4 points)
Page d'inscription "inscription.html" avec:
- Formulaire complet: nom, email, mot de passe, confirmation, classe, date naissance
- Validation HTML5: email, required, pattern pour mot de passe (min 8 caractères, 1 majuscule, 1 chiffre)
- Affichage dynamique de la force du mot de passe en JavaScript
- Design responsive moderne

**Question 2** (4 points)
Tableau de bord "dashboard.html":
- Interface type réseau social avec fil d'actualité
- Barre de navigation fixe avec notifications
- Zone de publication avec textarea auto-redimensionnable
- Affichage des publications avec infinite scroll

**Question 3** (4 points)
Implémentez en CSS/JS:
- Système de "like" avec animation cœur
- Menu déroulant pour options de publication
- Modal pour commentaires
- Dark mode toggle avec persistance

---

### Partie B: Backend PHP/MySQL (18 points)

**Question 4** (6 points)
Architecture base de données:
- Conception complète: Utilisateurs, Publications, Commentaires, Likes, Amities
- MCD avec cardinalités
- Script SQL de création complet
- Indexes pour optimisation des requêtes fréquentes

**Question 5** (6 points)
API PHP RESTful:
- `api/publications.php`: GET (liste avec pagination), POST (créer)
- `api/publications.php?id=X`: GET (détail), PUT (modifier), DELETE (supprimer)
- Authentification par token JWT
- Réponses JSON avec codes HTTP appropriés

**Question 6** (6 points)
Système de messagerie:
- Table Conversations et Messages
- Script "envoyer_message.php" avec WebSocket pour temps réel (simulation par polling)
- Affichage "en train d'écrire..."
- Marqueur de messages lus/non lus

---

## EXERCICE 3: Application E-Commerce "TechStore" (25 points)

### Contexte
Développez une boutique en ligne de produits technologiques.

### Partie A: Conception et Structure (8 points)

**Question 1** (4 points)
Conception base de données:
- Produits (id, nom, description, prix, stock, image, catégorie_id)
- Catégories (hiérarchique: parent_id)
- Clients, Commandes, Lignes_commande
- Panier (session ou enregistré)
- Avis clients
- Créez le schéma SQL complet avec toutes les clés et contraintes

**Question 2** (4 points)
Page produit "produit.php?id=X":
- Affichage dynamique des informations produit
- Galerie d'images avec zoom
- Sélecteur de variantes (couleur, taille) qui met à jour le prix
- Section avis avec étoiles et pagination
- Produits similaires (même catégorie)

---

### Partie B: Panier et Commande (10 points)

**Question 3** (4 points)
Système de panier AJAX:
- Ajout au panier sans rechargement
- Mise à jour quantité en temps réel
- Calcul dynamique du total (prix × quantité + frais livraison)
- Persistance du panier (localStorage pour visiteurs, DB pour connectés)

**Question 4** (4 points)
Processus de commande:
- Récapitulatif de commande
- Formulaire adresse de livraison avec autocomplétion API
- Choix mode de livraison (standard/express) affectant le prix
- Simulation de paiement sécurisé (champs carte masqués, validation Luhn)

**Question 5** (2 points)
Confirmation et suivi:
- Page de confirmation avec numéro de commande
- Email de confirmation (simulation: affichage du contenu)
- Page de suivi de commande avec étapes visuelles

---

### Partie C: Administration (7 points)

**Question 6** (4 points)
Dashboard administrateur:
- Graphiques des ventes (utilisez Chart.js ou similaire)
- Tableau des produits avec CRUD
- Gestion des stocks avec alertes seuil
- Modération des avis clients

**Question 7** (3 points)
Rapports et export:
- Requête SQL des produits les plus vendus ce mois
- Export Excel/CSV des commandes par période
- Statistiques: panier moyen, taux de conversion

---

## BAREME TOTAL

| Exercice | Points | Temps Recommandé |
|----------|--------|------------------|
| Exercice 1: Bibliothèque | 45 | 3h |
| Exercice 2: StudyConnect | 30 | 2h |
| Exercice 3: TechStore | 25 | 2h |
| **TOTAL** | **100** | **7h** |

---

## CRITERES D'EVALUATION

### Structure HTML/CSS (30%)
- Validité HTML5 sémantique
- Respect des standards W3C
- Responsive design
- Accessibilité (ARIA)

### JavaScript (25%)
- Manipulation DOM efficace
- Gestion des événements
- Validation côté client
- Stockage local

### PHP/MySQL (35%)
- Sécurité (préparation, filtration)
- Architecture MVC ou structurée
- Gestion des erreurs
- Requêtes SQL optimisées

### Bonus (10%)
- Code propre et commenté
- Documentation
- Tests unitaires
- Versioning Git

---

## CONSEILS POUR L'EXAMEN

1. **Lire tout l'énoncé** avant de commencer
2. **Commencer par ce que vous maîtrisez** le mieux
3. **Tester régulièrement** votre code
4. **Commenter votre code** pour faciliter la compréhension
5. **Gérer votre temps**: ne restez pas bloqué sur une question
6. **Version de secours**: Sauvegardez une version fonctionnelle avant d'ajouter des fonctionnalités complexes

---

*Exercices générés pour la préparation BAC Informatique STI 2025-2026*
