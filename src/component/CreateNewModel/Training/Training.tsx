import React from "react";
import LinearProgressWithLabel from "./LinearProgressWithLabel/LinearProgressWithLabel";
import styles from "./TrainingStyles.module.css";
const Training = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100
          ? 100
          : prevProgress + Math.floor(Math.random() * 10)
      );
      console.log(Math.floor(Math.random() * 10));
    }, 10000);
    if (progress === 100) {
      clearInterval(timer);
      //   alert(2);
    }
    // return () => {
    //   alert(1);
    //   clearInterval(timer);
    // };
  }, [progress]);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.root}>
          <LinearProgressWithLabel value={progress} />
        </div>
        <p>please wait until we train your model ...</p>
        <p>maybe take some minutes ...</p>
      </div>
    </div>
  );
};

export default Training;
