import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('should be able to add numbers together', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const add = container.getByTestId('operator-add');
    const equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);

    expect(runningTotal.textContent).toEqual('5');

  });

  it ('should be able to subtract numbers from one another', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const subtract = container.getByTestId('operator-subtract');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);

    expect(runningTotal.textContent).toEqual('3');



  })

});