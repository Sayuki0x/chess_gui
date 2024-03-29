import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { KeyRing, KeyRingUtils } from "@extrahash/keyring";

export const keyring = new KeyRing(":memory:", localStorage.getItem("pk"));
keyring.on("ready", () => {
  if (!localStorage.getItem("pk")) {
    localStorage.setItem("pk", KeyRingUtils.encodeHex(keyring.getPriv()));
  }
  console.log("Keyring initialized.");
});
keyring.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
