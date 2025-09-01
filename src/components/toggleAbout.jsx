import { useState } from 'react'


export const toggleAbout = () => {

    const [show, setShow] = useState(false)

    return {
        show,
        setShow
    }
}