export function FabricPattern() {
  return (
    <div
      className="fixed inset-0 -z-10 opacity-10 pointer-events-none"
      style={{
        backgroundImage: `
          radial-gradient(#555 1px, transparent 1px),
          radial-gradient(#555 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
      aria-hidden="true"
    />
  )
}
