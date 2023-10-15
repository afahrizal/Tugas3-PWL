import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', function() {
    it('should rendered', function() {
        render(<Footer />);
        expect(document.getElementsByTagName('a')[0]).toBeInTheDocument();
        expect(document.getElementsByTagName('a')[1]).toBeInTheDocument();
        expect(document.getElementsByTagName('a')[2]).toBeInTheDocument();
    });
})