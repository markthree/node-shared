import { templateCompile, handlebars } from '../../src'

const template = templateCompile('世界, {{up msg}}')

const run = async () => {
	try {
		await handlebars.registerHelper(
			'up',
			v => v.charAt(0).toUpperCase() + v.slice(1)
		)
	} catch (error) {
		console.log(error.message)
	}
	console.log(
		template({
			msg: 'masdasd'
		})
	)
}

run()
