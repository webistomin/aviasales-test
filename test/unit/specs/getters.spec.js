import { getters } from '../../../src/store/index';

describe('getters', () => {
  it('getters', () => {
    const state = {
      tickets: [],
    };

    expect(getters.getTickets(state.tickets)).to.deep.equal({
      tickets: [],
    });
  });
});
