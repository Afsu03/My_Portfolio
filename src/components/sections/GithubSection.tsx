import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, GitBranch, GitCommit, Star, GitPullRequest, Sparkles, Terminal, ExternalLink, Code2 } from 'lucide-react';
import { personalInfo, projectsList } from '../../data/resumeData';
import { Card3D } from '../ui/Card3D';
import { sounds } from '../../utils/sound';

export const GithubSection: React.FC = () => {
  const [selectedSnippet, setSelectedSnippet] = useState<string>('aegis');

  // Simulated GitHub commit heatmap (16 weeks x 7 days)
  const heatmapData = React.useMemo(() => {
    const weeks = 20;
    const days = 7;
    const grid: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const col: number[] = [];
      for (let d = 0; d < days; d++) {
        // Random activity level 0-4 with higher density on recent weeks
        const bias = w > 12 ? 0.65 : 0.45;
        const count = Math.random() < bias ? Math.floor(Math.random() * 4) + 1 : 0;
        col.push(count);
      }
      grid.push(col);
    }
    return grid;
  }, []);

  const getColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-[#FFE4EE]';
      case 2: return 'bg-[#FFB3D1]';
      case 3: return 'bg-[#F472B6]';
      case 4: return 'bg-[#EC4899]';
      default: return 'bg-[#FAF9FC] border border-[#F472B6]/10';
    }
  };

  const codeSnippets: Record<string, { title: string; lang: string; code: string }> = {
    aegis: {
      title: "AegisAI • Multi-Agent Log Pipeline",
      lang: "typescript",
      code: `// Multi-agent SOC log ingestion & Gemini LLM triage
export async function triageSecurityIncident(rawLogs: SecurityLog[]): Promise<IncidentReport> {
  const normalizedBatch = await ruleEngine.ingestMultiFormat(rawLogs, {
    throughputLimit: 35800,
    zodSchema: LogPayloadSchema
  });

  const [threatAnalysis, riskScore] = await Promise.all([
    geminiAgent.analyzeThreatVectors(normalizedBatch),
    riskScoringAgent.calculateCVSSv3(normalizedBatch)
  ]);

  return prisma.incident.create({
    data: {
      severity: riskScore.level,
      summary: threatAnalysis.summary,
      evidence: threatAnalysis.structuredIoCs
    }
  });
}`
    },
    ml: {
      title: "AlzheimerRisk • Model Classification",
      lang: "python",
      code: `# Multi-parametric classification pipeline
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.preprocessing import StandardScaler

class ClinicalRiskAssessment:
    def __init__(self):
        self.scaler = StandardScaler()
        self.model = GradientBoostingClassifier(n_estimators=200, learning_rate=0.05)

    def predict_risk_tier(self, biometric_vector: np.ndarray) -> dict:
        scaled_features = self.scaler.transform(biometric_vector)
        risk_probability = self.model.predict_proba(scaled_features)[:, 1]
        
        return {
            "risk_score": float(risk_probability[0]),
            "alert_dispatch": risk_probability[0] > 0.75,
            "classification": "Elevated" if risk_probability[0] > 0.5 else "Baseline"
        }`
    }
  };

  return (
    <section id="github" className="relative py-24 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFE4EE] text-[#F472B6] text-xs font-mono font-semibold mb-3 border border-[#F472B6]/25">
            <Github className="w-3 h-3" />
            <span>06. OPEN SOURCE & CODE ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#181424] tracking-tight mb-4">
            GitHub Activity & <span className="bg-gradient-to-r from-[#F472B6] to-[#EC4899] bg-clip-text text-transparent">Architecture Repos</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B6580] max-w-xl font-sans">
            Continuous development, architectural patterns, and verified engineering pipelines hosted under @Afsu03.
          </p>
        </div>

        {/* GitHub Contribution Heatmap Card */}
        <div className="mb-12">
          <Card3D
            intensity={6}
            className="p-6 sm:p-8 glass-panel-elevated bg-white/90 border-[#F472B6]/30 shadow-glass"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FFE4EE] flex items-center justify-center text-[#F472B6]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#181424]">
                    Afsu03 (Afsana Kathoon)
                  </h3>
                  <div className="text-xs font-mono text-[#6B6580]">
                    Verified GitHub Contributions & Pipelines
                  </div>
                </div>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white hover:bg-[#FFE4EE] text-[#181424] hover:text-[#F472B6] border border-[#F472B6]/20 text-xs font-semibold shadow-sm transition-all group"
              >
                <span>Visit github.com/Afsu03</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F472B6]" />
              </a>
            </div>

            {/* Simulated Contribution Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-flex flex-col gap-1.5 min-w-[620px]">
                <div className="flex gap-1.5">
                  {heatmapData.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          title={`Contributions: ${level}`}
                          className={`w-3.5 h-3.5 rounded-sm ${getColor(level)} transition-all hover:scale-125 cursor-pointer shadow-xs`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 text-[11px] font-mono text-[#6B6580]">
              <span>Learn more about continuous integration & deployment pipelines</span>
              <div className="flex items-center space-x-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-xs bg-[#FAF9FC] border border-[#F472B6]/15" />
                <div className="w-2.5 h-2.5 rounded-xs bg-[#FFE4EE]" />
                <div className="w-2.5 h-2.5 rounded-xs bg-[#FFB3D1]" />
                <div className="w-2.5 h-2.5 rounded-xs bg-[#F472B6]" />
                <div className="w-2.5 h-2.5 rounded-xs bg-[#EC4899]" />
                <span>More</span>
              </div>
            </div>
          </Card3D>
        </div>

        {/* Code Snippets & Architecture Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Repository Links Column */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B6580] font-semibold mb-2">
              Verified Repositories
            </h4>
            {projectsList.map((proj) => (
              <a
                key={proj.id}
                href={proj.githubUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="block p-4 rounded-2xl glass-panel bg-white/75 hover:bg-white border-[#F472B6]/20 hover:border-[#F472B6]/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display font-bold text-sm text-[#181424] group-hover:text-[#F472B6] transition-colors">
                    {proj.title}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6B6580] group-hover:text-[#F472B6]" />
                </div>
                <p className="text-xs text-[#6B6580] line-clamp-1 mb-2">
                  {proj.subtitle}
                </p>
                <div className="flex items-center space-x-3 text-[10px] font-mono text-[#6B6580]">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#F472B6]" />
                    {proj.technologies[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3 h-3" /> main
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Interactive Code Architecture Inspector */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel-elevated bg-[#0F0C1B] text-white border border-[#F472B6]/30 overflow-hidden shadow-2xl">
              {/* Tab Selector */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="text-xs font-mono text-white/50 ml-2">
                    {codeSnippets[selectedSnippet].title}
                  </span>
                </div>

                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setSelectedSnippet('aegis');
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition-all ${
                      selectedSnippet === 'aegis'
                        ? 'bg-[#F472B6] text-white'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    TypeScript
                  </button>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setSelectedSnippet('ml');
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition-all ${
                      selectedSnippet === 'ml'
                        ? 'bg-[#F472B6] text-white'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Python ML
                  </button>
                </div>
              </div>

              {/* Code Display */}
              <div className="p-6 font-mono text-xs overflow-x-auto leading-relaxed text-pink-100/90">
                <pre className="selection:bg-[#F472B6] selection:text-white">
                  <code>{codeSnippets[selectedSnippet].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
