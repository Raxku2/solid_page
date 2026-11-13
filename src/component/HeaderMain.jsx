import { count, geet, setCount, setGreet } from "../store/Context";

const HeaderMain = () => {
  return (
    <header class="flex justify-between items-center h-30 p-4">
      <div>
        <img
          src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png"
          alt="Indian Railway"
        />
        <input
          type="text"
          name=""
          value={geet()}
          class="border-amber-400 "
          onInput={(e) => setGreet(e.target.value)}
        />
      </div>
      <div class="flex-1 h-full flex flex-col items-center justify-center p-4">
        <div class="flex p-4">
          <p class="text-lg font-bold m-2">{count()}</p>

          <button
            class="m-2 font-bold text-lg cursor-pointer"
            type=""
            onClick={() => setCount(count() + 1)}
          >
            A+
          </button>
          <button class="m-2 font-bold text-lg cursor-pointer" type="" onClick={() => setCount(1)}>
            A
          </button>
          <button
            class="m-2 font-bold text-lg cursor-pointer"
            type=""
            onClick={() => setCount(count() - 1)}
          >
            A-
          </button>
        </div>
        <nav></nav>
      </div>
      <div>
        <img src="https://www.irctc.co.in/nget/assets/images/logo.png" alt="Irctc" />
      </div>
    </header>
  );
};

export default HeaderMain;
