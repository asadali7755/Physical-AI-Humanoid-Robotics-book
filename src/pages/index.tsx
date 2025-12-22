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
        <div className={styles.buttons}>
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
        <section className={styles.aboutSection}>
          <div className="container padding-horiz--md">
            <div className="row">
              <div className="col col--6">
                <h2>About This Textbook</h2>
                <p>
                  This comprehensive textbook explores the fascinating intersection of artificial intelligence 
                  and physical systems, with a specific focus on humanoid robots and their applications. 
                  You'll gain both theoretical knowledge and practical implementation skills needed to 
                  understand and develop advanced humanoid robotic systems.
                </p>
                <p>
                  From fundamentals of physical AI and embodied intelligence to motion planning and 
                  human-robot interaction, this textbook provides a complete learning journey for students 
                  and professionals interested in this cutting-edge field.
                </p>
              </div>
              <div className="col col--6">
                <div className={styles.imageContainer}>
                  <img 
                    src="/img/docusaurus.png" 
                    alt="Humanoid Robotics Concept" 
                    className={styles.featureImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className={clsx('hero hero--secondary', styles.chapterSection)}>
          <div className="container padding-vert--md">
            <h2 className="text--center">Chapters Overview</h2>
            <div className="row">
              <div className="col col--4">
                <div className="text--center padding--md">
                  <h3>Chapter 1</h3>
                  <p>Fundamentals of Physical AI and Embodied Intelligence</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding--md">
                  <h3>Chapter 2</h3>
                  <p>Humanoid Robot Design and Mechanics</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding--md">
                  <h3>Chapter 3</h3>
                  <p>AI Algorithms for Physical Interaction</p>
                </div>
              </div>
            </div>
            <div className="row padding-top--md">
              <div className="col col--4">
                <div className="text--center padding--md">
                  <h3>Chapter 4</h3>
                  <p>Sensor Integration and Processing</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding--md">
                  <h3>Chapter 5</h3>
                  <p>Motion Planning and Control</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center padding--md">
                  <h3>Chapter 6</h3>
                  <p>Human-Robot Interaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}