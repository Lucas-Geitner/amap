export type Props = {
	query: number | null | undefined;
};

/**
 * Une amap :)
 */
export type Amap = {
	description: string;
	title: string;
	image_secure_url: string;
	id: string;
	paysans?: Paysan[];
};

// interface Inourritures = {}

export type Paysan = {
	email?: string;
	name?: string;
	nourritures?: Array<string | undefined>;
};
