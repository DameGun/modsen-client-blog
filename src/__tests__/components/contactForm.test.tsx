import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithIntl } from '@/__mocks__/intl';
import { ContactForm } from '@/app/[locale]/contact/components';

describe('Contact form', () => {
  beforeEach(async () => {
    renderWithIntl(<ContactForm />);

    const fullNameInput = screen.getByTestId('fullNameInput');
    await userEvent.type(fullNameInput, 'Test Name');

    const messageTextarea = screen.getByTestId('messageTextarea');
    await userEvent.type(messageTextarea, 'Test Message');
  });

  it('Should disable submit if email is wrong', async () => {
    const emailInput = screen.getByTestId('emailInput');
    await userEvent.type(emailInput, 'wrong-email');

    const submitButton = screen.getByText('Send Message');
    expect(submitButton).toBeDisabled();
  });

  it('Should enable submit if email is correct', async () => {
    const emailInput = screen.getByTestId('emailInput');
    await userEvent.type(emailInput, 'test@gmail.com');

    const submitButton = screen.getByText('Send Message');
    expect(submitButton).toBeEnabled();
  });
});
