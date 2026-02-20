import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  basePath: '/m0xsa1ah',
  assetPrefix: '/m0xsa1ah/',

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // optional remark/rehype plugins
})

export default withMDX(nextConfig)
