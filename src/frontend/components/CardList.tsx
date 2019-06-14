import * as React from 'react';
import { Props, Amap } from '../../util/Props';
import Card from './Card';
// Need to create a function to list all the data from it : https://files-qvmwphz4h.now.sh/bence-balla-schottner-1316901-unsplash.jpg

const cardsLists: [Amap] | any = [
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
];

const CardList: React.FunctionComponent<Props> = () => (
  <div>
    {cardsLists.map((i: Amap) => (
      <Card {...i} key={i.id} />
    ))}
  </div>
);

export default CardList;
