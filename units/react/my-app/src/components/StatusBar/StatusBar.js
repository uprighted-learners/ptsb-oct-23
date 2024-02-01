// import { useEffect, useState } from 'react'
import { useEffect } from 'react'
import useDbStatus from '../../hooks/useDbStatus'

function StatusBar(props) {
  const dbConnect = useDbStatus()

  function handleDisconnectDb() {
    dbConnect.setIsConnected(!dbConnect.isConnected)
  }

  useEffect(() => {
    props.setDbConnectedGlobal(dbConnect.isConnected)
  }, [dbConnect.isConnected]) // eslint-disable-line

  return (
    <div>
      <div>Database Connected: {dbConnect.isConnected ? '✅' : '❌'}</div>
      {dbConnect.isConnected && (
        <button onClick={handleDisconnectDb}>Disconnect</button>
      )}
    </div>
  )
}

export default StatusBar
