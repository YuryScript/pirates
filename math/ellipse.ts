namespace $ {
	

	export class $pirates_math_ellipse extends $pirates_math_rectangle {
		getMinorRadius(): number {
			return Math.min(this.size().x, this.size().y) / 2
		}

		getMajorRadius(): number {
			return Math.max(this.size().x, this.size().y) / 2
		}

		isEmpty(): boolean {
			return (this.size().x <= 0 || this.size().y <= 0)
		}

		area(): number {
			if (this.isEmpty()) return 0

			return (this.getMajorRadius() * this.getMinorRadius() * Math.PI)
		}
	}
}
