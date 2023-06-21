//Test Footer

import { render,screen } from '@testing-library/react';
import Footer from '../footer'


describe ('prueba de render del texto About Us y Contact del componente footer', ()=> {
    test('footer contiene dos string', () => {
      
    render(<Footer/>)
      const footerTextAboutUs = screen.getByText('About Us');
      const footerTextContact = screen.getByText('Contact')


      expect(footerTextAboutUs).toBeInTheDocument()
      expect(footerTextContact).toBeInTheDocument()
    })
    });
        