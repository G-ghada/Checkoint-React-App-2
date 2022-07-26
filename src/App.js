import { ProfilePhoto } from "./components/ProfilePhoto";
import { FullName } from "./components/FullName";
import { Adresse } from "./components/Adresse";

function App() {
  return (
    <div className="app">
      <ProfilePhoto />
      <FullName />
      <Adresse />
    </div>
  );
}
export default App ;