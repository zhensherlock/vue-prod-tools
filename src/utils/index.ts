export const getVueInstance = (version: number): any | undefined => {
  const vueKey = version === 2 ? '__vue__' : '__vue_app__';
  const elements = Array.from(document.querySelectorAll<(HTMLElement & Record<string, any>)>('*'));
  return elements.find(element => element[vueKey])?.[vueKey];
}
