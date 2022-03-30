import Movie from "./movie/index";
import { AppProvider } from "./state";
import Top from "../components/top"
import Nav from "../components/navbar";
import Footer from "../components/footer";
import Search from "../components/search-theater";

export default function searchTheater({ movie }) {
  let mode="search-t"
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=DM Sans"
        rel="stylesheet"
      />
      
      <AppProvider value={movie}>
        <Nav/>
        <Search/>
        <Movie />
        <Footer/>
      </AppProvider>
    </>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(
    "https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=ABC movies&time_start=2020-04-04 00:00:00&time_end=2020-04-05 00:00:00"
  );
  const data = await res.json();
  console.log(context);
  return {
    props: { movie: data }, // will be passed to the page component as props
  };
}