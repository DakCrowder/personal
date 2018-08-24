import styled from 'styled-components';

//TODO this only works with one-word css styles, make it work with background-color etc.
function getStyles(props, size) {
  let styles = '';
  let keys = Object.keys(props);
  keys.forEach(function(key) {
    if (key.includes(size)) {
      let style = key.substring(size.length);
      style = style.toLowerCase()
      styles += `${style}: ${props[key]};`
    }
  });
  return styles
}

export const Container = styled.div`
  position: ${props => props.position ? props.position : 'relative'};
  height: ${props => props.height ? props.height : '100%'};
  width: ${props => props.width ? props.width : '100%'};
  padding: ${props => props.padding ? props.padding : ''};
  margin: ${props => props.margin ? props.margin : ''};
  top: ${props => props.top ? props.top : ''};
  left: ${props => props.left ? props.left : ''};
  right: ${props => props.right ? props.right : ''};
  bottom: ${props => props.bottom ? props.bottom : ''};
  
  background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};
  
  box-shadow: 0 8px 18px 0 rgba(0,0,0,0.2);
  
  @media (max-width: 1024px) {
    ${props => getStyles(props, 'medium')}
  }
  
  @media (max-width: 620px) {
    ${props => getStyles(props, 'small')}
  }
`;