import { createContext } from 'react';

const AppContext = createContext()

const AppProvider = AppContext.Provider
const AppConsumer = AppContext.Consumer

export {AppProvider, AppConsumer }
