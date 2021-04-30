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
exports.registerUser = void 0;
var app_pool_1 = require("../../../app-pool");
var registerUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errros, _a, email, password, password2, emailOccupated, commonStatusId, er_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                errros = [];
                _a = req.body, email = _a.email, password = _a.password, password2 = _a.password2;
                if (!email || !password || !password2) {
                    errros.push({ msg: 'Please fill all fields' });
                }
                if (password !== password2) {
                    errros.push({ msg: 'Passwords do not match' });
                }
                if (password.length < 8) {
                    errros.push({ msg: 'Password should be at least 8 symbols' });
                }
                return [4 /*yield*/, app_pool_1.AppPool.query('SELECT email FROM "User" WHERE email = $1', [email])];
            case 1:
                emailOccupated = (_b.sent()).rowCount;
                if (emailOccupated) {
                    errros.push({ msg: 'Email is already occupated' });
                }
                if (!errros.length) return [3 /*break*/, 2];
                res.status(406).json(errros);
                return [3 /*break*/, 6];
            case 2:
                _b.trys.push([2, 5, , 6]);
                return [4 /*yield*/, app_pool_1.AppPool.query('SELECT id FROM "Status" WHERE name = $1', ['Common'])];
            case 3:
                commonStatusId = (_b.sent()).rows[0].id;
                return [4 /*yield*/, app_pool_1.AppPool.query('INSERT INTO "User" (email, password, status_id) VALUES ($1, $2, $3)', [email, password, commonStatusId])];
            case 4:
                _b.sent();
                res.json({
                    message: 'User created',
                    body: {
                        user: {
                            email: email,
                            password: password,
                            commonStatusId: commonStatusId
                        }
                    }
                });
                return [3 /*break*/, 6];
            case 5:
                er_1 = _b.sent();
                console.log(er_1);
                res.status(500).json('Server Error');
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.registerUser = registerUser;
