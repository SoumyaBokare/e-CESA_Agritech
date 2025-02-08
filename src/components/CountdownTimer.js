import React, { useEffect, useRef, useCallback, useState } from 'react';
import './countdown.css';
import { TweenMax, Quart } from 'gsap';

const CountdownTimer = () => {
  const setTotalSeconds = useState(0)[1];
  const countdownInterval = useRef(null);

  const daysRef = useRef([]);
  const hoursRef = useRef([]);
  const minutesRef = useRef([]);
  const secondsRef = useRef([]);

  const animateFigure = useCallback(($el, value) => {
    const $top = $el.querySelector('.top');
    const $bottom = $el.querySelector('.bottom');
    const $backTop = $el.querySelector('.top-back');
    const $backBottom = $el.querySelector('.bottom-back');

    // Before we begin, change the back value
    $backTop.querySelector('span').innerHTML = value;
    $backBottom.querySelector('span').innerHTML = value;

    // Then animate
    TweenMax.to($top, 0.8, {
      rotationX: '-180deg',
      transformPerspective: 300,
      ease: Quart.easeOut,
      onComplete: () => {
        $top.innerHTML = value;
        $bottom.innerHTML = value;
        TweenMax.set($top, { rotationX: 0 });
      },
    });

    TweenMax.to($backTop, 0.8, {
      rotationX: 0,
      transformPerspective: 300,
      ease: Quart.easeOut,
      clearProps: 'all',
    });
  }, []);

  const checkHour = useCallback((value, $el1, $el2) => {
    const val1 = value.toString().charAt(0);
    const val2 = value.toString().charAt(1) || '0';
    const fig1Value = $el1.querySelector('.top').innerHTML;
    const fig2Value = $el2.querySelector('.top').innerHTML;

    if (value >= 10) {
      if (fig1Value !== val1) animateFigure($el1, val1);
      if (fig2Value !== val2) animateFigure($el2, val2);
    } else {
      if (fig1Value !== '0') animateFigure($el1, '0');
      if (fig2Value !== val1) animateFigure($el2, val1);
    }
  }, [animateFigure]);

  const startCountdown = useCallback(() => {
    countdownInterval.current = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => {
        if (prevTotalSeconds > 0) {
          const newTotalSeconds = prevTotalSeconds - 1;
          const newDays = Math.floor(newTotalSeconds / (24 * 3600));
          const newHours = Math.floor((newTotalSeconds % (24 * 3600)) / 3600);
          const newMinutes = Math.floor((newTotalSeconds % 3600) / 60);
          const newSeconds = newTotalSeconds % 60;

          // Update DOM values
          checkHour(newDays, daysRef.current[0], daysRef.current[1]);
          checkHour(newHours, hoursRef.current[0], hoursRef.current[1]);
          checkHour(newMinutes, minutesRef.current[0], minutesRef.current[1]);
          checkHour(newSeconds, secondsRef.current[0], secondsRef.current[1]);

          return newTotalSeconds;
        } else {
          clearInterval(countdownInterval.current);
          return 0;
        }
      });
    }, 1000);
  }, [checkHour, setTotalSeconds]);

  useEffect(() => {
    // Initialize countdown values
    const initialDays = parseInt(daysRef.current[0].parentElement.getAttribute('data-init-value'), 10);
    const initialHours = parseInt(hoursRef.current[0].parentElement.getAttribute('data-init-value'), 10);
    const initialMinutes = parseInt(minutesRef.current[0].parentElement.getAttribute('data-init-value'), 10);
    const initialSeconds = parseInt(secondsRef.current[0].parentElement.getAttribute('data-init-value'), 10);

    setTotalSeconds(initialDays * 24 * 60 * 60 + initialHours * 60 * 60 + initialMinutes * 60 + initialSeconds);

    // Start countdown
    startCountdown();

    return () => clearInterval(countdownInterval.current);
  }, [startCountdown, setTotalSeconds]);

  return (
    <div className="countdown">
      <div className="bloc-time days" data-init-value="1">
        <div className="figure" ref={(el) => (daysRef.current[0] = el)}>
          <span className="top">0</span>
          <span className="top-back">
            <span>0</span>
          </span>
          <span className="bottom">0</span>
          <span className="bottom-back">
            <span>0</span>
          </span>
        </div>
        <div className="figure" ref={(el) => (daysRef.current[1] = el)}>
          <span className="top">0</span>
          <span className="top-back">
            <span>0</span>
          </span>
          <span className="bottom">0</span>
          <span className="bottom-back">
            <span>0</span>
          </span>
        </div>
      </div>
      <div className="bloc-time hours" data-init-value="0">
        <div className="figure" ref={(el) => (hoursRef.current[0] = el)}>
          <span className="top">0</span>
          <span className="top-back">
            <span>0</span>
          </span>
          <span className="bottom">0</span>
          <span className="bottom-back">
            <span>0</span>
          </span>
        </div>
        <div className="figure" ref={(el) => (hoursRef.current[1] = el)}>
          <span className="top">0</span>
          <span className="top-back">
            <span>0</span>
          </span>
          <span className="bottom">0</span>
          <span className="bottom-back">
            <span>0</span>
          </span>
        </div>
      </div>
      <div className="bloc-time min" data-init-value="0">
        <div className="figure" ref={(el) => (minutesRef.current[0] = el)}>
          <span className="top">0</span>
          <span className="top-back">
            <span>0</span>
          </span>
          <span className="bottom">0</span>
          <span className="bottom-back">
            <span>0</span>
          </span>
        </div>
        <div className="figure" ref={(el) => (minutesRef.current[1] = el)}>
          <span className="top">0</span>
          <span className="top-back">
            <span>0</span>
          </span>
          <span className="bottom">0</span>
          <span className="bottom-back">
            <span>0</span>
          </span>
        </div>
      </div>
      <div className="bloc-time sec" data-init-value="0">
        <div className="figure" ref={(el) => (secondsRef.current[0] = el)}>
          <span className="top">0</span>
          <span className="top-back">
            <span>0</span>
          </span>
          <span className="bottom">0</span>
          <span className="bottom-back">
            <span>0</span>
          </span>
        </div>
        <div className="figure" ref={(el) => (secondsRef.current[1] = el)}>
          <span className="top">0</span>
          <span className="top-back">
            <span>0</span>
          </span>
          <span className="bottom">0</span>
          <span className="bottom-back">
            <span>0</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;