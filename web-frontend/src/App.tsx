import { useEffect, useState } from 'react'
import './App.css'
import { Puzzle } from './puzzles/Puzzle'
import { User } from './users/User'
import { UserLink } from './users/UserLink'

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    User.tryFetch().then(setUser)
  });

  return (
    <>
      <header className="page-header">
        <div className="page-container">
          <h1 className="page-title">
            <a href="/">Puzzle Tracker</a>
          </h1>
          <nav className="menu-items">
            <UserLink user={user} />
          </nav>
        </div>
      </header>
      <main className="page-main-content">
        <div className="hero">
          <div className="page-container">
            <h2 className="hero-title">Puzzles</h2>
          </div>
        </div>
        <div className="page-container">
          <Puzzle name="Flower Boutique" image="./12001595_1.webp" pieceCount={500} brand="Ravensburger" />
        </div>
      </main>
      <footer className="page-container">
        <div className="page-footer">
          <p>An open source project of <a href="https://www.dunkman.me">Andrew Dunkman</a>.</p>
          <a href="https://github.com/adunkman/puzzle-tracker" className="button">Contribute on GitHub</a>
        </div>
      </footer>
    </>
  )
}

export default App
