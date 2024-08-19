namespace $.$$ {
	
	export class $pirates extends $.$pirates {
		constructor() {
			super()
			const tick = () => {
				const now = Date.now()
				const delta_time = now - this.time()
				this.time(now)
				this.delta_time(delta_time)
				// console.log(delta_time)

				// const updateQueue = [...this.sub()]
				// for(const sub of updateQueue) {
				// 	if (sub?.update) {
				// 		updateQueue.push(...sub.sub())
				// 		sub.update(delta_time)
				// 	}
				// }
				requestAnimationFrame(tick)
			}
			requestAnimationFrame(tick)
		}

		@ $mol_mem
		debug(next = true) {
			return next
		}

		@ $mol_mem
		time(next = Date.now()) {
			return next
		}

		@ $mol_mem
		delta_time(next = 0) {
			return next
		}
	}
}
