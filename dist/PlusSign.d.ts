import React, { ComponentPropsWithoutRef } from 'react';
interface PlusSignProps extends ComponentPropsWithoutRef<'span'> {
    size: string;
    color?: string;
    weight?: number;
}
export declare const PlusSign: React.ForwardRefExoticComponent<PlusSignProps & React.RefAttributes<HTMLSpanElement>>;
export {};
