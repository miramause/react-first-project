import React from 'react'
import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader'

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading";

  return (
    <div className='grid  grid-row-[auto_1fr_auto] h-screen'>

        {isLoading && <Loader/>}

        <Header/>
        <div className='overflow-scroll my-10'>
          <main className='max-w-3xl mx-auto'>
              <Outlet/>
          </main>
        </div>

        <CartOverview/>
    </div>
  )
}