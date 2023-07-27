import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import renderer, {ReactTestRenderer} from 'react-test-renderer';
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


})