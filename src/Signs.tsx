import React, { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
import styled, { css } from 'styled-components';

interface SignProps extends ComponentPropsWithoutRef<'span'> {
  size: string;
  color?: string;
  weight?: number;
}

export const PlusSign = forwardRef((
  { size, color = '#F1F3F4', weight = 1, ...props }: SignProps,
  ref: Ref<HTMLSpanElement>
  ) => {
    return (
      <PlusSignWrapper
        size={size}
        color={color}
        weight={weight}
        ref={ref}
        {...props}
      />
    );
  }
);

interface PlusSignInnerStyles {
  thickness: number;
  offset: number;
}

const calculateInnerStyles = (weight: number = 1): PlusSignInnerStyles => {
  const thickness = 0.2 * weight;
  const offset = 0.5 - (thickness / 2);
  return { thickness, offset };
}

const PlusSignWrapper = styled.span<SignProps>`
  display: inline-block;
  position: relative;
  font-size: ${props => props.size};
  width: ${props => props.size};
  height: ${props => props.size};
  cursor: pointer;
  
  &::before, &::after {
    position: absolute;
    border-radius: 10px;
    background-color: ${props => props.color};
    content: ' ';
    transition: all 0.4s ease;
  };
  &::before { 
    top: 0;
    height: 1em;
  };
  &::after {
    left: 0;
    width: 1em;
  };
  
  ${props => {
    const innerStyles = calculateInnerStyles(props.weight);
    return css`
      &::before {
        left: ${innerStyles.offset}em;
        width: ${innerStyles.thickness}em;
      };
      &::after {
        top: ${innerStyles.offset}em;
        height: ${innerStyles.thickness}em;
      };
    `
  }};
`;

export const CrossSign = forwardRef((
  { size, color = '#F1F3F4', weight = 1, ...props }: SignProps,
  ref: Ref<HTMLSpanElement>
  ) => {
    return (
      <CrossSignWrapper
        size={size}
        color={color}
        weight={weight}
        ref={ref}
        {...props}
      />
    );
  }
);

const CrossSignWrapper = styled.span<SignProps>`
  display: inline-block;
  position: relative;
  font-size: ${props => props.size};
  width: ${props => props.size};
  height: ${props => props.size};
  cursor: pointer;
  &::before, &::after {
    position: absolute;
    content: ' ';
    top: 50%;
    left: 50%;
    width: 1em;
    transition: all 0.4s ease;
    transform-origin: top left;
    height: ${props => 0.2 * (props.weight ?? 1)}em;
    background-color: ${props => props.color};
  };
  &::before { 
    transform: rotate(45deg) translate(-50%, -50%);
  };
  &::after {
    transform: rotate(-45deg) translate(-50%, -50%);
  };
`;
