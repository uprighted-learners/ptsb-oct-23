import './App.css'
import { useState, useEffect } from 'react'
import Layout from './components/shared/Layout/Layout'
import Content from './components/shared/Content/Content'
import Header from './components/shared/Header/Header'
import CounterLayout from './components/Counter/CounterLayout'
import Counter from './components/Counter/Counter'
import ComputedCount from './components/Counter/ComputedCount'
import Footer from './components/shared/Footer/Footer'

let dbConnected = false
const dbData = [
  { name: 'John', role: 'Junior Developer' },
  { name: 'Mary', role: 'Staff Frontend Engineer' },
  { name: 'Steve', role: 'Product Group Owner' },
  { name: 'Jesse', role: 'Meth Cook' },
]

function App() {
  // First example of a hook for managing state
  // Left is our variable and the right is a function manage changes to it
  const [count, setCount] = useState(0)

  // Same function as it was in Counter but lifted along w/ state (look up) so we can use it across more components
  function handleClickCount(num) {
    setCount(num)
  }

  // useEffect is a hook that runs on a per render basis
  // Per React docs: "use this to sync a component with an external system"
  // My example connects to a fake database
  useEffect(() => {
    console.log('database connected')
    dbConnected = true

    // The passed array are arguments that are watched for changes to tell React if this hook should run
    // Because we would only connect to say a database for one example once, once its true, this should not happen again
    // ES Lint will yell about this but it's for an example if you remove the comment below
  }, [dbConnected]) // eslint-disable-line

  return (
    <div className='App'>
      <Layout>
        {/* Passing some props in */}
        <Header pageTitle='Home' hasSubtitle={true} />

        {/* Here we passed our fake data object vs a simple string as a prop*/}
        <Content users={dbData && dbData.length ? dbData : []}>
          <h3>Counters Sharing Lifted State</h3>
          <CounterLayout>
            <Counter count={count} handleClickCount={handleClickCount} />
            <Counter count={count} handleClickCount={handleClickCount} />
          </CounterLayout>
        </Content>

        <div>
          {/* The next two items show our ability to use not only state on the current component but pass it to ComputedCount for additional operations */}
          <ComputedCount count={count} />
        </div>

        <Footer />
      </Layout>
    </div>
  )
}

export default App
