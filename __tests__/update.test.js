const update = require('../update');

describe('update', () => {
	describe('has a #$set method that', () => {
		let state;
		let commands;
		let nextState;
		beforeEach(() => {
			state = {
				a: {
					b: 22,
					c: 33,
				},
				unChanged: {},
			};
			commands = { a: { c: { $set: 44 } } };
			nextState = update(state, commands);
		});

		it('update return diffrent reference with original', () => {
			expect(nextState).not.toBe(state);
		});

		it('changes the tree on the directive', () => {
			expect(state.a.c).not.toBe(nextState.a.c);
		});

		it('reuses state on different branches', () => {
			expect(state.unChanged).toBe(nextState.unChanged);
		});
	});

	describe("can pass react's test suite", () => {
		it('should support set', () => {
			expect(update({ a: 'b' }, { $set: { c: 'd' } })).toEqual({ c: 'd' });
		});

		it('should support multi commands', () => {
			expect(update([1, 2, { a: 'b' }], { 1: { $set: 1 }, 2: { a: { $set: 'c' } } })).toEqual([1, 1, { a: 'c' }]);
		});

		it('should support push', () => {
			expect(update([1], { $push: [7] })).toEqual([1, 7]);
		});

		it('should support unshift', () => {
			expect(update([1], { $unshift: [7] })).toEqual([7, 1]);
		});

		it('should support merge', () => {
			expect(update({ a: 'b' }, { $merge: { c: 'd' } })).toEqual({
				a: 'b',
				c: 'd',
			});
		});

		it('should support apply', () => {
			expect(
				update(2, {
					$apply(x) {
						return x * 2;
					},
				}),
			).toBe(4);
		});

		it('should support deep updates', () => {
			expect(
				update({ a: 'b', c: { d: 'e' } }, { c: { d: { $set: 'f' } } }),
			).toEqual({
				a: 'b',
				c: { d: 'f' },
			});
		});

		it('should support splice', () => {
			expect(update([1, 4, 3], { $splice: [[1, 1, 2]] })).toEqual([1, 2, 3]);
		});
	});
});
