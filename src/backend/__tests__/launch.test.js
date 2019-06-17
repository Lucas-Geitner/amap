const { createTestClient } = require('apollo-server-testing');
const gql = require('graphql-tag');
const nock = require('nock');
const { constructTestServer } = require('../test-utils');


describe('Text rendering correctly', () => {
	test('De base, doit etre ctable', async () => {
		// const { getByTestId } = render(<Header { ...query } />);
		// const carteExistence = getByTestId('CTA');
		const { server } = constructTestServer({
			context: () => ({ user: { id: 1, email: 'a@a.a' } }),
		});
		console.log(server)

		expect(true).toBeDefined;
	});
});
