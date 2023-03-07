import React, { createContext, useState, useEffect } from "react";
//firebase
import { auth, googleProvider, db } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { getDocs, collection, onSnapshot, where, query, getDoc, limit, orderBy } from 'firebase/firestore';
import { addDoc, doc, setDoc, deleteDoc, } from "firebase/firestore";
import { async } from "@firebase/util";

export const DataContext = createContext();

function DataContextProvider({ children }) {

    //EXERCİSE
    const [exercises, setExercises] = useState([])
    const [area, setArea] = useState('')
    const [duration, setDuration] = useState('')





    // -----------------------Google İle Giriş Yap


    const signInWithGoole = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            window.location.reload(false);
        } catch (err) {
            console.error(err)
        }
    }

    // -------------------------------- GOOGLE ÇIKIŞ

    const logout = async () => {
        try {
            await signOut(auth);
            resetStats();
            window.location.reload(false);
        } catch (err) {
            console.error(err);
        }
    };

    // --------------------------- BÜTÜN EGZERSİZLERİ ÇEKME

    const [allexercises, setAllexercises] = useState([])

    const allexercisesRef = collection(db, 'exercises');

    const getNotes = async () => {
        try {
            const data = await getDocs(allexercisesRef);
            const filteredData = data.docs
                .map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))
                .sort((a, b) => b.createdAt - a.createdAt);
            setAllexercises(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getNotes();
    }, []);


    // -----------------------------Exersizi kişiye göre Çekme

    const exercisesRef = collection(db, 'exercises');

    // const q = query(usersRef, where("username", "==", auth?.currentUser?.displayName));


    const querySnapshot = async () => {
        if (auth?.currentUser?.uid) {

            const q = query(exercisesRef, where("userId", "==", auth.currentUser.uid));
            const data = await getDocs(q);

            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })).sort((a, b) => b.createdAt - a.createdAt);
            setExercises(filteredData)
        }
    }

    useEffect(() => {
        querySnapshot();
    }, [])

    // ---------------------------------Exersiz Ekleme

    const [calori, setCalori] = useState()

    useEffect(() => {
        setCalori(((5 * 3.5 * localStorage.getItem('weight')) / 200) * duration)
    }, [duration])


    const submitExercise = async () => {
        if (localStorage.getItem('weight') != null) {
            if (duration != '' && area != '') {
                let date = new Date();
                let createdAt = date.getTime();
                if (auth?.currentUser?.uid) {

                    try {
                        await addDoc(collection(db, 'exercises'), {
                            area: area,
                            duration: duration,
                            userId: auth.currentUser.uid,
                            userName: auth?.currentUser?.displayName,
                            userPhoto: auth?.currentUser?.photoURL,
                            createdAt,
                            calori: calori,
                        });
                        querySnapshot();

                    } catch (err) {
                        console.error(err)
                    }
                }
            } else {
                alert('Invalid Entry !')
            }
        } else {
            setDuration('')
            alert('Set Your Stats First')
        }


    }


    //STAT
    const [isStatEntered, setIsStatEntered] = useState(false)

    const [stats, setStats] = useState([])

    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    useEffect(() => {
        if (localStorage.getItem('weight') == null) {
            setIsStatEntered(false)
        } else {
            setIsStatEntered(true)
        }
    }, [])

    //---------------STAT EKLEME

    const handleGender = (e) => {
        setGender(e.target.value)
    }
    const handleAge = (e) => {
        setAge(e.target.value)
    }
    const handleWeight = (e) => {
        setWeight(e.target.value)
    }
    const handleHeight = (e) => {
        setHeight(e.target.value)
    }

    const handleSubmitStats = (e) => {
        if (gender == '' || age == '' || weight == '' || height == '' || auth?.currentUser == null) {
            e.target.innerText = 'Fill All Blanks';
            e.target.style.backgroundColor = 'crimson';
        } else {
            localStorage.setItem('gender', gender)
            localStorage.setItem('age', age)
            localStorage.setItem('weight', weight)
            localStorage.setItem('height', height)

            setIsStatEntered(true)
            setGender('')
            setAge('')
            setHeight('')

            setStats([
                ...stats,
                {
                    gender: localStorage.getItem('gender'),
                    age: localStorage.getItem('age'),
                    weight: localStorage.getItem('weight'),
                    height: localStorage.getItem('height')
                }
            ])
        }
    }

    // console.log(stats)
    // console.log(age)
    // console.log(gender)
    // console.log(height)
    // console.log(weight)

    // -------------- STAT RESETLE

    const resetStats = () => {
        localStorage.removeItem('gender')
        localStorage.removeItem('age')
        localStorage.removeItem('weight')
        localStorage.removeItem('height')
        window.location.reload(false);
    }

    // ----------------------------- exercise SİLME

    const deleteExercises = async (id) => {
        const exerciseDoc = doc(db, "exercises", id);
        await deleteDoc(exerciseDoc);
        querySnapshot();
    };



    return (
        <DataContext.Provider
            value={{
                signInWithGoole,
                logout,
                querySnapshot,
                allexercises,
                deleteExercises,
                exercises,
                submitExercise,
                area,
                duration,
                setArea,
                setDuration,
                handleSubmitStats,
                handleGender,
                handleAge,
                handleWeight,
                handleHeight,
                isStatEntered,
                stats,
                resetStats
            }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;