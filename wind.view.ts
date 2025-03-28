namespace $ {
	export class $mol_wind extends $mol_object {

		@ $mol_mem
		force() {
			return new $pirates_math_vector2(0, 0)
		}

		@ $mol_mem
		polarVector(next = new $pirates_math_vector2(0, 0)) {
			return next
		}

		@ $mol_mem
		delta_time(next = 1) {
			return next
		}

		auto() {
			return [this.update()]
		}

		@ $mol_mem
		update() {
			this.force().add(new $pirates_math_vector2(0.1 * this.delta_time(), 0))
		}
	}
}
