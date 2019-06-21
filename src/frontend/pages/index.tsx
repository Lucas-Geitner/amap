import '../styles/index.scss';
import * as React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Props } from '../../util/Props';
import CardList from '../components/CardList';

const GET_DOGS = gql`
  query {
    visibilityFilter @client
  }
`;
const MUTATE_CONNECION = gql`
  mutation updateConnection($visibilityFilter: String!) {
    updateConnection(visibilityFilter: $visibilityFilter) @client
  }
`;

const OneStuff: React.FunctionComponent<Props> = props => (
  <>
    <p className="text-gray-600 pb-3"> Toutes les 349 AMAP d'ile de France</p>
    <CardList {...props} />
  </>
);

const Home: React.FunctionComponent<Props> = props => {
  const {
    data: { visibilityFilter },
  } = useQuery(GET_DOGS);
  const [hey] = useMutation(MUTATE_CONNECION);

  const fdsj = visibilityFilter === 'Youps' ? 'hey' : 'Youps';

  return (
    <React.Fragment>
      <h3
        className="text-gray-900 text-xl"
        onClick={e => hey({ variables: { visibilityFilter: fdsj } })}
      >
        {visibilityFilter || null}
      </h3>
    </React.Fragment>
  );
};

const TwoStuff: React.FunctionComponent<Props> = props => (
  <>
    <Home {...props} />
    <OneStuff {...props} />
  </>
);

export default TwoStuff;
