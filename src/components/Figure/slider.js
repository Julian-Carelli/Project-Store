import {keyframes} from 'styled-components'

const slider = keyframes`
        0% {
            transform:translateX(0);
        }
        20% {
            transform: translateX(0);
        }
        25%{
            transform: translateX(-100%);
        }
        45%{
            transform: translateX(-100%);
        }
        50%{
            transform: translateX(-200%);
        }

        70%{
            transform: translateX(-200%);
        }
        75%{
            transform: translateX(-300%);
        }
        90%{
            transform: translateX(-300%);
        }
        95% {
            transform: translateX(-400%);
        }

`;

export default slider