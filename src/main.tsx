import React from "react";
import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import { RouterProvider } from "@tanstack/react-router";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { QueryClientProvider } from "@tanstack/react-query";
import "@radix-ui/themes/styles.css";

import "./index.css";
import { router } from "./plugins/router";
import { queryClient } from "./plugins/queryClient";

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
            <RouterProvider router={router} />
          </Theme>
        </QueryClientProvider>
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  </React.StrictMode>
);
