import React from 'react'

import NotifyStyled from './style'

const Notify = ({classText, text}) => (
    <NotifyStyled>
        <div className="Notify-info">
            <p className={classText}>
                {text}
            </p>  
        </div>
    </NotifyStyled>        
)


export default Notify