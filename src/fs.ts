import fse from 'fs-extra'

/**
 * 创建空文件
 */
export const createEmptyFile = async (path: string) => {
	try {
		await fse.ensureFile(path)
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
		await createEmptyFile(path)
		await fse.writeFile(path, data)
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
		await fse.ensureDir(path)
	} catch (err: any) {
		console.log(err.message as string)
	}
}

/**
 * 路径判断
 */
export const isPathExists = (path: string) => {
	return fse.pathExistsSync(path)
}
