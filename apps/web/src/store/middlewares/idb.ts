import {applyMiddleware, Middleware} from "@reduxjs/toolkit";

const idbProxy: Middleware = (store) => (next) => (action: {type: string}) => {
  next(action);
}

const idbMiddleware = applyMiddleware(idbProxy);

export default idbMiddleware;
