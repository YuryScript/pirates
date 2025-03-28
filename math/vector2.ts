namespace $ {
	
	export class $pirates_math_vector2 {

		public x: number;
		public y: number;

		constructor(x = 0, y = 0) {
			this.x = x;
			this.y = y;
		}

		static fromVector2(vector: $pirates_math_vector2): $pirates_math_vector2 {
			return new $pirates_math_vector2(vector.x, vector.y);
		}

		static fromArray(array: number[]): $pirates_math_vector2 {
			return new $pirates_math_vector2(array[0], array[1]);
		}

		set(x: number, y: number = x): $pirates_math_vector2 {
			this.x = x;
			this.y = y;
			return this;
		}

		setToPolar(azimuth: number, radius = 1): $pirates_math_vector2 {
			this.x = Math.cos(azimuth) * radius;
			this.y = Math.sin(azimuth) * radius;
			return this;
		}

		equals(v: $pirates_math_vector2): boolean {
			return ((this.x === v.x) && (this.y === v.y));
		}

		angle(): number {
			let angle = Math.atan2(this.y, this.x);
			if (angle < 0) {
			angle += 2 * Math.PI;
			}
			return angle;
		}

		setAngle(angle: number): $pirates_math_vector2 {
			return this.setToPolar(angle, this.length());
		}

		add(src: $pirates_math_vector2): $pirates_math_vector2{
			this.x += src.x;
			this.y += src.y;
			return this;
		}

		subtract(src: $pirates_math_vector2): $pirates_math_vector2{
			this.x -= src.x;
			this.y -= src.y;
			return this;
		}

		multiply(src: $pirates_math_vector2): $pirates_math_vector2{
			this.x *= src.x;
			this.y *= src.y;
			return this;
		}

		divide(src: $pirates_math_vector2): $pirates_math_vector2{
			this.x /= src.x;
			this.y /= src.y;
			return this;
		}

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

		negate(): $pirates_math_vector2{
			this.x = -this.x;
			this.y = -this.y;
			return this;
		}

		distance(src: $pirates_math_vector2): number {
			const dx = src.x - this.x;
			const dy = src.y - this.y;

			return Math.sqrt(dx * dx + dy * dy);
		}

		distanceSq(src: $pirates_math_vector2): number{
			const dx = src.x - this.x;
			const dy = src.y - this.y;

			return dx * dx + dy * dy;
		}

		length(): number {
			const x = this.x;
			const y = this.y;

			return Math.sqrt(x * x + y * y);
		}

		setLength(length: number): $pirates_math_vector2 {
			return this.normalize().scale(length);
		}

		lengthSq(): number {
			const x = this.x;
			const y = this.y;

			return x * x + y * y;
		}

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

		normalizeRightHand(): $pirates_math_vector2 {
			const x = this.x;

			this.x = this.y * -1;
			this.y = x;

			return this;
		}

		normalizeLeftHand(): $pirates_math_vector2{
			const x = this.x;

			this.x = this.y;
			this.y = x * -1;

			return this;
		}

		dot(src: $pirates_math_vector2): number {
			return this.x * src.x + this.y * src.y;
		}

		cross(src: $pirates_math_vector2): number {
			return this.x * src.y - this.y * src.x;
		}

		lerp(src: $pirates_math_vector2, t = 0): $pirates_math_vector2{
			const ax = this.x;
			const ay = this.y;

			this.x = ax + t * (src.x - ax);
			this.y = ay + t * (src.y - ay);

			return this;
		}

		reset(): $pirates_math_vector2{
			this.x = 0;
			this.y = 0;

			return this;
		}

		limit(max: number): $pirates_math_vector2 {
			const len = this.length();

			if (len && len > max) {
				this.scale(max / len);
			}

			return this;
		}

		reflect(normal: $pirates_math_vector2): $pirates_math_vector2 {
			normal = $pirates_math_vector2.fromVector2(normal).normalize();

			return this.subtract(normal.scale(2 * this.dot(normal)));
		}

		mirror(axis: $pirates_math_vector2): $pirates_math_vector2 {
			return this.reflect(axis).negate();
		}

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
