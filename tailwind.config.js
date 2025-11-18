/** @type {import('tailwindcss').Config} */
export default {
	content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
	theme: {
		extend: {
			colors: {
				bg1: "#FFFFFF",
				bg2: "#F8FAFC",
				bgCard: "#F1F5F9",
		
				textMain: "#1E293B",
				textBody: "#334155",
				textMuted: "#64748B",
		
				accent: "#0E7490",
				accentHover: "#155E75",
		
				borderSoft: "#E2E8F0",
		
				footerBg: "#0F172A",
				footerText: "#CBD5E1",
		
				// Dark mode colors
				darkBg1: "#0B0F19",
				darkBg2: "#111827",
				darkCard: "#1E293B",
		
				darkTextMain: "#F8FAFC",
				darkTextBody: "#E2E8F0",
				darkTextMuted: "#94A3B8",
		
				darkBorder: "#1E293B",
				darkAccent: "#22D3EE",
				darkAccentHover: "#0891B2"
			}
		}
	},
	darkMode: 'class',
	mode: 'jit',
	plugins: []
};
