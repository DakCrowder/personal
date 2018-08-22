import styled from 'styled-components';

export const Spinner = styled.section`
    margin: auto;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid ${props => props.theme.primary}; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 1.5s linear infinite;
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;