import { renderComponent , expect } from '../test_helper';
import Browser from '../../src/components/Browser/Browser';

describe('Browser', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Browser);
    });

    it('renders Navigation', () => {
        expect(component.find('.navigation')).to.exist;
    });

});