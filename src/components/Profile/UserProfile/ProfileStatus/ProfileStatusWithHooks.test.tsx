import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import renderer, {act, ReactTestRenderer} from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Render Profile Status Component', () => {
    it('should render correctly', () => {
        const component: ReactTestRenderer = renderer.create(<ProfileStatusWithHooks status={'New status!!!'}
                                                                                     updateUserStatus={() => {
                                                                                     }} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a status message', () => {
        const status: string = 'Test';
        const {rerender} = render(<ProfileStatusWithHooks status={status} updateUserStatus={() => {
        }} />);

        expect(screen.getByText(status)).toBeInTheDocument()
    });

    it('the className of the component includes statusSpan', () => {
        const root = renderer.create(<ProfileStatusWithHooks status={'New status!!!'}
                                                             updateUserStatus={() => {
                                                             }} />).root

        // eslint-disable-next-line testing-library/await-async-query
        const element = root.findByType('span')

        expect(element.props.className.includes('statusSpan')).toBe(true);
    });

    it('renders component with children', () => {

        const text = 'child ';
        const root = renderer.create(<ProfileStatusWithHooks status={text}
                                                             updateUserStatus={() => {
                                                             }} />).root

        // eslint-disable-next-line testing-library/await-async-query
        const element = root.findByType('span');
        // eslint-disable-next-line testing-library/no-node-access
        expect(element.props.children).toEqual(text);
    });

    it('the input of the component not exist', () => {
        const root = renderer.create(<ProfileStatusWithHooks status={'New status!!!'}
                                                             updateUserStatus={() => {
                                                             }} />).root

        // eslint-disable-next-line testing-library/await-async-query
        expect(() => root.findByType('input')).toThrow();     // ошибка если не найден элемент
    });

    it('instead span should be input after doubleclick', () => {
        const root = renderer.create(<ProfileStatusWithHooks status={'New status!!!'}
                                                             updateUserStatus={() => {
                                                             }} />).root

        // eslint-disable-next-line testing-library/await-async-query
        const element = root.findByType('span')
        // Функция которая изменяет стейт компоненты
        act(() => {
            element.props.onDoubleClick()
        });
        expect(() => root.findByType('span')).toThrow();

        // eslint-disable-next-line testing-library/await-async-query
        expect(root.findByType('input').props.value).toBe('New status!!!')
    });

    // it('should call function from props', () => {
    //     const callback = jest.fn()
    //     const component = renderer.create(<ProfileStatusWithHooks status={'New status!!!'}
    //                                                               updateUserStatus={callback} />)
    //     const instance = component.getInstance();
    //     act(() => {
    //         instance?.instance.deactivateEditMode()
    //         expect(callback.mock.calls.length).toBe(1)
    //     });
    //
    // });

})