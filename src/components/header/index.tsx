import type { FC } from "react"
import { Link } from "react-router-dom"
import Button from "../button"


const Header:FC = () => {
  return (
    <div className="w-full z-20 glass-dark backdrop-blur-xl border-b border-white/30 border-x-0!">
      <div className="max-width flex-between padding-x padding-y">
        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <img src="/logo.png" alt="logo" className="drop-shadow-lg rounded-full" width={50} height={50}/>

          <h1 className="text-xl font-bold text-transparent text-gradient sm:block">CarRental</h1>
        </Link>
        <Button text="Kaydol" name="kaydol"/>
      </div>
    </div>
  )
}

export default Header
