"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Post_1 = require("../models/Post");
var PostRouter = /** @class */ (function () {
    function PostRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    PostRouter.prototype.GetPosts = function (req, res) {
        Post_1.default.find({})
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    PostRouter.prototype.GetPost = function (req, res) {
        var slug = req.params.slug;
        Post_1.default.findOne({ slug: slug })
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    PostRouter.prototype.CreatePost = function (req, res) {
        // in questo modo setto attributo per attributo.
        /*
        const post = new Post(
            {
                title: req.body.title,
                slug: req.body.slug,
                content: req.body.content,
                featuredImages: req.body.featuredImages
            });
        */
        // in quest altro modo prendo tutto l oggetto all interno del
        // body della request e creo l'oggetto post.
        var result = req.body;
        var post = new Post_1.default(result);
        post.save()
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    PostRouter.prototype.UpdatePost = function (req, res) {
        var slug = req.params.slug;
        Post_1.default.findOneAndUpdate({ slug: slug }, req.body)
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    PostRouter.prototype.DeletePost = function (req, res) {
        var slug = req.params.slug;
        Post_1.default.findOneAndRemove({ slug: slug })
            .then(function (data) {
            var status = res.statusCode;
            res.json({
                status: status,
                data: data
            });
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    PostRouter.prototype.routes = function () {
        this.router.post('/', this.CreatePost);
        this.router.get('/', this.GetPosts);
        this.router.get('/:slug', this.GetPost);
        this.router.put('/:slug', this.UpdatePost);
        this.router.delete('/:slug', this.DeletePost);
    };
    return PostRouter;
}());
//export
var postsRoutes = new PostRouter();
postsRoutes.routes();
exports.default = postsRoutes.router;
