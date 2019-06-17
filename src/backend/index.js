"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var faunadb_1 = __importStar(require("faunadb"));
var apollo_server_1 = require("apollo-server");
// PAS EN PRODUCTION
if (!process.env.FAUNADB && typeof (process.env.FAUNADB) !== "string") {
    // UTILISE .ENV file
    require('dotenv').config();
    // reverifie
    if (!process.env.FAUNADB && typeof (process.env.FAUNADB) !== "string") {
        throw new Error("issue with env variable of FaunaDB, touch .env && put FAUNADB=https://fauna.com/");
    }
}
var client = new faunadb_1.default.Client({ secret: process.env.FAUNADB });
var Paginate = faunadb_1.query.Paginate, Match = faunadb_1.query.Match, Map = faunadb_1.query.Map, Ref = faunadb_1.query.Ref, Get = faunadb_1.query.Get, Index = faunadb_1.query.Index, Delete = faunadb_1.query.Delete, Class = faunadb_1.query.Class, Create = faunadb_1.query.Create, Update = faunadb_1.query.Update, Lambda = faunadb_1.query.Lambda, Var = faunadb_1.query.Var, IsEmpty = faunadb_1.query.IsEmpty;
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Log {\n    id: String\n    title: String\n    rating: Int\n  }\n\n  type Query {\n    logs: [Log!]!\n    log(id: String): Log\n  }\n  type Mutation {\n    editLog(id: String!, title: String!): Log!\n    deleteLog(id: String!): Log!\n    addLog(title: String!, rating: Int!): Log!\n  }\n"], ["\n  type Log {\n    id: String\n    title: String\n    rating: Int\n  }\n\n  type Query {\n    logs: [Log!]!\n    log(id: String): Log\n  }\n  type Mutation {\n    editLog(id: String!, title: String!): Log!\n    deleteLog(id: String!): Log!\n    addLog(title: String!, rating: Int!): Log!\n  }\n"])));
var resolvers = {
    Query: {
        log: function (_, _a, __, _b) {
            var id = _a.id;
            var cacheControl = _b.cacheControl;
            return __awaiter(_this, void 0, void 0, function () {
                var _c, data, ref;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            cacheControl.setCacheHint({ maxAge: 60 });
                            return [4 /*yield*/, client.query(Get(Ref(Class('Logs'), id)))];
                        case 1:
                            _c = _d.sent(), data = _c.data, ref = _c.ref;
                            return [2 /*return*/, (__assign({}, data, { id: ref.id }))];
                    }
                });
            });
        },
        // https://github.com/apollographql/apollo-server/tree/master/packages/apollo-cache-control
        logs: function (_, ___, __, _a) {
            var cacheControl = _a.cacheControl;
            return __awaiter(_this, void 0, void 0, function () {
                var find, data;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            cacheControl.setCacheHint({ maxAge: 60 });
                            return [2 /*return*/, ([{ id: "hey" }])];
                        case 1:
                            data = (_b.sent()).data;
                            return [2 /*return*/, data.map(function (d) { return (__assign({}, d.data, { id: d.ref.id })); })];
                    }
                });
            });
        }
    },
    Mutation: {
        addLog: function (_, _a) {
            var title = _a.title, rating = _a.rating;
            return __awaiter(_this, void 0, void 0, function () {
                var log, _b, data, ref;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            log = Create(Class('Logs'), { data: { title: title, rating: rating } });
                            return [4 /*yield*/, client.query(log)];
                        case 1:
                            _b = _c.sent(), data = _b.data, ref = _b.ref;
                            return [2 /*return*/, (__assign({}, data, { id: ref.id }))];
                    }
                });
            });
        },
        editLog: function (_, _a) {
            var id = _a.id, title = _a.title;
            return __awaiter(_this, void 0, void 0, function () {
                var updateQuery, _b, data, ref;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            updateQuery = Update(Ref(Class('Logs'), id), { data: { title: title } });
                            return [4 /*yield*/, client.query(updateQuery)];
                        case 1:
                            _b = _c.sent(), data = _b.data, ref = _b.ref;
                            return [2 /*return*/, (__assign({}, data, { id: ref.id }))];
                    }
                });
            });
        },
        deleteLog: function (_, _a) {
            var id = _a.id;
            return __awaiter(_this, void 0, void 0, function () {
                var deleteQuery, _b, data, ref;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            deleteQuery = Delete(Ref(Class('Logs'), id));
                            return [4 /*yield*/, client.query(deleteQuery)];
                        case 1:
                            _b = _c.sent(), data = _b.data, ref = _b.ref;
                            return [2 /*return*/, (__assign({}, data, { id: ref.id }))];
                    }
                });
            });
        }
    }
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    introspection: true,
    playground: true,
    tracing: true,
    cacheControl: true
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Server ready at " + url);
});
var templateObject_1;
