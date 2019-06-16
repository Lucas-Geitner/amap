import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Amap } from '../../util/Props';

const USER_QUERY = gql`
  {
    allUsers {
      lastName
    }
  }
`;

interface Istate {
  amaps: Amap[];
  loading: boolean;
  shouldInitialize: boolean;
}
const defaultState: Istate = {
  shouldInitialize: true,
  loading: false,
  amaps: [
    {
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
    },
    {
      image_secure_url: 'https://files-cwup4yth4.now.sh/asoggetti-1250591-unsplash.jpg',
      title: 'Amap Ivry',
      description: "Amap d'ivry",
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
    },
    {
      image_secure_url: 'https://files-4o92cnmdx.now.sh/pineapple-supply-co-230315-unsplash.jpg',
      title: 'Amap de Saint Maure',
      description: 'Amap de Saint Maure',
      id: 'dsfsfdfs',
    },
    {
      image_secure_url: 'https://files-aohg4if1g.now.sh/neha-deshmukh-5769-unsplash.jpg',
      title: 'Amap du 11ême ',
      description: 'Amap du 11ême',
      id: 'qfldskjlkfqsdjllkfqsffsdjsdfdsfdlkjflskjl',
    },
  ],
};

export interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const AmapContext = React.createContext<any>(null);

function AmapReducer(state: any, action: any) {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state };
    }

    case 'LOADING': {
      if (state && !state.loading) {
        return { ...state, loading: true, shouldInitialize: false };
      }
      return;
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function AmapProvider(props: any) {
  const [state, dispatch] = React.useReducer(AmapReducer, defaultState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <AmapContext.Provider value={value} {...props} />;
}

function useAmap() {
  const context = React.useContext(AmapContext);
  if (!context) {
    throw new Error(`useAmap must be used within a AmapProvider`);
  }
  const [state, dispatch] = context;
  // if (state && state.shouldInitialize) {
  // 	dispatch({ type: 'LOADING' });
  // }

  const increment = () => dispatch({ type: 'INCREMENT' });
  // const fetch = () => dispatch({ type: 'FETCH' });
  // const fetch = () => useQuery(USER_QUERY);
  const fetch = () => useQuery(USER_QUERY);

  return {
    state,
    dispatch,
    increment,
    fetch,
  };
}

export { AmapProvider, useAmap, USER_QUERY };

// import {AmapProvider, useAmap} from './Amap-context'

// function Amaper() {
// 	const {
// 		state: { Amap },
// 		increment
// 	} = useAmap();
// 	return <button onClick={increment}>{Amap}</button>;
// }

// function AmapDisplay() {
// 	const {
// 		state: { Amap }
// 	} = useAmap();
// 	return <div>The current Amaper Amap is {Amap}</div>;
// }

// function App() {
// 	return (
// 		<div>
// 			<AmapProvider>
// 				<AmapDisplay />
// 				<Amaper />
// 			</AmapProvider>
// 		</div>
// 	);
// }
