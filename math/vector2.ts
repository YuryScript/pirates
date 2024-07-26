namespace $.$$ {
	
	export class $pirates_math_vector2 {

		public x: number;
		public y: number;

		constructor(x = 0, y = 0) {
			this.x = x;
			this.y = y;
		}
		/** Create vector2 form another vector2 */
		static fromvector2(vector: $pirates_math_vector2): $pirates_math_vector2 {
			return new $pirates_math_vector2(vector.x, vector.y);
		}
		/** Create vector2 form array */
		static fromArray(array: number[]): $pirates_math_vector2 {
			return new $pirates_math_vector2(array[0], array[1]);
		}
		/** Set the `x` and `y` components of the this vector2 to the given `x` and `y` values. */
		set(x: number, y: number = x): $pirates_math_vector2 {
			this.x = x;
			this.y = y;
			return this;
		}
		/** Sets the `x` and `y` values of this object from a given polar coordinate. */
		setToPolar(azimuth: number, radius = 1): $pirates_math_vector2 {
			this.x = Math.cos(azimuth) * radius;
			this.y = Math.sin(azimuth) * radius;
			return this;
		}
		/** Check whether this vector2 is equal to a given vector2. */
		equals(v: $pirates_math_vector2): boolean {
			return ((this.x === v.x) && (this.y === v.y));
		}
		/** Calculate the angle between this vector2 and the positive x-axis, in radians. */
		angle(): number {
			let angle = Math.atan2(this.y, this.x);
			if (angle < 0) {
			angle += 2 * Math.PI;
			}
			return angle;
		}
		/** Set the angle of this vector2. */
		setAngle(angle: number): $pirates_math_vector2 {
			return this.setToPolar(angle, this.length());
		}
		/** Add a given vector2 to this vector2. Addition is component-wise. */
		add(src: $pirates_math_vector2): $pirates_math_vector2{
			this.x += src.x;
			this.y += src.y;
			return this;
		}
		/** Subtract the given vector2 from this vector2. Subtraction is component-wise. */
		subtract(src: $pirates_math_vector2): $pirates_math_vector2{
			this.x -= src.x;
			this.y -= src.y;
			return this;
		}
		/** Multiplies this vector2 by the given vector2. */
		multiply(src: $pirates_math_vector2): $pirates_math_vector2{
			this.x *= src.x;
			this.y *= src.y;
			return this;
		}
		/** Divides this vector2 by the given vector2. */
		divide(src: $pirates_math_vector2): $pirates_math_vector2{
			this.x /= src.x;
			this.y /= src.y;
			return this;
		}
		/** Scale this vector2 by the given value. */
		scale(value: number): $pirates_math_vector2{
			if (isFinite(value)) {
				this.x *= value;
				this.y *= value;
			} else {
				this.x = 0;
				this.y = 0;
			}
			return this;
		}
		/** Negate the `x` and `y` components of this vector2. */
		negate(): $pirates_math_vector2{
			this.x = -this.x;
			this.y = -this.y;
			return this;
		}
		/** Calculate the distance between this vector2 and the given vector2. */
		distance(src: $pirates_math_vector2): number {
			const dx = src.x - this.x;
			const dy = src.y - this.y;

			return Math.sqrt(dx * dx + dy * dy);
		}
		/** Calculate the distance between this vector2 and the given vector2, squared. */
		distanceSq(src: $pirates_math_vector2): number{
			const dx = src.x - this.x;
			const dy = src.y - this.y;

			return dx * dx + dy * dy;
		}
		/** Calculate the length (or magnitude) of this vector2. */
		length(): number {
			const x = this.x;
			const y = this.y;

			return Math.sqrt(x * x + y * y);
		}
		/** Set the length (or magnitude) of this vector2. */
		setLength(length: number): $pirates_math_vector2 {
			return this.normalize().scale(length);
		}
		/** Calculate the length of this vector2 squared. */
		lengthSq(): number {
			const x = this.x;
			const y = this.y;

			return x * x + y * y;
		}
		/** Makes the vector a unit length vector (magnitude of 1) in the same direction. */
		normalize(): $pirates_math_vector2{
			const x = this.x;
			const y = this.y;
			let len = x * x + y * y;

			if (len > 0) {
				len = 1 / Math.sqrt(len);

				this.x = x * len;
				this.y = y * len;
			}

			return this;
		}
		/** Rotate this vector2 to its perpendicular, in the positive direction. */
		normalizeRightHand(): $pirates_math_vector2 {
			const x = this.x;

			this.x = this.y * -1;
			this.y = x;

			return this;
		}
		/** Rotate this vector2 to its perpendicular, in the negative direction. */
		normalizeLeftHand(): $pirates_math_vector2{
			const x = this.x;

			this.x = this.y;
			this.y = x * -1;

			return this;
		}
		/** Calculate the dot product of this vector2 and the given vector2. */
		dot(src: $pirates_math_vector2): number {
			return this.x * src.x + this.y * src.y;
		}
		/** Calculate the cross product of this vector2 and the given vector2. */
		cross(src: $pirates_math_vector2): number {
			return this.x * src.y - this.y * src.x;
		}
		/**Linearly interpolate between this vector2 and the given vector2.
		 *
		 * Interpolates this vector2 towards the given vector2. 
		 * The interpolation percentage, between 0 and 1.
		 */
		lerp(src: $pirates_math_vector2, t = 0): $pirates_math_vector2{
			const ax = this.x;
			const ay = this.y;

			this.x = ax + t * (src.x - ax);
			this.y = ay + t * (src.y - ay);

			return this;
		}
		/** Make this vector2 the zero vector (0, 0). */
		reset(): $pirates_math_vector2{
			this.x = 0;
			this.y = 0;

			return this;
		}
		/** Limit the length (or magnitude) of this vector2. */
		limit(max: number): $pirates_math_vector2 {
			const len = this.length();

			if (len && len > max) {
				this.scale(max / len);
			}

			return this;
		}
		/** Reflect this vector2 off a line defined by a normal. */
		reflect(normal: $pirates_math_vector2): $pirates_math_vector2 {
			normal = $pirates_math_vector2.fromvector2(normal).normalize();

			return this.subtract(normal.scale(2 * this.dot(normal)));
		}
		/** Reflect this vector2 across another. */
		mirror(axis: $pirates_math_vector2): $pirates_math_vector2 {
			return this.reflect(axis).negate();
		}
		/** Rotate this vector2 by an angle amount. 
		 * 
		 * The angle to rotate by, in radians.
		 */
		rotate(delta: number): $pirates_math_vector2 {
			const cos = Math.cos(delta);
			const sin = Math.sin(delta);

			return this.set(cos * this.x - sin * this.y, sin * this.x + cos * this.y);
		}

		toPolar(): { p: number, q: number } {
			return {
				p: Math.sqrt(this.x * this.x + this.y * this.y),
				q: Math.atan2(this.y, this.x),
			};
		}
	}
}
