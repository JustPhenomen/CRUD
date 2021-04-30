"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
var app_pool_1 = require("../../../app-pool");
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, er_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, app_pool_1.AppPool.query('SELECT * FROM "User"')];
            case 1:
                response = _a.sent();
                res.status(200).json(response.rows);
                return [3 /*break*/, 3];
            case 2:
                er_1 = _a.sent();
                console.log(er_1);
                res.status(500).json('Server Error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, er_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, app_pool_1.AppPool.query('SELECT * FROM "User" WHERE id = $1', [req.params.id])];
            case 1:
                response = _a.sent();
                res.status(200).json(response.rows);
                return [3 /*break*/, 3];
            case 2:
                er_2 = _a.sent();
                console.log(er_2);
                res.status(500).json('Server Error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, status_id, er_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password, status_id = _a.status_id;
                return [4 /*yield*/, app_pool_1.AppPool.query('INSERT INTO "User" (email, password, status_id) VALUES ($1, $2, $3)', [email, password, status_id])];
            case 1:
                _b.sent();
                res.json({
                    message: 'User created',
                    body: {
                        user: {
                            email: email,
                            password: password,
                            status_id: status_id
                        }
                    }
                });
                return [3 /*break*/, 3];
            case 2:
                er_3 = _b.sent();
                console.log(er_3);
                res.status(500).json('Server Error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, er_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, app_pool_1.AppPool.query('DELETE FROM "User" WHERE id = $1', [req.params.id])];
            case 1:
                response = _a.sent();
                res.status(200).json(response.rows);
                return [3 /*break*/, 3];
            case 2:
                er_4 = _a.sent();
                console.log(er_4);
                res.status(500).json('Server Error');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
