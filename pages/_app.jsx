// import Layout from "@/pages/_layout";
import GlobalStyle from "@/design-system/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Layout> */}
      <GlobalStyle />
      <Component {...pageProps} />
      {/* </Layout> */}
    </>
  );
}
