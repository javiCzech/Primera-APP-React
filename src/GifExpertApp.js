import React, { useState } from 'react'
import AddCategory from './Components/AddCategory'
import GifGrid from './Components/GifGrid'

const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One piece'])
    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    //     //setCategories( cats => [ ...cats, 'HunterXHunter']);
    
    return (
        <>
        <h2>GifExpertAPP</h2>
        <AddCategory setCategories={ setCategories } />
        <hr/>

        <ol>
            { categories.map( category => 
                <GifGrid
                key= {category}
                category= {category}
                />
             )
            }
        </ol>
        </>
    )
}

export default GifExpertApp