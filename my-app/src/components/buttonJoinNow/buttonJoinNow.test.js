import { render, screen } from '@testing-library/react';
import { ButtonJoinNow } from './buttonJoinNow';
// import { MemoryRouter } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

jest.mock('history', () => ({
  createMemoryHistory: () => ({
    location: {},
    push: jest.fn(),
  }),
}));

describe ('texto dentro de componente boton ButtonJoinNow', ()=> {
    test('boton contiene un string', () => {
      const { getByText } = render(<ButtonJoinNow/>)
      const buttonText = getByText('Join Now')
      expect(buttonText).toBeInTheDocument()
    })

    test('redirige a la página del formulario al hacer clic', () => {
      // Renderizar el componente
      render(<ButtonJoinNow />);
      
      // Encontrar el botón por texto o cualquier otro selector
      const button = screen.getByText('Join Now');
  
      // Simular un clic en el botón
      userEvent.click(button);
  
      // Comprobar que se ha redirigido a la página del formulario
      expect(window.location.pathname).toBe('/join');
    });

  });
  
