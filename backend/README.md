<!-- Folder Strcture -->

src/
│
├── app.ts
├── server.ts
│
├── config/
│ ├── env.ts
│ ├── database.ts
│ └── logger.ts
│
├── plugins/
│ ├── jwt.plugin.ts
│ ├── sequelize.plugin.ts
│ └── swagger.plugin.ts
│
├── routes/
│ ├── index.ts
│ ├── auth.routes.ts
│ └── task.routes.ts
│
├── controllers/
│ ├── auth.controller.ts
│ └── task.controller.ts
│
├── services/
│ ├── auth.service.ts
│ └── task.service.ts
│
├── repositories/
│ ├── auth.repository.ts
│ └── task.repository.ts
│
├── models/
│ ├── User.model.ts
│ └── Task.model.ts
│
├── schemas/
│ ├── auth.schema.ts
│ └── task.schema.ts
│
├── middlewares/
│ ├── auth.middleware.ts
│ └── error.middleware.ts
│
├── utils/
│ ├── response.ts
│ ├── helper.ts
│ └── constants.ts
│
├── types/
│ └── index.d.ts
│
├── validators/
│ └── auth.validator.ts
│
└── jobs/
└── reminder.job.ts

<!--  -->

npm i fastify-plugin @fastify/mongodb
