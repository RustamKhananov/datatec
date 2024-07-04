import configureStore from './configureStore';
// reducers

import fruits from './reducers/fruits.reducer';
import comments from './reducers/comments.reducer';

const store = configureStore({
 fruits,
 comments
});

export default store;
