import './LogoTicker.css'

export default function LogoTicker({ items, basePath, label, speed = 45 }) {
  const doubled = [...items, ...items]
  return (
    <div className="ticker-wrap">
      {label && <div className="ticker-label">{label}</div>}
      <div className="ticker-strip">
        <div className="ticker-track" style={{ animationDuration: `${speed}s` }}>
          {doubled.map((slug, i) => (
            <div key={i} className="ticker-item">
              <img
                className="ticker-logo"
                src={`${basePath}/${slug}.webp`}
                alt={slug.replace(/-/g, ' ')}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
