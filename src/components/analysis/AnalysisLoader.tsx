'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ANALYSIS_STEPS = [
  { title: 'Fetching GitHub Profile', target: 12 },
  { title: 'Reading Repositories', target: 28 },
  { title: 'Detecting Primary Technology', target: 48 },
  { title: 'Calculating Developer Rating', target: 72 },
  { title: 'Assigning Card Rarity', target: 90 },
  { title: 'Building Football Card', target: 100 },
] as const;

const TOTAL_DURATION = 2700;

export function AnalysisLoader() {
  const steps = useMemo(() => ANALYSIS_STEPS, []);
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    Array(steps.length).fill(false),
  );
  const [progress, setProgress] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timers: number[] = [];
    const stepDuration = Math.floor(TOTAL_DURATION / steps.length);

    steps.forEach((step, index) => {
      const startTime = index * stepDuration;
      timers.push(
        window.setTimeout(() => {
          setActiveStep(index);
        }, startTime),
      );

      timers.push(
        window.setTimeout(() => {
          setCompletedSteps((prev) =>
            prev.map((value, stepIndex) =>
              stepIndex <= index ? true : value,
            ),
          );
          setProgress(step.target);
        }, startTime + Math.round(stepDuration * 0.75)),
      );
    });

    timers.push(
      window.setTimeout(() => {
        setActiveStep(steps.length - 1);
        setProgress(100);
      }, TOTAL_DURATION),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [steps]);

  useEffect(() => {
    let frame: number | undefined;

    const animateNumber = () => {
      setPercentage((current) => {
        if (current >= progress) {
          return progress;
        }

        const next = Math.min(progress, current + Math.max(1, Math.round((progress - current) / 4)));
        frame = window.setTimeout(animateNumber, 40);
        return next;
      });
    };

    animateNumber();

    return () => {
      if (frame !== undefined) {
        window.clearTimeout(frame);
      }
    };
  }, [progress]);

  const currentStep = steps[activeStep]?.title ?? steps[steps.length - 1].title;

  return (
    <section className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-slate-700/50 bg-slate-950/95 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.55)]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-amber-300">DEVDEX</p>
          <h2 className="text-3xl font-black uppercase tracking-[0.2em] text-slate-100 sm:text-4xl">Analyzing Developer...</h2>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-[inset_0_0_30px_rgba(15,23,42,0.35)]">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>Current step</span>
              <span>{percentage}%</span>
            </div>

            <div className="overflow-hidden rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="h-3 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400"
              />
            </div>

            <div className="text-base font-semibold text-slate-100">{currentStep}</div>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => {
              const completed = completedSteps[index];
              const isActive = index === activeStep;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition ${
                    completed
                      ? 'border-emerald-400/30 bg-emerald-500/5 text-emerald-200'
                      : isActive
                      ? 'border-amber-400/30 bg-amber-400/10 text-amber-100'
                      : 'border-slate-800 bg-slate-950 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-sm">
                      {completed ? '✓' : index + 1}
                    </span>
                    <span className="font-medium">{step.title}</span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {step.target}%
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
