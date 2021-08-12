import React, { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div<PlusSignProps>`
    position: relative;
    font-size: ${props => props.size};
    width: ${props => props.size};
    height: ${props => props.size};
    cursor: pointer;
    
    &:before, &:after {
      position: absolute;
      border-radius: 10px;
      background-color: ${props => props.color};
      content: ' ';
      transition: all 0.4s;
    };
    &:before {
      left: 0.4em;
      width: 0.2em;
      height: 1em;
    };
    &:after {
      left: 0;
      top: 0.4em;
      width: 1em;
      height: 0.2em;
    }
  `,
}

interface PlusSignProps extends ComponentPropsWithoutRef<'div'> {
  size: string;
  color?: string;
}

export const PlusSign = forwardRef(function PlusSign(
  { size, color = '#F1F3F4', ...props }: PlusSignProps,
  ref: Ref<HTMLDivElement>
  ) {
    return (
      <S.Wrapper size={size} color={color} ref={ref} {...props}></S.Wrapper>
    )
  }
)
