import Sidebar from "./common/sidebar_components/sidebar";
// import RightSidebar from "./common/right-sidebar";
import Footer from "./common/footer";
import Header from "./common/header_components/header";

const App = (props) => {
  return (
    <div>
      <div className="page-wrapper">
        <Header setUser={props.setUser} userData={props.userData} />
        <div className="page-body-wrapper">
          <Sidebar userData={props.userData} />
          {/* <RightSidebar /> */}
          <div className="page-body">{props.children}</div>
          <Footer />
        </div>
      </div>
      
    </div>
  );
};
export default App;
