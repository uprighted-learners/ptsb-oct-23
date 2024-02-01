import './App.css'
import { useState } from 'react'
import Layout from './components/shared/Layout/Layout'
import Content from './components/shared/Content/Content'
import Header from './components/shared/Header/Header'
import CounterLayout from './components/Counter/CounterLayout'
import Counter from './components/Counter/Counter'
import ComputedCount from './components/Counter/ComputedCount'
import Footer from './components/shared/Footer/Footer'
import StatusBar from './components/StatusBar/StatusBar'

const dbData = [
  { name: 'John', role: 'Junior Developer' },
  { name: 'Mary', role: 'Staff Frontend Engineer' },
  { name: 'Steve', role: 'Product Group Owner' },
  { name: 'Jesse', role: 'Meth Cook' },
]

function App() {
  const [count, setCount] = useState(0)
  const [dbConnectedGlobal, setDbConnectedGlobal] = useState(false)

  function getPage() {
    return (
      <>
        <Content users={dbData && dbData.length ? dbData : []}>
          <h3>Counters Sharing Lifted State</h3>
          <CounterLayout>
            <Counter count={count} handleClickCount={setCount} />
            <Counter count={count} handleClickCount={setCount} />
          </CounterLayout>
        </Content>
        <div>
          <ComputedCount count={count} />
        </div>
      </>
    )
  }

  return (
    <div className='App'>
      <Layout>
        <Header pageTitle='Home' hasSubtitle={true}>
          <StatusBar setDbConnectedGlobal={setDbConnectedGlobal} />
        </Header>

        {!dbConnectedGlobal ? (
          <div className='loader'>connecting to database</div>
        ) : (
          getPage()
        )}
        <Footer />
      </Layout>
    </div>
  )
}

export default App
