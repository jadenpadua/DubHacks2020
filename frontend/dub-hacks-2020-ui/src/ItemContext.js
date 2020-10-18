import React, {createContext} from 'react';



const ItemContext = createContext({item: {}, setItem: () => {}});

export const ItemProvider = ItemContext.Provider;
export const ItemConsumer = ItemContext.Consumer;
export default ItemContext;