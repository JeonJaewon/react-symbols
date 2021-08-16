import React, { ComponentPropsWithoutRef } from 'react';
interface SignProps extends ComponentPropsWithoutRef<'span'> {
    size: string;
    color?: string;
    weight?: number;
}
export declare const PlusSign: React.ForwardRefExoticComponent<SignProps & React.RefAttributes<HTMLSpanElement>>;
export declare const CrossSign: React.ForwardRefExoticComponent<SignProps & React.RefAttributes<HTMLSpanElement>>;
export {};
