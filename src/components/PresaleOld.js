import React from 'react';
import styled from 'styled-components';

const StyledPresale = styled.div `
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    iframe {
        width: 40%;
        height: 500px;
        margin: 6% 0;
        border: 5px solid black;
        background-color: azure;
        border-radius: 20px;
        filter: drop-shadow(12px 12px 12px black);
    }
    @media (max-width: 800px) {
        iframe {
            width: 60%;
        }
    }
    @media (max-width: 420px) {
        iframe {
            width: 90%;
            filter: none;
            border: 2px solid black;
        }
    }
`

export default function Presale() {
        
    return (
        <StyledPresale>
            <iframe src="/presale.html" title="description"></iframe>
        </StyledPresale>
    );
}
