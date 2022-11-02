import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
    }

    a{
        text-decoration: none;
    }

    button{
        display: inline-flex;
        align-items: center;
        justify-content: center;

        background: transparent;
        border: transparent;
        
        cursor: pointer;
    }

    :root {
        --color-blue-1: #191970;
        --color-blue-2: #0000CD;
        --color-blue-3: #4169e1;
        --color-blue-4: #e8eaf5;
        --color-blue-5: #483D8B;
        --color-black: #000000;
        --color-grey-1: #868e96;
        --color-grey-2: #B5B5B5;
        --color-grey-3: #F3F3F3;
        --color-white: #FFFFFF;

        --font-title-0: 700 2rem/1.2'Roboto', sans-serif;
        --font-title-1: 700 1.5rem/1.2'Roboto', sans-serif;
        --font-title-2: 700 1.25rem/1.2'Roboto', sans-serif;
        --font-title-3: 700 1rem/1.2'Roboto', sans-serif;
        --font-text-0: 400 1.2rem/1.2'Roboto', sans-serif;
        --font-text-1: 400 0.875rem/1.2'Roboto', sans-serif;
        --font-text-2: 700 0.875rem/1.2'Roboto', sans-serif;
        --font-text-3: 400 0.75rem/1.2'Roboto', sans-serif;
        --radius-1: 5px;
        --radius-2: 10px;
        --radius-3: 50%;
    }
`;
