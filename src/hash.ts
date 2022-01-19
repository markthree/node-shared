let urlAlphabet =
	'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

/**
 * nano 唯一id生成器
 * 比传统 uuid 生成快 60%
 *
 * https://github.com/ai/nanoid
 *
 * 默认设置size为10，每秒生成10000份id，连续工作4小时产生一次冲突的概率为 1%。
 */
export const hash = (size = 10) => {
	let id = ''
	let i = size
	while (i--) {
		id += urlAlphabet[(Math.random() * 64) | 0]
	}
	return id
}
