import React from 'react'
import HomePage from './stores/pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import CompPage from './stores/pages/CompPage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import WatchPage from './stores/pages/WatchPage'
import KitchenPage from './stores/pages/KitchenPage'
import FurniturePage from './stores/pages/FurniturePage'
import MobileSingle from './stores/singles/MobileSingle'
import AcSingle from './stores/singles/AcSingle'
import CompSingle from './stores/singles/CompSingle'
import MenSingle from './stores/singles/MenSingle'
import WomenSingle from './stores/singles/WomenSingle'
import KitchenSingle from './stores/singles/KitchenSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import WatchSingle from './stores/singles/WatchSingle'
import CartPage from './stores/pages/CartPage'
import PageNotFound from './stores/components/PageNotFound'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/e-shop' element={<HomePage />} />

                <Route path='/mobiles' element={<MobilePage />} />
                <Route path='/mobile/:id' element={<MobileSingle />} />

                <Route path='acs' element={<AcPage />} />
                <Route path='ac/:id' element={<AcSingle />} />

                <Route path='/computers' element={<CompPage />} />
                <Route path='/computer/:id' element={<CompSingle />} />

                <Route path='/men' element={<MenPage />} />
                <Route path='/men/:id' element={<MenSingle />} />

                <Route path='/women' element={<WomenPage />} />
                <Route path='/women/:id' element={<WomenSingle />} />

                <Route path='/kitchen' element={<KitchenPage />} />
                <Route path='/kitchen/:id' element={<KitchenSingle />} />

                <Route path='/furnitures' element={<FurniturePage />} />
                <Route path='/furniture/:id' element={<FurnitureSingle />} />

                <Route path='/watches' element={<WatchPage />} />
                <Route path='/watch/:id' element={<WatchSingle />} />

                <Route path='/cart' element={<CartPage />} />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default App
