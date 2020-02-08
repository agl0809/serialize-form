import { merge } from 'lodash';

const getValue = (element: Element) =>
  element.getAttribute('value') ? element.getAttribute('value') : '';

const parseHTMLElement = (element: Element) => {
  return element
    .getAttribute('name')
    ?.split('.')
    .reverse()
    .reduce((acu: any, field, index) => {
      index === 0 ? (acu[field] = getValue(element)) : (acu = { [field]: acu });
      return acu;
    }, {});
};

const parseHTMLCollection = (children: HTMLCollection | undefined): any => {
  return [...(children || [])].map(parseHTMLElement);
};

const serializeForm = (formId: string): any => {
  const children = document.getElementById(formId)?.children;
  return parseHTMLCollection(children).reduce((acu: any, elem: any) => {
    return merge(acu, elem);
  });
};

export default serializeForm;
