import { SearchResults } from "@/components/SearchResults";
import TopRated from "@/components/Top_rated";
import Trending from "@/components/Trending";
import { DataContextProvider, useDataContext } from "@/contexts/dataContext";
import AppLayout from "@/layouts/AppLayout";

function Home({ trendings, topmovie, toptv, search }) {
  //const {contextData} = useDataContext();

  return (
    //<DataContextProvider>
      <AppLayout
        metaTitle="Entertainment Web App | Home"
        metaDescription="Frontenmentor project realised by...."
      >
        <SearchResults></SearchResults>
        <Trending trendings={trendings} />
        <TopRated topmovie={topmovie} toptv={toptv} />

        {/*contextData ? <SearchResults></SearchResults> : <><Trending trendings={trendings} /><TopRated topmovie={topmovie} toptv={toptv} /></>*/}
      </AppLayout>

    //</DataContextProvider>
  );
}

export async function getStaticProps() {
  const media_type = "all";
  const time_window = "week";
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_API_BASE_PATH}/trending/${media_type}/${time_window}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );
  const trendings = await response.json();
  console.log("query trending", trendings);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_API_BASE_PATH}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );
  const topmovie = await res.json();
  console.log("query topmovie", topmovie);

  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_API_BASE_PATH}/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );
  const toptv = await resp.json();
  console.log("query topmovie", toptv);

  return {
    props: {
      trendings,
      topmovie,
      toptv,
    },
  };
}

export default Home;
