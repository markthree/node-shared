import fse from 'fs-extra'
import { showDirPath } from './path'

export const createEmptyFile = async (path: string) => {
	try {
		await fse.ensureFile(path)
	} catch (err: any) {
		console.log(err.message as string)
	}
}

export const createFile = async (
	path: string,
	data: string
) => {
	try {
		await fse.writeFile(path, data)
	} catch (err: any) {
		console.log(err.message as string)
	}
}

/**
 * 正确创建文件
 */
export const ensureCreateFile = async (
	path: string,
	data: string
) => {
	try {
		await ensureCreateDir(path)
		await createFile(path, data)
	} catch (err: any) {
		console.log(err.message as string)
	}
}

/**
 * 正确创建目录
 */
export const ensureCreateDir = async (path: string) => {
	try {
		await fse.ensureDir(showDirPath(path))
	} catch (err: any) {
		console.log(err.message as string)
	}
}
