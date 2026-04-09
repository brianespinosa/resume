import type { Metadata } from 'next';
import Markdown from 'react-markdown';
import { EmailLink } from '@/components/EmailLink';
import data from '@/data';

const { name, address, email, phone, socials, content } = data;

export const metadata: Metadata = {
  title: name,
};

export default function Home() {
  return (
    <>
      <header className='container'>
        <hgroup>
          <h1>{name}</h1>
          <div>
            {address && <address>{address}</address>}
            {phone && <a href={`tel:${phone}`}>{phone}</a>}
            {email && <EmailLink {...email} />}
            {socials?.map((social) => (
              <a key={social.name} href={social.url}>
                {social.name}
              </a>
            ))}
          </div>
        </hgroup>
      </header>
      <main className='container'>
        {content.map((block) => (
          <section key={block.title}>
            <h2>{block.title}</h2>
            {'text' in block ? (
              <Markdown>{block.text}</Markdown>
            ) : (
              block.experience.flatMap((job) =>
                job.roles.map((role) => {
                  const start = new Date(
                    role.duration.start,
                  ).toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: 'long',
                  });
                  const end =
                    'end' in role.duration && role.duration.end
                      ? new Date(role.duration.end).toLocaleDateString(
                          'en-us',
                          { year: 'numeric', month: 'long' },
                        )
                      : 'Present';
                  const companyLine = [
                    job.company,
                    job.companyDescription,
                    job.location,
                  ]
                    .filter(Boolean)
                    .join(' | ');

                  return (
                    <article key={`${job.company}-${role.title}`}>
                      <hgroup>
                        <h3>
                          {role.title}
                          <span>
                            {start} – {end}
                          </span>
                        </h3>
                        <p>{companyLine}</p>
                      </hgroup>
                      {typeof role.description === 'string' ? (
                        <p>{role.description}</p>
                      ) : (
                        <ul>
                          {role.description?.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      )}
                    </article>
                  );
                }),
              )
            )}
          </section>
        ))}
      </main>
    </>
  );
}
