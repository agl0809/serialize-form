import { merge } from 'lodash';

const getElementValue = (element: Element) =>
  element.getAttribute('value') || '';

const parseHTMLElement = (element: Element) => {
  return element
    .getAttribute('name')
    ?.split('.')
    .reverse()
    .reduce((prev: any, current: string, index: number) => {
      index === 0
        ? (prev[current] = getElementValue(element))
        : (prev = { [current]: prev });
      return prev;
    }, {});
};

const parseHTMLCollection = (children: HTMLCollection | undefined) => {
  return [...(children || [])].map(parseHTMLElement);
};

const serializeForm = (formId: string) => {
  const children = document.getElementById(formId)?.children;
  return parseHTMLCollection(children).reduce((prev, current) => {
    return merge(prev, current);
  });
};

export default serializeForm;
