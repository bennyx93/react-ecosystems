import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [{
            text: 'Hello world',
            isCompleted: true,
        }, {
            text: 'Hello world 2',
            isCompleted: false,
        }, {
            text: 'Hello world 3',
            isCompleted: false,
        }];
        const expected = [{
            text: 'Hello world',
            isCompleted: true,
        }];
        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    })
})