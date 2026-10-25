# Sendwave — rapport SEO, GEO et AEO du 25 octobre 2026

Travail local sur `/providers/sendwave/referral-code`, sans déploiement ni demande d’indexation. Code conservé : **I4H9G**. Le document de mission fourni reste inchangé.

## Nouvelle preuve reçue après l’audit initial

Le propriétaire a ensuite fourni une capture de l’offre du **25 octobre 2026**, directement examinée. Elle confirme I4H9G, les **20 € du nouvel utilisateur à la première inscription** et les **20 € du parrain après livraison réussie du premier transfert**, utilisables sur le prochain transfert du parrain. La page et ses métadonnées utilisent désormais cette capture, sans la présenter comme un simple historique du 5 octobre. Voir [le relevé de preuve](sendwave-app-offer-2026-10-25.md).

La capture ne montre pas de pays. Le contexte français reste attribué à la confirmation précédente du propriétaire. Aucun minimum, délai distinct pour le filleul ou périmètre géographique universel n’en est déduit. L’audit initial ci-dessous conserve les constats faits avant réception de cette image.

Après cette mise à jour, TypeScript, lint et le build ont été relancés avec succès (80 pages). Le contrôle de production confirme le nouveau texte, la description de 148 caractères, les dates, le canonical, le JSON-LD, les 26 liens internes et les 12 ressources CSS/JS. Les 13 pages comparées avant/après, dont Ria et Taptap Send, restent identiques. La copie réelle et le responsive visuel n’ont pas été retestés pour cette modification de contenu.

## A. Audit initial

Le dépôt utilise Next.js App Router 15.5.19, React 19, TypeScript et Tailwind. La route dynamique des fournisseurs sélectionne déjà un composant serveur dédié à Sendwave. Les informations de `data/sendwave.ts` alimentent aussi la fiche fournisseur et d’autres pages ; les modifier aurait élargi le périmètre. Aucun fichier AGENTS.md applicable n’a été trouvé. L’état Git initial ne comportait que le document de mission non suivi.

L’examen a porté sur la route, les métadonnées, le composant Sendwave, ses dépendances, les données partagées, le layout et ses entités JSON-LD, le sitemap, robots.txt et les scripts de vérification. Les trois pages publiques ont également été consultées. Un état HTML local de Sendwave et de 13 pages à préserver a été enregistré avant les modifications du contenu.

| Point                              | État constaté avant modification                                                                                                                                                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Fondamentaux SEO                   | HTTP 200, contenu présent dans le HTML serveur, un H1, canonical correct, inclusion dans le sitemap et robots autorisant l’exploration. Pas de problème démontré nécessitant une nouvelle route ou une politique robots différente.        |
| Offre                              | Code I4H9G et 20 € documentés par le compte rendu du 5 octobre ; contexte français expliqué tardivement. L’introduction et la réponse « Yes » sur la France pouvaient donner une portée trop générale à une preuve issue d’un seul compte. |
| Contenu                            | Tableau existant de neuf lignes, étapes, sources, divulgation, auteur et 13 FAQ. Plusieurs questions reformulaient le même bonus ; récompenses et conditions répétées dans plusieurs sections.                                             |
| Informations manquantes au tableau | Pays d’envoi et destinations séparés, nature du crédit, dates distinctes de l’offre et des règles, sources contextualisées.                                                                                                                |
| Parcours                           | Étapes du nouvel utilisateur présentes ; absence de parcours séparé pour le parrain. Dépannage sous forme de liste, sans correspondance explicite problème / raison / action.                                                              |
| Preuves                            | Historique de septembre à 10 € dépassé par le compte rendu d’octobre à 20 €. Capture originale absente du dépôt ; aucun versement réellement testé dans cette intervention.                                                                |
| JSON-LD                            | WebPage, BreadcrumbList et FAQPage, avec Organization, équipe éditoriale et WebSite déjà fournis par le layout. Pas de faux avis ou notes.                                                                                                 |

Ria et Taptap Send ont servi uniquement de références éditoriales : faits attribués, conditions précises, parcours filleul/parrain, dépannage pratique et séparation des dates de preuve et de vérification. Sendwave possédait déjà plusieurs de ces éléments, mais présentait moins clairement la portée de l’offre et les limites des preuves.

Les intentions retenues sont le code de parrainage, le crédit de 20 €, la France, l’éligibilité, le moment de saisie, le minimum, le crédit manquant et son expiration. « Bonus code » et « promo code » sont traités par une explication des différences. Aucun volume de recherche n’est revendiqué et aucune année n’est ajoutée au titre pour simuler de la fraîcheur.

## B. Améliorations réalisées

