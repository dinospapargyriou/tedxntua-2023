import React from 'react';

import Header from './Header';
import Footer from './Footer';

import { LocaleContextProvider } from '../contexts/LanguageContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import * as styles from "../styles/main.module.css";

const Page = ({ currentPage, children }) => {
    return (
        <main className={styles.globalContainer}>
            <LocaleContextProvider>
                <Header currentPage={currentPage} />
                <div>
                    { children }
                </div>
                
                <Footer />
            </LocaleContextProvider>
        </main>
    )
}

export default Page;