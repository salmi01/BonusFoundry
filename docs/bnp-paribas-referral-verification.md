# Parrainage BNP Paribas — livraison du 11 octobre 2026

Implémentation locale terminée et vérifiée. Aucune publication ni modification de dépendances.

- Aperçu du build de production : http://localhost:3101/fr/banques/bnp-paribas/parrainage
- Aperçu de développement : http://localhost:3100/fr/banques/bnp-paribas/parrainage
- URL de production attendue : https://bonusfoundry.com/fr/banques/bnp-paribas/parrainage

## Architecture et périmètre

Next.js 15.5.19 App Router, TypeScript, Tailwind et composants BonusFoundry existants. Réutilisation de `Container`, `JsonLd`, `buttonStyles`, `LastVerified`, des helpers SEO, du logo et de l'image OG de marque. Aucune banque ajoutée aux providers, corridors ou hubs de pays.

Le layout racine anglais ne permettait pas une déclaration HTML française isolée. Deux groupes de routes fournissent désormais des layouts racines distincts : `(main)` pour les routes existantes, `(french)/fr` pour cette page. Les URL existantes restent identiques. Les pages existantes gardent leur génération statique ; aucune lecture globale de headers, middleware ou bibliothèque i18n n'a été ajoutée. Le passage entre ces deux racines entraîne le chargement complet prévu par Next.js. La route de repli conserve la page 404 BonusFoundry existante.

La nouvelle page est rendue côté serveur à chaque requête (`force-dynamic`). Les réponses, les conditions et la FAQ sont présentes dans le HTML sans JavaScript. Le lien de parrainage utilise une ancre native sponsorisée, sans événement analytics ajouté. Le jeton n'est utilisé que dans la destination nécessaire des CTA et n'apparaît pas dans les métadonnées ou le JSON-LD.

## Fichiers ajoutés et modifiés

Ajouts :

- `app/(french)/fr/layout.tsx` : racine HTML française, chrome français et identité de marque.
- `app/(french)/fr/banques/bnp-paribas/parrainage/page.tsx` : page, neuf sections, dix réponses FAQ, tableau, sources et métadonnées adaptatives.
- `app/(main)/[...notFound]/page.tsx` : préservation de la 404 existante pour les URL inconnues.
- `data/bnp-paribas-referral.ts` : destination unique, dates, montants, sources et expiration.
- `scripts/verify-bnp-referral.ts` : contrôles HTTP/HTML de la route et de ses états temporels.
- `docs/bnp-paribas-referral-verification.md` : ce compte rendu.

Modifications ciblées :

- `app/sitemap.ts` : une URL supplémentaire, `lastmod` réel fixé au 11 octobre 2026.
- `components/header.tsx` et `components/footer.tsx` : variante française, activée uniquement dans le nouveau layout.
- `components/ai-content.tsx` : option française du composant éditorial `LastVerified` ; valeurs anglaises par défaut préservées.
- `scripts/check-preview.mjs` : présence de Tailwind contrôlée sur l'ensemble des feuilles CSS, car Next.js sépare les polices et les utilitaires avec plusieurs racines. Les statuts HTTP et types MIME de chaque asset restent contrôlés.
- `app/(main)/layout.tsx` : import du CSS ajusté après déplacement.
- `app/(main)/disclosure/page.tsx` : point d'entrée discret vers l'offre française depuis la transparence des parrainages.

Déplacements mécaniques, de `app/<chemin>` vers `app/(main)/<chemin>` :

```text
about/page.tsx
blog/[slug]/page.tsx
blog/page.tsx
contact/page.tsx
corridors/[slug]/page.tsx
corridors/page.tsx
disclosure/page.tsx
editorial-policy/page.tsx
faq/[slug]/page.tsx
faq/page.tsx
from/[slug]/page.tsx
guides/[slug]/page.tsx
guides/page.tsx
layout.tsx
not-found.tsx
page.tsx
privacy-policy/page.tsx
providers/[slug]/page.tsx
providers/[slug]/referral-code/page.tsx
providers/page.tsx
research-methodology/page.tsx
terms/page.tsx
```

