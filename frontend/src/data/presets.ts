import type { Preset } from '../types'

export const PRESETS: Preset[] = [
  // 重力模式 - 小规模
  {
    id: 'solar-system-small',
    name: '迷你星系',
    mode: 'gravity',
    particleScale: 'small',
    description: '小型行星系统，观察引力轨道',
    icon: '🌍',
    params: { mode: 'gravity', gravity: 5, attractorStrength: 8, damping: 0.01, particleCount: 50 }
  },
  {
    id: 'meteor-shower',
    name: '流星雨',
    mode: 'gravity',
    particleScale: 'small',
    description: '流星划过，受引力影响',
    icon: '☄️',
    params: { mode: 'gravity', gravity: 8, attractorStrength: 3, damping: 0.005, particleCount: 80 }
  },
  // 重力模式 - 中规模
  {
    id: 'solar-system',
    name: '太阳系',
    mode: 'gravity',
    particleScale: 'medium',
    description: '经典行星系统，引力相互作用',
    icon: '🌞',
    params: { mode: 'gravity', gravity: 5, attractorStrength: 8, damping: 0.01, particleCount: 200 }
  },
  {
    id: 'star-cluster',
    name: '星团',
    mode: 'gravity',
    particleScale: 'medium',
    description: '多体引力系统，混沌运动',
    icon: '✨',
    params: { mode: 'gravity', gravity: 2, attractorStrength: 6, damping: 0.02, particleCount: 300 }
  },
  // 重力模式 - 大规模
  {
    id: 'galaxy',
    name: '星系模拟',
    mode: 'gravity',
    particleScale: 'large',
    description: '壮观的星系旋臂结构',
    icon: '🌌',
    params: { mode: 'gravity', gravity: 3, attractorStrength: 10, damping: 0.015, particleCount: 600 }
  },
  {
    id: 'cosmic-dust',
    name: '宇宙尘埃',
    mode: 'gravity',
    particleScale: 'large',
    description: '大量粒子在引力中漂浮',
    icon: '💫',
    params: { mode: 'gravity', gravity: 1.5, attractorStrength: 4, damping: 0.03, particleCount: 800 }
  },

  // 碰撞模式 - 小规模
  {
    id: 'billiards-small',
    name: '迷你台球',
    mode: 'collision',
    particleScale: 'small',
    description: '少量球的弹性碰撞',
    icon: '🎱',
    params: { mode: 'collision', gravity: 0, damping: 0.005, bounce: 0.95, particleCount: 30 }
  },
  {
    id: 'newtons-cradle',
    name: '牛顿摆',
    mode: 'collision',
    particleScale: 'small',
    description: '动量守恒演示',
    icon: '⚖️',
    params: { mode: 'collision', gravity: 2, damping: 0.001, bounce: 1, particleCount: 40 }
  },
  // 碰撞模式 - 中规模
  {
    id: 'billiards',
    name: '台球碰撞',
    mode: 'collision',
    particleScale: 'medium',
    description: '经典弹性碰撞实验',
    icon: '💥',
    params: { mode: 'collision', gravity: 0, damping: 0.005, bounce: 0.95, particleCount: 100 }
  },
  {
    id: 'gas-particles',
    name: '气体分子',
    mode: 'collision',
    particleScale: 'medium',
    description: '布朗运动模拟',
    icon: '💨',
    params: { mode: 'collision', gravity: 0.5, damping: 0.01, bounce: 0.9, particleCount: 200 }
  },
  // 碰撞模式 - 大规模
  {
    id: 'particle-collider',
    name: '粒子对撞',
    mode: 'collision',
    particleScale: 'large',
    description: '大量粒子高速碰撞',
    icon: '⚛️',
    params: { mode: 'collision', gravity: 0, damping: 0.002, bounce: 0.98, particleCount: 500 }
  },
  {
    id: 'sandstorm',
    name: '沙尘暴',
    mode: 'collision',
    particleScale: 'large',
    description: '密集颗粒碰撞运动',
    icon: '🏜️',
    params: { mode: 'collision', gravity: 4, damping: 0.02, bounce: 0.6, particleCount: 700 }
  },

  // 流体模式 - 小规模
  {
    id: 'water-droplets',
    name: '水滴',
    mode: 'fluid',
    particleScale: 'small',
    description: '少量水滴流动效果',
    icon: '💧',
    params: { mode: 'fluid', gravity: 5, damping: 0.08, particleCount: 60 }
  },
  {
    id: 'smoke-wisp',
    name: '一缕轻烟',
    mode: 'fluid',
    particleScale: 'small',
    description: '轻柔的烟雾缭绕',
    icon: '🌫️',
    params: { mode: 'fluid', gravity: -1, damping: 0.06, particleCount: 80 }
  },
  // 流体模式 - 中规模
  {
    id: 'lava-lamp',
    name: '熔岩灯',
    mode: 'fluid',
    particleScale: 'medium',
    description: '经典熔岩灯效果',
    icon: '🔥',
    params: { mode: 'fluid', gravity: 3, damping: 0.05, particleCount: 150 }
  },
  {
    id: 'underwater',
    name: '水下气泡',
    mode: 'fluid',
    particleScale: 'medium',
    description: '水中气泡上升',
    icon: '🫧',
    params: { mode: 'fluid', gravity: -4, damping: 0.04, particleCount: 250 }
  },
  // 流体模式 - 大规模
  {
    id: 'clouds',
    name: '云海',
    mode: 'fluid',
    particleScale: 'large',
    description: '壮观的云层流动',
    icon: '☁️',
    params: { mode: 'fluid', gravity: -0.5, damping: 0.07, particleCount: 500 }
  },
  {
    id: 'magma',
    name: '岩浆流动',
    mode: 'fluid',
    particleScale: 'large',
    description: '炽热岩浆翻腾',
    icon: '🌋',
    params: { mode: 'fluid', gravity: 6, damping: 0.03, particleCount: 650 }
  },

  // 漩涡模式 - 小规模
  {
    id: 'mini-whirlpool',
    name: '迷你漩涡',
    mode: 'vortex',
    particleScale: 'small',
    description: '小型水涡效果',
    icon: '🌀',
    params: { mode: 'vortex', gravity: 1, attractorStrength: 8, damping: 0.03, particleCount: 50 }
  },
  {
    id: 'drain-swirl',
    name: '排水漩涡',
    mode: 'vortex',
    particleScale: 'small',
    description: '水流从排水口旋转流出',
    icon: '🚿',
    params: { mode: 'vortex', gravity: 3, attractorStrength: 10, damping: 0.02, particleCount: 80 }
  },
  // 漩涡模式 - 中规模
  {
    id: 'tornado',
    name: '龙卷风',
    mode: 'vortex',
    particleScale: 'medium',
    description: '强劲的龙卷风暴',
    icon: '🌪️',
    params: { mode: 'vortex', gravity: 2, attractorStrength: 12, damping: 0.02, particleCount: 300 }
  },
  {
    id: 'galaxy-spiral',
    name: '螺旋星系',
    mode: 'vortex',
    particleScale: 'medium',
    description: '美丽的螺旋星系旋臂',
    icon: '🌠',
    params: { mode: 'vortex', gravity: 1, attractorStrength: 7, damping: 0.01, particleCount: 400 }
  },
  // 漩涡模式 - 大规模
  {
    id: 'black-hole',
    name: '黑洞吞噬',
    mode: 'vortex',
    particleScale: 'large',
    description: '粒子被黑洞吸引',
    icon: '🕳️',
    params: { mode: 'vortex', gravity: 0, attractorStrength: 18, damping: 0.005, particleCount: 600 }
  },
  {
    id: 'super-tornado',
    name: '超级龙卷风',
    mode: 'vortex',
    particleScale: 'large',
    description: '巨型龙卷风席卷一切',
    icon: '🌊',
    params: { mode: 'vortex', gravity: 1.5, attractorStrength: 15, damping: 0.015, particleCount: 800 }
  },
]

export const MODE_LABELS: Record<string, { label: string; icon: string; color: string }> = {
  gravity: { label: '重力吸引', icon: '🌍', color: 'blue' },
  collision: { label: '弹性碰撞', icon: '💥', color: 'orange' },
  fluid: { label: '流体模拟', icon: '💧', color: 'cyan' },
  vortex: { label: '漩涡旋转', icon: '🌀', color: 'purple' },
}

export const SCALE_LABELS: Record<string, { label: string; icon: string; count: string }> = {
  small: { label: '小型', icon: '🔹', count: '~50-100' },
  medium: { label: '中型', icon: '🔶', count: '~150-400' },
  large: { label: '大型', icon: '🔴', count: '~500-800' },
}
