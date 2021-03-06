import styled from 'styled-components'
import COLORS from '../color'
/**
 * Container
 * maxWidth, width, margin, padding, centered
 */

export default styled.div`
  box-sizing: border-box;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ centered }) => centered && `margin: 0 auto;`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ width }) => `width: ${width || '100%'};`}
  ${({ color }) => 'color:${COLORS[color] || COLORS.black};'}
`
