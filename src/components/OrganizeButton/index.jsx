import React from 'react'

const OrganizeButton = ({classCol, classContain, handleFilterButton, classButton, text}) => (
    <div className={classCol}>
        <div className={classContain}>
            <button onClick={handleFilterButton} className={classButton}>{text}</button>
        </div>
    </div>
)

export default OrganizeButton