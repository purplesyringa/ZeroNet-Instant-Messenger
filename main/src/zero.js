import ZeroFrame from "zero-dev-lib/ZeroFrame.js";
export const zf = new ZeroFrame();

import ZeroPage from "zero-dev-lib/ZeroPage";
export const zeroPage = new ZeroPage(zf);

import ZeroFS from "zero-dev-lib/ZeroFS";
export const zeroFS = new ZeroFS(zeroPage);

import ZeroDB from "zero-dev-lib/ZeroDB";
export const zeroDB = new ZeroDB(zeroPage);

import ZeroAuth from "zero-dev-lib/ZeroAuth";
export const zeroAuth = new ZeroAuth(zeroPage, ["zeroid.bit", "kxoid.bit", "kaffie.bit"]);
zeroPage.auth = zeroAuth;