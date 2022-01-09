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
        </Head>
        <main className="container mx-auto">
          <Header/>
          {props.children}
        </main>
      </div>
    </>
  );
}

Layout.getInitialProps
export default Layout;