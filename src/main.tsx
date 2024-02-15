import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import "@radix-ui/themes/styles.css";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DynamicContextProvider
      settings={{
        environmentId: "2b65d76e-26e2-4035-8271-c42aa3cb4adb",
      }}
    >
      <DynamicWagmiConnector>
        <Theme>
          <App />
        </Theme>
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  </React.StrictMode>
);
