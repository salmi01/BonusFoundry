import { siteConfig } from "@/data/site";

type SocialLinksProps = {
  compact?: boolean;
};

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <ul className={compact ? "mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm" : "mt-3 space-y-2 text-sm"}>
      {siteConfig.socialProfiles.map((profile) => (
        <li key={profile.href}>
          <a
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow BonusFoundry on ${profile.label}`}
          >
            {profile.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
