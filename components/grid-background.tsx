export function GridBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 opacity-20 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, #333 1px, transparent 1px),
          linear-gradient(to bottom, #333 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
      aria-hidden="true"
    />
  )
}
