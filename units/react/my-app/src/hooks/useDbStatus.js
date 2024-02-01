import { useState, useEffect } from 'react'

function useDbStatus() {
  const [isConnected, setIsConnected] = useState(false)
  const [isLoadingConnection, setIsLoadingConnection] = useState(true)

  useEffect(() => {
    function delayAndConnect() {
      console.log('database connected')
      setIsConnected(true)
      setIsLoadingConnection(true)
    }

    const timeout = setTimeout(delayAndConnect, 3000)

    return () => {
      setIsLoadingConnection(false)
      clearTimeout(delayAndConnect)
    }
  }, [isConnected])

  return {
    isConnected,
    setIsConnected,
    isLoadingConnection,
    setIsLoadingConnection,
  }
}

export default useDbStatus
