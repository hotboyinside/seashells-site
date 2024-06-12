import { createContext } from 'react'

const AfishaContext = createContext(
    {
        value: '',
        setValue: () => {}
    }
);

export default AfishaContext