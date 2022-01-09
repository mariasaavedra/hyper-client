import { useEffect } from "react";
import styles from "../styles/components/Drawer.module.scss";

interface DrawerProps {
  children: string | JSX.Element;
  isOpen: boolean;
  handleClose: Function;
}

export default function Drawer(props: DrawerProps) {
  useEffect(() => {
    // Anything in here is fired on component mount.
    // document.documentElement.classList.add('drawer-open');
    // document.body.classList.add('drawer-open');
    // return () => {
    //     document.documentElement.classList.remove('drawer-open');
    //     document.body.classList.remove('drawer-open');
    // }
  });

  const handleClose = () => {
    if (props.handleClose) {
      props.handleClose();
    }
  };
  return (
    <>
      <div className={styles.DrawrerComponent}>
        <div className={styles.dialog}>
          <div className="flex justify-end"><i
            onClick={handleClose}
            className={styles.close + " absolute p-4 text-2xl fa fa-times"}
          ></i>
          </div>
          <div className="p-10">
            {props.children}
          </div>
        </div>
        <div className={styles.overlay + " shadow-2xl"}></div>
      </div>
    </>
  );
}
