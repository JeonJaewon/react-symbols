import React, { ComponentPropsWithoutRef, forwardRef, Ref } from "react"
import styled from 'styled-components';

interface ChevronProps extends ComponentPropsWithoutRef<'svg'> {
  size: string;
  color?: string;
}

const ChevronWrapper = styled.svg`
  transition: all 0.4s ease;
`;

export const Chevron = forwardRef((
  { size, color = '#F1F3F4', ...props }: ChevronProps,
  ref: Ref<SVGSVGElement>
) => {
  return (
    <ChevronWrapper width={size} height={size} viewBox="0 0 14 24" ref={ref} fill={color} {...props}>
      <g>
        <path d='M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z' />
      </g>
    </ChevronWrapper>
  );
}
);
