
  

  

# E-commerce Product Listing Page

  

Please checkout to  [release-1](https://github.com/Krishank/ecommerce-react-example/tree/release-1) branch for Latest code.

  

# Working App

  

- Open the App: [Product Listing Page](https://krishank.github.io/ecommerce-react-example/build/index.html)
- Accesability Report: [Product Listing Page](https://github.com/Krishank/ecommerce-react-example/blob/master/reports/achecker_2019-01-27_22-37-07.pdf)
- W3C Html Validator: [Click Here](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkrishank.github.io%2Fecommerce-react-example%2Fbuild%2Findex.html)

## Prerequisite

```

    Node Js (>= v8.12.0)
    NPM (>=6.4.1)
    git (>=2.15.2)
    yarn (>=1.12.3) [Optional]

```

- To get all products a mock API is hosted on [/get-products](https://demo7175924.mockable.io/get-products])
- Recommended Editor and settings: Visual Studio Code settings [Click Here](https://github.com/Krishank/ecommerce-react-example/blob/master/DevelopmentTools.md)

  

  

## Features

  

This App is using multiple dev tools like husky, prettier, ESlint, style-lint to insure code quality before user commit the code It is a Single page React App which has multiple products and a size filter in product listing page with funcationality of filtering products as per size.

  

```

{

    "start": "cross-env NODE_ENV=development webpack-dev-server --open",
    "build": "cross-env NODE_ENV=production webpack",
    "format": "prettier --write 'src/**/*.js'",
    "lint:css": "stylelint './src/**/*.style.js'",
    "test": "jest --watchAll --coverage",
    "precommit": "lint-staged"

}

```

  

## Project Setup

  

```
git clone https://github.com/Krishank/ecommerce-react-example.git
cd ecommerce-react-example
Yarn install or npm install
yarn start or npm start

```

  
## Technology Stack

  


-  [ReactJs](https://reactjs.org/)
-  [Redux (State Management)](https://redux.js.org/introduction/getting-started)
-  [Redux SAGA](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
-  [YARN / NPM for package Dependencies](https://npmjs.com)
-  [ES6](http://es6-features.org/)
-  [Style Component (for Component Style Reusability)](https://www.styled-components.com/)
-  [Styled Grid (As a boot strap Grid)](https://www.npmjs.com/package/styled-bootstrap-grid)
-  [Webpack 4](https://webpack.js.org/)
-  [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

  

  

## App Structure

  

  

This App is based on Atomic Design using a few cool things, like Styled-components, ES6 and Redux and ReactJS, every component is isolated including the local dependencies for example global actions, helpers are separate from local actions and helpers like Product Listing Page in template.

  

  

Please find the App Structure Below

  

  

```

  

src
├── app
│   ├── App.js
│   ├── ErrorBoundary.js
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   ├── atoms
│   │   │   ├── Heading
│   │   │   │   └── Heading.js
│   │   │   ├── Img
│   │   │   │   └── Img.js
│   │   │   ├── Selectbox
│   │   │   │   ├── Selectbox.js
│   │   │   │   └── Selectbox.style.js
│   │   │   ├── Text
│   │   │   │   ├── Text.js
│   │   │   │   └── Text.style.js
│   │   │   └── index.js
│   │   ├── molecules
│   │   │   ├── Loader
│   │   │   │   ├── Loader.js
│   │   │   │   └── Loader.style.js
│   │   │   ├── Product
│   │   │   │   ├── Product.js
│   │   │   │   └── Product.style.js
│   │   │   ├── Tag
│   │   │   │   ├── Tag.js
│   │   │   │   └── Tag.style.js
│   │   │   └── index.js
│   │   ├── organisms
│   │   │   ├── filterHeader
│   │   │   │   ├── FilterHeader.js
│   │   │   │   └── FilterHeader.style.js
│   │   │   ├── index.js
│   │   │   └── productList
│   │   │       ├── ProductList.js
│   │   │       └── ProductList.styled.js
│   │   └── templates
│   │       └── ProductListingPage
│   │           ├── ProductListingPage.actions.js
│   │           ├── ProductListingPage.constants.js
│   │           ├── ProductListingPage.helper.js
│   │           ├── ProductListingPage.js
│   │           ├── ProductListingPage.reducer.js
│   │           └── index.js
│   ├── reducers
│   │   └── index.js
│   ├── sagas
│   │   └── rootSaga.js
│   └── store.js
├── assets
│   └── images
│       └── products
│           ├── placeholder.png
│           ├── product-1.jpg
│           ├── product-2.jpg
│           ├── product-3.jpg
│           ├── product-4.jpg
│           ├── product-5.jpg
│           ├── product-6.jpg
│           ├── product-7.jpg
│           └── product-8.jpg
├── data
│   ├── index.js
│   ├── products.js
│   └── size.js
├── global
│   ├── constants.js
│   ├── index.js
│   └── service.js
├── images
│   └── index.js
├── index.html
├── index.js
├── locale
│   ├── index.js
│   ├── locale.js
│   └── sizeOptions.js
├── styles
│   ├── index.js
│   └── styleConstants.js
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