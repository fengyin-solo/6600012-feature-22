import { useState, useMemo } from 'react'
import { useSimStore } from '../store/simulation'
import { PRESETS, MODE_LABELS, SCALE_LABELS } from '../data/presets'
import type { SimMode, ParticleScale, Preset } from '../types'

const MODE_OPTIONS: { value: SimMode; label: string; icon: string }[] = [
  { value: 'gravity', label: '重力吸引', icon: '🌍' },
  { value: 'collision', label: '弹性碰撞', icon: '💥' },
  { value: 'fluid', label: '流体模拟', icon: '💧' },
  { value: 'vortex', label: '漩涡旋转', icon: '🌀' },
]

const SCALE_OPTIONS: { value: ParticleScale; label: string; icon: string }[] = [
  { value: 'small', label: '小型', icon: '🔹' },
  { value: 'medium', label: '中型', icon: '🔶' },
  { value: 'large', label: '大型', icon: '🔴' },
]

function getModeColorClass(mode: string, isActive: boolean) {
  const colors: Record<string, { active: string; inactive: string }> = {
    gravity: { active: 'bg-blue-600 text-white', inactive: 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-blue-400' },
    collision: { active: 'bg-orange-600 text-white', inactive: 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-orange-400' },
    fluid: { active: 'bg-cyan-600 text-white', inactive: 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-cyan-400' },
    vortex: { active: 'bg-purple-600 text-white', inactive: 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-purple-400' },
  }
  return isActive ? colors[mode]?.active : colors[mode]?.inactive
}

function PresetCard({ preset, onClick }: { preset: Preset; onClick: () => void }) {
  const modeInfo = MODE_LABELS[preset.mode]
  const scaleInfo = SCALE_LABELS[preset.particleScale]

  return (
    <button
      onClick={onClick}
      className="w-full text-left p-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 transition-all group"
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl">{preset.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="font-medium text-white text-sm group-hover:text-blue-400 transition">
            {preset.name}
          </div>
          <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">
            {preset.description}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-300">
              {modeInfo?.icon} {modeInfo?.label}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-300">
              {scaleInfo?.icon} {scaleInfo?.label}
            </span>
            <span className="text-xs text-gray-500 ml-auto">
              {preset.params.particleCount}粒子
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

export default function ControlPanel() {
  const store = useSimStore()
  const [modeFilter, setModeFilter] = useState<SimMode | 'all'>('all')
  const [scaleFilter, setScaleFilter] = useState<ParticleScale | 'all'>('all')
  const [showPresets, setShowPresets] = useState(true)

  const filteredPresets = useMemo(() => {
    return PRESETS.filter(p => {
      if (modeFilter !== 'all' && p.mode !== modeFilter) return false
      if (scaleFilter !== 'all' && p.particleScale !== scaleFilter) return false
      return true
    })
  }, [modeFilter, scaleFilter])

  const handleApplyPreset = (preset: Preset) => {
    store.applyPreset(preset.params)
  }

  const handleSetMode = (mode: SimMode) => {
    store.setMode(mode)
    setModeFilter(mode)
  }

  return (
    <div className="w-80 bg-gray-900 border-l border-gray-700 overflow-y-auto flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold text-white">粒子物理模拟器</h2>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Mode */}
        <div>
          <label className="text-xs text-gray-400 block mb-2">模拟模式</label>
          <div className="grid grid-cols-2 gap-2">
            {MODE_OPTIONS.map(m => (
              <button
                key={m.value}
                onClick={() => handleSetMode(m.value)}
                className={`px-3 py-2 rounded text-sm font-medium transition ${
                  store.mode === m.value
                    ? getModeColorClass(m.value, true)
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {m.icon} {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Presets Section */}
        <div>
          <button
            onClick={() => setShowPresets(!showPresets)}
            className="w-full flex items-center justify-between text-xs text-gray-400 mb-2 hover:text-gray-300"
          >
            <span className="font-medium">预设场景 ({filteredPresets.length})</span>
            <span className="text-lg">{showPresets ? '−' : '+'}</span>
          </button>

          {showPresets && (
            <>
              {/* Filters */}
              <div className="space-y-2 mb-3">
                <div className="flex gap-1 flex-wrap">
                  <button
                    onClick={() => setModeFilter('all')}
                    className={`px-2.5 py-1 text-xs rounded font-medium transition ${
                      modeFilter === 'all'
                        ? 'bg-gray-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    全部模式
                  </button>
                  {MODE_OPTIONS.map(m => (
                    <button
                      key={m.value}
                      onClick={() => setModeFilter(m.value)}
                      className={`px-2.5 py-1 text-xs rounded font-medium transition ${
                        modeFilter === m.value
                          ? getModeColorClass(m.value, true)
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {m.icon} {m.label}
                    </button>
                  ))}
                </div>
                <div className="flex gap-1 flex-wrap">
                  <button
                    onClick={() => setScaleFilter('all')}
                    className={`px-2.5 py-1 text-xs rounded font-medium transition ${
                      scaleFilter === 'all'
                        ? 'bg-gray-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    全部规模
                  </button>
                  {SCALE_OPTIONS.map(s => (
                    <button
                      key={s.value}
                      onClick={() => setScaleFilter(s.value)}
                      className={`px-2.5 py-1 text-xs rounded font-medium transition ${
                        scaleFilter === s.value
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {s.icon} {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preset List */}
              <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                {filteredPresets.length > 0 ? (
                  filteredPresets.map(p => (
                    <PresetCard key={p.id} preset={p} onClick={() => handleApplyPreset(p)} />
                  ))
                ) : (
                  <div className="text-center py-6 text-gray-500 text-sm">
                    没有匹配的预设场景
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Parameters */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-sm font-medium text-gray-300">参数调节</h3>

        {/* Particle Count */}
        <div>
          <label className="text-xs text-gray-400">粒子数量: {store.particleCount}</label>
          <input type="range" min={10} max={800} step={10}
            value={store.particleCount}
            onChange={e => store.setParticleCount(Number(e.target.value))}
            className="w-full accent-blue-500" />
        </div>

        {/* Gravity */}
        <div>
          <label className="text-xs text-gray-400">重力: {store.gravity.toFixed(1)}</label>
          <input type="range" min={-20} max={20} step={0.5}
            value={store.gravity}
            onChange={e => store.setParam('gravity', Number(e.target.value))}
            className="w-full accent-green-500" />
        </div>

        {/* Damping */}
        <div>
          <label className="text-xs text-gray-400">阻尼: {store.damping.toFixed(3)}</label>
          <input type="range" min={0} max={0.5} step={0.005}
            value={store.damping}
            onChange={e => store.setParam('damping', Number(e.target.value))}
            className="w-full accent-yellow-500" />
        </div>

        {/* Bounce */}
        <div>
          <label className="text-xs text-gray-400">弹性: {store.bounce.toFixed(2)}</label>
          <input type="range" min={0} max={1} step={0.05}
            value={store.bounce}
            onChange={e => store.setParam('bounce', Number(e.target.value))}
            className="w-full accent-orange-500" />
        </div>

        {/* Attractor */}
        <div>
          <label className="text-xs text-gray-400">吸引力: {store.attractorStrength.toFixed(1)}</label>
          <input type="range" min={0} max={20} step={0.5}
            value={store.attractorStrength}
            onChange={e => store.setParam('attractorStrength', Number(e.target.value))}
            className="w-full accent-pink-500" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Controls */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => store.setParam('paused', !store.paused)}
            className={`flex-1 py-2 rounded font-medium text-sm ${store.paused ? 'bg-green-600 hover:bg-green-500' : 'bg-red-600 hover:bg-red-500'} text-white transition`}
          >
            {store.paused ? '▶ 继续' : '⏸ 暂停'}
          </button>
          <button
            onClick={() => store.setParam('slowMotion', !store.slowMotion)}
            className={`flex-1 py-2 rounded font-medium text-sm transition ${store.slowMotion ? 'bg-yellow-500 text-black hover:bg-yellow-400' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            🐌 慢动作
          </button>
        </div>
        <button
          onClick={() => store.reset()}
          className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition"
        >
          🔄 重置粒子
        </button>
      </div>
    </div>
  )
}
