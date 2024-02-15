import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

// TODO: delete file, it is just a template
function About() {
  return <div className="p-2">Hello from About!</div>;
}
