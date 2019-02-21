import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const FadeIn = styled.div`
  animation: ${fadeIn} 1s ease;
`
