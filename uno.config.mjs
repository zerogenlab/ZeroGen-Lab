import {
    defineConfig,
    presetIcons,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'
import presetWind4 from '@unocss/preset-wind4'

export default defineConfig({
    cli: {
        entry: [
            {
                patterns: [
                    "themes/tella/layouts/**/*.{html,js}",
                    "themes/tella/content/**/*.{md,html}",
                    "themes/tella/themes/**/layouts/**/*.{html,js}",
                    "themes/tella/themes/**/assets/**/*.{js,css,html}",
                    "./hugo.toml",
                ],
                outFile: 'themes/tella/assets/css/style.css'
            }
        ]
    },
    presets: [
        presetWind4({
            preflights: {
                reset: true,
            }
        }),
        presetIcons(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})