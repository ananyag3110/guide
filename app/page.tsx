import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Content from "./components/content";
export default function Home() {

  return (
     <><Navbar/>
     <div className="flex">
     <SideBar/>
     <Content/>
     </div>
    </>
   
  );
}