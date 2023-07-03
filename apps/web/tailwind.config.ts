import type { Config } from 'tailwindcss';
import { themePreset } from './theme.preset';

const Config = {
  presets: [themePreset],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
} satisfies Config;

export default Config;
