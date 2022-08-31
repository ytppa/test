import React, { /* useState */ } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    // update,
    selectItems,
    selectStatus,
    updateAsync,
  } from './lastnewsSlice';
import { NewsRow } from './NewsRow';

import styles from './Lastnews.module.css';

export function Lastnews() {
    const items = useSelector(selectItems);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={[styles.items, styles[`status--${status}`]].join(' ')}>
                {/* News items list */}
                {items.map(function(item) {
                    return <NewsRow 
                        key={`lastnews_item-${item}`} 
                        item={item} 
                        className={styles.lastnews_item} 
                    />; 
                })}

            </div>
            <button onClick={() => dispatch(updateAsync())}>Load</button>
        </div>
    )
} 
