namespace $.$$ {
	
	export class $pirates_ship extends $.$pirates_ship {
		@ $mol_mem
		asset_pathname(next: string = '/pirates/assets/ships/ship1.png') {
			return next
		}

		@ $mol_mem
		position(next = new $pirates_math_vector2()) {
			return next
		}

		@ $mol_mem
		max_hp( next = 100 ) {
			return next
		}

		@ $mol_mem
		hp( next = this.max_hp() ) {
			return next
		}

		@ $mol_mem
		dead() {
			return this.hp() <= 0
		}

		// update() {
		// 	this.angle( this.angle() + 0.01 )
		// }
	}
}
