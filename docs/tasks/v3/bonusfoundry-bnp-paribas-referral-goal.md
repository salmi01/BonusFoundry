# CODEX GOAL — BonusFoundry | Page de parrainage BNP Paribas (France, octobre 2026)

## 0. Mission, périmètre et priorité

Implémenter **une seule page publique en français** pour le parrainage **BNP Paribas**, sur le site existant `https://bonusfoundry.com`, en respectant l'architecture, les composants et le système SEO déjà en place dans le dépôt.

**URL cible recommandée :** `https://bonusfoundry.com/fr/banques/bnp-paribas/parrainage`

Objectifs, par ordre de priorité :
1. Fournir un contenu **exact, utile, transparent et conforme aux conditions de l'offre BNP Paribas d'octobre 2026**.
2. Répondre efficacement aux recherches françaises portant sur le parrainage BNP Paribas et l'ouverture d'un compte avec parrainage.
3. Permettre aux moteurs de recherche et assistants IA d'extraire et de citer des réponses claires (AEO / GEO), **sans promettre classement ou citation**.
4. Insérer un CTA vers le lien de parrainage communiqué par le propriétaire du site.
5. Préserver le SEO, les URL et les fonctionnalités existantes de BonusFoundry.

**Ne pas** refondre l'accueil, traduire les pages existantes, générer un réseau de pages SEO, ajouter d'autres banques ou modifier les contenus/providers de transfert international. N'appliquer que les modifications transversales strictement nécessaires à l'indexation et à la découvrabilité de cette page.

## 1. Première étape obligatoire : audit rapide du dépôt

Avant de coder :
- Identifier le framework, l'App Router / Pages Router ou équivalent, la structure de routes, les composants, les modèles de page existants, le CSS/design system, les mécanismes de métadonnées, le sitemap, le robots.txt et les données structurées.
- Réutiliser les conventions existantes (TypeScript, composants, typographie, design tokens, tests, lint).
- Repérer les conventions de liens externes et l'éventuel système de tracking / analytics, **sans introduire une nouvelle dépendance** si le besoin est déjà couvert.
- Vérifier si un composant éditorial de type « vérifié le », références et disclosures existe ; le réutiliser.
- Produire un bref résumé des fichiers qui seront touchés. Si une modification de portée globale est nécessaire, la justifier et la limiter.

## 2. Données sources de la campagne d'octobre 2026

**Source principale fournie par le propriétaire du site : captures de l'offre BNP Paribas et de ses conditions, datées de la campagne se terminant le 29 octobre 2026 à 15 h (heure de France métropolitaine).** Il faut utiliser cette version de l'offre plutôt que des anciennes offres trouvées sur le site public ou dans un index de moteur de recherche.

### Avantage filleul — afficher au premier écran
- **Jusqu'à 160 €**, et non « 160 € garantis » :
  - **80 €** pour une première ouverture éligible d'un compte BNP Paribas et d'une carte Visa Origin, Classic ou Premier avec la formule **Esprit Libre Référence**, sous conditions.
  - **80 € supplémentaires** uniquement en cas de souscription admissible au service de mobilité bancaire **Facilimouv'**, sous conditions et dans les délais.
- **1 an de services bancaires gratuits** dans le cadre de l'offre Esprit Libre Référence, selon conditions, exclusions et tarifs applicables ensuite. Ne pas présenter la gratuité comme une exonération totale de tous frais bancaires.
- Le souscripteur doit être une personne physique majeure, capable, agissant pour des besoins non professionnels, **résidant en France métropolitaine (hors Monaco)**, et ouvrant un **premier compte de dépôt BNP Paribas**. Sous réserve d'acceptation du dossier par la banque.
- **Démarche d'ouverture / invitation avant le 29 octobre 2026 à 15 h** selon les conditions de la campagne. Ouverture définitive du compte au plus tard dans les trois mois suivant la fin de l'opération, soit le **29 janvier 2027** selon le règlement fourni.
- **Première prime de 80 € :** versement après ouverture définitive et réalisation d'**au moins 10 opérations de carte (paiements ou retraits)** au cours des **3 mois suivant la réception de la carte**. Les opérations par carte d'un éventuel compte joint sont prises en compte selon la règle du règlement. Une seule prime par personne et par compte, avec exception propre au compte joint indiquée par les conditions.
- **Prime Facilimouv' de 80 € :** demande de souscription **initiée au plus tard le 29 octobre 2026**, finalisée **dans les 15 jours suivant l'ouverture définitive du compte** ; prime versée **3 mois après la souscription au service**, selon conditions.
- **Délai de rétractation : 14 jours** mentionné par la banque. L'offre n'est pas nécessairement cumulable avec les autres opérations commerciales en cours.
- Certaines exceptions de frais, la carte Visa Infinite et les intérêts en cas d'utilisation d'une facilité de caisse ne sont pas compris dans la gratuité annoncée. Expliquer que les prix après un an dépendent de la formule, de l'âge et de la carte ; pointer vers les tarifs officiels sans inventer de montants.

