import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
        <div className="nav__container">
            <h1 className="nav__logo">Space News</h1>
            <div className="nav__links">
                <Link to='/' className='nav__link'>Browse</Link>

            </div>

        </div>
    </div>
  )
}

export default Nav