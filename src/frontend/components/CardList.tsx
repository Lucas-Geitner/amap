import * as React from 'react';
import { Props, Amap } from '../../util/Props';
import Cards from './Card';
// Need to create a function to list all the data from it : https://files-qvmwphz4h.now.sh/bence-balla-schottner-1316901-unsplash.jpg
import { AmapProvider, useAmap } from '../intelligence/amap-context';

const Card: React.FunctionComponent<Props> = () => {
  const { state, fetch } = useAmap();
  const i = fetch();
  // console.log(i);
  return state.amaps.map((AmapItem: Amap) => <Cards {...AmapItem} key={AmapItem.id} />);
};

const CardList: React.FunctionComponent<Props> = props => (
  <AmapProvider>
    <section>
      <Card {...props} />
    </section>
  </AmapProvider>
);

export default CardList;
