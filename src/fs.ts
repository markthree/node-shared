import {
	move,
	copy,
	remove,
	readFile,
	readJson,
	writeJson,
	ensureDir,
	writeFile,
	ensureFile,
	outputFile,
	outputJson,
	emptyDirSync,
	readFileSync,
	writeFileSync,
	pathExistsSync
} from 'fs-extra'
interface IGenHandler<T> {
	(origin: string, payload: T): string
}

/**
 * 创建一个替换模板
 */
export const createGenWithTemplate = <T = any>(
	templateSrc: string,
	genHandler: IGenHandler<T>
) => {
	return async (dest: string, payload: T) => {
		const file = await readFile(templateSrc)
		const result = genHandler(file.toString(), payload)
		try {
			await outputFile(dest, result)
		} catch (err: any) {
			console.log(err.message as string)
		}
	}
}

export {
	copy,
	move,
	remove,
	readJson,
	readFile,
	writeJson,
	writeFile,
	emptyDirSync,
	readFileSync,
	writeFileSync,
	pathExistsSync,
	ensureDir as createDir,
	outputFile as createFile,
	outputJson as createJson,
	ensureFile as createEmptyFile
}
