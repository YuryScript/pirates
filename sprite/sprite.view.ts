namespace $.$$ {
	
	export class $pirates_sprite extends $.$pirates_sprite {
		@ $mol_mem
		asset_pathname(next: string = '/pirates/assets/icons/flair_disabled_cross_outline.svg') {
			return next
		}

		dom_name(): string {
			return 'img'
		}

		attr(): {} {
			return {
				src: this.asset_pathname(),
			}
		}

		@ $mol_mem
		anchor(next = new $pirates_math_vector2(0.5, 0.5)) {
			return next
		}

		@ $mol_mem
		subtract_width() {
			const node = this.dom_node()
			return new $pirates_math_vector2(
				node.clientWidth * this.anchor().x,
				node.clientHeight * this.anchor().x
			)
		}

		@ $mol_mem
		position(next = new $pirates_math_vector2()) {
			return next
		}

		@ $mol_mem
		render_position() {
			return this.position()
			return new $pirates_math_vector2(
				this.position().x - this.subtract_width().x,
				this.position().y - this.subtract_width().y
			)
		}

		@ $mol_mem
		angle(next = 0) {
			return next
		}

		style(): { [key: string]: string | number; } {
			const pos = this.render_position()
			return {
				left: pos.x + 'px',
				top: pos.y + 'px',
				transform: `rotate(${this.angle()}rad)`,
			}
		}

		update() {
			this.angle( this.angle() + 0.01 )
		}
	}
}
