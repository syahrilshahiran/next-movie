import Top from "../../components/top";
import Middle from "../../components/middle";
import Nav from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";
import { AppConsumer } from "../state";
import Link from "next/dist/client/link";
function Movie() {
  return (
    <>
      <Head>
        <title>PcariMovie</title>
        
      </Head>
      <div>
        <Nav />
        <Top />
        <AppConsumer>
          {movie => {
            return <Middle movie={movie} />;
          }}
        </AppConsumer>
        {/* <Middle movie={movie} /> */}
        <Footer />
      </div>
    </>
  );
}

export default Movie;
