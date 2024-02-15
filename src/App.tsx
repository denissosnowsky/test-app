import { DynamicWidget } from "@dynamic-labs/sdk-react";
import { Box, Code } from "@radix-ui/themes";
import { useAccount, useNetwork } from "wagmi";

const App = () => {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  return (
    <Box>
      <DynamicWidget />
      <p>wagmi connected: {isConnected ? "true" : "false"}</p>
      <p>wagmi address: {address}</p>
      <p>wagmi network: {chain?.id}</p>
      <Code>console.log()</Code>
      <h1 className="font-bold underline text-9">Hello world!</h1>
    </Box>
  );
};

export default App;
