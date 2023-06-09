"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  average: () => average,
  median: () => median,
  sum: () => sum
});
module.exports = __toCommonJS(src_exports);

// src/utils/mathUtils.ts
function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
function average(arr) {
  return sum(arr) / arr.length;
}
function median(arr) {
  if (arr.length % 2 == 0) {
    const upper = Math.floor(arr.length / 2);
    const lower = Math.ceil(arr.length / 2);
    return (arr[upper] + arr[lower]) / 2;
  }
  return arr[arr.length / 2 - 1];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  average,
  median,
  sum
});
