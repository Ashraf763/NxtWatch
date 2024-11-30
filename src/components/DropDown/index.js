import './index.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'

import {IoMdMenu} from 'react-icons/io'

const DropDown = props => {
  const [isOpen, setIsOpen] = useState(false)
  const {isDarkTheme} = props

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropbtn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMdMenu size={30} color={isDarkTheme ? 'white' : 'black'} />!
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <p className="dropdown-item">
            <Link to="/">Home</Link>
          </p>
          <p className="dropdown-item">
            <Link to="/trending">Trending</Link>
          </p>
          <p className="dropdown-item">
            <Link to="/gaming">Gaming</Link>
          </p>
          <p className="dropdown-item">
            <Link to="/saved-videos">Saved Videos</Link>
          </p>
        </div>
      )}
    </div>
  )
}

export default DropDown
