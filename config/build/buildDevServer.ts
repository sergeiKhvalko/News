import { BuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (
	{ port }: BuildOptions): DevServerConfiguration => {
	return {
		port: port,
		open: true,
		historyApiFallback: true,
		hot: true
	};
};