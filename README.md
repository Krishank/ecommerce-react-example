
# AKQA Ecommerce Assignment

  
  

## Technology Stack

- React JS

- Redux (State Menagement)

- Style Component (for Component Style Reusability)

- Node-fetch (for serverside API call)

- SAGA

- Styled Grid (As a boot strap Grid)

- YARN / NPM for package Dependencies

- ES6

- Webpack 4, Prettier and AirBnb lint

  

# Working App

  

- Open the App: [https://krishank.github.io/ecommerce-react-example/build/index.html](Product Listing Page)

  

## Setup

  

- git clone https://github.com/Krishank/ecommerce-react-example.git

- cd ecommerce-react-example

- Yarn install or npm install

- yarn start or npm start

- open url [http://localhost:8082](http://localhost:8082)

  
  

## Dependency

  

- To get all products a mock API is hosted on [https://demo7175924.mockable.io/get-products](/get-products)

  
  

## App Strcture

  

This App is based on Atomic Design using a few cool things, like Styled-compomemt, ES6 and Redux and ReactJS, I tried to make every component isolated including the local dependencies they need for example global actions, helpers are separate from local actions and helpers like Product Listing Page in template.

  

Please find the App Strcture Below

  

```

src

├── app

│ ├── App.js

│ ├── ErrorBoundary.js

│ ├── actions

│ │ └── index.js

│ ├── components

│ │ ├── atoms

│ │ │ ├── Heading

│ │ │ │ └── Heading.js

│ │ │ ├── Img

│ │ │ │ └── Img.js

│ │ │ ├── Selectbox

│ │ │ │ ├── Selectbox.js

│ │ │ │ └── Selectbox.style.js

│ │ │ ├── Text

│ │ │ │ ├── Text.js

│ │ │ │ └── Text.style.js

│ │ │ └── index.js

│ │ ├── molecules

│ │ │ ├── Loader

│ │ │ │ ├── Loader.js

│ │ │ │ └── Loader.style.js

│ │ │ ├── Product

│ │ │ │ ├── Product.js

│ │ │ │ └── Product.style.js

│ │ │ ├── Tag

│ │ │ │ ├── Tag.js

│ │ │ │ └── Tag.style.js

│ │ │ └── index.js

│ │ ├── organisms

│ │ │ ├── filterHeader

│ │ │ │ ├── FilterHeader.js

│ │ │ │ └── FilterHeader.style.js

│ │ │ ├── index.js

│ │ │ └── productList

│ │ │ ├── ProductList.js

│ │ │ └── ProductList.styled.js

│ │ └── templates

│ │ └── ProductListingPage

│ │ ├── ProductListingPage.actions.js

│ │ ├── ProductListingPage.constants.js

│ │ ├── ProductListingPage.helper.js

│ │ ├── ProductListingPage.js

│ │ ├── ProductListingPage.reducer.js

│ │ └── index.js

│ ├── reducers

│ │ └── index.js

│ ├── sagas

│ │ └── rootSaga.js

│ └── store.js

├── assets

│ └── images

│ └── products

│ ├── placeholder.png

│ ├── product-1.jpg

│ ├── product-2.jpg

│ ├── product-3.jpg

│ ├── product-4.jpg

│ ├── product-5.jpg

│ ├── product-6.jpg

│ ├── product-7.jpg

│ └── product-8.jpg

├── data

│ ├── index.js

│ ├── products.js

│ └── size.js

├── global

│ ├── constants.js

│ ├── index.js

│ └── service.js

├── images

│ └── index.js

├── index.html

├── index.js

├── locale

│ ├── index.js

│ ├── locale.js

│ └── sizeOptions.js

├── styles

│ ├── index.js

│ └── styleConstants.js

└── utils

└── index.js

  
  

```

  
  

## React.js

  

A Popular java script library for declarative and component based development.

  

## Redux

  

A predictable state container for JavaScript apps.

- Predictable: Redux helps you write applications that behave consistently

- Centralized: Single Source of truth

- Debuggable: There are many tolls in this app I have used Redux Dev Tool.

- Flexible: We can use it with any other view library

  
  
  
  

## Styled-Component

Styled components provide a flexibility to write Js in Css which help a lot in a component based development. I found it very useful and predictable as this approach provide a flexibility to write the test cases for your css which eliminate any ambiguity (Now there is no need for Tester to write pixel testing) and so many other limitations of css

  

Styled component has a very good documentation on its official website [https://www.styled-components.com/](https://www.styled-components.com/)

  
  
  
  
  

## Working App View

  

Please see the below images for desktop and mobile view

  

- Desktop View Without Loading![Product Listing Page Desktop](https://raw.githubusercontent.com/Krishank/ecommerce-react-example/master/images/desktop.png)


- Desktop View With Loading 


![Product Listing Page Desktop Loader](https://raw.githubusercontent.com/Krishank/ecommerce-react-example/master/images/desktop-loading.png)

  

- Mobile View without Loading![Product Listing Page Mobile](https://raw.githubusercontent.com/Krishank/ecommerce-react-example/master/images/mobile.jpeg)



- Mobile With Loading
![Product Listing Page Desktop Loader](https://raw.githubusercontent.com/Krishank/ecommerce-react-example/master/images/mobile-loading.jpeg)