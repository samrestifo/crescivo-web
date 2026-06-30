import styles from './Privacy.module.css'

const LAST_UPDATED = 'June 2026'

const SECTIONS = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <p>
        Crescivo works with founder-led B2B scale-ups to help them scale beyond founder
        dependency through the Crescivo Scale System. Crescivo is led by Sam Restifo,
        Guy Pozniak and Jason Serda.
      </p>
    ),
  },
  {
    id: 'what-this-covers',
    title: 'What this policy covers',
    body: (
      <>
        <p>
          This Privacy Policy explains how we collect, use, disclose, store and protect
          personal information when you:
        </p>
        <ul>
          <li>visit crescivo.partners</li>
          <li>submit an enquiry</li>
          <li>contact us by email or other channels</li>
          <li>engage with us in a workshop, proposal process or client engagement</li>
          <li>interact with our content, forms or digital services</li>
        </ul>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Personal information we collect',
    body: (
      <>
        <p>We may collect:</p>
        <ul>
          <li>name</li>
          <li>email address</li>
          <li>phone number</li>
          <li>company name</li>
          <li>role / title</li>
          <li>information submitted through enquiry forms</li>
          <li>business context shared during calls, workshops or proposal discussions</li>
          <li>website usage data, device / browser information and analytics data</li>
          <li>records of communications with us</li>
        </ul>
        <p>
          We do not intentionally collect sensitive personal information unless it is
          voluntarily provided and relevant to the engagement.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-collect',
    title: 'How we collect personal information',
    body: (
      <>
        <p>We collect personal information:</p>
        <ul>
          <li>directly from you when you submit forms, email us, book meetings or speak with us</li>
          <li>through website analytics and cookies or similar technologies</li>
          <li>from publicly available sources such as company websites and professional profiles</li>
          <li>from referrals or introductions, where appropriate</li>
        </ul>
      </>
    ),
  },
  {
    id: 'why-we-use',
    title: 'Why we use personal information',
    body: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>respond to enquiries</li>
          <li>assess whether Crescivo is a fit for a prospective client</li>
          <li>prepare proposals, briefs and engagement materials</li>
          <li>deliver workshops, diagnostics and client engagements</li>
          <li>manage client relationships</li>
          <li>improve our website, services and communications</li>
          <li>meet legal, administrative and operational obligations</li>
        </ul>
      </>
    ),
  },
  {
    id: 'analytics-and-cookies',
    title: 'Website analytics and cookies',
    body: (
      <p>
        Our website may use cookies, analytics or similar technologies to understand site
        performance, traffic and user behaviour. This may include information such as pages
        visited, approximate location, device type, browser and referral source. You can
        manage cookies through your browser settings.
      </p>
    ),
  },
  {
    id: 'disclosure',
    title: 'Disclosure of personal information',
    body: (
      <>
        <p>We may disclose personal information to:</p>
        <ul>
          <li>Crescivo team members and contractors</li>
          <li>technology providers used to operate the website, email, scheduling, CRM, file storage or analytics</li>
          <li>professional advisers where required</li>
          <li>parties involved in delivering a client engagement</li>
          <li>regulators or authorities if required by law</li>
        </ul>
        <p>We do not sell personal information.</p>
      </>
    ),
  },
  {
    id: 'overseas-disclosure',
    title: 'Overseas disclosure',
    body: (
      <p>
        Some of the technology providers we use may store or process information outside
        Australia. Where this occurs, we take reasonable steps to use reputable providers and
        protect information appropriately.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        We take reasonable steps to protect personal information from misuse, interference,
        loss, unauthorised access, modification or disclosure. No online system can be
        guaranteed completely secure.
      </p>
    ),
  },
  {
    id: 'retention',
    title: 'Retention',
    body: (
      <p>
        We keep personal information only for as long as reasonably necessary for the purposes
        described in this policy, including business, legal, administrative and record-keeping
        purposes.
      </p>
    ),
  },
  {
    id: 'access-and-correction',
    title: 'Access and correction',
    body: (
      <p>
        You may contact us to request access to, or correction of, personal information we
        hold about you. We may need to verify your identity before responding.
      </p>
    ),
  },
  {
    id: 'complaints',
    title: 'Complaints',
    body: (
      <p>
        If you have a privacy concern or complaint, contact us first so we can try to resolve
        it. If you are not satisfied, you may contact the Office of the Australian Information
        Commissioner.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <>
        <p>
          For privacy questions, access / correction requests or complaints, contact:
        </p>
        <p className={styles.contactLines}>
          Email: <a href="mailto:hello@crescivo.partners">hello@crescivo.partners</a><br />
          Website: crescivo.partners
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. The updated version will be
        published on this page with a revised &ldquo;Last updated&rdquo; date.
      </p>
    ),
  },
]

export default function Privacy() {
  return (
    <main className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className="eyebrow">Privacy Policy</div>
          <h1 className={styles.title}>
            How Crescivo handles <em>personal information.</em>
          </h1>
          <p className={styles.lede}>
            This policy explains how Crescivo collects, uses, stores and protects personal
            information when people interact with our website, enquiries, proposals and client
            engagements.
          </p>
          <div className={styles.meta}>
            <span className={styles.metaLabel}>Last updated</span>
            <span className={styles.metaValue}>{LAST_UPDATED}</span>
          </div>
          <p className={styles.disclaimer}>
            This page is provided as general information, not legal advice. It is drafted in
            line with Australian Privacy Principles and is intended to be reviewed with legal
            counsel before reliance.
          </p>
        </div>
      </header>

      {/* Body: TOC + content */}
      <div className={styles.body}>
        <div className={styles.inner}>
          <div className={styles.layout}>
            {/* Desktop table of contents */}
            <aside className={styles.toc} aria-label="Privacy Policy contents">
              <div className={styles.tocLabel}>Contents</div>
              <ol className={styles.tocList}>
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>
                      <span className={styles.tocNum}>{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            {/* Main content */}
            <div className={styles.content}>
              {SECTIONS.map((s, i) => (
                <section key={s.id} id={s.id} className={styles.section}>
                  <div className={styles.sectionHead}>
                    <span className={styles.sectionNum}>{String(i + 1).padStart(2, '0')}</span>
                    <h2 className={styles.sectionTitle}>{s.title}</h2>
                  </div>
                  <div className={styles.sectionBody}>{s.body}</div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
