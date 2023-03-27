import React, { useEffect, useState } from 'react';
import './Home.css';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';


let initialCount = 6

const Home = () => {

    const [authUser, setAuthUser] = useState(null);

    let navigate = useNavigate()

    const [data, setData] = useState([]);
    const [initialData, setInitialData] = useState([]);


    useEffect(() => {

        const isAuth = localStorage.getItem('isAuth')

        console.log(isAuth)
        if(!isAuth){
            navigate('/')  
          }

        fetchDetails()

        const listens = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(authUser);
            }
        })
        return () => {
            listens();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            alert('sign out successfull');
            localStorage.clear()
            navigate('/')
        }).catch(err => {
            console.log(err);
        })
    }

    async function fetchDetails() {
        
        setTimeout(async () => {
            console.log('hey')
            let res = await axios.get('https://dummyjson.com/users')
            setData(res.data.users)
            setInitialData(res.data.users.slice(0, initialCount))
            initialCount += 6
            console.log(initialData)
        }, 1000)

    }

    // <p>{`Signed in as ${authUser.email}`}</p>

    return (

        <div className='home-page'>
            <h1 className='header'>Contact List</h1>
            <div className="sign-out">
            {authUser && <><button className='signoutbtn' onClick={userSignOut}>Sign out</button></>}
            </div>
            <div className="contact-list">
                <InfiniteScroll
                    dataLength={initialData.length} //This is important field to render the next data
                    hasMore={initialCount >= 30 ? false : true}
                    loader={<div className='loading'><h1>Loading...</h1></div>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    next={fetchDetails} >
                    <div className="list-cards" >
                        {
                            initialData.map((ele) => {
                                return (
                                    <>

                                        <div className="user-img">
                                            <img src={ele.image} alt="img" />
                                            <h3>Name: {ele.firstName}</h3>
                                            <h3>Age: {ele.age}</h3>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        </div >
    )
}

export default Home
