import {
	readFile,
	ensureDir,
	ensureFile,
	outputFile,
	pathExistsSync,
	copy as fseCopy
} from 'fs-extra'

/**
 * 创建空文件
 */
export const createEmptyFile = async (path: string) => {
	try {
		await ensureFile(path)
	} catch (err: any) {
		console.log(err.message as string)
	}
}

/**
 * 创建文件
 */
export const createFile = async (
	path: string,
	data: string
) => {
	try {
		await outputFile(path, data)
	} catch (err: any) {
		console.log(err.message as string)
	}
}

/**
 * 确保创建文件
 */
export const ensureCreateFile = async (
	path: string,
	data: string = ''
) => {
	try {
		await createFile(path, data)
	} catch (err: any) {
		console.log(err.message as string)
	}
}

/**
 * 确保创建目录
 */
export const ensureCreateDir = async (path: string) => {
	try {
		await ensureDir(path)
	} catch (err: any) {
		console.log(err.message as string)
	}
}

/**
 * 路径判断
 */
export const isPathExists = (path: string) => {
	return pathExistsSync(path)
}

/**
 * 文件复制
 */
export const copy = async (src: string, dest: string) => {
	try {
		await fseCopy(src, dest)
	} catch (err: any) {
		console.log(err.message)
	}
}

interface IGenHandler {
	(origin: string, payload: any): string
}

/**
 * 创建一个替换模板
 */
export const createGenWithTemplate = (
	templateSrc: string,
	genHandler: IGenHandler
) => {
	return async (dest: string, payload: any) => {
		const file = await readFile(templateSrc)
		const result = genHandler(file.toString(), payload)
		try {
			await ensureCreateFile(dest, result)
		} catch (err: any) {
			console.log(err.message as string)
		}
	}
}
