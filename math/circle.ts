namespace $ {
	
	export class $pirates_math_circle {

		@ $mol_mem
		position(next = new $pirates_math_vector2()) {
			return next
		}

		@ $mol_mem
		radius(next = 1) {
			return next
		}

		isIntersecting(circle: $pirates_math_circle) {
			const distance = this.position().distance(circle.position())
			return distance < this.radius() + circle.radius()
		}

		top() {
			return this.position().y - this.radius()
		}

		right() {
			return this.position().x + this.radius()
		}

		bottom() {
			return this.position().y + this.radius()
		}

		left() {
			return this.position().x - this.radius()
		}

	}
}
