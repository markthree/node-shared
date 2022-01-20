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
