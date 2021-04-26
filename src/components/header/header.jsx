import React, { useRef } from 'react';
import styles from './header.module.css'

const Header = (props) => {
    const inputRef = useRef(null);
    const onSubmit = (event) =>{
        event.preventDefault();
                
        inputRef.current.value && props.videoSearch(inputRef.current.value);
        inputRef.current.value = "";
    }

    return (
        <header>
            <a href="" className={styles.brand}>
                <img src="/favicon.svg" alt="logo"/>
                <span className={styles.youtube}>Youtube</span>
            </a>    
            <form action="" onSubmit={onSubmit}>
                <input type="text" ref={inputRef} />
                <button>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </header>
    )
};

export default Header;