import React, { useContext, useEffect, useState } from 'react';
import './Myexercises.css';
import { DataContext } from '../../../../Context/DataContext';
import back from '../../../../images/back.png'
import biceps from '../../../../images/biceps.jpg'
import abs from '../../../../images/abs.jpg'
import chest from '../../../../images/chest.jpg'
import leg from '../../../../images/leg.jpg'

function MyExercisesPage() {

  const {
    querySnapshot,
    exercises,
    duration,
    submitExercise,
    setArea,
    setDuration,
    deleteExercises,

    setGender,
    setAge,
    setWeight,
    setHeight,
    querySnapshotstat,
    submitStat,
    stat,
    gender,
    age,
    weight,
    height,
    isStatEntered } = useContext(DataContext);

  useEffect(() => {
    querySnapshot();
  }, [])


  return (
    <div className='MyExercisesPage'>
      <h1>MY EXERCISES</h1>

      <div className="addexercises">
        <h4>Add an Exercise</h4>
        <div className="addexercisesbottom">
          <select defaultValue={'Select an area'} onChange={(e) => setArea(e.target.value)}>
            <option value=''>Select an area</option>
            <option value="Karın">Karın</option>
            <option value="Göğüs">Göğüs</option>
            <option value="Kol">Kol</option>
            <option value="Sırt">Sırt</option>
            <option value="Bacak">Bacak</option>
          </select>
          <input type="text" placeholder='Duration..' value={duration} onChange={(e) => setDuration(e.target.value)} />
          <button onClick={submitExercise}>Add an Exercise</button>
        </div>

      </div>

      <div className="cardMainDiv">
        {
          exercises.map((exercise, index) => {
            return (
              <div className="exercisesCardMain" key={index}>
                {
                  exercise.area == "Sırt"
                    ? <div className="exercisesCard" style={{ backgroundImage: `url(${back})` }}>
                      <div className="cardInfo">
                        <div className="cardInfoTop">
                          <h4>Area: {exercise.area}</h4>
                        </div>
                        <div className="cardInfoMid">
                          <span className="material-symbols-outlined">
                            schedule
                          </span>
                          <p>{exercise.duration} min</p>
                        </div>
                        <div className="cardInfobottom">
                          <span className="material-symbols-outlined">
                            calendar_month
                          </span>
                          <p>{new Date(exercise.createdAt).toLocaleString()}</p>
                        </div>
                        <div className="cardInfobottom2">
                          <span className="material-symbols-outlined">
                            local_fire_department
                          </span>
                          {(exercise.calori).toFixed(0)}
                        </div>
                        <button onClick={() => deleteExercises(exercise.id)}>Remove</button>
                      </div>
                    </div>
                    : null
                }
                {
                  exercise.area == "Karın"
                    ? <div className="exercisesCard" style={{ backgroundImage: `url(${abs})` }}>
                      <div className="cardInfo">
                        <div className="cardInfoTop">
                          <h4>Area: {exercise.area}</h4>
                        </div>
                        <div className="cardInfoMid">
                          <span className="material-symbols-outlined">
                            schedule
                          </span>
                          <p>{exercise.duration} dk</p>
                        </div>
                        <div className="cardInfobottom">
                          <span className="material-symbols-outlined">
                            calendar_month
                          </span>
                          <p>{new Date(exercise.createdAt).toLocaleString()}</p>
                        </div>
                        <div className="cardInfobottom2">
                          <span className="material-symbols-outlined">
                            local_fire_department
                          </span>
                          {(exercise.calori).toFixed(0)}
                        </div>
                        <button onClick={() => deleteExercises(exercise.id)}>Remove</button>
                      </div>
                    </div>
                    : null
                }
                {
                  exercise.area == "Göğüs"
                    ? <div className="exercisesCard" style={{ backgroundImage: `url(${chest})` }}>
                      <div className="cardInfo">
                        <div className="cardInfoTop">
                          <h4>Area: {exercise.area}</h4>
                        </div>
                        <div className="cardInfoMid">
                          <span className="material-symbols-outlined">
                            schedule
                          </span>
                          <p>{exercise.duration} dk</p>
                        </div>
                        <div className="cardInfobottom">
                          <span className="material-symbols-outlined">
                            calendar_month
                          </span>
                          <p>{new Date(exercise.createdAt).toLocaleString()}</p>
                        </div>
                        <div className="cardInfobottom2">
                          <span className="material-symbols-outlined">
                            local_fire_department
                          </span>
                          {(exercise.calori).toFixed(0)}
                        </div>
                        <button onClick={() => deleteExercises(exercise.id)}>Remove</button>
                      </div>
                    </div>
                    : null
                }
                {
                  exercise.area == "Kol"
                    ? <div className="exercisesCard" style={{ backgroundImage: `url(${biceps})` }}>
                      <div className="cardInfo">
                        <div className="cardInfoTop">
                          <h4>Area: {exercise.area}</h4>
                        </div>
                        <div className="cardInfoMid">
                          <span className="material-symbols-outlined">
                            schedule
                          </span>
                          <p>{exercise.duration} dk</p>
                        </div>
                        <div className="cardInfobottom">
                          <span className="material-symbols-outlined">
                            calendar_month
                          </span>
                          <p>{new Date(exercise.createdAt).toLocaleString()}</p>
                        </div>
                        <div className="cardInfobottom2">
                          <span className="material-symbols-outlined">
                            local_fire_department
                          </span>
                          {(exercise.calori).toFixed(0)}
                        </div>
                        <button onClick={() => deleteExercises(exercise.id)}>Remove</button>
                      </div>
                    </div>
                    : null
                }
                {
                  exercise.area == "Bacak"
                    ? <div className="exercisesCard" style={{ backgroundImage: `url(${leg})` }}>
                      <div className="cardInfo">
                        <div className="cardInfoTop">
                          <h4>Area: {exercise.area}</h4>
                        </div>
                        <div className="cardInfoMid">
                          <span className="material-symbols-outlined">
                            schedule
                          </span>
                          <p>{exercise.duration} dk</p>
                        </div>
                        <div className="cardInfobottom">
                          <span className="material-symbols-outlined">
                            calendar_month
                          </span>
                          <p>{new Date(exercise.createdAt).toLocaleString()}</p>
                        </div>
                        <div className="cardInfobottom2">
                          <span className="material-symbols-outlined">
                            local_fire_department
                          </span>
                          {(exercise.calori).toFixed(0)}
                        </div>
                        <button onClick={() => deleteExercises(exercise.id)}>Remove</button>
                      </div>
                    </div>
                    : null
                }
              </div>
            )
          })
        }

      </div>


      {/* <h2>KARIN</h2>
        <img src="https://i.fanatik.com.tr/i/fanatik/75/0x410/628295ff45d2a051587ed820.jpg" alt="" />
        <h4>Tarih: 04.03.2023</h4>
        <h4>Süre: 90dk</h4>
        <h4>Yakılan Kalori: 344 kcal</h4> */}







    </div>
  )
}

export default MyExercisesPage