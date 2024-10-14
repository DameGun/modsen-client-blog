import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithIntl } from '@/__mocks__/intl';
import { Carousel } from '@/components/containers/Carousel';
import { ReviewsRepository } from '@/services/repositories/reviews';

describe('Carousel', () => {
  it('Should render and change slides', async () => {
    const data = ReviewsRepository.getReviews();

    renderWithIntl(<Carousel data={data} />);

    const originalReviewerImage = screen.getByAltText<HTMLImageElement>('Review Person Image');
    const originalImageSrc = originalReviewerImage.src;

    expect(originalReviewerImage).toBeInTheDocument();

    const nextButton = screen.getByAltText('Next Icon');
    await userEvent.click(nextButton);

    const newReviewerImage = screen.getByAltText<HTMLImageElement>('Review Person Image');
    const newImageSrc = newReviewerImage.src;

    expect(newReviewerImage).toBeInTheDocument();
    expect(originalImageSrc).not.toEqual(newImageSrc);
  });
});
