import React, { ComponentPropsWithoutRef } from 'react';
interface PlusSignProps extends ComponentPropsWithoutRef<'div'> {
    size: string;
    color?: string;
}
export declare const PlusSign: React.ForwardRefExoticComponent<PlusSignProps & React.RefAttributes<HTMLDivElement>>;
export {};
