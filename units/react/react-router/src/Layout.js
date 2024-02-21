import Nav from './Nav'

function Layout({ children }) {
  // Challenge
  // Setup layout component that be used for all pages
  // Use it on Home/About
  // Wrap the pages content in a div w/ border 1px blue using inline styles
  return (
    <div style={{ border: '1px solid blue' }}>
      <div>
        <Nav />
      </div>
      {children}
    </div>
  )
}

export default Layout
