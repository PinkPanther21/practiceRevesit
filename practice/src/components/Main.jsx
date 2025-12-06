import ArtworkSection from "./ArtWorkSection";
import RecentSearch from "./RecentSearch";
import RightSection from "./RightSection";

export default function Main() {
  return (
    <>
      <section className="w-full flex md:flex-row flex-col m-5 gap-10 md:m-10 p-10">
        {/* ArtWork section */}
        <ArtworkSection />
         
        {/* Recent Search Section */}
        <RecentSearch />
        {/* Right Side  */}
        <RightSection />
      </section>
    </>
  );
}
