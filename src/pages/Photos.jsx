import React from 'react'
import Image from '../componenets/Image'
import {getClass} from '../utils'
import {Context} from '../Context'

function Photos() {
    const {allPhotos} = React.useContext(Context)
    const imageElements = allPhotos.map((img, i) => {
        return (
            <Image key={img.id} img={img} className={getClass(i)}/>
        )
    })

    return (
        <main className='photos'>
            {imageElements}
        </main>
    )
}
export default Photos