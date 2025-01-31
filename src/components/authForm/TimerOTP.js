import { useState } from "react";
import { useTimer } from "react-timer-hook";
function TimerOTP({ expiryTimestamp, sendOtpHandler }) {
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => setIsExpired(true),
  });
  const [isExpired, setIsExpired] = useState(false);

  return (
    <span>
      {isExpired ? (
        <button
          onClick={(e) => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 10);
            restart(time);
            setIsExpired(false);
            sendOtpHandler(e);
          }}
        >
          ارسال مجدد کد تایید
        </button>
      ) : (
        <>
          {seconds} : {minutes}
          <span className="mr-1">تا ارسال مجدد کد تایید</span>
        </>
      )}
    </span>
  );
}

export default TimerOTP;
