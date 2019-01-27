import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { onFetchRecords } from './sagas/rootSaga'

import { ProductListingPageReducer } from './components/templates/ProductListingPage'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
})

const store = createStore(
  combineReducers({ ProductListingPageReducer }),
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(onFetchRecords)

export default store
