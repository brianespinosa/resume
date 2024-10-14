'use client';

import styles from './EmailLink.module.css';

export interface EmailLinkProperties {
  name: string;
  domain: string;
  tld: string;
  className?: string;
}

// We could move this scope inside the component and pass the values, but in
// order to obfuscate the email, we are only looking at the dataset values on
// the HTML element instead of assembling the mailto string in code.
const handleClick = (event) => {
  event.preventDefault();
  globalThis.location.href =
    'mailto:' +
    event.target.dataset.name +
    '@' +
    event.target.dataset.domain +
    '.' +
    event.target.dataset.tld;
};

export function EmailLink({
  name,
  domain,
  tld,
  className,
  ...rest
}: EmailLinkProperties) {
  return (
    <a
      {...rest}
      data-name={name}
      data-domain={domain}
      data-tld={tld}
      className={[styles._, className].join(' ')}
      onClick={handleClick}
    />
  );
}
