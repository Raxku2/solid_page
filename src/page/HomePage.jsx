
import { createSignal } from "solid-js";
import { geet } from "../store/Context";

function HomePage() {
    const [username, setUsername] = createSignal("User");

    return (
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
    );
}
export default HomePage;