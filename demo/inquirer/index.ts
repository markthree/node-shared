import { prompt } from '../../src'

prompt({
	type: 'input',
	name: 'component',
	message: '请输入组件名称'
}).then(v => console.log(v))
