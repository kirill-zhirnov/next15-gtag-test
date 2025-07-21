'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { sendGTMEvent } from '@next/third-parties/google';
import {useEffect} from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    console.log('new: trigger event on page load:');

    //если добавить send_to - то работает в гугле
    // window.gtag('event', 'page_view', {
    //   page_location: 'https://next15-gtag-test.vercel.app/another-page',
    //   page_title: 'some title',
    //   send_to: 'G-38W3MZM036'
    // });

    //
    // window.gtag('event', 'gtm.historyChange-v2', {
    //   page_location: '/some_custom_path/',
    //   page_title: 'Hello World',
    //   page_path: '/some_custom_path/',
    // });

    // window.gtag('page_view', {
    //   page_location: '/some_custom_path/',
    //   page_title: 'Hello World',
    //   page_path: '/some_custom_path/',
    // });
    sendGTMEvent({
      event: 'page_view',
      page_title: 'Fire on Load',
      page_location: window.location.toString()
    });
  }, []);

  const manualPageView = (page_title: string, page_path: string) => {
    console.log('disabled for now')

    // window.gtag('event', 'page_view', {
    //   page_path,
    //   page_title
    // })
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
            className={styles.logo}
            src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>

          <button onClick={() => sendGTMEvent({event: 'generate_lead', currency: 'DKK', value: '100'})}>test custom
            event
          </button>
          <button onClick={() => sendGTMEvent({
            event: 'page_view',
            page_title: 'Step: Property type',
            page_location: `https://${window.location.host}/some-custom-page/`
          })}>
          {/*<button onClick={() => manualPageView('Step: Property type', '/some-custom-page/')}>*/}
            Test Manual event
          </button>
        </div>

        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
        <div>
          <Link href="/sup-page">Go to Sub-Page</Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
