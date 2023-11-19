import LatestProduct from "@/components/HomepageComponent/LatestProduct";
import Blog from "@/components/HomepageComponent/blog";
import HomePageAllCategory from "@/components/HomepageComponent/homePageAllCategory";
import Slider from "@/components/HomepageComponent/homeSlider";
import OfficeFurniture from "@/components/HomepageComponent/officeFurniture";
import SpaceCategory from "@/components/HomepageComponent/spaceCategory";
import WhyDreamTuch from "@/components/HomepageComponent/whyDreamTuch";
import Layout from "@/components/Layots/RootLayot";

export default function HomePage() {
  return (
    <>
    <title>Hello world!</title>
      <div className="z-0">
        <Slider></Slider>
        <HomePageAllCategory></HomePageAllCategory>
        <LatestProduct></LatestProduct>
        <SpaceCategory></SpaceCategory>
        <OfficeFurniture></OfficeFurniture>
        <Blog></Blog>
        <WhyDreamTuch></WhyDreamTuch>
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
