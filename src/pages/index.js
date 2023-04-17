import TopRated from "@/components/Top_rated";
import Trending from "@/components/Trending";
import AppLayout from "@/layouts/AppLayout";

function Home({ trendings, topmovie, toptv }) {
  return (
    <AppLayout
      metaTitle="Entertainment Web App | Home"
      metaDescription="Frontenmentor project realised by...."
    >
      <Trending trendings={trendings} />
      <TopRated topmovie={topmovie} toptv={toptv}/>
    </AppLayout>
  );
}

export async function getStaticProps() {
  const media_type = "all";
  const time_window = "week";
  const response = await fetch(
    `${process.env.TMDB_API_BASE_PATH}/trending/${media_type}/${time_window}?api_key=${process.env.TMDB_API_KEY}`
  );
  const trendings = await response.json();
  console.log("query trending", trendings);
  
  const res = await fetch(
    `${process.env.TMDB_API_BASE_PATH}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
  )
  const topmovie= await res.json();
  console.log('query topmovie', topmovie)

  const resp = await fetch(
    `${process.env.TMDB_API_BASE_PATH}/tv/top_rated?api_key=${process.env.TMDB_API_KEY}`
  )
  const toptv= await resp.json();
  console.log('query topmovie', toptv)

  return {
    props: {
      trendings,
      topmovie,
      toptv
    },
  };
}

export default Home;
