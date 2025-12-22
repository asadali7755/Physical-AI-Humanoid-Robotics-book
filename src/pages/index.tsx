import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="button-group">
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Start Learning Now - 5 min ⏱️
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
        <section className={styles.introSection}>
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--12 text--center">
                <h2>Explore the Future of Robotics</h2>
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
        
        <HomepageFeatures />
        
        <section className={styles.testimonialsSection}>
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--12 text--center">
                <h2>What Experts Say</h2>
              </div>
            </div>
            <div className="row padding-vert--md">
              <div className="col col--4">
                <div className="card">
                  <div className="card__body text--center">
                    <p>"An excellent resource for understanding the complex field of humanoid robotics."</p>
                    <small>- Robotics Researcher</small>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card">
                  <div className="card__body text--center">
                    <p>"Comprehensive coverage of both theoretical and practical aspects of Physical AI."</p>
                    <small>- AI Engineer</small>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card">
                  <div className="card__body text--center">
                    <p>"A must-read for anyone interested in the future of human-robot interaction."</p>
                    <small>- Computer Scientist</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.clientsSection}>
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--12 text--center">
                <h2>Trusted By</h2>
                <p>Used by universities, research institutions, and technology companies worldwide</p>
              </div>
            </div>
            <div className="row padding-vert--md">
              <div className="col col--2 col--offset-1">
                <div className={styles.clientLogo}>University</div>
              </div>
              <div className="col col--2">
                <div className={styles.clientLogo}>Research Lab</div>
              </div>
              <div className="col col--2">
                <div className={styles.clientLogo}>Tech Corp</div>
              </div>
              <div className="col col--2">
                <div className={styles.clientLogo}>Innovation Hub</div>
              </div>
              <div className="col col--2">
                <div className={styles.clientLogo}>AI Institute</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}