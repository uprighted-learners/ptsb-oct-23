import './App.css'
import Header from './Header'
import Content from './Content/Content'
import Footer from './Footer'

const cats = [
  { name: 'dog' },
  { name: 'jesse' },
  { name: 'steve' },
  { name: 'munchin' },
]

function App() {
  return (
    <div className='App'>
      <Header title='Home' />
      <Header title='Contact' subtitle='Subtitle' />
      <Content cats={cats} />
      <Footer />
    </div>
  )
}

export default App
