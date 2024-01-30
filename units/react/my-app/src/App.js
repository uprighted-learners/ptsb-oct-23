import './App.css'
import Header from './Header'
import Content from './Content/Content'
import Footer from './Footer'

// Fake data that can be used to setup and pass props to other components
const cats = [
  { name: 'dog' },
  { name: 'jesse' },
  { name: 'steve' },
  { name: 'munchin' },
]

// Challenge 1
// 1) When we console logged there was duplicate logs, why?
// Answer: your answer here

// Challenge 2
// 2a) Research React's children feature/concept. Add the resource you used to learn this: LINK HERE
// 2b) Add a new Layout component
// 2c) Use the folder pattern you learned and then nest it in an additional "shared" folder
// 2d) Make the Header, Content, Footer components children of Layout
// 2d) Add a CSS file in your folder structure and center the layout at 1024px
function App() {
  return (
    <div className='App'>
      {/* First example of passing values as props into components */}
      <Header title='Home' />

      {/* Components are reusable so there is no limit to using them over and over */}
      <Header title='Contact' subtitle='Subtitle' />

      {/* Here we passed our fake data object vs a simple string */}
      <Content cats={cats} />
      <Footer />
    </div>
  )
}

export default App
