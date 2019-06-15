import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../components/Header';

import { Props } from '../../util/Props';

const query: Props = {
  query: undefined,
};

afterEach(cleanup);

describe('Text rendering correctly', () => {
  test('Should have title', async () => {
    const { getByText } = render(<Header {...query} />);
    const title = getByText('AMAP');
    expect(title).toBeDefined;
  });

  test('De base, doit avoir une option Carte', async () => {
    const { getByText } = render(<Header {...query} />);
    const carteExistence = getByText('Carte');
    expect(carteExistence).toBeDefined;
  });
  test('De base, doit avoir des CTA', async () => {
    const { getByTestId } = render(<Header {...query} />);
    const carteExistence = getByTestId('CTA');
    expect(carteExistence).toBeDefined;
  });
});
