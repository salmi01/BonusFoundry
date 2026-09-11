# Sendwave I4H9G — nouvelle preuve de l'offre

## Instruction du propriétaire, reçue le 12 septembre 2026

Présenter le bonus du nouvel utilisateur avec le code `I4H9G` : **10 € / 10 $**, selon la devise de l'offre applicable. Ne pas détailler le montant gagné par le parrain. Conserver une simple déclaration de parrainage sans montant.

Cette instruction et la nouvelle capture remplacent les passages de la tâche initiale qui imposaient uniquement une formulation « montant variable » faute de justificatif propre au code.

## Ce que montre la capture fournie

La capture de l'application officielle Sendwave, écran « Invite a friend », montre :

- le code personnel `I4H9G` sous « YOUR CODE » ;
- à l'étape 2, un crédit de **10,00 € pour le nouvel utilisateur** qui renseigne ce code lors de sa première inscription ;
- un lien vers les conditions du programme.

Le crédit du filleul est donc documenté directement dans l'interface officielle de Sendwave, pour ce code. Il ne s'agit plus seulement d'un code déclaré par le propriétaire sans preuve dans l'application.

La capture affiche des euros. Le montant de **10 $** est communiqué explicitement par le propriétaire dans son message ; il n'est pas visible sur cette capture. Ne pas attribuer la preuve visuelle en euros à une offre en dollars ni inventer la variante de dollar, un pays ou une disponibilité universelle.

La date du 12 septembre 2026 est la date de réception et de revue dans cette conversation, pas une date de prise de vue ou de début de campagne attestée par l'image. L'image est jointe à la conversation ; aucun fichier image ni URL publique de la capture n'a été fourni dans le dépôt.

## Règles de contenu

- Mettre en avant le crédit de bienvenue du nouvel utilisateur : 10 € / 10 $ selon l'offre en devise applicable.
- Attribuer les 10 € à la capture officielle Sendwave et les 10 $ à la déclaration du propriétaire.
- Ne pas décrire le code comme un code promotionnel universel de Sendwave.
- Conserver l'instruction d'entrer le code dans l'application avant de terminer la première transaction et les conditions d'éligibilité.
- Ne pas déduire le délai de versement du filleul à partir d'une instruction qui concerne le parrain. La capture ne précise pas de délai distinct pour le crédit du nouvel utilisateur.
- Ne pas afficher le montant ni le fonctionnement de la récompense du parrain. Une déclaration indiquant que BonusFoundry peut recevoir un avantage suffit.
- Les conditions publiques du programme ont été vérifiées le 11 septembre 2026 ; la nouvelle preuve dans l'application a été revue le 12 septembre 2026.

## Vérification locale et serveurs

Ne pas lancer simultanément deux instances de développement Next.js sur ce dépôt : les fichiers CSS et les modules peuvent disparaître pour l'instance déjà active. Le script `npm run dev` fixe désormais le port 3000 pour empêcher le lancement automatique d'une seconde instance sur le port suivant.

La configuration sépare désormais les fichiers de développement (`.next-dev`) des fichiers de build et de production (`.next`). Un build ne nettoie donc plus les fichiers CSS utilisés par le serveur de développement.

Ne jamais placer un profil de navigateur actif dans `.next` ou `.next-dev`, car Next.js nettoie son dossier de sortie au démarrage. Fermer les navigateurs de test après la vérification. Vérifier les réponses HTTP des feuilles de style en plus de celles des pages.
