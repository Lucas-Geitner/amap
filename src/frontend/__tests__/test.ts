import * as React from 'react';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer'; // ES6
import { TestScheduler } from 'rxjs/testing';
import Card from '../components/Card';

import { Amap } from '../../util/Props';

const Amap: Amap = {
  image_secure_url: 'https://files-qvmwphz4h.now.sh/bence-balla-schottner-1316901-unsplash.jpg',
  title: 'Amap Joinville le pont',
  description: 'Amap de joinville',
  id: 'qfldskjlkfqsdjllkfjsdlkjflskjl',
  paysans: [
    {
      email: 'joe.lepaysan@test.com',
      name: 'Joe',
    },
  ],
};

// const testScheduler = new TestScheduler((actual, expected) => {
//   // asserting the two objects are equal
//   // e.g. using chai.
//   expect(actual).equal(expected);
// });
// // This test will actually run *synchronously*
// it('generate the stream correctly', () => {
//   testScheduler.run(helpers => {
//     const { cold, expectObservable, expectSubscriptions } = helpers;
//     const e1 = cold('-a--b--c---|');
//     const subs = '^----------!';
//     const expected = '-a-----c---|';

//     expectObservable(e1.pipe(throttleTime(3, testScheduler))).toBe(expected);
//     expectSubscriptions(e1.subscriptions).toBe(subs);
//   });
// });

test('basic', async () => {
  // const { getByText } = render(<Card />);
  expect(true).toBeTruthy;
});
