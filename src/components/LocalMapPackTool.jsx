import React, { useEffect, useState } from 'react';
import Areas from '../data/areas';

// Local Map Pack checklist app with business-specific context (business name + keyword)

function calculateProgress(completedMap) {
  let totalSteps = 0;
  let completedSteps = 0;

  Areas.forEach((area) => {
    area.tactics.forEach((tactic) => {
      tactic.steps.forEach((_, stepIndex) => {
        const key = `${tactic.id}-${stepIndex}`;
        totalSteps += 1;
        if (completedMap[key]) completedSteps += 1;
      });
    });
  });

  const percent =
    totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100);
  return { totalSteps, completedSteps, percent };
}

export default function LocalMapPackChecklistApp() {
  const [completed, setCompleted] = useState({});
  const [businessName, setBusinessName] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('mapPackChecklistProgress');
      const storedName = window.localStorage.getItem(
        'mapPackChecklistBusinessName'
      );
      const storedKeyword = window.localStorage.getItem(
        'mapPackChecklistKeyword'
      );
      if (stored) {
        setCompleted(JSON.parse(stored));
      }
      if (storedName) {
        setBusinessName(storedName);
      }
      if (storedKeyword) {
        setKeyword(storedKeyword);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const toggleStep = (tacticId, stepIndex) => {
    setCompleted((prev) => {
      const key = `${tacticId}-${stepIndex}`;
      const next = { ...prev, [key]: !prev[key] };
      try {
        window.localStorage.setItem(
          'mapPackChecklistProgress',
          JSON.stringify(next)
        );
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

  const handleBusinessNameChange = (event) => {
    const value = event.target.value;
    setBusinessName(value);
    try {
      window.localStorage.setItem('mapPackChecklistBusinessName', value);
    } catch {
      // ignore storage errors
    }
  };

  const handleKeywordChange = (event) => {
    const value = event.target.value;
    setKeyword(value);
    try {
      window.localStorage.setItem('mapPackChecklistKeyword', value);
    } catch {
      // ignore storage errors
    }
  };

  const formatText = (text) => {
    if (!text) return '';
    let result = text;
    if (businessName) {
      result = result.replaceAll('{businessName}', businessName);
    }
    if (keyword) {
      result = result.replaceAll('{keyword}', keyword);
    }
    return result;
  };

  const { totalSteps, completedSteps, percent } = calculateProgress(completed);

  const areaStats = Areas.map((area) => {
    let areaTotal = 0;
    let areaCompleted = 0;
    area.tactics.forEach((tactic) => {
      tactic.steps.forEach((_, stepIndex) => {
        const key = `${tactic.id}-${stepIndex}`;
        areaTotal += 1;
        if (completed[key]) areaCompleted += 1;
      });
    });
    const areaPercent =
      areaTotal === 0 ? 0 : Math.round((areaCompleted / areaTotal) * 100);
    return {
      id: area.id,
      name: area.name,
      areaTotal,
      areaCompleted,
      areaPercent,
    };
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Fixed progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-50/60 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6 lg:px-10">
          <div className="space-y-2">
            <div>
              <h2 className="text-sm font-medium text-emerald-700">
                Overall progress
              </h2>
              <p className="text-xs text-emerald-700">
                {completedSteps} of {totalSteps} steps completed ({percent}%).
              </p>
            </div>
            <div className="w-full max-w-2xl">
              <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-28 pb-6 sm:px-6 lg:px-10 space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Local Map Pack Ranking Tool
          </h1>
          <p className="text-sm text-slate-700 max-w-2xl">
            These are the steps required to rank a local business in the Map
            Pack.
          </p>
        </header>

        {/* Business setup */}
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-2 max-w-2xl">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Business name
              </label>
              <input
                type="text"
                value={businessName}
                onChange={handleBusinessNameChange}
                placeholder="e.g. Waco Junk Pros"
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Primary keyword
              </label>
              <input
                type="text"
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="e.g. junk removal in Waco"
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </section>

        {/* Area index */}
        <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
          <h2 className="text-lg font-medium mb-3">Areas</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm">
            {areaStats.map((area) => (
              <a
                key={area.id}
                href={`#${area.id}`}
                className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 hover:border-emerald-400/70 hover:bg-white transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-slate-900 group-hover:text-emerald-700">
                    {area.name}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {area.areaCompleted}/{area.areaTotal} ({area.areaPercent}%)
                  </span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 transition-all"
                    style={{ width: `${area.areaPercent}%` }}
                  />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Detailed sections */}
        <main className="space-y-20">
          {Areas.map((area) => (
            <section
              key={area.id}
              id={area.id}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm scroll-mt-24"
            >
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span>{area.name}</span>
                </h2>
                {area.description && (
                  <p className="text-xs sm:text-sm text-slate-700 max-w-3xl">
                    {formatText(area.description)}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                {area.tactics.map((tactic) => (
                  <article
                    key={tactic.id}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm sm:text-base font-medium flex items-center gap-4">
                            <span>{tactic.title}</span>
                            <span className="text-[10px] px-3 py-0.5 rounded-full border border-emerald-400/60 text-emerald-700 bg-emerald-50">
                              {tactic.priority}
                            </span>
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 mt-3">
                          {formatText(tactic.reason)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 space-y-1">
                      <p className="text-[11px] font-medium text-slate-800 uppercase tracking-wide">
                        Steps
                      </p>
                      <ul className="space-y-1.5 text-xs sm:text-sm">
                        {tactic.steps.map((step, index) => {
                          const key = `${tactic.id}-${index}`;
                          const checked = !!completed[key];
                          return (
                            <li key={key} className="flex items-start gap-2">
                              <button
                                type="button"
                                onClick={() => toggleStep(tactic.id, index)}
                                className={`mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded border text-[10px] transition-colors ${
                                  checked
                                    ? 'border-emerald-500 bg-emerald-500 text-white'
                                    : 'border-slate-400 bg-white text-transparent'
                                }`}
                                aria-pressed={checked}
                              >
                                ✓
                              </button>
                              <span className="flex-1 text-slate-900">
                                {formatText(step)}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {tactic.example && (
                      <div className="mt-2 border-t border-slate-200 pt-2">
                        <p className="text-[11px] font-medium text-slate-800 uppercase tracking-wide mb-1">
                          Example
                        </p>
                        <p className="text-xs sm:text-sm text-slate-700">
                          {formatText(tactic.example)}
                        </p>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
