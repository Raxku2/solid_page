import { createSignal } from "solid-js";
import { count, geet, setCount, setGreet } from "../store/Context";
import { Button_1 } from "./ui";
import { A } from "@solidjs/router";

const HeaderMain = () => {

  const [datetime] = createSignal(new Date());

  return (
    <header class="flex justify-between items-center h-30 p-4 bg-white text-gray-900">
      <div>
        <img
          src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png"
          alt="Indian Railway"
        />
      </div>
      <div class="flex-1 h-full flex flex-col items-center justify-center p-4">
        <div class="flex p-4">
          <p class="text-lg font-bold m-2">{datetime().toLocaleString()}</p>

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
        <nav class="hidden xl:block">
          <button class="mx-4 font-bold">
            <i class="ri-home-4-fill"></i>
          </button>
          <button class="mx-4 bg-blue-900 p-2 text-white font-bold">
            LOGIN/REGISTER
          </button>

          <Button_1 class="text-red-700 font-bold " >
            Trains
          </Button_1>

          <Button_1 underline={false} >
            Meals
          </Button_1>

          <button class="mx-4 bg-blue-900 p-2 text-white font-bold">
            LOGIN/REGISTER
          </button>

          <Button_1 underline={true}>
            E-wallet
          </Button_1>

          <Button_1 underline={false}>
            Alerts
          </Button_1>

          <Button_1 underline={false}>
            Other Services
          </Button_1>

          <Button_1 underline={false}>
            Contact US
          </Button_1>

          <A href="/" class="mx p-2">Home</A>
          <A href="/alert" class="mx p-2">Alert</A>


        </nav>
      </div>
      <div>
        <img src="https://www.irctc.co.in/nget/assets/images/logo.png" alt="Irctc" />
      </div>
    </header>
  );
};

export default HeaderMain;
