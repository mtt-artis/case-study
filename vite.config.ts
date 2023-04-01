import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import UnocssPlugin from '@unocss/vite';

export default defineConfig({
  plugins: [
    solidPlugin(),
    UnocssPlugin({
      shortcuts: {
        btn: "text-white bg-indigo-800 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none disabled:bg-gray",
        "btn-cercle": "text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm p-5 focus:outline-none",
        input: "bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
      }
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'docs',
  },
  base: '/case-study',
});
