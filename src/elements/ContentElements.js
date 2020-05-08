import styled from 'styled-components'

export const ContentWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;
  background-color: ${({ theme: colors }) => colors.light2};
  padding: ${({ theme: spacings }) => `${spacings.xLarge} ${spacings.xxLarge}`};
  box-shadow: ${({ theme: shadows }) => shadows.shadow1};
  z-index: 10;

  @media ${({ theme: breakpoints }) => breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${({ theme: breakpoints }) => breakpoints.mobile} {
    padding: ${({ theme: spacings }) => `${spacings.medium} ${spacings.large}`};
  }
`
