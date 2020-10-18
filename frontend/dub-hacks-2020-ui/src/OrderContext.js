import React, {createContext} from 'react';



const OrderContext = createContext({order: {}, setOrder: () => {}});

export const OrderProvider = OrderContext.Provider;
export const OrderConsumer = OrderContext.Consumer;
export default OrderContext;