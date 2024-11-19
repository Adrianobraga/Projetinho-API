import Header from "../Header/Header";
import Content from "../Content/Content";
import ContextProvider  from "../Context/Context";

function App() {
 
  return (
    <>
    <ContextProvider>
      <Header/>
      <Content/>
    </ContextProvider>
    </>
  );
}

export default App;
