import { StorybookConfig } from 'storybook-react-rsbuild'

const config: StorybookConfig = {
    framework: {
        name: "storybook-react-rsbuild",
        options: {},
    },
    stories: ["../src/**/*.stories.tsx"],
    rsbuildFinal: (config) => {
        // Customize the final Rsbuild config here
        return config
    },
}

export default config