import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>A DevSecOps Web Log</title>
        <meta name="description" content="A DevSecOps Web Log" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
          A DevSecOps Web Log built with&nbsp;
            <code className={styles.code}>Next.js</code>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/pony.png"
            alt="Artistic rendering of a network"
            width={180}
            height={180}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/forestheims/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              LinkedIn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Connect with or contact me here.
            </p>
          </a>

          <a
            href="https://github.com/forestheims"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              forestheims has 114 repositories available.
            </p>
          </a>

          <a
            href="https://forestheims.net/resume/2023-resume-2.3.pdf"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Resume <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              The resume of a job seeking software developer.
            </p>
          </a>
          
          <a
            href="https://forestheims.net"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Portfolio <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              A personal portfolio website deployed on Netlify and Heroku built on the PERN stack.
            </p>
          </a>

        </div>
      </main>
    </>
  )
}
