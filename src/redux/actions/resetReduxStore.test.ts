import {test, expect} from 'vitest';
import resetReduxStore from './resetReduxStore';

test('resetReduxStore function returns object', () => {
    const value = resetReduxStore();
    console.log('demo comment');
    expect(value).toMatchObject({
        type: 'REST_REDUX_STORE',
      });
});