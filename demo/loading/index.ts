import { createTerminalLoading } from '../../src'

const spinner =
	createTerminalLoading().start('Loading start')

setTimeout(() => {
	spinner.color = 'yellow'
	spinner.text = 'Loading pending'
}, 1000)

setTimeout(() => {
	spinner.succeed('success!')
}, 3000)