### Parrain — information secondaire
- La capture remise indique une **prime de 150 € au parrain** pour une première ouverture de compte/carte éligible validée.
- **20 parrainages validés maximum par année civile** d'après les conditions de la campagne fournie.
- Ne pas faire de la récompense du parrain l'argument principal : la page s'adresse prioritairement au **nouveau client**.
- Ne pas masquer l'intérêt du propriétaire du site : afficher une transparence claire sur la possibilité qu'il reçoive une prime si le parrainage aboutit.

### Gestion des divergences documentaires
La page BNP Paribas officielle peut afficher des restes de campagnes précédentes (80 €, 100 €, 130 €, dates antérieures). **Ne pas remplacer silencieusement les données d'octobre 2026 par des informations périmées**. Avant mise en production, confronter chaque chiffre et date aux captures et, si possible, aux conditions de campagne accessibles depuis l'application. Si une donnée n'est pas suffisamment vérifiable, ne pas la présenter comme certaine ; signaler explicitement la divergence dans le compte rendu.

Sources à lier dans la page :
- Offre et conditions officielles : `https://mabanque.bnpparibas/fr/ma-banque-et-moi/parrainage`
- Guide des tarifs BNP Paribas : trouver et utiliser une URL officielle, exacte et actuelle (ne jamais inventer de lien).
- Mention « offre observée dans l'application BNP Paribas pour la campagne d'octobre 2026 » si cette campagne n'est pas reprise correctement sur la page web officielle.

## 3. Lien personnel et CTA

Lien transmis par le propriétaire :

`https://mabanque.bnpparibas/fr/parrainage-filleul/?code=PARBNP150OCTOBRE26&token=283GD892`

- Créer une **constante unique** pour ce lien afin de permettre un remplacement rapide sans modifier le contenu éditorial.
- Bouton principal visible sur mobile et desktop : **« Profiter de l'offre de parrainage BNP Paribas »**.
- Bouton secondaire facultatif : **« Voir les conditions de l'offre »**, qui renvoie à la source BNP Paribas officielle.
- Le CTA doit utiliser une vraie balise `<a href>` navigable, pas seulement un handler JavaScript ; ne pas faire de redirection trompeuse ni masquer la destination.
- Pour un lien de parrainage intéressé, utiliser `rel="sponsored noopener noreferrer"` (ou ajouter `nofollow` selon les conventions SEO du projet) avec `target="_blank"` seulement si l'ouverture dans un nouvel onglet est conforme au design du site.
- Ajouter une note courte et visible : **« Ce lien est un lien de parrainage : BonusFoundry peut percevoir une récompense si votre ouverture de compte remplit les conditions. »**
- Ne pas exposer le jeton ailleurs que dans l'URL de destination nécessaire ; éviter sa répétition dans les métadonnées, données structurées, journaux ou événements analytics. Ne pas décrire ce jeton comme un « code promo » que l'utilisateur peut saisir manuellement.
- Ne jamais affirmer que l'utilisation du lien garantit la prime : seule BNP Paribas décide de l'éligibilité et valide l'ouverture.

## 4. Référencement naturel — SEO en français

### Requêtes cibles
**Principales :**
- parrainage bnp paribas
- code parrainage bnp paribas
- lien parrainage bnp paribas
- parrainage bnpparibas

**Secondaires / intentionnelles :**
- prime parrainage bnp paribas
- offre parrainage bnp paribas 2026
- ouverture de compte bnp paribas avec parrainage
- ouvrir un compte bnp paribas avec lien de parrainage
- bnp paribas 160 euros offerts
- comment se faire parrainer bnp paribas
- conditions parrainage bnp paribas

