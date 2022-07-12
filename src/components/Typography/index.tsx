import React from 'react';

export enum VariantHeaders {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6',
}

export type TypeHeaders = keyof typeof VariantHeaders;

export type TypeVariantTag = {
	[key in keyof typeof VariantHeaders]: string;
};

export type TypeTypographyProps = {
	children: React.ReactNode;
	variant: TypeHeaders;
};

function setVariantTag(variant: TypeHeaders) {
	const variantTag: TypeVariantTag = {
		h1: VariantHeaders.h1,
		h2: VariantHeaders.h2,
		h3: VariantHeaders.h3,
		h4: VariantHeaders.h4,
		h5: VariantHeaders.h5,
		h6: VariantHeaders.h6,
	};

	return variantTag[variant];
}

export function Typography(props: TypeTypographyProps) {
	const { children, variant } = props;

	const Component: any = setVariantTag(variant);

	return <Component>{children}</Component>;
}
