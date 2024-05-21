import express from 'express';
const routes = express();

// app.

routes.get("/",(req,res) => {
	res.json({
		"msg":'123'
	})
})

routes.get("/list",(req,res) => {
	res.send("list")
})

routes.get("/details",(req,res) => {
	res.send("detail")
})

export { routes as userRoutes };