import {
	createPath,
	createGenWithTemplate
} from '../../src'

const usePath = createPath(__dirname)

const createTemplate = createGenWithTemplate(
	usePath('../template/index.vue'),
	(origin: string, payload: string[]) => {
		return origin.replace(/\$/g, () => {
			return payload.shift()
		})
	}
)

createTemplate(usePath('../src/index.vue'), [
	'const foo = 100',
	'你好，世界',
	`.foo { background: red }`
])