Écrire naturellement : zéro bourrage de mots-clés, zéro répétition mécanique. La requête générique « ouverture de compte BNP Paribas » est pertinente en soutien, mais ne doit pas entraîner une promesse de référencement sur toutes les recherches d'ouverture de compte.

### Métadonnées
- `lang="fr"` pour cette page (sans changer le langage du reste du site). Si le layout racine fixe `en`, trouver une solution propre pour cette route ; ne pas livrer un HTML déclaré en anglais avec un contenu intégralement français.
- Title de départ : **`Parrainage BNP Paribas 2026 : jusqu'à 160 € offerts`**.
- Meta description de départ : **`Parrainage BNP Paribas 2026 : découvrez comment obtenir jusqu'à 160 € en ouvrant un compte éligible et avec Facilimouv'. Conditions, délais et lien de parrainage.`**
- Canonical absolu vers l'URL finale, `robots: index, follow` si la page est prête à être indexée.
- Open Graph/Twitter français cohérent, avec image préexistante de marque ou image OG spécifique conforme (ne pas reprendre le logo officiel de la banque en donnant l'impression d'être son site).
- Breadcrumb visuel et sémantique : `Accueil > Banques > BNP Paribas > Parrainage` ; ne pas inventer des liens vers des pages intermédiaires qui n'existent pas. Si elles n'existent pas, ajuster le fil d'Ariane et le JSON-LD.
- Une seule balise H1 ; hiérarchie H2/H3 logique ; contenu central indexable en HTML rendu côté serveur, sans exiger du JavaScript client pour révéler les réponses.
- Sitemap : ajouter la nouvelle URL et un `lastmod` reflétant **la dernière modification réelle du contenu**, pas une date artificiellement renouvelée chaque jour.
- Ne pas ajouter de balise hreflang `en` ou de page anglaise inexistante. Pour une page seulement française, hreflang n'est pas obligatoire.

## 5. Contenu français — plan détaillé obligatoire

Rédiger une page originale, orientée aide à la décision, avec des informations exactes et des réponses directement extractibles par les assistants IA.

**H1 : `Parrainage BNP Paribas 2026 : jusqu'à 160 € offerts`**

**Au-dessus de la ligne de flottaison :**
- Réponse courte (45–75 mots) : jusqu'à 160 € *sous conditions* (80 € ouverture + 80 € mobilité), un an de services éligibles gratuits, échéance du 29 octobre 2026 à 15 h pour la campagne fournie, localisation France métropolitaine hors Monaco, et CTA.
- Encadré à trois lignes : `Prime de bienvenue : 80 €`, `Prime mobilité Facilimouv' : +80 €`, `Avantage additionnel : 1 an de services éligibles gratuits`.
- Disclosure du lien de parrainage à proximité du CTA.
- Ne pas confondre un bonus **en euros versés** avec une **valorisation commerciale** de services gratuits.

**Sections H2 à produire, avec contenu substantiel :**
1. `Quel est le montant du parrainage BNP Paribas en 2026 ?` — différencier avantages filleul / parrain, expliquer le « jusqu'à ».
2. `Comment profiter du lien de parrainage BNP Paribas ?` — étapes depuis le clic sur le lien, ouverture éligible, souscription, validation, opérations carte, mobilité optionnelle. Insister sur l'utilisation du lien **avant** la création du compte.
3. `Quelles sont les conditions pour recevoir les premiers 80 € ?` — critères d'éligibilité, carte, Esprit Libre Référence, 10 opérations dans 3 mois suivant réception carte, validation de compte.
4. `Comment obtenir les 80 € supplémentaires avec Facilimouv' ?` — mobilité non automatique, dates et délai de 15 jours, versement après 3 mois.
5. `Quels sont les délais d'ouverture et de versement ?` — expliquer séparément inscription avant la fin de campagne, ouverture définitive, opérations carte et paiement de la prime Facilimouv'. Ne pas inventer de délai précis de versement de la première prime au-delà de ce qui est documenté.
6. `Un an de services gratuits : que faut-il vérifier ?` — exclusions, coûts après première année, lien vers grille tarifaire et éventuelle différence selon carte/âge.
7. `Le parrainage BNP Paribas est-il intéressant ?` — analyse nuancée des avantages, conditions, contraintes et frais possibles ; éviter le discours publicitaire pur.
8. `Questions fréquentes sur le parrainage BNP Paribas` — vraies questions/réponses, listées ci-dessous.
9. `Sources officielles et vérification de l'offre` — liens, date de **vérification effective**, identité éditoriale de BonusFoundry, transparence du parrainage.

