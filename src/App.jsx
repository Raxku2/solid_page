import { createSignal } from "solid-js";
import HeaderMain from "./component/HeaderMain";
import { count, geet } from "./store/Context";

const App = () => {
  const [username, setUsername] = createSignal("User");

  return (
    <div class="bg-sorbet-1 text-sorbet-5 h-dvh w-dvw ">
      <HeaderMain />

      <main>
        <h1>
          {geet()} {username()}, Good evening
        </h1>
        <input
          type="text"
          name="username"
          value={username()}
          class="bg-sorbet-1 border-amber-400 outline-amber-600 border-2"

          onInput={(e) => setUsername(e.target.value)}
        />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
