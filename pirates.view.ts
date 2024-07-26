namespace $.$$ {
	
	export class $pirates extends $.$pirates {
		constructor() {
			super()
			const tick = () => {
				const now = Date.now()
				const deltaTime = now - this.time()
				this.time(now)
				this.delta_time(deltaTime)

				// 
				// const updateQueue = [...this.sub()]
				// for(const sub of updateQueue) {
				// 	if (sub?.update) {
				// 		updateQueue.push(...sub.sub())
				// 		sub.update(deltaTime)
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
