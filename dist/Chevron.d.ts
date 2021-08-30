import React, { ComponentPropsWithoutRef } from "react";
interface ChevronProps extends ComponentPropsWithoutRef<'svg'> {
    size: string;
}
export declare const Chevron: React.ForwardRefExoticComponent<ChevronProps & React.RefAttributes<SVGSVGElement>>;
export {};
