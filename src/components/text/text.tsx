import React from 'react';
import Banner from '../home/banner';
import Form from '../form/form';
import styles from './style.module.css';

const Text = () => {
  return (
    <React.Fragment>
          <div className={styles.paragraph}>
            <p className={styles.homepage}>
              Low maintenance living at an affordable price, in a vibrant.<span className={styles.break}></span>
              location right in the heart of Dandenong.<span className={styles.break}></span><span className={styles.break}></span>
              There is a range of contemporary designed 1, 2, and 3.<span className={styles.break}></span>
              bedroom apartments to suit all lifestyles.
            </p>
          </div>
    </React.Fragment>
  );
};

export default Text;
