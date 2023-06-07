export const attachSubmitEventHandlerTo = (elements, callback) => {
  elements.forEach((element) => {
    element.addEventListener('submit', callback);
  });
};
