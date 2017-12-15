import React from 'react'
import broken from './img/broken.gif'
import { Link } from 'react-router-dom'
import Logo from './components/Common/Logo'

import './NotFound.css'

const NotFound = () => {
  return (
    <div className="page-container notfound-wrap">
      <div className="bg" style={{ backgroundImage: 'url(' + broken + ')' }} />
      <div className="notfound-header">
        <Logo width={50} />
        <Link to="/">
          <button label="Go somewhere fun" type="submit" labelStyle={{ color: 'white' }} />
        </Link>
      </div>
      <div className="notfound-copy">
        <h1 style={{ color: 'white', fontSize: 75 }}>There&#39;s nothing here. </h1>
        <p className="notfound-body">
          Whatever you were looking for doesn't currently exist at this address. Unless you were looking for this error
          page, in which case: Congrats! You totally found it.
        </p>
      </div>
    </div>
  )
}

export default NotFound
