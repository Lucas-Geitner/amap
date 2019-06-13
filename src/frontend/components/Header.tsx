import { Menu } from 'react-feather';
import * as React from 'react';
import { Props } from '../../util/Props';

const Header: React.FunctionComponent<Props> = () => {
	return (
		<header className="bg-gray-900 px-4 py-3 flex justify-between align-center">
			<h1 className="text-white text-xl text-indigo-200 ">AMAP</h1>
			<button className="flex">
				<Menu className="text-indigo-200 fill-current w-6 h-6 " />
			</button>
		</header>
	);
};

export default Header;
