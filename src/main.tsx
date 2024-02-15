import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@radix-ui/themes/styles.css";

import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DynamicContextProvider
      settings={{
        environmentId: import.meta.env.VITE_DYNAMIC_ENVIRONMENT_ID,
      }}
    >
      <DynamicWagmiConnector>
        <QueryClientProvider client={queryClient}>
          <Theme>
            <App />
          </Theme>
        </QueryClientProvider>
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  </React.StrictMode>
);
