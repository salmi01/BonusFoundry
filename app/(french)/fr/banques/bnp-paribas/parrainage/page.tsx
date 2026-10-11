import type { Metadata } from "next";
import { cache, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CalendarClock, ChevronRight } from "lucide-react";
import { Container } from "@/components/container";
import { LastVerified } from "@/components/ai-content";
import { JsonLd } from "@/components/json-ld";
import { buttonStyles } from "@/components/ui/button";
import {
  bnpCampaign as campaign,
  bnpPageCopy,
  bnpReferralPath,
  bnpReferralUrl,
  isBnpCampaignActive
} from "@/data/bnp-paribas-referral";
import { siteConfig } from "@/data/site";
import { breadcrumbJsonLd, createMetadata, webPageJsonLd } from "@/lib/seo";

// Request-time rendering prevents a cached campaign from remaining active after expiry.
export const dynamic = "force-dynamic";
const campaignActive = cache(() => isBnpCampaignActive());

export function generateMetadata(): Metadata {
  const copy = bnpPageCopy(campaignActive());
  const base = createMetadata({ ...copy, path: bnpReferralPath });
  return {
    ...base,
    title: { absolute: copy.title },
    authors: [{ name: "Équipe éditoriale BonusFoundry" }],
    alternates: {
      canonical: new URL(bnpReferralPath, siteConfig.url).toString()
    },
    robots: { index: true, follow: true },
    openGraph: { ...base.openGraph, locale: "fr_FR" }
  };
}

const disclosure =
  "Ce lien est un lien de parrainage : BonusFoundry peut percevoir une récompense si votre ouverture de compte remplit les conditions.";

function ReferralAction({ active }: { active: boolean }) {
  return (
    <div className="mt-5 max-w-2xl">
      <a
        href={active ? bnpReferralUrl : campaign.conditionsUrl}
        target="_blank"
        rel={active ? "sponsored noopener noreferrer" : "noopener noreferrer"}
        className={buttonStyles({
          className: "w-full whitespace-normal text-center sm:w-auto"
        })}
      >
        {active
          ? "Profiter de l'offre de parrainage BNP Paribas"
          : "Vérifier les offres actuelles chez BNP Paribas"}
        <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
      </a>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {active
          ? disclosure
          : "Le lien de parrainage de cette campagne est désactivé dans l'attente d'une nouvelle vérification."}{" "}
        BNP Paribas décide de l&apos;éligibilité et de l&apos;acceptation du
        dossier.
      </p>
    </div>
  );
}

