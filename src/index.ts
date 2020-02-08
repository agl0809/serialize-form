import { merge } from 'lodash';

const getValue = (element: Element) =>
  element.getAttribute('value') ? element.getAttribute('value') : '';

const parseHTMLElement = (element: Element) => {
  return element
    .getAttribute('name')
    ?.split('.')
    .reduce((acu: any, field, index, path) => {
      if (path.length > 1) {
        if (index > 0) {
          const newObj: any = {};

          newObj[field] = path.length === index + 1 ? getValue(element) : '';

          acu[path[index - 1]] = newObj;
        } else {
          acu[field] = {};
        }
      } else {
        acu[field] = getValue(element);
      }

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
