import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Form from './Form';

// ==== Form input should render properly
test('full name input should be rendered', () => {
  render(<Form />);
  const nameInputEl = screen.getByTitle('fullName');
  expect(nameInputEl).toBeInTheDocument();
});

test('email input should be rendered', () => {
  render(<Form />);
  const emailInputEl = screen.getByTitle('email');
  expect(emailInputEl).toBeInTheDocument();
});

test('message input should be rendered', () => {
  render(<Form />);
  const messageInputEl = screen.getByTitle('message');
  expect(messageInputEl).toBeInTheDocument();
});

// ==== Form inputs should initialize empty
test('full name input should initialize empty', () => {
  render(<Form />);
  const nameInputEl = screen.getByTitle('fullName') as HTMLInputElement;
  expect(nameInputEl.value).toBe('');
});

test('email input should initialize empty', () => {
  render(<Form />);
  const emailInputEl = screen.getByTitle('email') as HTMLInputElement;
  expect(emailInputEl.value).toBe('');
});

test('message input should initialize empty', () => {
  render(<Form />);
  const messageInputEl = screen.getByTitle('message') as HTMLInputElement;
  expect(messageInputEl.value).toBe('');
});

// ==== All error handling messages to not be visible on load
test('full name error message should not be visible', () => {
  render(<Form />);
  const nameErrorEl = screen.getByTestId('nameError');
  expect(nameErrorEl).toHaveClass('invisible');
});

test('email error message should not be visible', () => {
  render(<Form />);
  const emailErrorEl = screen.getByTestId('emailError');
  expect(emailErrorEl).toHaveClass('invisible');
});

test('message error message should not be visible', () => {
  render(<Form />);
  const messageErrorEl = screen.getByTestId('messageError');
  expect(messageErrorEl).toHaveClass('invisible');
});

// ==== No errors should occur when values are added to inputs
test('full name input should change when typed in', () => {
  render(<Form />);
  const nameInputEl = screen.getByTitle('fullName') as HTMLInputElement;
  const testValue = 'John Doe';

  fireEvent.change(nameInputEl, { target: { value: testValue } });

  expect(nameInputEl.value).toBe(testValue);
});

test('email input should change when typed in', () => {
  render(<Form />);
  const emailInputEl = screen.getByTitle('email') as HTMLInputElement;
  const testValue = 'example@email.com';

  fireEvent.change(emailInputEl, { target: { value: testValue } });

  expect(emailInputEl.value).toBe(testValue);
});

test('message input should change when typed in', () => {
  render(<Form />);
  const messageInputEl = screen.getByTitle('message') as HTMLInputElement;
  const testValue = 'This is a test message';

  fireEvent.change(messageInputEl, { target: { value: testValue } });

  expect(messageInputEl.value).toBe(testValue);
});

// ==== Button test
test('submit button should render', () => {
  render(<Form />);
  const submitBtn = screen.getByRole('button');
  expect(submitBtn).toBeInTheDocument();
});

test('submit button should be enabled on initialization', () => {
  render(<Form />);
  const submitBtn = screen.getByRole('button');
  expect(submitBtn).not.toBeDisabled();
});
