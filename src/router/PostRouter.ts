import { Router, Request, Response, NextFunction } from 'express'
import Post from '../models/Post';

class PostRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public GetPosts(req: Request, res: Response): void {
        Post.find({})
        .then((data) => {
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public GetPost(req: Request, res: Response): void {
        const slug: string = req.params.slug;
        Post.findOne({ slug })
        .then((data) => {
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public CreatePost(req: Request, res: Response): void {
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
            const post = new Post(result);
        post.save()
        .then((data) => {
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public UpdatePost(req: Request, res: Response): void {
        const slug: string = req.params.slug;
        Post.findOneAndUpdate({ slug }, req.body)
        .then((data) => {
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public DeletePost(req: Request, res: Response): void {
        const slug: string = req.params.slug;
        Post.findOneAndRemove({ slug })
        .then((data) => {
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err) => {
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    routes() {
        this.router.post('/', this.CreatePost);
        this.router.get('/', this.GetPosts);
        this.router.get('/:slug', this.GetPost);
        this.router.put('/:slug', this.UpdatePost);
        this.router.delete('/:slug', this.DeletePost);
    }
}

//export
const postsRoutes = new PostRouter();
postsRoutes.routes();

export default postsRoutes.router;