- Réponse courte autonome avec l’entité Sendwave, le code personnel du propriétaire, les 20 € enregistrés sur un compte français, les conditions et le moment de saisie.
- Code et composant de copie existant conservés, avec divulgation du bénéfice potentiel près du bouton. Encadré latéral précisant aussi la portée de la preuve.
- Tableau de 11 lignes : deux récompenses distinctes, minimum non chiffré, pays d’envoi, destinations non établies, saisie, type de crédit, validité, deux dates et sources.
- Étapes chronologiques séparées pour le filleul et le parrain, conditions d’éligibilité, usage du crédit, expiration et restrictions.
- Tableau de dépannage de six cas. Les raisons sont présentées comme des possibilités tirées des conditions publiques ; aucun diagnostic individuel ni réparation rétroactive promis.
- FAQ ramenée de 13 à 10 questions distinctes. La réponse sur la France établit le contexte de l’offre sans garantir son acceptation pour chaque compte.
- Sources rapprochées des affirmations ; distinction entre règles publiques, compte rendu historique du propriétaire et points à vérifier dans l’application. Auteur, politique éditoriale, méthodologie et divulgation reliés.
- Liens vers la fiche Sendwave, les corridors existants, le hub France et les guides utiles conservés. Aucune page concurrente créée.

Le titre devient **Sendwave Referral Code I4H9G: €20 Credit & Eligibility | BonusFoundry**. La description, désormais de 148 caractères après réception de la nouvelle capture, indique sa date de revue et le crédit de 20 € pour les nouveaux utilisateurs éligibles. Les métadonnées Open Graph et Twitter utilisent les mêmes informations et le canonical reste identique.

Les nouvelles données éditoriales sont isolées dans `data/sendwave-referral.ts`. Les données fournisseur partagées et les autres pages gardent leurs textes et leurs dates. Dans la route commune, seuls l’import des métadonnées Sendwave et les choix conditionnés par son slug changent. Dans le sitemap, seule la date de cette URL est remplacée par le 25 octobre, date réelle de cette modification. Les entrées des autres pages sont inchangées.

### Données structurées et moteurs de réponses

WebPage est conservé, avec identifiant canonique, date réelle de modification, auteur et éditeur existants, lien au WebSite, entité Sendwave et citations officielles. BreadcrumbList est conservé. Aucune nouvelle Organization dupliquant le layout, aucun Article avec date de publication inconnue, aucun Product, Offer, avis ou note n’est ajouté.