function CampaignSource() {
  return (
    <p className="mt-4 text-sm text-muted-foreground">
      Campagne d&apos;octobre 2026 :{" "}
      <a
        className="text-primary underline"
        href={campaign.rulesUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        règlement officiel du parrainage BNP Paribas
      </a>
      .
    </p>
  );
}

function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titre`}
      className="scroll-mt-32 space-y-4 border-t pt-8"
    >
      <h2 id={`${id}-titre`} className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

const faqs = [
  {
    question: "Quel est le montant de la prime de parrainage BNP Paribas ?",
    answer: `Pour le filleul, la campagne d'octobre 2026 prévoit jusqu'à ${campaign.totalAmount} € : ${campaign.openingAmount} € pour l'ouverture éligible et ${campaign.mobilityAmount} € supplémentaires avec Facilimouv'. Chaque prime a ses conditions. Le parrain peut recevoir ${campaign.sponsorAmount} € ; cette somme n'est pas une prime supplémentaire pour le filleul.`
  },
  {
    question: "Peut-on obtenir 160 € sans changer de banque ?",
    answer:
      "Non. Sans souscription admissible à la mobilité bancaire Facilimouv', seuls les 80 € initiaux sont potentiellement accessibles, sous conditions. Les 80 € supplémentaires nécessitent cette démarche de mobilité ; l'ouverture d'un compte seule ne suffit pas."
  },
  {
    question:
      "Peut-on utiliser un lien de parrainage BNP Paribas après avoir ouvert son compte ?",
    answer:
      "Il faut utiliser le lien d'invitation avant de créer le compte. Le règlement demande une ouverture à partir du lien ou du QR code du parrain. Aucune application rétroactive n'est garantie : si le compte est déjà ouvert, demandez à BNP Paribas ce qui est possible."
  },
  {
    question:
      "Combien d'opérations de carte faut-il réaliser pour obtenir la prime ?",
    answer:
      "Au moins 10 opérations de carte, paiements ou retraits, dans les 3 mois suivant la réception de la carte. L'ouverture doit être définitive et les autres conditions remplies. Pour un compte joint, les opérations de l'une ou de l'ensemble des cartes sont prises en compte."
  },
  {
    question: "Qui peut bénéficier de cette offre de parrainage en France ?",
    answer:
      "Un nouveau client, personne physique majeure et capable, agissant pour des besoins non professionnels et résidant en France métropolitaine, hors Monaco. Il doit ouvrir son premier compte de dépôt BNP Paribas avec Esprit Libre Référence et une carte Visa Origin, Classic ou Premier, sous réserve d'acceptation de la banque."
  },
  {
    question: "Quand reçoit-on les 80 € liés à Facilimouv' ?",
    answer:
      "Trois mois après la souscription au service, selon les conditions de la campagne. La demande doit être initiée au plus tard le 29 octobre 2026 et la souscription finalisée dans les 15 jours suivant l'ouverture définitive du compte."
  },
  {
    question:
      "L'offre Esprit Libre Référence reste-t-elle gratuite après un an ?",
    answer:
      "Non, la gratuité promotionnelle dure un an pour les services éligibles. Ensuite, les tarifs en vigueur s'appliquent selon la formule, l'âge et la carte. Certaines opérations, les intérêts de facilité de caisse et Visa Infinite ne sont pas couverts par cette gratuité."
  },
  {
    question: "Jusqu'à quand l'offre d'octobre 2026 est-elle valable ?",
    answer:
      "La demande d'ouverture à partir de l'invitation doit être effectuée avant le 29 octobre 2026 à 15 h, heure de France métropolitaine, sous réserve d'évolution de l'opération. L'ouverture définitive doit intervenir au plus tard le 29 janvier 2027. Ces délais ne prolongent pas la période d'inscription."
  },
  {
    question: "Est-il possible d'obtenir la prime en ouvrant un compte joint ?",
    answer:
      "Oui, un premier compte joint peut être éligible si les conditions sont remplies. Une seule prime d'ouverture est attribuée pour les deux cotitulaires, et non 80 € à chacun. Les opérations de carte de l'un ou des deux cotitulaires peuvent compter pour atteindre les 10 opérations requises."
  },
  {
    question:
      "Le lien de parrainage fonctionne-t-il pour un client BNP Paribas existant ?",
    answer:
      "Cette offre vise un nouveau client ouvrant son premier compte de dépôt BNP Paribas. Un client déjà titulaire d'un compte individuel ou cotitulaire d'un compte joint BNP Paribas ne remplit pas cette condition. Le lien ne supprime pas les critères d'éligibilité."
  }
];

