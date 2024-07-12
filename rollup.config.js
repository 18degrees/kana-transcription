import typescript from '@rollup/plugin-typescript'

export default [{
    input: './src/index.ts',
    output: {
        file: './lib/esm/index.mjs',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        typescript({tsconfig: './tsconfig-rollup.json'})
    ]}, {
    input: './src/index.ts',
    output: 
    {
        file: './lib/cjs/index.cjs',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        typescript({tsconfig: './tsconfig-rollup.json'})
    ]}
]