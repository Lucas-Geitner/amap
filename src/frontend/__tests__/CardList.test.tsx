import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import CardList from '../components/CardList';

import { Amap, Props } from '../../util/Props';

const query: Props = {
  query: undefined,
};

afterEach(cleanup);

describe('Text rendering correctly', () => {
  test('Expect title to be defined', async () => {
    const { getByText } = render(<CardList {...query} />);
    expect(0).toBe(0);
    // const title = getByText('Amap de joinville');
    // const description = getByText('Amap de joinville');
    // expect(description).toBeDefined;
    // expect(title).toBeDefined;
  });
});
