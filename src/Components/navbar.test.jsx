import { render, screen } from '@testing-library/react';
import Navbar from './navbar';

describe('Navbar', function() {
    it('should rendered', function() {
        render(<Navbar />);
        expect(document.getElementsByTagName('a')[0]).toBeInTheDocument();
        expect(document.getElementsByTagName('a')[1]).toBeInTheDocument();
        expect(document.getElementsByTagName('a')[2]).toBeInTheDocument();
    });
})