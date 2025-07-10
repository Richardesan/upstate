import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./utils/route";
import Home from "./Home/page";
import ScrollToTop from "./component/scrollToTop";
import MainHome from "./Home/home";
import About from "./Home/about/page";
import Services from "./Home/services/page";
import Projects from "./Home/projects/page";
import Reviews from "./Home/reviews/page";

function Layout() {
  return (
    <section className="h-screen ">
      <ScrollToTop />
      <div className="overflow-y-scroll overflow-x-hidden  max-w-[2000px] mx-auto  h-full scroll-container">
        <Routes>
          <Route path={AppRoutes.home} element={<MainHome />}>
            <Route path="" element={<Home />} />
            <Route path={AppRoutes.about} element={<About />} />
            <Route path={AppRoutes.services} element={<Services />} />
            <Route path={AppRoutes.projects} element={<Projects />} />
            <Route path={AppRoutes.projects} element={<Projects />} />
            <Route path={AppRoutes.reviews} element={<Reviews />} />
          </Route>
        </Routes>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
