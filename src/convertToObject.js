'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration === '') {
      continue;
    }

    const colonIndex = trimmedDeclaration.indexOf(':');
    const property = trimmedDeclaration.slice(0, colonIndex).trim();
    const value = trimmedDeclaration.slice(colonIndex + 1).trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
