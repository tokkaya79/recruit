import type { AppProps } from "../../node_modules/next/app";
import Layout from "@/components/Layout";



const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;