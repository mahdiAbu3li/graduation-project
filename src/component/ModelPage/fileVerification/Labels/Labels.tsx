import React, { useState } from "react";
import styles from "./LabelsStyles.module.css";
import { GiConfirmed } from "react-icons/gi";
const Labels = ({ labels, name }: { labels: string[][]; name: string }) => {
  const [labels2, setLabels2] = useState(labels);
  console.log(labels2, "llllllllll");

  //   if (labels !== labels2) setLabels2(labels);
  const changeValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const arr = [...labels2];
    arr[index][0] = e.target.value;
    setLabels2(arr);
    console.log(e.target.value);
  };

  const ChangeStyle = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.target.style.background = "#fff";
  };
  const ChangeStyle2 = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.target.style.background = "";
  };
  return (
    <div className={styles.labels_container}>
      <div className={styles.header}>
        <p>Labels</p>
        <GiConfirmed className={styles.icon} />
      </div>
      <div className={styles.labels}>
        <table>
          {labels2?.map((item, index) => (
            <>
              {/* <div className={styles.label}>
            <pre>{item[2]}</pre>
            <pre>{item[0]}</pre>
          </div> */}
              <tr>
                <td className={styles.td}>
                  <div
                    style={{
                      height: "40px",
                      width: "4px",
                      backgroundColor: "red",
                      marginRight: "20px",
                    }}
                  ></div>
                  {item[2]}
                </td>
                <td>
                  <textarea
                    value={item[0]}
                    onChange={(e) => changeValue(e, index)}
                    // style={{ overflowWrap: "break-word" }}
                    className={styles.textarea}
                    onFocus={(e) => ChangeStyle(e)}
                    onBlur={(e) => ChangeStyle2(e)}
                    // cols={30}
                    // rows={22}
                  />
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>

      <div className={styles.bottom}>
        <button>verify</button>
      </div>
    </div>
  );
};

export default Labels;
//, borderLeft: `${item[1]} 5px solid`
