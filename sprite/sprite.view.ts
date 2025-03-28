namespace $.$$ {
	
	export class $pirates_sprite extends $.$pirates_sprite {

		@ $mol_mem
		asset_pathname(next: string = '/pirates/assets/icons/flair_disabled_cross_outline.svg') {
			return next
		}

		dom_name(): string {
			return 'img'
		}

		@ $mol_mem
		onLoad() {
			const node = this.dom_node() as HTMLImageElement
			node.onload = () => {
				this.subtract_width(node.clientWidth, node.clientHeight)
			}
			node.src = this.asset_pathname()
		}

		@ $mol_mem
		anchor(next = new $pirates_math_vector2(0.5, 0.5)) {
			return next
		}

		@ $mol_mem
		subtract_width(width = 0, height = 0) {
			return new $pirates_math_vector2(
				width * this.anchor().x,
				height * this.anchor().x
			)
		}

		@ $mol_mem
		position(next = new $pirates_math_vector2()) {
			return next
		}

		@ $mol_mem
		render_position() {
			return new $pirates_math_vector2(
				this.position().x - this.subtract_width().x,
				this.position().y - this.subtract_width().y
			)
		}

		@ $mol_mem
		angle(next = 0) {
			return next % Math.PI
		}

		@ $mol_mem
		style(): { [key: string]: string | number } {
			const pos = this.render_position()
			return {
				left: pos.x + 'px',
				top: pos.y + 'px',
				transform: `rotate(${this.angle()}rad)`,
			}
		}

		@ $mol_mem
		update() {
			this.angle( (this.angle() + 0.001 * this.delta_time()) )
		}

		@ $mol_mem
		log() {
			// console.log(this.delta_time())
		}

	
	}
}
