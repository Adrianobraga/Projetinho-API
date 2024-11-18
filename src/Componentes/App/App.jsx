import { useState, useRef } from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import alertify from "alertifyjs";
import { ContextProvider } from "../Context/Context";

function App() {
 
  return (
    <>
    <ContextProvider>
      <Header
        input={input}
        setEscolha={setEscolha}
        handleSubmit={handleSubmit}
      />
      <Content corpo={corpo} removeLista={removeLista} />
    </ContextProvider>
    </>
  );
}

export default App;