La FAQ visible est conservée sans FAQPage : cette page commerciale ne justifie pas une promesse de résultat enrichi. La documentation Google consultée indique que le résultat enrichi FAQ a été retiré à compter de mai 2026 et sa documentation supprimée en juin. Ce retrait est limité à Sendwave ; le balisage des pages protégées reste inchangé. [Journal officiel Google Search Central](https://developers.google.com/search/updates).

Les réponses autonomes, les faits attribués et les sources explicites facilitent l’extraction fiable. Aucun fichier spécial IA, schema propriétaire ni promesse de citation n’est ajouté. Google recommande les fondamentaux SEO et des données structurées cohérentes avec le contenu visible. [Documentation officielle sur les fonctionnalités IA](https://developers.google.com/search/docs/appearance/ai-features).

## C. Sources effectivement vérifiées

Les quatre pages officielles suivantes ont été récupérées directement avec **HTTP 200 le 25 octobre 2026** après des échecs 403 de l’outil de navigation sur les trois premières :

| Source                                                                                                      | Utilisation                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Conditions de parrainage](https://www.sendwave.com/en/terms-and-conditions/referral-program)               | Historique du nouvel utilisateur, saisie avant transaction, transfert réussi, restrictions de pays et de montant, KYC, crédit futur et validité de 12 mois sauf exception. |
| [Présentation du programme](https://www.sendwave.com/en/blog/product/sendwave-referral-program-benefits)    | Codes personnels, deux bénéficiaires et variation selon pays et promotion.                                                                                                 |
| [Conditions des codes promotionnels](https://www.sendwave.com/en/terms-and-conditions/promo-code-promotion) | Distinction entre campagne promotionnelle et parrainage personnel. Les règles propres aux campagnes ne sont pas attribuées automatiquement à I4H9G.                        |
| [Assistance Sendwave](https://www.sendwave.com/en-us/support)                                               | Lien officiel et disponibilité de l’assistance dans l’application.                                                                                                         |

Lors de l’audit initial, les 20 € étaient attribués au compte rendu du 5 octobre dans `docs/sendwave-update-2026-10-05.md` et `data/sendwave.ts`, faute d’image directement disponible. La nouvelle capture fournie le 25 octobre confirme maintenant visuellement les deux montants et le code ; elle devient la preuve utilisée par cette page. L’ancienne preuve de septembre à 10 € reste historique. La réception d’une capture ne constitue pas un test d’acceptation sur un compte neuf ou de versement effectif.

## D. Vérifications et limites

| Contrôle                                             | Résultat                                                                                                                                                                                                                       |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm run typecheck`                                  | Réussi.                                                                                                                                                                                                                        |
| `npm run lint`                                       | Réussi, sans erreur.                                                                                                                                                                                                           |
| `npm run build`                                      | Réussi, 80 pages générées. Avertissement webpack relatif à l’analyse du cache MDX, sans échec de compilation.                                                                                                                  |
| Vérificateur Sendwave, développement puis production | Réussi : HTTP, contenu SSR, un H1, titre, descriptions, canonical, schémas, FAQ visible, sitemap et robots.                                                                                                                    |
| Liens et ressources de production                    | 26 liens internes et 12 ressources CSS/JS répondent HTTP 200.                                                                                                                                                                  |
| `npm run check:internal-links`                       | Réussi : 111 relations réciproques et 444 directions.                                                                                                                                                                          |
| Régressions                                          | Les 12 autres pages de parrainage et la fiche Sendwave correspondent aux captures avant modification : HTML principal, métadonnées et JSON-LD. Seul un marqueur React vide propre au streaming de développement est normalisé. |
| Sources protégées                                    | Données Ria/Taptap et composant Taptap identiques à HEAD. Fonctions RiaReferralPage et TaptapSendReferralPage inchangées dans la route commune. Composants partagés de copie, encadré et fonctions SEO inchangés.              |
| Formatage et diff                                    | Prettier des fichiers dédiés et `git diff --check` réussis. Fichiers générés next-env.d.ts et tsconfig.tsbuildinfo restaurés à leur état initial.                                                                              |
| Copie et responsive                                  | Bouton natif, code transmis I4H9G et gestion d’état accessible conservés dans le code. **Copie réelle, navigation clavier, hydratation et responsive visuel non validés dans cette session.**                                  |

L’automatisation du navigateur a été arrêtée par Computer Use parce qu’elle ne pouvait pas identifier l’URL active d’Edge avec assez de certitude pour appliquer sa politique. Aucun contournement de ce blocage n’a été effectué. Aucun résultat de Lighthouse, de Core Web Vitals, de Search Console ou de classement n’est revendiqué. Les tables fixes et les contraintes de largeur sont présentes dans le code, mais ne remplacent pas une vérification visuelle sur mobile.

L’ajout du dépannage et des limites de preuves avait porté le texte visible d’environ 1 831 à 2 370 mots. L’intégration de la nouvelle capture le porte à environ 2 461 mots, avec toujours 10 FAQ. Cette longueur ne constitue pas une mesure de classement ; l’amélioration mesurée ici concerne la couverture des questions, l’attribution et la cohérence technique.

Fichiers modifiés ou ajoutés pour cette intervention :

- `components/sendwave-referral-page.tsx`
- `data/sendwave-referral.ts`
- `app/(main)/providers/[slug]/referral-code/page.tsx` — adaptation conditionnelle Sendwave uniquement ; blocs des pages protégées conservés.
- `app/sitemap.ts` — date de l’URL Sendwave uniquement.
- `scripts/verify-sendwave-rendered.mjs`
- `docs/sendwave-improvement-2026-10-25.md`
- `docs/sendwave-app-offer-2026-10-25.md` — relevé de la nouvelle capture fournie après l’audit.

Les captures HTML avant/après et le rapport de contrôle sont dans `.next-dev/sendwave-audit/`, ignoré par Git. Commandes reproductibles :

```powershell
# Avant toute modification, sur un serveur local :
node scripts/verify-sendwave-rendered.mjs http://localhost:3000 --baseline
# Après modification, sur le serveur de production local :
node scripts/verify-sendwave-rendered.mjs http://localhost:3105
```

## E. Opportunités restantes

1. Effectuer un contrôle visuel à 320, 390, 768 et 1440 px, vérifier le clavier, l’hydratation et la copie réelle de I4H9G lorsque l’accès navigateur sera disponible.
2. Nouvelle capture reçue et examinée le 25 octobre : action réalisée. Une preuve publique partageable reste facultative. Vérifier séparément montant minimum, destinations, délai du filleul et fin de campagne, absents de l’image.
3. Après publication, utiliser Search Console/Bing Webmaster Tools pour contrôler indexation, canonical retenu, requêtes, impressions et CTR sur des périodes comparables. Mesurer les performances sur appareils réels ; le build ne mesure pas les Core Web Vitals.
4. Suivre les éventuelles citations IA sans les garantir. Les ajustements de qualité sont réalisés localement ; la publication et ses effets restent distincts de cette vérification.
