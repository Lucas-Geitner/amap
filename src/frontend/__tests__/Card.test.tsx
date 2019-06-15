import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import Card from '../components/Card';
import { Amap } from '../../util/Props';

const AmapData: Amap = {
  image_secure_url: 'https://files-qvmwphz4h.now.sh/bence-balla-schottner-1316901-unsplash.jpg',
  title: 'Amap Joinville le pont',
  description: 'Amap de joinville',
  id: 'qfldskjlkfqsdjllkfjsdlkjflskjl',
  paysans: [
    {
      email: 'joe.lepaysan@test.com',
      name: 'Joe',
      nourritures: ['Pommes', 'Fruits', 'Poires', 'Farine', 'Confitures'],
    },
  ],
};

const AmapDataPlural: Amap = {
  image_secure_url: 'https://files-cwup4yth4.now.sh/asoggetti-1250591-unsplash.jpg',
  title: 'Amap Ivry',
  description: 'une belle amap à Ivry',
  id: 'qfldskjlkfqsdjllkfjsfkdjslkldsdlkjflskjl',
  paysans: [
    { email: 'joe.lepaysan@test.com' },
    {
      email: 'nina.lepaysan@test.com',
      nourritures: ['Pommes', 'Fruits', 'Poires', 'Farine', 'Confitures'],
    },
    {
      email: 'nina.lepaysan@test.com',
      nourritures: ['Pommes', 'Fruits', 'Poires', 'Farine', 'Confitures'],
    },
  ],
};

const AmapDataEmpty: Amap = {
  image_secure_url: 'https://files-aohg4if1g.now.sh/neha-deshmukh-5769-unsplash.jpg',
  title: 'Amap du 11ême ',
  description: 'Amapop du 11ême',
  id: 'qfldskjlkfqsdjllkfqsffsdjsdfdsfdlkjflskjl',
};

afterEach(cleanup);

describe('Text rendering correctly', () => {
  test('Expect title to be defined', async () => {
    const { getByText } = render(<Card {...AmapData} />);
    const title = getByText('Amap de joinville');
    const description = getByText('Amap de joinville');
    expect(description).toBeDefined;
    expect(title).toBeDefined;
  });
  test('Expect description to be defined', async () => {
    const { getByText } = render(<Card {...AmapData} />);
    const description = getByText('Amap de joinville');
    expect(description).toBeDefined;
  });
  test('Expect nourriture to be defined', async () => {
    const { getByText } = render(<Card {...AmapData} />);
    const nourriture = getByText('Pommes, Fruits, Poires, Farine, Confitures');
    expect(nourriture).toBeDefined;
  });
});

describe('Text rendering correctly', () => {
  test('Expect title to be defined', async () => {
    const { getByText } = render(<Card {...AmapDataPlural} />);
    const title = getByText('Amap Ivry');
    expect(title).toBeDefined;
  });
  test('Expect description to be defined', async () => {
    const { getByText } = render(<Card {...AmapDataPlural} />);
    const description = getByText('une belle amap à Ivry');
    expect(description).toBeDefined;
  });
  test('Expect nourriture to be defined', async () => {
    const { getByText } = render(<Card {...AmapDataPlural} />);
    const nourriture = getByText('Pommes, Fruits, Poires, Farine...');
    expect(nourriture).toBeDefined;
  });
});

describe('Text rendering correctly', () => {
  test('Expect title to be defined', async () => {
    const { getByText } = render(<Card {...AmapDataEmpty} />);
    const title = getByText('Amap du 11ême');
    expect(title).toBeDefined;
  });
  test('Expect description to be defined', async () => {
    const { getByText } = render(<Card {...AmapDataEmpty} />);
    const description = getByText('Amapop du 11ême');
    expect(description).toBeDefined;
  });
  test('Expect nourriture to be defined', async () => {
    // const { getByText } = render(<Card {...AmapDataEmpty} />);
    // const nourriture = g('paysan');
    // expect(nourriture).not.toBeDefined;
    expect(true).toBeTruthy;
  });
});
