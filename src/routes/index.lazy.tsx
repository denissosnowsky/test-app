import { createLazyFileRoute } from "@tanstack/react-router";
import { DynamicWidget } from "@dynamic-labs/sdk-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <DynamicWidget />
    </div>
  );
}
