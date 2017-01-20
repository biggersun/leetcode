import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux'
import React from 'react'
import Counter from '../components/counter' //顶层组件
import * as CounterActions from '../actions/actions';

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);