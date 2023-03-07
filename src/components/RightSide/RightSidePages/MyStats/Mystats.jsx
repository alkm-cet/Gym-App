import React from 'react'
import './Mystats.css';
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../../Context/DataContext';
import statman from '../../../../images/statman.jpg'
import statwoman from '../../../../images/statwoman.jpg'
import video from '../../../../video/video.mp4'
import { auth } from '../../../../config/firebase';
function Mystats() {

    const {
        handleSubmitStats,
        handleGender,
        handleAge,
        handleWeight,
        handleHeight,
        stats,
        isStatEntered,
        resetStats } = useContext(DataContext);


    // console.log(weight)

    const [photo, setPhoto] = useState()

    const handlePhoto = () => {
        if (localStorage.getItem('gender') == 'Male') {
            setPhoto(statman)
        } else if (localStorage.getItem('gender') == 'Female') {
            setPhoto(statwoman)
        }
    }

    useEffect(() => {
        handlePhoto();
    }, [localStorage.getItem('gender')])

    return (

        <div className='Mystats'>

            {
                isStatEntered
                    ? <div className="Stat">
                        <div className="photodiv" style={{ backgroundImage: `url(${photo})` }}>
                            {/* <img className='photo' src={photo} alt="" /> */}
                            <button className='statresetBTN' onClick={resetStats}>RESET STATS</button>
                        </div>
                        <div className="statdiv">
                            <div className="videocontainer">
                                <video autoPlay loop muted>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>

                            <div className="statbox1">
                                <small>{auth?.currentUser?.displayName}</small>
                                <h2>{localStorage.getItem('gender')}</h2>
                            </div>
                            <div className="statbox2">
                                <b>Age</b>
                                <h1>{localStorage.getItem('age')}</h1>
                            </div>
                            <div className="statbox3">
                                <b>Weight</b>
                                <h1>{localStorage.getItem('weight')}<small>kg</small></h1>

                            </div>
                            <div className="statbox4">
                                <b>Height</b>
                                <h1>{localStorage.getItem('height')}<small>cm</small></h1>
                            </div>
                        </div>


                    </div>

                    : <div className="mystatadd">

                        <h1>Tell Us A Little About Yourself</h1>

                        <select className='statAddSelect' defaultValue='' onChange={handleGender}>
                            <option value=''>Select Your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                        <input className='statAddINP' type="text" placeholder='Age' onChange={handleAge} maxLength='2' />
                        <input className='statAddINP' type="text" placeholder='Weight' onChange={handleWeight} maxLength='2' />
                        <input className='statAddINP' type="text" placeholder='Height' onChange={handleHeight} maxLength='3' />
                        <button className='statAddBTN' onClick={handleSubmitStats}>Add My Stat</button>
                    </div>
            }




        </div>
    )
}

export default Mystats

