namespace $ {
	
	export class $pirates_math_rectangle {

		@ $mol_mem
		position(next = new $pirates_math_vector2()) {
			return next
		}

		@ $mol_mem
		size(next = new $pirates_math_vector2()) {
			return next
		}

		@ $mol_mem
		angle(next = 0) {
			return next % Math.PI
		}

		area(): number {
			return this.size().x * this.size().y
		}

		intersectPointWithoutAngle(point: $pirates_math_vector2): boolean {
			if (Math.abs(this.position().x - point.x) > this.size().x / 2)
				return false
			if (Math.abs(this.position().y - point.y) > this.size().y / 2)
				return false
			return true
		}

		intersectAABB(rect1: $pirates_math_rectangle, rect2: $pirates_math_rectangle): boolean {
			if (Math.abs(rect1.position().x - rect2.position().x) > rect1.size().x / 2 + rect2.size().x / 2)
				return false
			if (Math.abs(rect1.position().y - rect2.position().y) > rect1.size().y / 2 + rect2.size().y / 2)
				return false
			return true
		}
	}
}
