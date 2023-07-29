import '@testing-library/jest-dom/extend-expect';
import {Pagination} from './Pagination';
import renderer from 'react-test-renderer';


describe('Render Profile Status Component', () => {
    it('should render correctly', () => {
        const root = renderer.create(<Pagination currentPage={1}paginationSize={10} onPageChange={()=>{}} pagesCount={100} />).root;
        // eslint-disable-next-line testing-library/await-async-query
        let spans = root.findAllByType('span')
        expect(spans.length).toBe(10);
    });

})