interface EmailLinkProperties {
  name: string;
  domain: string;
  tld: string;
}

export function EmailLink({ name, domain, tld }: EmailLinkProperties) {
  return (
    <a href={`mailto:${name}@${domain}.${tld}`}>{`${name}@${domain}.${tld}`}</a>
  );
}
