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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, node_fetch_1.default)(url);
        const data = yield response.json();
        return data;
    });
}
function render() {
    return __awaiter(this, void 0, void 0, function* () {
        const { items: orders } = yield getData('https://introspection.apis.stepzen.com/orders');
        console.log(orders);
        return orders;
        const response = orders.map((order) => __awaiter(this, void 0, void 0, function* () {
            // const { items: user } = await getData(
            //   `https://api.stackexchange.com/2.3/users/${question.owner.user_id}?order=desc&sort=reputation&site=stackoverflow`,
            // );
            return Object.assign({}, order);
        }));
        return yield response;
    });
}
getData('https://introspection.apis.stepzen.com/orders').then(res => console.log(res));
