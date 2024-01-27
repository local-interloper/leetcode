class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode = (strs) => JSON.stringify(strs.reduce((o, c, i) => [...o, c], []));

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode = (str) => JSON.parse(str);
}