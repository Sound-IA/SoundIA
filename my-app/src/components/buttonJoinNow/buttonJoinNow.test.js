import { render } from '@testing-library/react';
import { ButtonJoinNow } from './buttonJoinNow';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe ('texto dentro de componente boton ButtonJoinNow', ()=> {
    test('boton contiene un string', () => {
      const { getByText } = render(<ButtonJoinNow/>)
      const buttonText = getByText('Join Now')
      expect(buttonText).toBeInTheDocument()
    })
    });
    
    // describe('Click en botón de Join Now me redirige a página donde se encuentra el formulario', ()=> {
    //   test ('botón redirige a pagina del formulario', () => { 
    //   const { getByText } = render(<ButtonJoinNow/>)
    //   const buttonJoinNow = getByText("/Join")
    //   })
    // })