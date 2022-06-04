import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.scss";
import App from "./components/app";
import PerfectScrollbar from "react-perfect-scrollbar";
// Dashboard Component
import Dashboard from "./components/dashboard";

//Product Digital
import Digital_add_pro from "./components/products/digital/digital-add-pro";

//Sales
import Orders from "./components/sales/orders";

//Manager Profile
import Profile from "./components/settings/profile";

// Login Component
import Login from "./components/auth/login";

// Firebase
import { auth, db } from "./firebase";

const Root = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [signError, setSignError] = useState("");
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    mobileNo: "",
    dob: "",
    userImage: "",
    location: "",
    gender: "",
  });
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || null);
    const getOrderData = db.collection("order");
    getOrderData.onSnapshot((snapshot) =>
      setOrderItems(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  console.log(orderItems)

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
        setEmail("");
        setPass("");
      })
      .catch((error) => {
        setSignError(error.message);
      });
  };

  if (!isCompleted) {
    if (user) {
      const getUserData = db.collection("User").doc(user.uid);
      getUserData.get().then((doc) => {
        setUserData({
          userName: doc.data().userName,
          userEmail: doc.data().userEmail,
          userImage: doc.data().userImage,
          location: doc.data().location,
          dob: doc.data().dob,
          mobileNo: doc.data().mobileNo,
          gender: doc.data().gender,
        });
        setIsCompleted(true);
      });
    }
  }

  return (
    <BrowserRouter basename={"/"}>
      <PerfectScrollbar>
        <Switch>
          {!user ? (
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Login
                email={email}
                pass={pass}
                setEmail={setEmail}
                setPass={setPass}
                signIn={signIn}
                signError={signError}
              />
            </Route>
          ) : (
            <App setUser={setUser} userData={userData}>
              <Route exact path={`${process.env.PUBLIC_URL}/`}>
                <Dashboard userData={userData} />
              </Route>
              <Route exact path={`${process.env.PUBLIC_URL}/dashboard`}>
                <Dashboard userData={userData} orderItems={orderItems} />
              </Route>
              <Route
                path={`${process.env.PUBLIC_URL}/products/add-product`}
                component={Digital_add_pro}
              />

              <Route path={`${process.env.PUBLIC_URL}/sales/orders`}>
                <Orders orderItems={orderItems} />
              </Route>

              <Route path={`${process.env.PUBLIC_URL}/settings/profile`}>
                <Profile userData={userData} />
              </Route>
            </App>
          )}
        </Switch>
      </PerfectScrollbar>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
