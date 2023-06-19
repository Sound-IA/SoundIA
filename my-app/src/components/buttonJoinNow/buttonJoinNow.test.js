import { render } from '@testing-library/react';
import { ButtonJoinNow } from './components/buttonJoinNow/buttonJoinNow';

describe ('texto dentro de componente boton ButtonJoinNow', ()=> {
    test('boton contiene un string', () => {
      const { getByText } = render(<ButtonJoinNow/>)
      const buttonText = getByText('Join Now')
      expect(buttonText).toBeInTheDocument()
    })
    });
    