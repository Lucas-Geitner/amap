import * as React from 'react';
// import { render, cleanup } from '@testing-library/react';
import CardList from '../components/CardList';
import { Amap, Props } from '../../util/Props';
import { USER_QUERY } from '../intelligence/amap-context';

// https://github.com/trojanowski/react-apollo-hooks-sample-test/blob/master/src/__tests__/Hello-test.js
import { renderApollo, cleanup, render } from '../lib/test-utils';

const mocks = [
  {
    request: { query: USER_QUERY },
    result: {
      data: {
        allUsers: [
          {
            surname: 'hey',
          },
        ],
      },
    },
  },
];
const query: Props = {
  query: undefined,
};

afterEach(cleanup);

describe('Text rendering correctly', () => {
  test('Expect title to be defined', async () => {
    const { getAllByTestId } = renderApollo(<CardList {...query} />, { mocks });
    expect(getAllByTestId('cardLists')).toBeDefined();

    expect(0).toBe(0);
    // const title = getByText('Amap de joinville');
    // const description = getByText('Amap de joinville');
    // expect(description).toBeDefined;
    // expect(title).toBeDefined;
  });
});
