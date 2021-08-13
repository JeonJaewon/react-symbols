import React, { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
import styled, { css } from 'styled-components';

const S = {
  Wrapper: styled.span<PlusSignProps>`
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
      transition: all 0.4s;
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
      const result = calculateStyle(props.weight);
      return css`
        &::before {
          left: ${result.offset}em;
          width: ${result.thickness}em;
        };
        &::after {
          top: ${result.offset}em;
          height: ${result.thickness}em;
        };
      `
    }};
  `,
}

const calculateStyle = (weight: number = 1) => {
  const thickness = 0.2 * weight;
  const offset = 0.5 - (thickness / 2);
  return { thickness, offset };
}

interface PlusSignProps extends ComponentPropsWithoutRef<'span'> {
  size: string;
  color?: string;
  weight?: number;
}

export const PlusSign = forwardRef(function PlusSign(
  { size, color = '#F1F3F4', weight = 1, ...props }: PlusSignProps,
  ref: Ref<HTMLSpanElement>
  ) {
    return (
      <S.Wrapper
        size={size}
        color={color}
        weight={weight}
        ref={ref}
        {...props}
      />
    )
  }
)
