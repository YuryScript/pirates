namespace $ {
    export function createVector(components: number[]): number[] {
        return [...components];
    }

    export function fromArray(array: number[]): number[] {
        return [...array];
    }

    export function set(vector: number[], ...values: number[]): number[] {
        for (let i = 0; i < values.length; i++) {
            vector[i] = values[i];
        }
        return vector;
    }

    export function equals(v1: number[], v2: number[]): boolean {
        if (v1.length !== v2.length) return false;
        return v1.every((value, index) => value === v2[index]);
    }

    export function add(v1: number[], v2: number[]): number[] {
        return v1.map((value, index) => value + (v2[index] || 0));
    }

    export function subtract(v1: number[], v2: number[]): number[] {
        return v1.map((value, index) => value - (v2[index] || 0));
    }

    export function multiply(v1: number[], v2: number[]): number[] {
        return v1.map((value, index) => value * (v2[index] || 1));
    }

    export function divide(v1: number[], v2: number[]): number[] {
        return v1.map((value, index) => value / (v2[index] || 1));
    }

    export function scale(vector: number[], scalar: number): number[] {
        if (!isFinite(scalar)) {
            return new Array(vector.length).fill(0);
        }
        return vector.map(value => value * scalar);
    }

    export function negate(vector: number[]): number[] {
        return vector.map(value => -value);
    }

    export function length(vector: number[]): number {
        return Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));
    }

    export function lengthSq(vector: number[]): number {
        return vector.reduce((sum, value) => sum + value * value, 0);
    }

    export function distance(v1: number[], v2: number[]): number {
        return length(subtract(v2, v1));
    }

    export function distanceSq(v1: number[], v2: number[]): number {
        return lengthSq(subtract(v2, v1));
    }

    export function normalize(vector: number[]): number[] {
        const len = length(vector);
        if (len === 0) return vector;
        return scale(vector, 1 / len);
    }

    export function dot(v1: number[], v2: number[]): number {
        return v1.reduce((sum, value, index) => sum + value * (v2[index] || 0), 0);
    }

    export function lerp(v1: number[], v2: number[], t: number): number[] {
        return v1.map((value, index) => value + t * ((v2[index] || 0) - value));
    }

    export function limit(vector: number[], max: number): number[] {
        const len = length(vector);
        if (len && len > max) {
            return scale(vector, max / len);
        }
        return vector;
    }
} 
