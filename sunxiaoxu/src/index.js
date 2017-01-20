import React from 'react'
import {
	render
} from 'react-dom'
import {
	createStore
} from 'redux'
import {
	Provider
} from 'react-redux'
import './main.css'
import Index from './containers/App.js'
import configureStore from './store/configureStore'

const store = configureStore();
// let store = createStore(reducer)
//创建唯一的store，参数是我们写好的reducer

render(
		<Provider store={store}>
        <Index/>
    </Provider>, document.getElementById('app')
	)
	//渲染我们的顶层组件，但是要用Provider包裹起来，并传入store