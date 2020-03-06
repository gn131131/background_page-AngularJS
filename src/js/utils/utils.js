/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Pumpking
 * @Date: 2020-03-06 22:51:30
 * @LastEditors: Pumpking
 * @LastEditTime: 2020-03-06 23:02:55
 */
const objectIsNotEmpty = (obj) => {
  let bool = false;
  typeof obj === 'string' && obj !== 0 && obj !== '' && obj && (bool = true);
  typeof obj === 'object' && obj.length !== undefined && obj.length !== 0 && (bool = true);
  typeof obj === 'object' && obj.length === undefined && JSON.stringify(obj) !== '{}' && (bool = true);
  return bool;
};

export { objectIsNotEmpty };