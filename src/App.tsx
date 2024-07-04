import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedFruit, getComment } from './redux/selectors';
import RadioButton from './components/RadioButton';
import DiscountTextBox from './components/DiscountTextBox';
import DiscountGenerator from './components/DiscountGenerator';
import CommentTextBox from './components/CommentTextBox';
import { selectFruit, changeComment } from './redux/actions';

function App() {
  const dispatch = useDispatch() as (dispatch: any) => Promise<void>;
  const [discountCode, setDiscountCode] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { current: fruits } = useRef(['Apple', 'Banana', 'Kiwi'])

  const fruit = useSelector(getSelectedFruit)
  const comment = useSelector(getComment)

  const { current: handleFruitSelection } = useRef((value: string) => {
    dispatch(selectFruit(value));
  })
  const { current: handleCommentChange } = useRef((value: string) => {
    dispatch(changeComment(value));
  })
  const { current: handleDiscountChange } = useRef((value: string) => {
    setDiscountCode(value)
    setErrorMessage(value.match(/DISCOUNT[0-9]{4}/) ? '' : 'invalid code')
  })

  return (
    <div className="p-4">
      <p className='m-2'>1. Radio Selection Buttons</p>
      <RadioButton title='Select fruit' items={fruits} onSelect={handleFruitSelection} selectedItem={fruit} />
      <p className='m-2'>2. Text Box for Discount Code Entry</p>
      <DiscountTextBox onChange={handleDiscountChange} value={discountCode} errorMessage={errorMessage} />
      <p className='m-2'>3. Button to Simulate Discount Code Generation</p>
      <DiscountGenerator />
      <p className='m-2'>4. Basic Note Field</p>
      <CommentTextBox onChange={handleCommentChange} value={comment} rows={10}/>
    </div>
  );
}

export default App;
