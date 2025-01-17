import Movie from "./movie/index";
import { AppProvider } from "./state";
import Link from "next/dist/client/link";
import Top from "../components/top";
import Nav from "../components/navbar";
import Footer from "../components/footer";

export default function HomePage({ movie }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=DM Sans"
        rel="stylesheet"
      />
      <AppProvider value={movie}>
        <Nav/>
        <Top/>
        <Movie />
        <Footer/>
      </AppProvider>
    </>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(
    "https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=2020-01-01"
  );
  const data = await res.json();
  console.log(context);
  return {
    props: { movie: data }, // will be passed to the page component as props
  };
}
