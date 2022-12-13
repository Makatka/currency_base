import ResultBox from './ResultBox';
import {cleanup, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
  const testCasesFromPln = [
    { amountPln: 100.00, amountUsd: 28.57 },
    { amountPln: 200.00, amountUsd: 57.14 },
    { amountPln: 35.00, amountUsd: 10.00 },
    { amountPln: 70.00, amountUsd: 20.00 },
    { amountPln: 150.00, amountUsd: 42.86 },
  ];
  const testCasesFromUsd = [
    { amountPln: 100, amountUsd: 28.57 },
    { amountPln: 199.99, amountUsd: 57.14 },
    { amountPln: 35, amountUsd: 10 },
    { amountPln: 70, amountUsd: 20 },
    { amountPln: 150.01, amountUsd: 42.86 },
  ];

  it('should render proper info about conversion when PLN -> USD', () => {
    for(const testObj of testCasesFromPln) {
      const action = jest.fn();
      render(<ResultBox from="PLN" to="USD" amount={testObj.amountPln} action={action}/>)
      const mainWrapper = screen.getByTestId('mainWrapper');
      expect(mainWrapper).toHaveTextContent('PLN ' + testObj.amountPln.toFixed(2) + ' = $' + testObj.amountUsd.toFixed(2));
      cleanup()
    }
  })

  it('should render proper info about conversion when USD -> PLN', () => {
    for(const testObj of testCasesFromUsd) {
      const action = jest.fn();
      render(<ResultBox from="USD" to="PLN" amount={testObj.amountUsd} action={action}/>)
      const mainWrapper = screen.getByTestId('mainWrapper');
      expect(mainWrapper).toHaveTextContent('$' + testObj.amountUsd.toFixed(2) + ' = PLN ' + testObj.amountPln.toFixed(2));
      cleanup()
    }
  })

  it('should render proper info about conversion when PLN -> PLN', ()=> {
    for(const testObj of testCasesFromPln) {
      const action = jest.fn();
      render(<ResultBox from="PLN" to="PLN" amount={testObj.amountPln} action={action}/>)
      const mainWrapper = screen.getByTestId('mainWrapper');
      expect(mainWrapper).toHaveTextContent('PLN ' + testObj.amountPln.toFixed(2) + ' = PLN ' + testObj.amountPln.toFixed(2));
      cleanup()
    }
  })

  it('should render proper info when value is negative', () => {
    const action = jest.fn();
    render(<ResultBox from="PLN" to="USD" amount={-50} action={action}/>)
    const mainWrapper = screen.getByTestId('mainWrapper');
    expect(mainWrapper).toHaveTextContent('Wrong value...')
  })
});