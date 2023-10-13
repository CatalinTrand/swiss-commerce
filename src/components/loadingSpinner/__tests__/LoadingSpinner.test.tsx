import LoadingSpinner from '../index';
import {render, screen} from "@testing-library/react";
import testIds from "../../../componentTestIds";

describe('LoadingSpinner', () => {
    it('renders correctly', () => {
        render(<LoadingSpinner/>);

        const spinner = screen.getByTestId(testIds.common.loadingSpinner);

        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveClass('loading-spinner');
    });
})