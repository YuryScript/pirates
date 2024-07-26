namespace $.$$ {
	
	export class $pirates extends $.$pirates {
		constructor() {
			super()
			const tick = () => {
				const now = Date.now()
				const deltaTime = now - this.time()
				this.time(now)
				this.deltaTime(deltaTime)

				const updateQueue = [...this.sub()]
				for(const sub of updateQueue) {
					if (sub instanceof $pirates_entity) {
						updateQueue.push(...sub.sub())
						sub.update(deltaTime)
					}
				}
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
		deltaTime(next = 0) {
			return next
		}
	}

	export class $pirates_entity extends $.$pirates_entity {
		update(deltaTime : number) {}
	}
}
