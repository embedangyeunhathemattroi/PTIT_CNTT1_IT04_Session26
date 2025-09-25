import Profile from "./components/B1Profile";
import ListUser from "./components/B2ListUser";
import CounterB3 from "./components/CounterB3";
import RandomNumber from "./components/RandomNumberB4";
import ChangeState from "./components/ChangeNumberB5";
import DarkModeToggle from "./components/DarkB6";
//import B7 from "./components/B7";
// import B8 from "./components/B8";

export default function App() {
  return (
    <div>
      <Profile />
      <ListUser />
      <CounterB3 />
      <RandomNumber />
      <ChangeState />
      <DarkModeToggle />
      {/* <B7 />
      <B8 /> */}
    </div>
  );
}
