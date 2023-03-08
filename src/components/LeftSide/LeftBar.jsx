import React, { useContext } from 'react'
import './LeftBar.css';
import { Link } from "react-router-dom";
import { DataContext } from '../../Context/DataContext';
import { auth } from '../../config/firebase'


function LeftBar() {

  const { signInWithGoole, logout } = useContext(DataContext);

  return (


    <div className='LeftBarMain'>

      <div className="LeftBarTopMain">
        <div className='ph' style={{ backgroundImage: "url(" + auth?.currentUser?.photoURL + ")" }}></div>
        {/* <img src={auth?.currentUser?.photoURL} alt="" /> */}
        <h4>{auth?.currentUser?.displayName}</h4>
        {
          auth?.currentUser ? null : <button className='logingoogleBTN' onClick={signInWithGoole}>Log in with Google</button>
        }
      </div>

      <div className="SectionsMain">

        <div className="navbtnContainer">

          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="navbtns" style={{ textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ textDecoration: 'none' }}>
                home
              </span>
              <p>Home</p>
            </div>
          </Link>

          <Link to="/MyExercises" style={{ textDecoration: 'none' }}>
            <div className="navbtns" style={{ textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ textDecoration: 'none' }}>
                sports_gymnastics
              </span>
              <p>My Exercises</p>
            </div>
          </Link>

          <Link to="/Mystats" style={{ textDecoration: 'none' }}>
            <div className="navbtns" style={{ textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ textDecoration: 'none' }}>
                monitoring
              </span>
              <p>My Stats</p>
            </div>
          </Link>
        </div>


        <div className="sectionBOTTOM">
          {
            auth?.currentUser ? <button className='logoutBTN' onClick={logout}>Log Out</button> : null
          }
        </div>

      </div>

    </div>

  )
}

export default LeftBar