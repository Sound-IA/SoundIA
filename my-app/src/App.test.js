import { render } from '@testing-library/react';
// import App from './App';
// import { describe } from 'node:test';
// import { test } from 'picomatch';
import { ButtonJoinNow } from './components/buttonJoinNow/buttonJoinNow';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe ('texto dentro de componente boton ButtonJoinNow', ()=> {
test('boton contiene un string', () => {
  const { getByText } = render(<ButtonJoinNow/>)
  const buttonText = getByText('Join Now')
  expect(buttonText).toBeInTheDocument()
})
});