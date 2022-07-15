import React from 'react';
import classNames from 'classnames';
import s from './Typography.module.scss';

export enum VariantTypography {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6',
	paragraph = 'p',
	caption = 'span',
	strong = 'strong',
	small = 'small',
}

export type TypeTypography = keyof typeof VariantTypography;

export type TypeVariantTag = {
	[key in keyof typeof VariantTypography]: string;
};

export type TypeTypographyProps = {
	children: React.ReactNode;
	variant: TypeTypography;
};

function setVariantTag(variant: TypeTypography): string {
	const variantTag: TypeVariantTag = {
		h1: VariantTypography.h1,
		h2: VariantTypography.h2,
		h3: VariantTypography.h3,
		h4: VariantTypography.h4,
		h5: VariantTypography.h5,
		h6: VariantTypography.h6,
		paragraph: VariantTypography.paragraph,
		caption: VariantTypography.caption,
		strong: VariantTypography.strong,
		small: VariantTypography.small,
	};

	return variantTag[variant];
}

export function Typography(
	props: TypeTypographyProps
): JSX.Element {
	const { children, variant } = props;
	const Component: any = setVariantTag(variant);

	return (
		<Component className={s?.[variant]}>
			{children}
		</Component>
	);
}
