# Sendwave — offre à 20 € et optimisation SEO du 6 octobre 2026

## Offre et sources

La capture Sendwave fournie par le propriétaire affiche **I4H9G**, **20 € de crédit pour le nouvel utilisateur** et **20 € pour le parrain après livraison réussie du premier transfert**, utilisables sur le prochain transfert du parrain. Le propriétaire a confirmé un compte enregistré en France.

La page présente directement les 20 € pour les nouveaux utilisateurs éligibles qui saisissent le code à l'inscription et réalisent un premier transfert qualifiant. France reste un contexte de vérification dans les sources et une question utile de FAQ, plutôt qu'une restriction ajoutée dans le titre. Aucune affirmation de disponibilité universelle sans conditions, aucun minimum chiffré et aucune conversion en dollars ne sont ajoutés.

Les conditions officielles de parrainage ont été récupérées directement le **6 octobre 2026**, HTTP 200. Elles précisent : nouvel utilisateur sans transaction antérieure, code avant la première transaction, crédit après transfert réussi, restrictions possibles selon pays et destination, minimum éventuel, vérification d'identité, validité de 12 mois sauf indication contraire. Le montant est celui affiché dans l'application.

- [Conditions officielles de parrainage](https://www.sendwave.com/en/terms-and-conditions/referral-program), relues le 6 octobre.
- [Présentation officielle du programme](https://www.sendwave.com/en/blog/product/sendwave-referral-program-benefits), lue le 5 octobre.
- [Conditions des campagnes promotionnelles](https://www.sendwave.com/en/terms-and-conditions/promo-code-promotion), lues le 5 octobre.

## Modifications

- Titre : **Sendwave Referral Code I4H9G: €20 Bonus | BonusFoundry**. Description de 150 caractères.
- Introduction autonome : code, 20 €, nouvel utilisateur, saisie avant la première transaction et transfert éligible.
- Réponses adaptées aux recherches **sendwave referral code**, **sendwave bonus code**, **sendwave promo code**, **sendwave bonus**. La distinction entre code personnel de parrainage et campagne promotionnelle reste explicite.
- Tableau HTML, étapes numérotées, conditions du minimum, attribution du crédit, validité et dépannage.
- **13 FAQ** avec des réponses complètes, identiques dans le contenu visible et le JSON-LD.
- Auteur, date et sources visibles ; divulgation du bénéfice du parrain près du bouton de copie.
- Données partagées actualisées dans la fiche Sendwave, les comparatifs et le guide Maroc. Suppression des anciennes promesses actuelles de 10 € / 10 $ ; l'historique daté de septembre conserve l'ancienne offre.
- Résumé existant de `llms.txt` harmonisé. Aucun nouveau fichier spécial pour les IA ni balisage propriétaire ajouté.
- URL et canonique conservées : `/providers/sendwave/referral-code`. Liens existants et relations entre fournisseurs et corridors conservés. Sitemap et `dateModified` au 6 octobre.

Fichiers : `data/sendwave.ts`, `data/providers.ts`, `components/sendwave-referral-page.tsx`, `public/llms.txt`. Aucun changement fonctionnel de Ria dans cette mise à jour.

## Vérifications locales

- Build de production : **76 pages**, compilation, lint et types validés.
- Liens internes : **111 relations réciproques / 444 directions** conformes.
- Contrôle de la page servie : quatre intentions de recherche, absence de l'ancienne offre, titre, description, canonique, auteur/éditeur, breadcrumbs, **13 FAQ** visibles et JSON-LD concordantes, **25 liens internes** répondant HTTP 200, sitemap, robots, `llms.txt`, fiche Sendwave et guide Maroc.
- **13 ressources CSS/JavaScript** répondant HTTP 200 ; utilitaires Tailwind présents.
- Chrome à **390 et 1440 px** : aucun débordement horizontal ni erreur JavaScript observés. Bouton accessible par Tab et copie réelle de **I4H9G** par Entrée vérifiée.
- Prettier des deux fichiers Sendwave et `git diff --check` validés.
- Rapports et captures locaux dans `.next-dev/sendwave-audit/`, ignorés par Git. Profil Chrome de test dans le répertoire temporaire Windows ; navigateur fermé après contrôle.

## Publication et mesure

Les changements sont préparés et validés localement. Aucun déploiement, push, demande d'indexation ou envoi IndexNow effectué.

Aucun rapport Search Console n'a été fourni : les classements, clics et citations IA après modification ne sont pas encore mesurés. Pour suivre l'effet, publier sur l'URL existante, inspecter cette URL dans Search Console et comparer impressions, clics, CTR et positions sur des périodes comparables pour les quatre requêtes ciblées.

[Google Search Central](https://developers.google.com/search/docs/appearance/ai-features) recommande les fondamentaux SEO pour AI Overviews : contenu textuel accessible, maillage interne, page indexable et données structurées correspondant au contenu visible. Google ne demande ni fichier spécial IA ni schema spécifique ; une citation ou une place dans les premiers résultats ne peut pas être garantie.