Les vingt fichiers déplacés autres que `layout.tsx` et `disclosure/page.tsx` ont été comparés à HEAD : contenu identique, après normalisation CRLF/LF. Le goal fourni dans `docs/tasks/v3/` n'a pas été modifié. Les fichiers générés suivis par Git ont été restaurés après les vérifications.

## SEO et données structurées

| Élément | Valeur |
| --- | --- |
| Langue HTML | `fr` |
| Title et H1 actifs | `Parrainage BNP Paribas 2026 : jusqu'à 160 € offerts` |
| Description active | `Parrainage BNP Paribas 2026 : découvrez comment obtenir jusqu'à 160 € en ouvrant un compte éligible et avec Facilimouv'. Conditions, délais et lien de parrainage.` |
| Canonical | `https://bonusfoundry.com/fr/banques/bnp-paribas/parrainage` |
| Robots | `index, follow` |
| Open Graph | `website`, `fr_FR`, titre/description français, URL canonique |
| OG/Twitter image | `https://bonusfoundry.com/brand/bonusfoundry-og.png` |
| Twitter | `summary_large_image`, titre/description français |
| Sitemap / dateModified | `2026-10-11`, sans mise à jour quotidienne |
| Fil d'Ariane | `Accueil > Parrainage BNP Paribas` ; aucune page intermédiaire inventée |

JSON-LD : `WebPage` avec `inLanguage: fr-FR`, auteur éditorial français rattaché à l'Organization BonusFoundry existante, `dateModified` réel ; `BreadcrumbList` aligné sur le fil visible ; identité `Organization` et `WebSite` existante. Aucun `FAQPage`, `Offer`, `Review` ou `AggregateRating` ajouté.

## Expiration

L'instant de fin est `2026-10-29T15:00:00+01:00`, soit `2026-10-29T14:00:00Z`. À cet instant exact et à chaque nouvelle requête :

- Le bandeau annonce la fin de la campagne et décrit les montants comme historiques.
- Les deux destinations de parrainage sont remplacées par la page officielle de vérification ; aucun jeton de parrainage n'est rendu.
- Le title/H1 devient `Parrainage BNP Paribas : campagne d'octobre 2026 terminée`.
- Description, Open Graph, Twitter et WebPage reflètent la campagne terminée.
- L'URL informative et le sitemap restent accessibles ; aucune nouvelle campagne n'est inventée.
- Les dates de vérification et modification restent fixes.

Les limites à une milliseconde avant et à l'instant exact ont été testées. Le rendu expiré complet a aussi été contrôlé avec un serveur de production distinct dont l'horloge est simulée à cet instant, au niveau du processus de test uniquement. Aucun paramètre URL, variable d'environnement ou mécanisme de simulation n'a été introduit dans le code de production.

## Vérifications exécutées

| Commande / contrôle | Résultat |
| --- | --- |
| `npm run lint` | Réussi |
| `npm run typecheck` | Réussi |
| `npm run build` | Réussi, 76 pages statiques ; nouvelle page rendue à la demande |
| `npm run check:internal-links` | Réussi : 15 corridors, 22 pages providers, 111 relations, 444 vérifications |
| `npm run check:preview -- http://localhost:3101` | Réussi : HTML 200, 14 assets CSS/JS disponibles, Tailwind présent |
| `node node_modules/tsx/dist/cli.mjs scripts/verify-bnp-referral.ts http://localhost:3101` | Réussi : état actif, SSR, langue, H1/H2/H3, conditions, CTA, SEO, JSON-LD, sitemap, liens, 404 et langue anglaise des routes existantes |
| Même script sur le serveur de test à horloge simulée, avec `--expired` | Réussi : état expiré, aucun lien ni jeton de parrainage, métadonnées et JSON-LD adaptés |
| Chrome headless, 320×568 / 360×800 / 1440×1000 | Réussi : aucun débordement horizontal, dix FAQ visibles dans le DOM, images chargées, aucune exception JavaScript |
| Accessibilité de base | Liens nommés, H1 unique, hiérarchie cohérente, tableau avec caption/scope et région défilable au clavier, CTA atteignable par Tab, focus visible |
| Contraste CTA | Environ 6,16:1 ; hauteur 56 px mobile / 40 px desktop |
| CTA dans le premier écran | Bas du bouton à 557 / 503 / 453 px pour les trois tailles testées |
| Inspection visuelle | Début de page, tableau mobile et sources, avec logo et styles de marque |

