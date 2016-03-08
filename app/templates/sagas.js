import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import * as <%= actionVariableName %> from '../actions/<%= actionsName %>';

function* someFunction(action) {
    try {
        throw "Implement default action";
        yield put("SOMETHING");
    } catch (error) {
        throw error;
    }
}

function* someFunctionSaga() {
    yield* takeEvery(<%= actionVariableName %>.DEFAULT_ACTION, someFunction);
}

export default [someFunctionSaga];
