import { execa } from 'execa'

export const useExeca = (cmd: string, rest: string[]) => {
	const output = execa(cmd, rest)
	output.stdout?.pipe(process.stdout)
	return output
}
