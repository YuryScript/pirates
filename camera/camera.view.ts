namespace $.$$ {
	
	export class $pirates_camera extends $.$pirates_camera {

		dom_name(): string {
			return 'camera'
		}

		@ $mol_mem
		position(next = new $pirates_math_vector2()) {
			return next
		}

		@ $mol_mem
		size(next = [innerWidth, innerHeight]): $pirates_math_vector2 {
			return $pirates_math_vector2.fromArray(next)
		}

		@ $mol_mem
		zoom(next = 1) {
			return next
		}

		style(): { [key: string]: string | number; } {
			const pos = this.position()
			return {
				left: (pos.x * this.zoom()) + 'px',
				top: (pos.y * this.zoom()) + 'px',
				transform: `scale(${this.zoom()})`,
			}
		}

		event_wheel( event : WheelEvent ) {
			if( event.defaultPrevented ) return

			const minZoom = 0.2
			const maxZoom = 10

			this.zoom(
				Math.max(
					minZoom,
					Math.min(maxZoom, this.zoom() * ( 1 - 0.001 * Math.min( event.deltaY, 100 )))
				)
			)
		}

		event_key( event : KeyboardEvent ) {
			if( event.defaultPrevented ) return

			console.log(event)
			if( event.key === 'a' ) {
				this.position( new $pirates_math_vector2( this.position().x - 20, this.position().y ) )
			}
			if( event.key === 'd' ) {
				this.position( new $pirates_math_vector2( this.position().x + 20, this.position().y ) )
			}
			if( event.key === 'w' ) {
				this.position( new $pirates_math_vector2( this.position().x, this.position().y - 20 ) )
			}
			if( event.key === 's' ) {
				this.position( new $pirates_math_vector2( this.position().x, this.position().y + 20 ) )
			}
		}

		@ $mol_mem
		delta_time(next = 0) {
			return next
		}
	}
}
