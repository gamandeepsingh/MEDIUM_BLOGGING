"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signinBody = exports.signupBody = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupBody = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
    name: zod_1.default.string().min(3).optional()
});
exports.signinBody = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8),
});
exports.createBlogInput = zod_1.default.object({
    title: zod_1.default.string().max(50),
    content: zod_1.default.string().max(500),
});
exports.updateBlogInput = zod_1.default.object({
    title: zod_1.default.string().max(50),
    content: zod_1.default.string().max(500),
    id: zod_1.default.string()
});
