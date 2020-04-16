import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  antd: {},
  routes: [
    { 
	path: '/', 
	component: '@/pages/index',
	menu: {
			name: '工作台',
			icon: 'desktop',
		},
	},
  ],
});
