import "@testing-library/jest-dom";

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveTextContent(text: string | RegExp): R;
    }
  }
}
