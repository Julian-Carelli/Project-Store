import React from 'react'

const OrganizeButton = ({classCol, classContain, classButton, text}) => (
    <div className={classCol}>
        <div className={classContain}>
            <button className={classButton}>{text}</button>
        </div>
    </div>
)

export default OrganizeButton