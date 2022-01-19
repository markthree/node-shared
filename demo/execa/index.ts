import { useExeca, retry } from '../../src'

retry(() => useExeca('pnpm', ['build']), {
	retries: 3
})
