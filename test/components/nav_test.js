import { renderComponent , expect } from '../test_helper';
import Nav from '../../src/components/Nav/Nav';

describe('Nav', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Nav);
    });

    it('has correct class', () => {
        expect(component).to.have.class('navigation');
    });

});