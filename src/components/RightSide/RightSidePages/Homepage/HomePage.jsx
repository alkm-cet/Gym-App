import React, { useContext } from 'react';
import { auth } from '../../../../config/firebase'
import video from '../../../../video/video.mp4'
import homepagefigure from '../../../../images/homepagefigure.png'
import asics from '../../../../images/asics.png'
import armour from '../../../../images/armour.png'
import adidas from '../../../../images/adidas.png'
import nike from '../../../../images/nike.png'
import puma from '../../../../images/puma.png'
import { DataContext } from '../../../../Context/DataContext';
import './Homepage.css'

function HomePage() {

  const { logout, allexercises } = useContext(DataContext);

  const updateACT = () => {
    window.location.reload(false);
  }

  return (
    <div className='HomePageMain'>
      <div className="homepagetop">

        <h1>FITNESS APP</h1>

        <div className="homepagetopright">
          <div className='phc' style={{ backgroundImage: "url(" + auth?.currentUser?.photoURL + ")" }}></div>
          <h4>{auth?.currentUser?.displayName}</h4>
          {
            auth?.currentUser ? <button className='logoutBTN' onClick={logout}>Log Out</button> : null
          }
        </div>
      </div>

      <div className="homepagemid">
        <h1>W O R K&nbsp;&nbsp;O U T</h1>
        <h2>W I T H&nbsp;&nbsp; M E</h2>
        <img className='homepagefigure' src={homepagefigure} alt="" />
        <p>Their guidelines recommend 150 minutes of
          moderate-intensity aerobic physical activity each
          week or vigorous-intensity aerobic
        </p>

        <div className="brands">
          <img className='brandimgs' src={armour} alt="" />
          <img className='brandimgs' src={puma} alt="" />
          <img className='brandimgs' src={adidas} alt="" />
          <img className='brandimgs' src={nike} alt="" />
          <img className='brandimgs' src={asics} alt="" />
        </div>


        <div className="homepagemidbottom">
          <h3>Latest Activities...</h3>
          <button onClick={updateACT} className='updateactvBTN'>
            <span className="material-symbols-outlined">
              update
            </span>
          </button>
          {/* 
          {
            allexercises.filter(recent => recent.calori > 700).map((recent, index) => {
              return (
                <div className='recentdiv' key={index}>
                  <p className='winnerp'>The workout that burns the most calories in one go</p>

                  <div className="recentboxes">
                    <img src={recent.userPhoto} alt="" />
                  </div>
                  <div className="recentboxes">
                    <h4>{recent.userName}</h4>
                  </div>
                  <div className="recentboxes">
                    <span style={{ color: 'red' }} className="material-symbols-outlined">
                      local_fire_department
                    </span>
                    <p style={{ color: 'red' }}>{recent.calori}</p>
                  </div>
                </div>
              )
            })
          } */}

          {/* {
            allexercises.filter((prev, current) => (prev.calori > current.calori) ? prev : current).map((recent, index) => {
              return (
                <div className='recentdiv' key={index}>
                  <p className='winnerp'>The workout that burns the most calories in one go</p>

                  <div className="recentboxes">
                    <img src={recent.userPhoto} alt="" />
                  </div>
                  <div className="recentboxes">
                    <h4>{recent.userName}</h4>
                  </div>
                  <div className="recentboxes">
                    <span style={{ color: 'red' }} className="material-symbols-outlined">
                      local_fire_department
                    </span>
                    <p style={{ color: 'red' }}>{recent.calori}</p>
                  </div>
                </div>
              )
            })
          } */}

          <div className="recentmaindiv">
            <div className="recenttitlediv">
              <div className="titleboxes">
                <span className="material-symbols-outlined">
                  exercise
                </span>
              </div>
              <div className="titleboxes">USERNAME</div>
              <div className="titleboxes">AREA</div>
              <div className="titleboxes">DURATION</div>
              <div className="titleboxes">CALORI</div>
              <div className="titleboxes">DATE</div>
            </div>
            {
              allexercises.map((recent, index) => {
                return (
                  <div className='recentdiv' key={index}>
                    <div className="recentboxes">
                      <img src={recent.userPhoto} alt="" />
                    </div>
                    <div className="recentboxes">
                      <h4>{recent.userName}</h4>
                    </div>
                    <div className="recentboxes">
                      <p>{recent.area}</p>
                    </div>
                    <div className="recentboxes">
                      <p>{recent.duration}</p>
                    </div>
                    <div className="recentboxes">
                      <span style={{ color: 'red' }} className="material-symbols-outlined">
                        local_fire_department
                      </span>
                      <p style={{ color: 'red' }}>{recent.calori.toFixed(0)}</p>
                    </div>
                    <div className="recentboxes">
                      <small>{new Date(recent.createdAt).toLocaleString()}</small>
                    </div>
                  </div>
                )
              })
            }
          </div>


          <h3>Exercise: 7 benefits of regular physical activity</h3>

          {/* <div className="videocontainer">
            <div className="videodiv">
              <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div> */}

          <div className="homepagemidbottomarticle">

            <div className="gotogymdiv"></div>

            <h4>1. Exercise controls weight</h4>
            <p>
              Exercise can help prevent excess weight gain or help maintain weight loss. When you engage in physical activity, you burn calories. The more intense the activity, the more calories you burn.
              Regular trips to the gym are great, but don't worry if you can't find a large chunk of time to exercise every day. Any amount of activity is better than none at all. To reap the benefits of exercise, just get more active throughout your day — take the stairs instead of the elevator or rev up your household chores. Consistency is key.
            </p>
            <div className="gotogymdiv"></div>
            <h4>2. Exercise combats health conditions and diseases</h4>
            <p>
              Worried about heart disease? Hoping to prevent high blood pressure? No matter what your current weight is, being active boosts high-density lipoprotein (HDL) cholesterol, the "good" cholesterol, and it decreases unhealthy triglycerides. This one-two punch keeps your blood flowing smoothly, which decreases your risk of cardiovascular diseases.
            </p>
            <div className="gotogymdiv"></div>
            <h4>3. Exercise improves mood</h4>
            <p>
              Need an emotional lift? Or need to destress after a stressful day? A gym session or brisk walk can help. Physical activity stimulates various brain chemicals that may leave you feeling happier, more relaxed and less anxious.

              You may also feel better about your appearance and yourself when you exercise regularly, which can boost your confidence and improve your self-esteem.
            </p>
            <div className="gotogymdiv"></div>
            <h4>
              4. Exercise boosts energy
            </h4>
            <p>
              Winded by grocery shopping or household chores? Regular physical activity can improve your muscle strength and boost your endurance.

              Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.
            </p>
            <div className="gotogymdiv"></div>
            <h4>5. Exercise promotes better sleep</h4>
            <p>
              Struggling to snooze? Regular physical activity can help you fall asleep faster, get better sleep and deepen your sleep. Just don't exercise too close to bedtime, or you may be too energized to go to sleep.
            </p>
            <div className="gotogymdiv"></div>
            <h4>6. Exercise puts the spark back into your sex life</h4>
            <p>
              Do you feel too tired or too out of shape to enjoy physical intimacy? Regular physical activity can improve energy levels and increase your confidence about your physical appearance, which may boost your sex life.

              But there's even more to it than that. Regular physical activity may enhance arousal for women. And men who exercise regularly are less likely to have problems with erectile dysfunction than are men who don't exercise.
            </p>
            <div className="gotogymdiv"></div>
            <h4>7. Exercise can be fun … and social!</h4>
            <p>
              Exercise and physical activity can be enjoyable. They give you a chance to unwind, enjoy the outdoors or simply engage in activities that make you happy. Physical activity can also help you connect with family or friends in a fun social setting.
            </p>

            <a href="https://akcc.netlify.app/" target='blank'><button className='readmoreBTN'>READ MORE</button></a>

          </div>

        </div>

      </div>


    </div>
  )
}

export default HomePage