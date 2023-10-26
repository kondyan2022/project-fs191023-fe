import { useEffect, useState } from 'react';

const CircleCountDown = ({
  timeInSecond,
  size,
  strokeColor,
  strokeBgColor,
  strokeWidth,
  tipWidth,
  children,
}) => {
  const startTime = timeInSecond * 1000;
  const [countDown, setCountDown] = useState(startTime);
  const [isRunning, setIsRunning] = useState(false);

  const radius = size / 2;

  const circumference = size * Math.PI;

  const strokeDashoffset =
    circumference - (countDown / startTime) * circumference;
  const angleRotation = Math.round(-(countDown / startTime) * 360);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setCountDown(countDown => (countDown > 0 ? countDown - 10 : 0));
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (countDown === 0 && isRunning) {
      setIsRunning(false);
      setCountDown(startTime);
    }
  }, [countDown, isRunning, startTime]);

  const countdownSizeStyles = {
    height: size,
    width: size,
  };

  const textStyles = {
    color: strokeColor,
    fontSize: size * 0.3,
  };

  const timeLeft = (countDown / 1000).toFixed();

  return (
    <div>
      <div>
        <button
          style={styles.button}
          onClick={() => {
            setIsRunning(!isRunning);
          }}
        >
          {isRunning ? 'PAUSE' : 'START'}
        </button>
      </div>
      <div
        style={Object.assign(
          {},
          styles.countdownContainer,
          countdownSizeStyles
        )}
      >
        <p style={textStyles}>{`${Math.floor(timeLeft / 60)}:${String(
          timeLeft % 60
        ).padStart(2, '0')} `}</p>
        <svg style={styles.svg}>
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke={strokeBgColor}
            strokeWidth={strokeWidth}
          />
        </svg>
        <svg style={styles.svg}>
          <circle
            strokeDasharray={circumference}
            strokeDashoffset={true ? -strokeDashoffset : 0}
            r={radius}
            cx={radius}
            cy={radius}
            fill="none"
            strokeLinecap="round"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </svg>

        <svg style={styles.svg}>
          {countDown !== startTime && (
            <circle
              strokeDasharray={circumference}
              strokeDashoffset={circumference - 1}
              cx={radius}
              cy={radius}
              r={radius}
              fill="none"
              strokeLinecap="round"
              stroke={strokeColor}
              strokeWidth={tipWidth}
              transform={`rotate( ${angleRotation},${radius},${radius})`}
            />
          )}
        </svg>
      </div>
      {typeof children === 'function' ? (
        <div>{children({ angleRotation })}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default CircleCountDown;

const styles = {
  countdownContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: 'auto',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'rotateY(-180deg) rotateZ(90deg)',
    overflow: 'visible',
  },

  button: {
    fontSize: 16,
    padding: '15px 40px',
    margin: '10px auto 30px',
    display: 'block',
    backgroundColor: '#4d4d4d',
    color: 'lightgray',
    border: 'none',
    cursor: 'pointer',
    outline: 0,
  },
};
