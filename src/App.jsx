import HeaderMain from "./component/HeaderMain";

const App = (props) => {
  return (
    <div class="bg-sorbet-1 text-sorbet-5 h-dvh w-dvw ">
      <HeaderMain />
      {props.children}
      <footer></footer>
    </div>
  );
};

export default App;