export default function BnpReferralPage() {
  const active = campaignActive();
  const copy = bnpPageCopy(active);
  const crumbs = [
    { name: "Accueil", item: "/" },
    { name: "Parrainage BNP Paribas", item: bnpReferralPath }
  ];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={{
          ...webPageJsonLd({
            ...copy,
            path: bnpReferralPath,
            updatedAt: campaign.contentModifiedAt
          }),
          inLanguage: "fr-FR",
          author: {
            "@type": "Organization",
            name: "Équipe éditoriale BonusFoundry",
            parentOrganization: { "@id": `${siteConfig.url}/#organization` }
          }
        }}
      />
      <Container className="py-4 sm:py-10">
        <nav
          aria-label="Fil d'Ariane"
          className="mb-5 text-sm text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-foreground">
                Accueil
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="size-4" aria-hidden="true" />
              <span aria-current="page">Parrainage BNP Paribas</span>
            </li>
          </ol>
        </nav>
        {!active && (
          <aside
            role="status"
            className="mb-6 rounded-lg border border-primary/30 bg-muted p-4 leading-7"
          >
            L&apos;offre présentée se terminait le 29 octobre 2026 à 15 h. Nous
            vérifions les nouvelles conditions. Les montants ci-dessous
            décrivent cette campagne passée.
          </aside>
        )}
        <article className="mx-auto max-w-4xl">
          <header>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              France · Campagne d&apos;octobre 2026{!active && " · Terminée"}
            </p>
            <h1 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-tight">
              {copy.title}
            </h1>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {active
                ? "Le parrainage BNP Paribas prévoit"
                : "La campagne d'octobre 2026 prévoyait"}{" "}
              jusqu&apos;à {campaign.totalAmount} € sous conditions :{" "}
              {campaign.openingAmount} € à l&apos;ouverture éligible,{" "}
              {campaign.mobilityAmount} € avec Facilimouv&apos; et un an de
              services éligibles gratuits. Cette campagne vise les nouveaux
              clients résidant en France métropolitaine, hors Monaco, avec une
              demande avant le 29 octobre 2026 à 15 h, heure française.
            </p>
            <ReferralAction active={active} />
            <dl className="mt-5 rounded-lg border bg-card px-4 py-3 text-sm shadow-sm sm:text-base">
              <div className="flex flex-wrap justify-between gap-x-3 py-1">
                <dt>Prime de bienvenue</dt>
                <dd className="font-semibold">{campaign.openingAmount} €</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-x-3 py-1">
                <dt>Prime mobilité Facilimouv&apos;</dt>
                <dd className="font-semibold">+{campaign.mobilityAmount} €</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-x-3 py-1">
                <dt>Avantage additionnel</dt>
                <dd className="font-semibold">
                  1 an de services éligibles gratuits
                </dd>
              </div>
            </dl>
            <a
              className="mt-3 inline-block text-sm text-primary underline"
              href={campaign.conditionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir les conditions de l&apos;offre
            </a>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarClock className="size-4 shrink-0" aria-hidden="true" />
              Sources web contrôlées le{" "}
              <time dateTime={campaign.offerLastVerifiedAt}>
                11 octobre 2026
              </time>
            </p>
          </header>

          <div className="mt-8 space-y-8 text-base leading-7">
            <Section
              id="montant"
              title="Quel est le montant du parrainage BNP Paribas en 2026 ?"
            >
              <p>
                Le filleul peut recevoir deux primes distinctes, pour un total
                maximal de {campaign.totalAmount} €. Les premiers{" "}
                {campaign.openingAmount} € dépendent de l&apos;ouverture du
                compte et de l&apos;usage de la carte. Les{" "}
                {campaign.mobilityAmount} € suivants supposent une souscription
                admissible à Facilimouv&apos;. L&apos;année de services gratuits
                est un avantage séparé : elle ne constitue pas un versement en
                euros.
              </p>
              <div
                role="region"
                aria-label="Tableau des avantages et conditions"
                tabIndex={0}
                className="overflow-x-auto rounded-lg border bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <table className="w-full min-w-[640px] text-left text-sm leading-6">
                  <caption className="p-4 text-left font-semibold">
                    Avantages du filleul — campagne d&apos;octobre 2026, sous
                    conditions
                  </caption>
                  <thead className="bg-muted">
                    <tr>
                      {[
                        "Avantage",
                        "Montant",
                        "Condition principale",
                        "Moment de versement"
                      ].map((label) => (
                        <th key={label} scope="col" className="px-4 py-3">
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <th scope="row" className="px-4 py-3">
                        Bienvenue
                      </th>
                      <td className="px-4 py-3">{campaign.openingAmount} €</td>
                      <td className="px-4 py-3">
                        Premier compte, Esprit Libre Référence, Visa éligible et
                        10 opérations en 3 mois après réception de la carte
                      </td>
                      <td className="px-4 py-3">
                        Après ouverture définitive et respect des conditions ;
                        aucun délai de paiement précis annoncé ici
                      </td>
                    </tr>
                    <tr className="border-t">
                      <th scope="row" className="px-4 py-3">
                        Mobilité Facilimouv&apos;
                      </th>
                      <td className="px-4 py-3">{campaign.mobilityAmount} €</td>
                      <td className="px-4 py-3">
                        Demande initiée au plus tard le 29 octobre ; finalisée
                        dans les 15 jours après ouverture définitive
                      </td>
                      <td className="px-4 py-3">
                        3 mois après souscription au service
                      </td>
                    </tr>
                    <tr className="border-t">
                      <th scope="row" className="px-4 py-3">
                        Services éligibles
                      </th>
                      <td className="px-4 py-3">
                        1 an gratuit, sans prime en espèces
                      </td>
                      <td className="px-4 py-3">
                        Services Essentiels d&apos;Esprit Libre Référence et
                        carte éligible ; exclusions applicables
                      </td>
                      <td className="px-4 py-3">
                        Gratuité temporaire selon le contrat
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Pour le parrain, la campagne prévoit {campaign.sponsorAmount} €
                par ouverture éligible validée, dans la limite de{" "}
                {campaign.maxReferralsPerYear} parrainages validés par année
                civile. Cette récompense peut revenir au propriétaire de
                BonusFoundry lorsque son lien est utilisé ; elle n&apos;augmente
                pas le montant reçu par le nouveau client.
              </p>
              <CampaignSource />
            </Section>

            <Section
              id="demarche"
              title="Comment profiter du lien de parrainage BNP Paribas ?"
            >
              <p>
                Utilisez le lien d&apos;invitation avant la création du compte.
                Le lien de parrainage BNP Paribas identifie l&apos;invitation
                dans le parcours de la banque ; il ne s&apos;agit pas d&apos;un
                code promo à recopier manuellement et il ne garantit aucune
                prime.
              </p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  Ouvrez le lien de parrainage, puis vérifiez l&apos;offre et
                  ses conditions sur le site BNP Paribas avant de poursuivre.
                </li>
                <li>
                  Effectuez la demande de premier compte avant le 29 octobre
                  2026 à 15 h. Choisissez les Services Essentiels d&apos;Esprit
                  Libre Référence avec une Visa Origin, Classic ou Premier.
                </li>
                <li>
                  Fournissez les justificatifs demandés et attendez
                  l&apos;acceptation du dossier. L&apos;activation définitive
                  doit intervenir au plus tard le 29 janvier 2027.
                </li>
                <li>
                  À réception de la carte, réalisez au moins 10 paiements ou
                  retraits dans les 3 mois qui suivent pour remplir la condition
                  d&apos;usage de la première prime.
                </li>
                <li>
                  Si vous souhaitez la prime de mobilité, initiez la demande
                  Facilimouv&apos; au plus tard le 29 octobre 2026 et finalisez
                  la souscription dans les 15 jours après l&apos;ouverture
                  définitive.
                </li>
              </ol>
              <p>
                Conservez les confirmations de la banque et les dates utiles. Si
                vous recherchez un « code parrainage BNP Paribas », ce parcours
                repose sur l&apos;invitation : aucun ajout après ouverture
                n&apos;est assuré.
              </p>
              <CampaignSource />
            </Section>

            <Section
              id="bienvenue"
              title="Quelles sont les conditions pour recevoir les premiers 80 € ?"
            >
              <p>
                Les {campaign.openingAmount} € nécessitent un premier compte de
                dépôt éligible, une carte admissible et au moins 10 opérations
                de carte dans les 3 mois suivant sa réception. La prime dépend
                aussi de l&apos;ouverture définitive et de la validation de BNP
                Paribas.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Être une personne physique majeure, capable, agissant pour des
                  besoins non professionnels.
                </li>
                <li>
                  Résider en France métropolitaine, hors Monaco, et être nouveau
                  client BNP Paribas.
                </li>
                <li>
                  Ouvrir un premier compte de dépôt BNP Paribas à son nom,
                  individuel ou joint, à partir de l&apos;invitation dans le
                  délai de la campagne.
                </li>
                <li>
                  Souscrire aux Services Essentiels d&apos;Esprit Libre
                  Référence avec une carte Visa Origin, Classic ou Premier.
                </li>
                <li>
                  Réaliser les 10 paiements ou retraits dans le délai de 3 mois
                  après réception de la carte.
                </li>
              </ul>
              <p>
                Une seule prime peut être versée par personne et par compte.
                Pour un compte joint, une seule prime d&apos;ouverture couvre
                les deux cotitulaires ; les opérations de l&apos;une ou de
                l&apos;ensemble des cartes sont prises en compte. La banque
                mentionne un délai de rétractation de 14 jours et une offre non
                cumulable avec les autres offres commerciales en cours.
              </p>
              <CampaignSource />
            </Section>

            <Section
              id="mobilite"
              title="Comment obtenir les 80 € supplémentaires avec Facilimouv' ?"
            >
              <p>
                La deuxième prime de {campaign.mobilityAmount} € demande une
                démarche de mobilité bancaire distincte. Elle n&apos;est pas
                déclenchée automatiquement par l&apos;ouverture du compte.
              </p>
              <p>
                La demande de souscription à Facilimouv&apos; doit être initiée
                au plus tard le 29 octobre 2026. La souscription doit ensuite
                être finalisée dans les 15 jours suivant l&apos;ouverture
                définitive du compte. Le service est réservé aux personnes
                physiques majeures et capables ; les modalités de la banque
                déterminent l&apos;admissibilité de la demande.
              </p>
              <p>
                Le versement est prévu trois mois après la souscription au
                service. Si vous ouvrez le compte sans recourir à cette
                mobilité, vous ne pouvez pas présenter les{" "}
                {campaign.totalAmount} € comme acquis : seuls les premiers{" "}
                {campaign.openingAmount} € restent potentiellement accessibles,
                sous leurs propres conditions.
              </p>
              <CampaignSource />
            </Section>

            <Section
              id="delais"
              title="Quels sont les délais d'ouverture et de versement ?"
            >
              <p>
                La date limite d&apos;inscription et les délais de réalisation
                sont différents. L&apos;ouverture définitive autorisée
                jusqu&apos;en janvier ne permet pas de démarrer une nouvelle
                demande après la fin de campagne.
              </p>
              <dl className="space-y-4 rounded-lg border bg-card p-5">
                <div>
                  <dt className="font-semibold">
                    Invitation et demande d&apos;ouverture
                  </dt>
                  <dd>
                    Avant le 29 octobre 2026 à 15 h, heure de France
                    métropolitaine (UTC+1 à cette date), sous réserve
                    d&apos;évolution décidée par BNP Paribas.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Ouverture définitive</dt>
                  <dd>
                    Au plus tard le{" "}
                    <time dateTime={campaign.definitiveOpeningDeadline}>
                      29 janvier 2027
                    </time>
                    , dans les 3 mois suivant la fin de l&apos;opération.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">
                    Utilisation de la carte et première prime
                  </dt>
                  <dd>
                    10 opérations au minimum dans les 3 mois suivant la
                    réception de la carte. Versement après ouverture définitive
                    et respect des conditions ; nous n&apos;annonçons pas un
                    délai de paiement plus précis que celui documenté.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">
                    Souscription Facilimouv&apos;
                  </dt>
                  <dd>
                    Demande initiée au plus tard le 29 octobre 2026, puis
                    finalisée dans les 15 jours après l&apos;ouverture
                    définitive.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Prime de mobilité</dt>
                  <dd>
                    3 mois après la souscription au service, selon les
                    conditions de la campagne.
                  </dd>
                </div>
              </dl>
              <CampaignSource />
            </Section>

            <Section
              id="tarifs"
              title="Un an de services gratuits : que faut-il vérifier ?"
            >
              <p>
                La gratuité concerne la carte admissible et les Services
                Essentiels d&apos;Esprit Libre Référence pendant un an. Elle ne
                signifie pas que toutes les opérations bancaires sont gratuites.
              </p>
              <p>
                La Visa Infinite, les intérêts liés à l&apos;utilisation
                d&apos;une facilité de caisse et les frais de certaines
                opérations courantes sont exclus. Lisez les conditions
                contractuelles pour savoir précisément quels services et
                opérations sont couverts.
              </p>
              <p>
                Après un an, les tarifs en vigueur s&apos;appliquent. La
                cotisation varie avec la formule, l&apos;âge et la carte :
                vérifiez votre coût futur dans les{" "}
                <a
                  className="text-primary underline"
                  href={campaign.tariffsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  conditions tarifaires officielles BNP Paribas
                </a>{" "}
                et le{" "}
                <a
                  className="text-primary underline"
                  href={campaign.tariffsPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  guide des tarifs particuliers 2026 (PDF)
                </a>
                . Les produits inclus dans Esprit Libre Référence peuvent aussi
                être souscrits séparément.
              </p>
              <CampaignSource />
            </Section>

            <Section
              id="avis"
              title="Le parrainage BNP Paribas est-il intéressant ?"
            >
              <p>
                Il peut être intéressant si vous souhaitez réellement utiliser
                un compte BNP Paribas et si les conditions correspondent à votre
                situation. Comparez la prime accessible, le coût de la formule
                après un an et les services dont vous avez besoin.
              </p>
              <p>
                L&apos;avantage est la combinaison d&apos;une prime
                d&apos;ouverture, d&apos;une prime de mobilité facultative et
                d&apos;une gratuité temporaire. Les contraintes sont les dates
                limites, les 10 opérations, le choix d&apos;une carte et
                d&apos;une formule admissibles, ainsi que la validation du
                dossier par la banque.
              </p>
              <p>
                Si vous ne souhaitez pas déplacer vos opérations récurrentes,
                raisonnez sur {campaign.openingAmount} € potentiels. Si vous
                utilisez Facilimouv&apos;, vérifiez que la mobilité répond à vos
                besoins et que vous pouvez respecter le délai de 15 jours. Les
                primes ne compensent pas nécessairement tous les frais futurs.
              </p>
            </Section>

            <Section
              id="faq"
              title="Questions fréquentes sur le parrainage BNP Paribas"
            >
              <p>
                Ces réponses concernent la campagne d&apos;octobre 2026
                {!active && ", désormais terminée"}.
              </p>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-lg border bg-card p-5"
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <CampaignSource />
            </Section>

            <Section
              id="sources"
              title="Sources officielles et vérification de l'offre"
            >
              <LastVerified
                date={campaign.offerLastVerifiedAt}
                label="Sources web contrôlées le"
                reviewedBy="Équipe éditoriale BonusFoundry"
                french
              />
              <p>
                Cette page est rédigée par l&apos;équipe éditoriale
                BonusFoundry. BonusFoundry est un site indépendant et n&apos;est
                pas affilié à BNP Paribas.
              </p>
              <p>
                Source principale : conditions de la campagne BNP Paribas
                d&apos;octobre 2026, consultées dans l&apos;application /
                captures communiquées par le propriétaire, selon le dossier
                éditorial fourni. Les captures originales ne sont pas
                disponibles ici pour un contrôle direct. Les conditions web de
                la campagne et le règlement officiel ont été consultés le{" "}
                <time dateTime={campaign.offerLastVerifiedAt}>
                  11 octobre 2026
                </time>{" "}
                et corroborent les montants, les critères et les délais
                présentés.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <a
                    href={campaign.conditionsUrl}
                    className="text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Offre et conditions de parrainage BNP Paribas
                  </a>{" "}
                  — conditions de la campagne d&apos;octobre 2026.
                </li>
                <li>
                  <a
                    href={campaign.rulesUrl}
                    className="text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Règlement officiel de l&apos;opération de parrainage
                  </a>{" "}
                  — éligibilité, compte joint et délais.
                </li>
                <li>
                  <a
                    href={campaign.tariffsUrl}
                    className="text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conditions tarifaires officielles
                  </a>{" "}
                  et{" "}
                  <a
                    href={campaign.tariffsPdfUrl}
                    className="text-primary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    guide particuliers 2026 (PDF)
                  </a>{" "}
                  — frais et prix après la période de gratuité.
                </li>
              </ul>
              <aside className="rounded-lg border bg-muted p-5 text-sm leading-6">
                <p className="font-semibold">
                  Divergence documentaire constatée
                </p>
                <p className="mt-2">
                  La page officielle contient aussi des fragments
                  d&apos;anciennes campagnes : 130 €, dates de 2025, limite de 3
                  parrainages et un autre affichage de 80 € pour le parrain.
                  Nous retenons les conditions d&apos;octobre 2026, corroborées
                  par le règlement dédié : {campaign.openingAmount} € +{" "}
                  {campaign.mobilityAmount} € pour le filleul,{" "}
                  {campaign.sponsorAmount} € pour le parrain et{" "}
                  {campaign.maxReferralsPerYear} parrainages validés maximum.
                  Avant de souscrire, vérifiez les conditions affichées dans
                  votre parcours BNP Paribas.
                </p>
              </aside>
              <p className="text-sm text-muted-foreground">
                {disclosure} Les conditions peuvent évoluer sur décision de la
                banque. Aucun lien de parrainage ne garantit une ouverture ni un
                versement.
              </p>
              <ReferralAction active={active} />
            </Section>
          </div>
        </article>
      </Container>
    </>
  );
}
