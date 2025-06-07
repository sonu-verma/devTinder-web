import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from './PostCard'
import Sponsored from './Sponsored'
import SuggestedConnections from './SuggestedConnections'

const Dashboard = () => {

  const user = useSelector(store => store.user)

return <>
    <div className='lg:grid lg:grid-flow-col grid-flow-row  lg:grid-cols-4 gap-4 justify-center p-10 '>
        <div className='bg-gray-200 mt-10 lg:h-svh h-[5d00px] w-full'>
                <img
                        className="rounded-full text-center w-1/4 m-auto -mt-10 "
                        alt="Tailwind CSS Navbar component"
                        src={user?.profile ? user?.profile : "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" }
                />
                <p className='text-center py-4 font-bold text-2xl'>Sonu Verma</p>
                <div className='flex justify-evenly gap-4 text-center my-2'>
                        <div>
                                <span>Following</span>
                                <p className=' font-bold'>50</p>
                        </div>
                        <div>
                                <span>Followers</span>
                                <p className=' font-bold'>500</p>
                        </div>
                        <div>
                                <span>Activities</span>
                                <p className=' font-bold'>50</p>
                        </div>
                </div>
                <div className='border-y-2 py-4 mx-12 my-10'>
                        <p>Latest Activities</p>
                        <p className='font-bold flex flex-col items-end gap-2'>
                                Vasai-Virar Champion cup 2025
                                <span className='font-normal'>March 2025</span>
                        </p>
                </div>
                <p className='text-left py-2 mx-12 font-bold'>Your Activity Logs &gt; </p>
        </div>
        <div className='col-span-2 lg:p-2 lg:overflow-y-scroll h-dvh my-10 lg:my-0'>
            {
                ["Prashant", "Vishal", "Alpesh", "Ashu"].map((val, index) => 
                    <PostCard
                        key={index}
                        name= {val}
                        time="Today at 4:23 PM"
                        content="We won Palghar box cricket league once again!! Proud to get player of the match. #PalgharCricketLeague #PlayerOfTheMatch"
                        image="/sample-post-image.jpg"
                        cheersCount={5}
                    />
                )
            }
        </div>
        <div className='bg-gray-200  p-4 hidden lg:block h-svh'>
            <Sponsored />
            <SuggestedConnections />
        </div>
    </div>
</>
}

export default Dashboard
