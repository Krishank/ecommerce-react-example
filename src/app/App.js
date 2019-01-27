import React from 'react'
import { Container } from 'styled-bootstrap-grid'
import '../images'
import { ProductListingPage } from './components/templates/ProductListingPage'

const App = () => {
  return (
    <Container>
      <ProductListingPage />
    </Container>
  )
}

export default App
