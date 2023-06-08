export const attachEventHandlerTo = (event, elements, callback) => {
  elements.forEach((element) => {
    element.addEventListener(event, callback);
  });
};
