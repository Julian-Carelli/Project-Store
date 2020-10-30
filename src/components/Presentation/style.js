    import styled from 'styled-components';

    import slider from '../Figure/slider'

    const PresentationStyled = styled.div `

        display:flex;
        justify-content:center;
        flex-direction:column;
        text-align:center;
        height:100vh;
        background-color:#eeeeee;
        
        .Presentation-row {
            align-items:center;
            
        }
        .Presentation-row__col {
            padding:0px 20px;
        }

        .Presentation-row__background {
            overflow:hidden;
            max-width:600px;
            max-height:400px;
            width:100%;
            height:100%;
            border-radius:20px;
        }

        .Presentation-row__figure {
            display:flex;
            position:relative;
            width:100%;
            animation:20s ${slider} infinite;
        }

        .Presentation-row__img {
            float:left;
            width:100%;
            height:100%;
            border-radius:20px;
            filter: grayscale(1);
            flex-shrink: 0;
        }

        .Presentation-row__name {
            text-align:start;
        }
        .Presentation-row__title {
            color:#373a40;
            font-size:${props => props.theme.fontSizeTitle.max};
            font-weight:${props => props.theme.fontWeight.black};

        }
        .Presentation-row__info {
            text-align:start;
        }
        .Presentation-row__text {
            color:#373a40;
            font-size:${props => props.theme.fontSizeText.medium};
            font-weight:${props => props.theme.fontWeight.regular};
        }
        .Presentation-row__link {
            text-align:start;

        }
        .Presentation-row__button {
            color:#ffffff;
            font-size:${props => props.theme.fontSizeText.min};
            font-weight:${props => props.theme.fontWeight.regular};
        }
        
        

    `

    export default PresentationStyled