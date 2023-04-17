import Trending from "@/components/Trending";
import AppLayout from "@/layouts/AppLayout";

function Home({ trendings }) {
  return (
    <AppLayout
      metaTitle="Entertainment Web App | Home"
      metaDescription="Frontenmentor project realised by...."
    >
      <Trending trendings={trendings} />
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

  return {
    props: {
      trendings,
    },
  };
}

export default Home;
