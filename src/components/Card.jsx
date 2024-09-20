import React from 'react';

function Card({props}){
    const {name, universe, alterego, occupation, friends, superpowers,
    url, info} = props;
    return (
        <div>
        <h2>{name}</h2>
        <p>Вселенная: {universe}</p>
        <p>Альтер эго: {alterego}</p>
        <p>Род деятельности: {occupation}</p>
        <p>Друзья: {friends}</p>
        <p>Суперсилы: {superpowers}</p>
        <img src={url} alt="геро(иня)" />
        </div>
    )
}

export default Card;