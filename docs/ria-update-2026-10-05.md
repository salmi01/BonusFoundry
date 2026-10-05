# Mise à jour Ria — 5 octobre 2026

La documentation actuelle confirme **11 pays éligibles** : Australie, Belgique, Canada, Chili, France, Allemagne, Italie, Malaisie, Espagne, Royaume-Uni et États-Unis. Les sept ajouts par rapport à la version précédente sont la Belgique, le Chili, l'Allemagne, l'Italie, la Malaisie, l'Espagne et le Royaume-Uni.

La première récupération web avait renvoyé une ancienne version de septembre, limitée à quatre pays. La capture fournie par le propriétaire a révélé cet écart. La version actuelle a ensuite été vérifiée directement via l'API publique du centre d'aide Ria ; elle correspond à la capture. Ce compte rendu remplace les conclusions initiales.

Ria ne publie plus le tableau de montants fixes dans les articles actuels : la récompense exacte est à consulter dans l'application. Un minimum reste requis en un seul transfert international, mais ces articles ne le chiffrent plus. Les anciens montants et minimums ont donc été retirés des informations présentées comme actuelles, y compris des données partagées.

Le filleul doit être nouveau chez Ria et saisir le code avant de terminer son premier transfert. Les deux personnes doivent avoir au moins 18 ans et résider dans un pays éligible ; le parrain doit avoir déjà effectué un transfert avec Ria. La récompense du parrain peut mettre jusqu'à deux jours à apparaître après le premier transfert international terminé et payé du filleul, puis s'applique au prochain transfert éligible.

Nouvelles précisions intégrées : jusqu'à deux récompenses acquises sur un transfert éligible, aucun cumul avec un code promotionnel, pas de limite au nombre d'amis parrainés. Si un transfert utilisant une récompense est annulé, celle-ci retourne sur le compte pour un prochain transfert éligible.

## Sources consultées

- [Programme officiel Ria](https://help.riamoneytransfer.com/hc/en-us/articles/4416994463633-Ria-s-refer-a-friend-program) : `edited_at` = `2026-10-05T09:47:07Z`, `updated_at` = `2026-10-05T09:48:45Z`.
- [Instructions pour le filleul](https://help.riamoneytransfer.com/hc/en-us/articles/4407688298385-I-was-referred-to-Ria-how-do-I-claim-my-reward) : `edited_at` = `2026-10-05T09:49:51Z`, `updated_at` = `2026-10-05T09:51:17Z`.
- [Dépannage des codes et récompenses](https://help.riamoneytransfer.com/hc/en-us/articles/36107077964561-Why-didn-t-I-receive-a-referral-discount) : nouveau titre « Why didn't my promo code or referral reward work? » ; `edited_at` = `2026-10-05T09:21:20Z`, `updated_at` = `2026-10-05T09:25:59Z`.
- [Saisie du code promotionnel](https://help.riamoneytransfer.com/hc/en-us/articles/4406279777169-How-do-I-use-a-promo-code) : contenu édité le 11 mars 2025, métadonnées mises à jour le 2 octobre 2026.
- [Parrainage Ria France](https://www.riamoneytransfer.com/en-fr/refer-a-friend/) : renvoie désormais aux montants affichés dans l'application. L'ancienne note sur un exemple USD/EUR contradictoire a été retirée.

Pour les quatre articles du centre d'aide, les corps HTML actuels et les dates ont été récupérés sur `https://help.riamoneytransfer.com/api/v2/help_center/en-us/articles/{id}.json`, avec `Cache-Control: no-cache`. Les dates d'édition du contenu sont distinguées des mises à jour des métadonnées.

## Fichiers et portée

- `data/ria-referral.ts` : source commune pour les 11 pays, l'éligibilité, les règles de récompense, le minimum à vérifier, le cumul, les liens officiels et la date de vérification.
- `app/providers/[slug]/referral-code/page.tsx` : résumé, tableau HTML à 11 pays, dépannage, FAQ et description SEO actualisés ; anciens montants retirés ; sources datées ; correction de deux guillemets mal encodés.
- `data/providers.ts` : fiche Ria, faits, vérification, historique et données partagées alignés sur les règles actuelles. Les comparatifs qui consomment ces données bénéficient de la correction, notamment le guide Maroc.

Les URL, canoniques, balises title, H1, H2, liens internes, code `9RMU-ENB7`, composants et styles existants sont conservés. Aucun script client ou dépendance ajouté.

La FAQ visible et son JSON-LD utilisent les mêmes 13 réponses, couvrant notamment le cumul et le nombre d'amis. Les types de données structurées et les références à l'éditeur restent inchangés. `dateModified` et les entrées Ria du sitemap suivent la date réelle de modification du contenu : `2026-10-05`.

## Vérifications

- Build de production : 76 pages générées ; compilation, lint et vérification des types réussis.
- `npm run lint` et `npm run typecheck` : réussis.
- `npm run check:internal-links` : 111 relations réciproques et 444 directions vérifiées.
- HTML Ria comparé au build précédent : title, canonique, H1, H2 et liens internes conservés ; 11 pays présents ; anciens montants fixes absents ; nouvelles règles de cumul présentes ; JSON-LD valide et FAQ conforme au contenu visible.
- Réponses HTTP, liens internes des deux pages Ria, sitemap, robots et ressources CSS/JavaScript contrôlés.
- Chrome à 390 et 1440 px : pas de débordement horizontal de la page ; copie réelle du code au clavier vérifiée ; aucune erreur JavaScript ou hydratation observée.
- Contrôle Prettier ciblé : les deux fichiers ne respectaient déjà pas intégralement le formatage dans HEAD. Pas de reformatage global afin de conserver un diff ciblé. `git diff --check` réussi.

Les captures et résultats locaux sont dans `.next-dev/ria-audit/` (ignoré par Git).

## Limites et suivi

Les sources publiques confirment le programme, mais n'authentifient pas le code individuel fourni par BonusFoundry. Le lecteur doit toujours vérifier son acceptation et l'offre affichée dans Ria.

Cette livraison porte sur le dépôt local ; aucune publication n'a été effectuée. Après déploiement, demander une nouvelle exploration de l'URL existante dans Search Console et suivre clics, impressions, position et CTR par pays. Aucune mesure de classement avant/après n'a été effectuée ici.

Google indique que les bonnes pratiques SEO restent applicables aux réponses IA, sans balisage spécial requis. L'exactitude, le contenu textuel accessible et la cohérence des données structurées renforcent la qualité de la page, sans garantir classement ou citation : [documentation Google sur les fonctionnalités IA](https://developers.google.com/search/docs/appearance/ai-features).
