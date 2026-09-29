import { useState, useEffect } from 'react';
import { IconPlay, IconPause, IconRotateCcw } from './LineIcons';

interface InteractiveTimerProps {
  initialMinutes?: number;
}

export default function InteractiveTimer({ initialMinutes = 15 }: InteractiveTimerProps) {
  const totalSeconds = initialMinutes * 60;
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsLeft]);

  const toggle = () => setIsActive(!isActive);

  const reset = () => {
    setIsActive(false);
    setSecondsLeft(totalSeconds);
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const progressPercent = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

  return (
    <div
      style={{
        background: 'rgba(15, 17, 32, 0.85)',
        border: '1px solid rgba(0, 212, 255, 0.25)',
        borderRadius: 'var(--radius)',
        padding: '24px 28px',
        boxShadow: isActive ? '0 0 35px rgba(0, 212, 255, 0.25)' : 'var(--shadow)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '18px',
        minWidth: '280px',
        maxWidth: '360px',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: isActive ? 'var(--primary)' : 'var(--fg-muted)',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: isActive ? 'var(--primary)' : 'var(--fg-faint)',
            boxShadow: isActive ? '0 0 10px var(--primary)' : 'none',
            display: 'inline-block',
          }}
        />
        {isActive ? 'DISKUSI BERLANGSUNG' : secondsLeft === 0 ? 'WAKTU HABIS!' : 'TIMER COUNTDOWN'}
      </div>

      {/* Big Digits Display */}
      <div
        style={{
          fontSize: 'clamp(44px, 5vw, 64px)',
          fontWeight: 800,
          fontFamily: 'var(--font-mono)',
          color: secondsLeft < 60 && isActive ? '#ff4d4f' : 'var(--fg)',
          letterSpacing: '0.04em',
          textShadow: isActive ? '0 0 24px rgba(0, 212, 255, 0.4)' : 'none',
        }}
      >
        {formattedTime}
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: '100%',
          height: '6px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '999px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            background: 'var(--accent)',
            transition: 'width 1s linear',
          }}
        />
      </div>

      {/* Control Buttons */}
      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
        <button
          onClick={toggle}
          type="button"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 18px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            background: isActive ? 'rgba(245, 166, 35, 0.2)' : 'var(--primary)',
            color: isActive ? '#f5a623' : '#0a101d',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {isActive ? (
            <>
              <IconPause width={18} height={18} /> Jeda
            </>
          ) : (
            <>
              <IconPlay width={18} height={18} /> Mulai ({initialMinutes} Menit)
            </>
          )}
        </button>

        <button
          onClick={reset}
          type="button"
          title="Reset Timer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 14px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--hair)',
            background: 'rgba(255, 255, 255, 0.04)',
            color: 'var(--fg-muted)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <IconRotateCcw width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
