import styled from 'styled-components/macro';

export const Item = styled.div`
  flex: 0 0 23vw;
  transition: all 300ms ease 100ms;
  margin: 0 2px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  
  img {
    height: 100%;
    width: 100%;
    vertical-align: top;
  }

  @media(min-width: 1000px) {
    &:hover:first-of-type{
      margin-left: 95px;
    }
  }
  
  @media(max-width: 1000px){
    flex: 0 0 35%;
  }
  
  @media(max-width: 500px){
    border-radius: 6px;
    flex: 0 0 30%;
    margin: 0 3px;
  
    img {
      height: 180px;
      width: 110px;
      object-fit: cover;
    }
  
  }

  @media(min-width: 1300px){
    flex: 0 0 15vw;
  }
`

export const SliderDiv = styled.div`
  display: flex;
  position: relative;
  border: ${({isActive}) => isActive ? '3px orange solid' : null};

  @media(min-width: 500px){
    ${Item}:hover .show-details-button {
      opacity: 1;
    }

    ${Item}:hover {
      transform: ${({isActive}) => isActive ? null : 'scale(1.5)'} !important;
    }
    
    &:hover ${Item} {
      transform: ${({open}) => open ? null : 'translateX(-25%)'};
      
    }

    ${Item}:hover ~ ${Item} {
      transform: ${({open}) => open ? null : 'translateX(25%)'};
    }
  }
`

export const Container = styled.div`

  display: flex;
  padding: 0 1vh;
  transition: transform 300ms ease 100ms;
  z-index: 3;
  width: 100%;
  
  @media(max-width: 600px){
    padding: 0 2%;
    overflow-x: scroll;
  }

`

export const Wrapper = styled.div`
  padding: 40px 0;
  position: relative;
  overflow-x: hidden;
`

export const SlideButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 55px;
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  outline: 0;
  padding: 0;
  margin: 40px 0;
  z-index: 4;
  border-radius: ${({type}) => type === 'next' ? '10px 0 0 10px' : '0 10px 10px 0'};
  left: ${({type}) => (type === 'prev' ? 0 : null)};
  right: ${({type}) => (type === 'next' ? 0 : null )};

  span {
    width: 25px;
    color: #fff;
    display: block;
    margin: 0 auto;
    transform: ${({type}) => (type === 'prev' ? 'rotateZ(90deg)': 'rotateZ(-90deg)')}
  }

  @media(max-width: 500px){
    display: none;
  }
`

export const Mark = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  z-index: 4;
  border-radius: 10px;

  &:before,
  &:after {
    position: absolute;
    width: 0;
    height: 0;
    content: '';
    top: 100%;
    left: 50%;
    margin-left: -13px;
    border-style: solid;
    border-width: 7px 13px 0 13px;
  }

  &:before {
    border-color: rgba(0, 0, 0, 0.15) transparent transparent transparent;
    margin-top: 5px;
  }

  &:after {
    margin-top: 4px;
    border-color: #fff transparent transparent transparent;
  }
`

export const Content = styled.div`

`