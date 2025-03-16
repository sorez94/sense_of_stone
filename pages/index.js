import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sense of Stone - Under Construction</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main>
                <h1 className={styles.title}>
                    <span className="title-gradient">Sense of Stone</span>
                </h1>
                <p className="subtitle">Coming Soon</p>

                <div className="links-container">
                    <a
                        href="https://wa.me/+989124845654"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        WhatsApp #1
                    </a>
                    <a
                        href="https://wa.me/+989127116788"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        WhatsApp #2
                    </a>
                    <a
                        href="https://instagram.com/senseofstone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        Instagram
                    </a>
                </div>
            </main>

            <footer>
                <span className="footer-text">SOREZ</span>
            </footer>

            <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #f5f8f5;
          height: calc(100vh - 60px);
          overflow: hidden;
        }
        .title-gradient {
          background: linear-gradient(45deg, #2e7d32, #66bb6a);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-size: 2.5rem;
          font-weight: 600;
        }
        .subtitle {
          color: #4a704c;
          font-size: 1.2rem;
          margin: 0.5rem 0 2rem;
          font-weight: 500;
        }
        .links-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
          max-width: 300px;
        }
        .social-link {
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          background: #81c784;
          text-align: center;
          transition: all 0.2s ease;
        }
        .social-link:hover {
          background: #66bb6a;
          transform: translateY(-2px);
        }
        footer {
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f5f8f5;
        }
        .footer-text {
          color: #4a704c;
          font-size: 0.85rem;
          font-weight: 500;
        }
      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          background: #f5f8f5;
          height: 100vh;
          overflow: hidden;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    );
}
