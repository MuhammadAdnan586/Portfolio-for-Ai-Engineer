import { Compass, Home } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen items-center justify-center px-6 pb-16 pt-28 text-center"
    >
      <div>
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-cyan">
          Error 404
        </p>
        <h1 className="text-gradient text-gradient-animated mt-4 font-display text-7xl font-bold sm:text-9xl">
          404
        </h1>
        <p className="mt-4 font-display text-xl sm:text-2xl">This page wandered off the graph.</p>
        <p className="mt-2 text-white/55">
          The page you requested does not exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" icon={<Home size={16} />}>
            Back home
          </Button>
          <Button href="/#projects" variant="outline" icon={<Compass size={16} />}>
            See projects
          </Button>
        </div>
      </div>
    </main>
  );
}