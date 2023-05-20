"use client";
import { useState } from 'react';
import styles from './FullScreenButton.module.scss';
import minimize from '@assets/icons/minimize.svg'

const FullScreenButton = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleToggleFullscreen = () => {
        if (!isFullscreen) {
            enterFullscreen();
        } else {
            exitFullscreen();
        }
    };

    const enterFullscreen = () => {
        const docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }
        setIsFullscreen(true);
    };

    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        setIsFullscreen(false);
    };

    return (
        <button className={styles.fullscreenButton} onClick={handleToggleFullscreen}>
            {isFullscreen ?

                <i title="custicon">
                    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                </i>

                :

                <i title="custicon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentcolor" viewBox="0 0 1024 1024"><path d="M640 64v64h210.8L576 402.6 621.2 448 896 173.2V384h64V64H640z m-192 557.3L402.9 576 128 850.8V640H64v320h320v-64H173.2L448 621.3z"></path></svg>
                </i>

            }
        </button>
    );
};

export default FullScreenButton;
