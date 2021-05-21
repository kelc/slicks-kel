import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldSet {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
    &.order,
    &.menu {
      grid-column: span 1;
    }
  }
  legend {
    display: block;
  }
  .mapleSyrup {
    display: none;
  }
  @media (max-width: 900px) {
    fieldSet.menu,
    fieldSet.order {
      grid-column: span 2;
    }
  }
`;

export default OrderStyles;
