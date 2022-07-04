import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Cards } from '../components/Cards'
import { Error } from '../components/Error'
import { Weather } from '../components/Weather'
export const MyRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='home' element={<Weather />} />
                    <Route path='following-days' element={<Cards />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
