import slash from 'slash'
import { cwd } from 'process'
import { resolve, dirname } from 'path'

/**
 * 创建正确静态路径
 */
export const createPath = (dirname: string) => {
	return (path: string = '') => {
		return slash(resolve(dirname, path))
	}
}

/**
 * 使用工作目录路径
 */
export const useCWDPath = (path: string = '') => {
	return slash(resolve(cwd(), path))
}

/**
 * 获取目录路径
 */
export const showDirPath = (path: string) => {
	return slash(dirname(path))
}