### FAQ attendue (réponses courtes puis détails)
- Quel est le montant de la prime de parrainage BNP Paribas ?
- Peut-on obtenir 160 € sans changer de banque ? (Non : seuls les 80 € initiaux sont potentiellement accessibles sans mobilité, sous conditions.)
- Peut-on utiliser un lien de parrainage BNP Paribas après avoir ouvert son compte ? (Ne pas garantir une application rétroactive.)
- Combien d'opérations de carte faut-il réaliser pour obtenir la prime ?
- Qui peut bénéficier de cette offre de parrainage en France ?
- Quand reçoit-on les 80 € liés à Facilimouv' ?
- L'offre Esprit Libre Référence reste-t-elle gratuite après un an ?
- Jusqu'à quand l'offre d'octobre 2026 est-elle valable ?
- Est-il possible d'obtenir la prime en ouvrant un compte joint ? (Répondre d'après les conditions : une seule prime par compte/personne concernée selon les modalités.)
- Le lien de parrainage fonctionne-t-il pour un client BNP Paribas existant ? (Expliquer l'exigence de premier compte.)

**Ne pas créer 10 pages FAQ séparées.** Les réponses restent sur cette unique page.

## 6. AEO / GEO : rendre les réponses vérifiables et faciles à citer

- Placer la réponse à l'intention principale dès le premier paragraphe, avant le CTA secondaire et avant les détails.
- Utiliser des sous-titres formulés comme les questions réelles des utilisateurs, réponses directes en une ou deux phrases puis nuances.
- Fournir un tableau de conditions : `Avantage`, `Montant`, `Condition principale`, `Moment de versement`, en conservant les distinctions entre les deux primes.
- Ajouter des sources officielles *au voisinage des affirmations* et indiquer la campagne/date correspondante.
- Indiquer clairement : `Source principale : conditions de la campagne BNP Paribas d'octobre 2026, consultées dans l'application / captures communiquées par le propriétaire.` Ne pas inventer un horodatage précis de consultation ni une validation qui n'a pas eu lieu.
- Si le système éditorial existant propose un auteur ou un relecteur, utiliser une identité authentique et cohérente ; ne pas inventer de diplômes bancaires, d'expertise certifiée ou de tests utilisateurs.
- Ne pas créer de `FAQPage` schema par réflexe : seules les données visibles et admissibles au regard des règles Google sont permises ; ce balisage ne garantit aucun rich result.
- JSON-LD conseillé si conforme à l'architecture du site : `WebPage`, `BreadcrumbList`, éventuellement `Article` si réellement éditorial ; rattachement à l'`Organization` existante si elle est configurée. Pas de faux `Review`, `AggregateRating`, `Offer` trompeur ni de chiffre non vérifié.
- Ne pas intégrer de promesses de citation par ChatGPT, Gemini, Perplexity ou Google AI Overviews.

## 7. Intégration et expérience utilisateur

- Interface en **français uniquement** pour la nouvelle page, incluant boutons, fil d'Ariane, mentions, dates et éventuels messages d'erreur.
- Respecter la charte BonusFoundry (typographie, palette, espacements, composants, mobile first) ; ne pas imiter le site officiel BNP Paribas ni suggérer un partenariat bancaire.
- Ajouter une mention visible : `BonusFoundry est un site indépendant et n'est pas affilié à BNP Paribas.` si juridiquement et factuellement exacte pour le projet.
- Un CTA principal près du début, puis un CTA contextuel en bas ; ne pas multiplier les boutons au point de nuire à la lecture.
- Contenu accessible : contraste, liens descriptifs, navigation clavier, focus visible, tailles lisibles, états hover, balisage sémantique.
- Performances : pas de bibliothèques ajoutées pour une seule page, pas de grosses images ou scripts de tracking non nécessaires, image OG optimisée si créée.
- Maillage interne : ajouter **un point d'entrée discret** depuis un endroit réellement pertinent déjà existant (ex. annuaire des offres si suffisamment générique), sans dégrader la navigation de tous les visiteurs anglophones. Ne pas ajouter BNP Paribas aux listes de prestataires de transferts d'argent ni aux corridors.
- Liens internes vers des guides existants uniquement s'ils sont réellement pertinents ; ne pas créer de faux liens.

## 8. Expiration et maintenance — essentiel

Cette campagne finit le **29 octobre 2026 à 15 h**, sauf évolution décidée par BNP Paribas. Une page financière non mise à jour peut induire les visiteurs en erreur.

Implémenter une configuration centralisée minimale, par exemple :
- `campaignEndAt = '2026-10-29T15:00:00+01:00'` (heure locale française, CET à cette date après le changement d'heure) ;
- `offerLastVerifiedAt` = date de contrôle **réel** ;
- montant ouverture `80`, montant mobilité `80`, plafond total `160` ;
- `referralUrl` (lien communiqué dans la section 3).

**Attention :** ne pas inventer une nouvelle campagne après cette date. Définir un comportement sûr à expiration :
- Ne plus présenter `160 €` comme une offre actuellement disponible sans revérification.
- Afficher un bandeau neutre du type : `L'offre présentée se terminait le 29 octobre 2026. Nous vérifions les nouvelles conditions.`
- Rendre le CTA de parrainage **inactif ou le remplacer par un lien de vérification officiel** tant qu'une nouvelle offre valide n'a pas été confirmée ; conserver la page informative et son URL.
- Éviter des métadonnées affirmant une offre active périmée ; si une détection côté serveur est réalisable sans complexité excessive, adapter titre / description / état. Sinon documenter une étape obligatoire de maintenance éditoriale avant la date d'expiration.
- Ne pas rafraîchir automatiquement `dateModified` ou « vérifié aujourd'hui » sans vérification des conditions.

## 9. Qualité et critères d'acceptation

Livrer le code et prouver au minimum :

- [ ] La route `/fr/banques/bnp-paribas/parrainage` est accessible et son contenu est rendu côté serveur.
- [ ] La page et son contexte de langue sont français (`lang=fr`, mise en œuvre compatible avec le routing existant).
- [ ] Une seule H1 ; toutes les questions de la FAQ ont une réponse claire et non contradictoire.
- [ ] Les 160 € sont expliqués comme **80 € + 80 € conditionnels**, et non comme une prime automatique.
- [ ] Les conditions critiques apparaissent : nouveaux clients, France métropolitaine hors Monaco, Esprit Libre Référence, carte éligible, 10 opérations, mobilité optionnelle, échéance, délais.
- [ ] Le lien de parrainage fourni est exact, centralisé, cliquable et marqué comme sponsorisé ; le disclosure est visible.
- [ ] Le title, la meta description, le canonical, l'OG et le sitemap sont corrects et sans duplication.
- [ ] Les données structurées, si produites, correspondent exactement au texte visible.
- [ ] Aucun lien cassé, aucune page intermédiaire inventée, aucun changement aux pages providers/corridors existantes.
- [ ] L'état d'expiration est géré ou documenté en tant que contrainte bloquante avant mise en production.
- [ ] Aucun texte anglais parasite, aucune fausse affirmation d'affiliation ou de partenariat, aucun tarif bancaire inventé.
- [ ] Vérification responsive sur petits mobiles et desktop ; contrôle de base de l'accessibilité.
- [ ] Exécution du lint, du typecheck, du build et des tests disponibles ; corriger les problèmes introduits. Mentionner explicitement les commandes non exécutables et pourquoi.
- [ ] Ne pas introduire de changements de dépendances inutiles.

## 10. Livrables et compte rendu Codex

1. Fichiers de la page et configuration minimale, intégrés au dépôt existant.
2. URL de test locale et URL de production attendue.
3. Liste précise des fichiers ajoutés/modifiés.
4. Aperçu des métadonnées SEO et des éléments JSON-LD.
5. Résultats lint/typecheck/build/tests et éventuelles limites.
6. Liste des points nécessitant une vérification humaine (notamment divergences des offres affichées en ligne et maintenance du 29 octobre).

### Règles de sortie

- Implémenter directement la fonctionnalité ; ne pas se limiter à une stratégie ou à un brouillon de texte.
- Modifier seulement ce qui est nécessaire à cette page.
- En cas de conflit entre sources de différentes campagnes, **ne pas inventer de solution** : signaler le conflit et privilégier la documentation d'octobre 2026 fournie pour le contenu relatif à cette campagne.
- Ne pas demander d'ajouter d'autres providers, d'élargir l'architecture à une refonte i18n générale ou d'intégrer une base de données sans besoin démontré.
- Documenter clairement les éléments manuels restant avant le déploiement.
