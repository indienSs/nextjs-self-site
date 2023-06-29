import About from "@/components/About";
import "./globals.scss";
import {wrapper} from "@/redux/store";

function Home() {
  return (
    <div className="page">
      <About />
    </div>
  );
}

export default wrapper.withRedux(Home);
