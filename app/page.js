const drivers = [
  { number: '01', name: 'Max Verstappen', team: 'Red Bull Racing', country: 'NED' },
  { number: '04', name: 'Lando Norris', team: 'McLaren', country: 'GBR' },
  { number: '16', name: 'Charles Leclerc', team: 'Ferrari', country: 'MON' },
  { number: '44', name: 'Lewis Hamilton', team: 'Ferrari', country: 'GBR' },
];

const races = [
  { round: '01', city: 'Melbourne', circuit: 'Albert Park', date: 'MAR 08' },
  { round: '02', city: 'Shanghai', circuit: 'Shanghai International Circuit', date: 'MAR 15' },
  { round: '03', city: 'Suzuka', circuit: 'Suzuka Circuit', date: 'MAR 29' },
  { round: '04', city: 'Bahrain', circuit: 'Bahrain International Circuit', date: 'APR 12' },
];

const teams = ['McLaren', 'Ferrari', 'Mercedes', 'Red Bull Racing', 'Aston Martin', 'Williams'];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="APEX F1 home">
          <span className="brand-mark">A</span>
          <span>APEX<span className="brand-accent">F1</span></span>
        </a>
        <nav>
          <a href="#drivers">Drivers</a>
          <a href="#calendar">Calendar</a>
          <a href="#teams">Teams</a>
          <a href="#story">Story</a>
        </nav>
        <a className="nav-cta" href="#calendar">Race Week</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow">FORMULA 1 / SPEED / CULTURE</p>
          <h1>RACING<br/><span>AT THE</span><br/>LIMIT.</h1>
          <p className="hero-deck">A high-speed guide to the drivers, machines, circuits, and rivalries that define Formula 1.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#drivers">Meet the grid <span>↗</span></a>
            <a className="text-link" href="#story">Explore the story →</a>
          </div>
        </div>
        <div className="speed-card">
          <span className="speed-label">TOP SPEED</span>
          <strong>350<span>+</span></strong>
          <span className="speed-unit">KM/H</span>
          <div className="speed-line"><i /></div>
          <p>Milliseconds separate glory from the gravel.</p>
        </div>
        <div className="hero-word">APEX</div>
      </section>

      <section className="ticker" aria-label="Formula 1 teams">
        <div className="ticker-track">
          {[...teams, ...teams].map((team, index) => <span key={`${team}-${index}`}>{team}<b>•</b></span>)}
        </div>
      </section>

      <section className="section drivers" id="drivers">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE GRID</p>
            <h2>Drivers built<br/>for pressure.</h2>
          </div>
          <p className="section-copy">Twenty drivers. Ten teams. One championship. Every braking point, pit stop, and overtake can rewrite the season.</p>
        </div>
        <div className="driver-grid">
          {drivers.map((driver) => (
            <article className="driver-card" key={driver.number}>
              <div className="driver-top"><span>{driver.country}</span><span>F1 DRIVER</span></div>
              <div className="driver-number">{driver.number}</div>
              <div className="driver-info">
                <h3>{driver.name}</h3>
                <p>{driver.team}</p>
              </div>
              <div className="card-corner">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="calendar section" id="calendar">
        <div className="calendar-header">
          <div>
            <p className="eyebrow">RACE CALENDAR</p>
            <h2>Follow the<br/>world tour.</h2>
          </div>
          <div className="calendar-note">SELECTED ROUNDS <span>2026</span></div>
        </div>
        <div className="race-list">
          {races.map((race) => (
            <article className="race-row" key={race.round}>
              <span className="round">R{race.round}</span>
              <div className="race-place"><strong>{race.city}</strong><span>{race.circuit}</span></div>
              <div className="track-mark" aria-hidden="true"><i/><i/><i/></div>
              <time>{race.date}</time>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="teams-panel" id="teams">
        <div className="teams-bg" />
        <div className="teams-content">
          <p className="eyebrow">CONSTRUCTORS</p>
          <h2>ENGINEERING<br/>BECOMES<br/><span>OBSESSION.</span></h2>
          <p>Thousands of parts. Relentless development. A car designed around one purpose: finding time where no one else can.</p>
          <a className="primary-btn light" href="#story">Inside Formula 1 <span>↗</span></a>
        </div>
        <div className="stat-stack">
          <div><strong>10</strong><span>TEAMS</span></div>
          <div><strong>20</strong><span>DRIVERS</span></div>
          <div><strong>24</strong><span>RACES</span></div>
        </div>
      </section>

      <section className="section story" id="story">
        <div className="story-index">01 — 04</div>
        <div className="story-copy">
          <p className="eyebrow">WHY F1</p>
          <h2>Where precision<br/>meets chaos.</h2>
          <p>Formula 1 is equal parts engineering laboratory, global spectacle, and human pressure test. The difference between pole position and the second row can be less than the time it takes to blink.</p>
        </div>
        <div className="story-quote">“The perfect lap doesn’t exist. That’s why they keep chasing it.”</div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">A</span><span>APEX<span className="brand-accent">F1</span></span></div>
        <p>Independent Formula 1 fan concept.</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
