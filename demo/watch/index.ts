import { fileWatch, createPath } from '../../src'

const usePath = createPath(__dirname)

fileWatch(usePath('../src')).on('change', () => {
	console.log('src文件变化了')
})
