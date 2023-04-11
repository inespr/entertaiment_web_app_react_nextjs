import Head from "next/head";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";

export default function AppLayout() {
  return (
    <>
      <Head></Head>
      <div>
        <SideBar />
        <SearchBar />
      </div>
    </>
  );
}
