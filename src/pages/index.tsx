import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

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
        <section className="padding-vert--xl">
          <div className="container">
            <div className="row">
              <div className="col col--12 text--center">
                <h2>Welcome to the Physical AI & Humanoid Robotics Textbook</h2>
                <p>Your comprehensive guide to understanding and developing humanoid robots.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}