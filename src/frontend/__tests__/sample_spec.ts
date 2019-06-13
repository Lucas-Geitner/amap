import Card from '../components/Card';
import * as React from 'react';

import { Amap } from '../../util/Props';
import { render } from '@testing-library/react';

let Amap: Amap = {
	image_secure_url: 'https://files-qvmwphz4h.now.sh/bence-balla-schottner-1316901-unsplash.jpg',
	title: 'Amap Joinville le pont',
	description: 'Amap de joinville',
	id: 'qfldskjlkfqsdjllkfjsdlkjflskjl',
	paysans: [
		{
			email: 'joe.lepaysan@test.com',
			name: 'Joe'
		}
	]
};

test('basic', async () => {
	const { getByText } = render(<Card />);

	const title = getByText('Amap Joinville le pont');

	expect(true).toBeTruthy;
});
