import React, { useState } from 'react'
import Сities from './components/Сities'
// import SearchStatus from './components/SearchStatus'
import api from './api'

function App() {
    const [cities, setCities] = useState(api.price.fetchAll())
    console.log('users', cities)
    const handleDelete = (cityId) => {
        setCities(cities.filter((city) => city._id !== cityId))
    }
    const handleToggleBookMark = (id) => {
        setCities(
            cities.map((city) => {
                if (city._id === id) {
                    return { ...city, bookmark: !city.bookmark }
                }
                return city
            })
        )
        console.log(id)
    }
    return (
        <div>
            {/* <SearchStatus length={users.length} /> */}
            <Сities
                cities={cities}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
            />
        </div>
    )
}

export default App
