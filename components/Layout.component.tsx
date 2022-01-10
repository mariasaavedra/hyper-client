import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/components/Banner.module.scss";
import Header from "./Header.component";

interface LayoutProps {
  children: any;
}

const Layout: NextPage<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Hyper Genius</title>
          <meta name="description" content="A garden of digial delights." />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          ></script>
        </Head>
        <main className="container mx-auto pb-4">
          <Header />
          {props.children}
        </main>
      </div>
    </>
  );
};

Layout.getInitialProps;
export default Layout;
