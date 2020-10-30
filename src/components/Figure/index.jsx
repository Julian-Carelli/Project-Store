import React from 'react'


const Figure = ({classBackground, classFigure, classImg, img1, img2, img3, img4, img5}) => (
    <div className={classBackground}>
        <figure className={classFigure}>
            <img className={classImg} src={img1} alt="Ropa 1"/>
            <img className={classImg} src={img2} alt="Ropa 2"/>
            <img className={classImg} src={img3} alt="Ropa 3"/>
            <img className={classImg} src={img4} alt="Ropa 4"/>
            <img className={classImg} src={img5} alt="Ropa 5"/>
        </figure>
    </div>
)

export default Figure