export function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export function Card({ title, children }) {
  return (
    <div style={{ background: '#1e1e1e', padding: '1rem', borderRadius: '8px', maxWidth: '400px' }}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
