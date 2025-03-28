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

		area(): number {
			return (this.radius() > 0) ? Math.PI * this.radius() * this.radius() : 0
		}
		
		intersectCircle(circle: $pirates_math_circle): boolean {
			return this.position().distance(circle.position()) < this.radius() + circle.radius()
		}
	
		intersectPoint(point: $pirates_math_vector2): boolean {
			return this.position().distance(point) < this.radius()
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
