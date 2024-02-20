
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #C3073F 
		"--color-primary-50": "246 218 226", // #f6dae2
		"--color-primary-100": "243 205 217", // #f3cdd9
		"--color-primary-200": "240 193 207", // #f0c1cf
		"--color-primary-300": "231 156 178", // #e79cb2
		"--color-primary-400": "213 81 121", // #d55179
		"--color-primary-500": "195 7 63", // #C3073F
		"--color-primary-600": "176 6 57", // #b00639
		"--color-primary-700": "146 5 47", // #92052f
		"--color-primary-800": "117 4 38", // #750426
		"--color-primary-900": "96 3 31", // #60031f
		// secondary | #4E4E50 
		"--color-secondary-50": "228 228 229", // #e4e4e5
		"--color-secondary-100": "220 220 220", // #dcdcdc
		"--color-secondary-200": "211 211 211", // #d3d3d3
		"--color-secondary-300": "184 184 185", // #b8b8b9
		"--color-secondary-400": "131 131 133", // #838385
		"--color-secondary-500": "78 78 80", // #4E4E50
		"--color-secondary-600": "70 70 72", // #464648
		"--color-secondary-700": "59 59 60", // #3b3b3c
		"--color-secondary-800": "47 47 48", // #2f2f30
		"--color-secondary-900": "38 38 39", // #262627
		// tertiary | #950740 
		"--color-tertiary-50": "239 218 226", // #efdae2
		"--color-tertiary-100": "234 205 217", // #eacdd9
		"--color-tertiary-200": "229 193 207", // #e5c1cf
		"--color-tertiary-300": "213 156 179", // #d59cb3
		"--color-tertiary-400": "181 81 121", // #b55179
		"--color-tertiary-500": "149 7 64", // #950740
		"--color-tertiary-600": "134 6 58", // #86063a
		"--color-tertiary-700": "112 5 48", // #700530
		"--color-tertiary-800": "89 4 38", // #590426
		"--color-tertiary-900": "73 3 31", // #49031f
		// success | #6F2232 
		"--color-success-50": "233 222 224", // #e9dee0
		"--color-success-100": "226 211 214", // #e2d3d6
		"--color-success-200": "219 200 204", // #dbc8cc
		"--color-success-300": "197 167 173", // #c5a7ad
		"--color-success-400": "154 100 112", // #9a6470
		"--color-success-500": "111 34 50", // #6F2232
		"--color-success-600": "100 31 45", // #641f2d
		"--color-success-700": "83 26 38", // #531a26
		"--color-success-800": "67 20 30", // #43141e
		"--color-success-900": "54 17 25", // #361119
		// warning | #8ad722 
		"--color-warning-50": "237 249 222", // #edf9de
		"--color-warning-100": "232 247 211", // #e8f7d3
		"--color-warning-200": "226 245 200", // #e2f5c8
		"--color-warning-300": "208 239 167", // #d0efa7
		"--color-warning-400": "173 227 100", // #ade364
		"--color-warning-500": "138 215 34", // #8ad722
		"--color-warning-600": "124 194 31", // #7cc21f
		"--color-warning-700": "104 161 26", // #68a11a
		"--color-warning-800": "83 129 20", // #538114
		"--color-warning-900": "68 105 17", // #446911
		// error | #3fda62 
		"--color-error-50": "226 249 231", // #e2f9e7
		"--color-error-100": "217 248 224", // #d9f8e0
		"--color-error-200": "207 246 216", // #cff6d8
		"--color-error-300": "178 240 192", // #b2f0c0
		"--color-error-400": "121 229 145", // #79e591
		"--color-error-500": "63 218 98", // #3fda62
		"--color-error-600": "57 196 88", // #39c458
		"--color-error-700": "47 164 74", // #2fa44a
		"--color-error-800": "38 131 59", // #26833b
		"--color-error-900": "31 107 48", // #1f6b30
		// surface | #1A1A1D 
		"--color-surface-50": "221 221 221", // #dddddd
		"--color-surface-100": "209 209 210", // #d1d1d2
		"--color-surface-200": "198 198 199", // #c6c6c7
		"--color-surface-300": "163 163 165", // #a3a3a5
		"--color-surface-400": "95 95 97", // #5f5f61
		"--color-surface-500": "26 26 29", // #1A1A1D
		"--color-surface-600": "23 23 26", // #17171a
		"--color-surface-700": "20 20 22", // #141416
		"--color-surface-800": "16 16 17", // #101011
		"--color-surface-900": "13 13 14", // #0d0d0e
		
	}
}