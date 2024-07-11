import { Metadata } from 'next';
import { differenceInMonths } from 'date-fns';
import { EmailLink } from '@/components/EmailLink';
import data from '@/data';

const { name, address, email, experience, phone } = data;

export const metadata: Metadata = {
  title: name,
};

export default function Home() {
  return (
    <>
      <header className='container'>
        <hgroup>
          <h1>{name}</h1>
          <div role='group'>
            {address && <address>{address}</address>}
            {phone && <a href={'tel:' + phone}>{phone}</a>}
            {email && <EmailLink {...email} />}
          </div>
        </hgroup>
      </header>
      <main className='container'>
        {experience && (
          <section>
            <h2>Work Experience</h2>
            {experience.map((job) => {
              // Ensure job.roles has elements before proceeding.
              if (job.roles.length === 0) {
                throw new Error('job.roles must have at least one element');
              }

              const lastRole = job.roles.at(-1);
              const firstRole = job.roles[0];

              // Check if lastRole and firstRole are not undefined.
              if (!lastRole || !firstRole) {
                throw new Error('lastRole and firstRole must not be undefined');
              }

              const startDate = new Date(lastRole.duration.start);
              const endDate = firstRole.duration.end
                ? new Date(firstRole.duration.end)
                : new Date();
              const diff = differenceInMonths(endDate, startDate) + 1;

              const years = Math.floor(diff / 12);
              const months = diff - years * 12;

              const duration = years + ' yrs ' + months + ' mos';

              return (
                <article key={job.company}>
                  <header>
                    <hgroup>
                      <h3>{job.company}</h3>
                      <span>{duration}</span>
                    </hgroup>
                  </header>
                  {job.roles &&
                    job.roles.map((role) => (
                      <section key={role.title}>
                        <hgroup>
                          <h4>{role.title}</h4>
                          <span>
                            {new Date(role.duration.start).toLocaleDateString(
                              'en-us',
                              {
                                year: 'numeric',
                                month: 'short',
                              },
                            )}
                          </span>
                          <span>
                            {(role.duration.end &&
                              new Date(role.duration.end).toLocaleDateString(
                                'en-us',
                                {
                                  year: 'numeric',
                                  month: 'short',
                                },
                              )) ||
                              'Present'}
                          </span>
                        </hgroup>
                        {role.description &&
                        typeof role.description === 'string' ? (
                          <p>{role.description}</p>
                        ) : (
                          <ul>
                            {role.description.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        )}
                      </section>
                    ))}
                </article>
              );
            })}
          </section>
        )}
      </main>
    </>
  );
}
