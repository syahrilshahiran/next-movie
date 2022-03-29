import Top from "../../components/top";
import Middle from "../../components/middle";
import Nav from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";
import { AppConsumer } from "../state";
import Link from "next/dist/client/link";
function searchTheater(){
    return (
        <>
      <Head>
        <title>PcariMovie</title>
        
      </Head>
      <div>
      <AppConsumer>
          {movie => {
            return <Middle movie={movie} />;
          }}
        </AppConsumer>
        <Nav />
        <Top />
        <Footer />
      </div>
    </>
    )
}
export default searchTheater