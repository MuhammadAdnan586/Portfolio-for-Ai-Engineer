export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-accent-blue/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-accent-violet/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-accent-cyan/10 blur-[120px]" />
      <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
    </div>
  );
}