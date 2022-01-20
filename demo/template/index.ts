import { templateCompile } from '../../src'

const template = templateCompile('世界, {{msg}}')

console.log(
	template({
		msg: '你好'
	})
)
