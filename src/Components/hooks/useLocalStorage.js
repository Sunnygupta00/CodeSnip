import { useEffect, useState } from 'react'

const PREFIX = 'code-snip'


// GETTING THE VALUE
export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })
    // UPDATE/SAVING THE VALUE
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}