import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=30310797&amp;x-expires=1714208400&amp;x-signature=n43oP7t7y1h%2BR3CYyJhtmEDxpJ4%3D"
        alt=""
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvanna</span>
      </div>
    </div>
  );
}

export default AccountItem;
