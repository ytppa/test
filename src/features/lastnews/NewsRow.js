import React, { /* useState */ } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Lastnews.module.css';

export function NewsRow(props) {
    console.log(props.item);
    return (
        <div key={props.key} className={props.className}>News item {props.item}</div>
    )
}