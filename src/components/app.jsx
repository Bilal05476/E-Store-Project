import Sidebar from "./common/sidebar_components/sidebar";
// import RightSidebar from "./common/right-sidebar";
import Footer from "./common/footer";
import Header from "./common/header_components/header";

const App = (props) => {
  return (
    <div>
      <div className="page-wrapper">
        <Header user={props.user} setUser={props.setUser} />
        <div className="page-body-wrapper">
          <Sidebar />
          {/* <RightSidebar /> */}
          <div className="page-body">{props.children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
