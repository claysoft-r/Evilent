import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    globals: {
        'ts-jest': {
          useESM: true, // Permitir ES6 Modules
        },
    },
    //testTimeout: 30000,
};

export default config;