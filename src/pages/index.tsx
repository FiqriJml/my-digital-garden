import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          {/* Minimalist List of Categories */}
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="button button--secondary button--lg" to="/docs/coding/intro">
              Coding
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/electronics/intro">
              Electronics
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/troubleshooting/intro">
              Troubleshooting
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/teaching-automation/intro">
              Teaching & Automation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Personal Technical Wiki & Digital Garden">
      <HomepageHeader />
      <main>
        {/* Minimalist: No feature blocks, just the hero/nav */}
      </main>
    </Layout>
  );
}
