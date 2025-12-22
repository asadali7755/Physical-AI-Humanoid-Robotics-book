import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="button-group">
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Read the Textbook - 5 min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A Comprehensive Textbook on Physical AI and Humanoid Robotics">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="padding-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--12 text--center">
                <h2>About This Textbook</h2>
                <p>
                  This comprehensive textbook explores the fascinating intersection of artificial intelligence
                  and physical systems, with a specific focus on humanoid robots and their applications.
                  You'll gain both theoretical knowledge and practical implementation skills needed to
                  understand and develop advanced humanoid robotic systems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}