Le dépôt ne possède pas de script `npm test` ; les scripts de vérification disponibles et le contrôle BNP dédié ont été exécutés. Le test responsive a utilisé le protocole de test de Chrome avec un profil isolé, sans ajout de package. Le contrôle n'est pas un audit exhaustif WCAG, ni un contrôle d'indexation réelle des moteurs.

Les premiers contrôles ont signalé des types générés obsolètes après les déplacements ; ils ont été régénérés. Le profil Chrome de test placé initialement dans `.next` empêchait le nettoyage Windows d'un build : il a été fermé puis déplacé vers `.next-dev`, et le build final a réussi. Aucun échec de vérification du code ne subsiste.

## Sources consultées et points humains avant publication

Contrôle web effectué le 11 octobre 2026 :

- [Page officielle de parrainage](https://mabanque.bnpparibas/fr/ma-banque-et-moi/parrainage).
- [Règlement dédié](https://mabanque.bnpparibas/fr/ma-banque-et-moi/parrainage/reglement-parrainage).
- [Conditions tarifaires officielles](https://mabanque.bnpparibas/fr/notre-offre/tarifs-et-conditions-bnp-paribas/conditions-tarifaires).
- [Guide particuliers au 1er janvier 2026, PDF officiel](https://mabanque.bnpparibas/content/dam/mabanque/rsc/contrib/pdf/conditions-et-tarifs/PV37407_Tarifs_Part_Janvier_2026.pdf).

Les conditions d'octobre 2026 et le règlement corroborent les informations du goal : 80 € ouverture + 80 € mobilité, 150 € parrain, 20 parrainages, 10 opérations de carte, échéance du 29 octobre à 15 h, ouverture définitive au 29 janvier et délais Facilimouv'. La page officielle contient simultanément des fragments de 2025 (130 €, limite de 3 parrainages, anciennes dates) et un affichage alternatif de 80 € pour le parrain. Cette divergence est expliquée sur la page ; aucune donnée de la campagne d'octobre n'a été remplacée silencieusement par ces fragments.

Avant publication :

1. Confronter les captures originales/app au règlement d'octobre 2026. Elles sont décrites dans le goal mais n'ont pas été fournies comme fichiers consultables ; la page distingue cette description du contrôle web réel.
2. Vérifier que le lien personnel ouvre toujours la campagne attendue dans BNP Paribas. Sa destination et ses attributs ont été contrôlés dans le HTML ; aucun formulaire bancaire n'a été ouvert ou soumis.
3. Recontrôler les conditions de la campagne si BNP Paribas les modifie avant le 29 octobre. Mettre à jour la date de vérification uniquement après contrôle effectif.
4. Le 29 octobre, vérifier le bandeau d'expiration sur l'hébergement réel. Conserver l'URL et l'état historique tant qu'une nouvelle campagne n'est pas confirmée. Une nouvelle offre requiert une révision du contenu complet et des métadonnées, pas seulement un déplacement de la date de fin.

Les preuves locales du rendu sont dans `.next-dev/bnp-320.png`, `.next-dev/bnp-360.png`, `.next-dev/bnp-1440.png`, `.next-dev/bnp-montant.png` et `.next-dev/bnp-sources.png`. Ce sont des artefacts de QA ignorés par Git, susceptibles d'être effacés par une régénération du cache.
