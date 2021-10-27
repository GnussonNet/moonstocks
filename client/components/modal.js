import styles from '@styles/modules/components/Modal.module.scss';
import { useCallback, useEffect, useRef } from 'react';
import { X, Plus } from 'react-feather';

export const Modal = ({ showModal, setShowModal, modalData, setModalData }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) setShowModal(false);
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) setShowModal(false);
    },
    [showModal, setShowModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return showModal && modalData.type === 'newPortfolio' ? (
    <div ref={modalRef} onClick={closeModal} className={styles.modal_container}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <h3 className={styles.title}>New Portfolio</h3>
        </div>
        <div className={styles.body}>
          <div className={styles.main}>
            <p>Name:</p>
            <input onChange={(e) => setModalData({input_name: 'test'})}  type="text" />
          </div>
          <div className={styles.buttons}>
            <button
              onClick={() => {
                setShowModal((prev) => !prev);
              }}
              className={`${styles.button} ${styles.secondary}`}
            >
              <X className={styles.icon} />
              <h4 className={styles.title}>Close</h4>
            </button>
            <button onClick={modalData.button_function} className={`${styles.button} ${styles.primary}`}>
              <Plus className={styles.icon} />
              <h4 className={styles.title}>New Portfolio</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : showModal && modalData.type === 'newStock' ? (
    <div ref={modalRef} onClick={closeModal} className={styles.modal_container}>
      <div className={styles.modal}>
        <div className={styles.top}>
          <h3 className={styles.title}>New Stock</h3>
        </div>
        <div className={styles.body}>
          <div className={styles.main}>
            <p>Name:</p>
            <input type="text" />
          </div>
          <div className={styles.buttons}>
            <button
              onClick={() => {
                setShowModal((prev) => !prev);
              }}
              className={`${styles.button} ${styles.secondary}`}
            >
              <X className={styles.icon} />
              <h4 className={styles.title}>Close</h4>
            </button>
            <button onClick={modalData.button_function} className={`${styles.button} ${styles.primary}`}>
              <Plus className={styles.icon} />
              <h4 className={styles.title}>New Stock</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  // return showModal && modalData ? (
  // <div ref={modalRef} onClick={closeModal} className={styles.modal_container}>
  //   <div className={styles.modal}>
  //     <div className={styles.top}>
  //       <h3 className={styles.title}>{modalData.title}</h3>
  //     </div>
  //     <div className={styles.body}>
  //       <div className={styles.main}>
  //         <p>Name:</p>
  //         <input type="text" />
  //       </div>
  //       <div className={styles.buttons}>
  //         <button
  //           onClick={() => {
  //             setShowModal((prev) => !prev);
  //           }}
  //           className={`${styles.button} ${styles.secondary}`}
  //         >
  //           <X className={styles.icon} />
  //           <h4 className={styles.title}>Close</h4>
  //         </button>
  //         <button onClick={modalData.button_function} className={`${styles.button} ${styles.primary}`}>
  //           <Plus className={styles.icon} />
  //           <h4 className={styles.title}>{modalData.button_text}</h4>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // ) : null;
};
