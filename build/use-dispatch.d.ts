import { Reducers, State } from '../default';
import DispatchFunction from '../types/dispatch-function';
import Dispatcher, { ExtractArguments, PropertyDispatcher } from '../types/dispatcher';
import Dispatchers from '../types/dispatchers';
import Reducer, { PropertyReducer } from '../types/reducer';
import GlobalStateManager from './global-state-manager';
export type UseDispatch<G extends {} = State, R extends {} = Reducers, P extends keyof G = keyof G, K extends keyof R = keyof R, A extends any[] = any[]> = Dispatcher<G, A> | Dispatcher<G, ExtractArguments<R[K]>> | Dispatchers<G, R> | PropertyDispatcher<G, P, A>;
export default function _useDispatch<G extends {} = State, R extends {} = Reducers>(overrideGlobalStateManager: GlobalStateManager<G, R> | null): DispatchFunction<G> & Dispatchers<G, R>;
export default function _useDispatch<G extends {} = State, R extends {} = Reducers, A extends any[] = any[]>(overrideGlobalStateManager: GlobalStateManager<G, R> | null, reducer: Reducer<G, R, A>): Dispatcher<G, A>;
export default function _useDispatch<G extends {} = State, R extends {} = Reducers, P extends keyof G = keyof G, A extends any[] = any[]>(overrideGlobalStateManager: GlobalStateManager<G, R> | null, reducer: PropertyReducer<G, P, A>, property: P): PropertyDispatcher<G, P, A>;
export default function _useDispatch<G extends {} = State, R extends {} = Reducers, K extends keyof R = keyof R>(overrideGlobalStateManager: GlobalStateManager<G, R> | null, reducer: K): Dispatcher<G, ExtractArguments<R[K]>>;
