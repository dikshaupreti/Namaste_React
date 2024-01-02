import { useEffect, useState } from "react"

const useOnlineSatus = () => {
    const [isonline, setIsOnline] = useState(true)
    
    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true)
        }

        const handleOffline = () => {
            setIsOnline(false)
        }
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)
        return (() => {
            window.removeEventListener("online")
            window.removeEventListener('offline')
        })
    }, [])
    return {
        isonline    
    }
}

export default useOnlineSatus