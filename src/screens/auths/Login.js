import React, { useState } from 'react'
import Modals from '../../components/modal/Modal'
import Toast from '../../utilities/Extend/Toast/Toast'
import Loader from '../../utilities/Extend/loading/Loader'
import SkeletonLoader from '../../utilities/Extend/skeleton/Skeleton'

const Login = () => {
  const [loader, setLoader] = useState(false)
  const [skeleton , SetSkeleton] = useState(false)
  const handleLoader = () => {
    setLoader(true)

  }
  return (
    <>
     {loader && (
       <Loader show={true}  />
     )} 
     {/* <Modals  /> */}
    {/* <Toast message={"CHECK"} show={true} /> */}
    <skeleton  className='container'>
         
        <h1 onClick={handleLoader}>login</h1>
    </skeleton>
    </>
  )
}

export default Login